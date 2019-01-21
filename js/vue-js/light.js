var spring_url_api = "http://localhost:8080/api"

var vm_lights = new Vue({
  el: '#appLights',
  data: {
    lights: [],
    room:null
  },
      created() {
      var parameters = location.search.substring(1).split("=");
      var param = parameters[1];
      let get_url = spring_url_api + "/rooms/"+String(param);
      axios.get(get_url)
      .then(json => {this.room = json.data}, (error) => { console.log(error)})
      ;
      let get_url2 = spring_url_api + "/lights";
      axios.get(get_url2)
      .then(json => {this.lights = json.data}, (error) => { console.log(error)})
      ;
    },

    methods: {
      isInRoom(light) {
        if (light.roomId == this.room.id) {
          return 1;
        }
        return 0;
      },

      print(value) {
        return value
      },

      updatestatus(id) {
        const url = spring_url_api +'/lights/'+ String(id) + '/switch';
        axios.put(url).then(
	                           (response) => { console.log(response) },
	                           (error) => { console.log(error) },
                             window.location.reload()
        );
      },

      addlight(level, status){
        const url = spring_url_api +'/lights';
        axios.post(url, {"level": level, "status": status.toUpperCase(), "roomId": this.room.id}
      ).then(
	           (response) => { console.log(response) },
	           (error) => { console.log(error) },
             window.location.reload()
        );
      },
      deletelight(id){
        const url = spring_url_api +'/lights/'+String(id);
        axios.delete(url).then(
  	                           (response) => { console.log(response) },
  	                           (error) => { console.log(error) },
                               window.location.reload());
      }
    }
})


//DOM
