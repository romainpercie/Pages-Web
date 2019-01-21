var spring_url_api = "http://localhost:8080/api"

var vm_rooms = new Vue({
  el: '#appRooms',
  data: {
    rooms: [],
    building:null
  },
      created() {
      var parameters = location.search.substring(1).split("=");
      var param = parameters[1];
      let get_url = spring_url_api + "/rooms";
      let get_url2 = spring_url_api + "/buildings/"+String(param);
      axios.get(get_url)
      //.then(response => response.json())
      .then(json => {this.rooms = json.data})
      ;
      axios.get(get_url2)
      //.then(response => response.json())
      .then(json => {this.building = json.data}, (error) => { console.log(error)})
      ;
  },
    methods: {

    isInBuilding(room) {
      if (room.buildingId == this.building.id) {
        return 1;
      }
      return 0;
    },
    print(value) {
      return value
    },
    addroom(name, floor){
      const url = spring_url_api +'/rooms';
      axios.post(url, {"name": name, "floor": floor, "buildingId": this.building.id}
      ).then(
	           (response) => { console.log(response) },
	           (error) => { console.log(error) },
             window.location.reload()
      );
    },
    deleteroom(id){
      const url = spring_url_api +'/rooms/'+String(id);
      axios.delete(url).then(
	                           (response) => { console.log(response) },
	                           (error) => { console.log(error) },
                             window.location.reload()
      );
    }
 }
})
