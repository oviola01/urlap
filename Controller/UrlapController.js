import UrlapView from "../View/UrlapView.js";

class UrlapController{
    constructor(){
        new UrlapView($(".urlap"));
        $(window).on("ujAdatHozzadasa",(event)=>{
            console.log("Az űrlap adatait megkapja a kontroller");
            console.log(event.detail);
            //meghívom a dataService.postAxios(apiVegpont, event.detail) metódusát
        })
    }
}

export default UrlapController;