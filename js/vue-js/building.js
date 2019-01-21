var spring_url_api = "http://localhost:8080/api"

var vm_buildings = new Vue({
  el: '#appBuildings',
  data: {
    buildings:[],
    rooms:[],
  },
  created() {
    let get_url = spring_url_api + "/buildings";
    axios.get(get_url)
    //.then(response => response.json())
    .then(json => {this.buildings = json.data}, (error) => { console.log(error)})
    ;
  },
  methods: {
    print(value) {
      return value
    },
    addbuilding(name){
      const url = spring_url_api +'/buildings';
      axios.post(url, {"name": name}
      ).then(
	           (response) => { console.log(response) },
	           (error) => { console.log(error) },
             window.location.reload()
      );
    },
    deletebuilding(id){
      const url = spring_url_api +'/buildings/'+String(id);
      axios.delete(url).then(
	                           (response) => { console.log(response) },
	                           (error) => { console.log(error) },
                             window.location.reload()
      );
    }
  }
})
