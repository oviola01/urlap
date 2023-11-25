import { adatLeiras } from "./adat.js";
import TextUrlapView from "./textUrlapView.js"; //működik nagykezdővel, mégis aláhúzza, ezért kicsivel hagytam
import NumberUrlapView from "./NumberUrlapView.js";


class UrlapView {
    #formAdat={};
    #inputElemLista=[];
    constructor(szuloElem){
        szuloElem.append('<form>');
        console.log(szuloElem)
        this.formElem=szuloElem.find("form");
        console.log(this.formElem);
        this.htmlOsszeallit();
        /*Submit gomb kezelése
            1. létrehozom a kapaszkodót
            2. hozzárendelem az eseményt
            3. ebben az eseményben összegyűjtöm a form adatait
            4. elküldöm a kontrollernek
        */
        this.submitElem=this.formElem.find("#submit");
        this.nevElem=this.formElem.find("#nev");
        this.szulEvElem=this.formElem.find("#szul_ev");
        this.submitElem.on("click", (event)=>{
            event.preventDefault();
            this.#inputElemLista.forEach(
                (elem)=>{
                    console.log(elem);
                    console.log(elem.key);
                    console.log(elem.getValue());
                    this.#formAdat[elem.key]=elem.getValue();
                }
            )
           /* this.#formAdat.nev=this.nevElem.val();
            this.#formAdat.szul=this.szulElem.val();
            */
        })
        console.log(this.#formAdat);
        this.trigger("ujAdatHozzadasa");
    }

    htmlOsszeallit(){
        let txt='';
        for (const key in adatLeiras) {
            switch (adatLeiras[key].tipus) {
                case "text":
                    this.#inputElemLista.push(new TextUrlapView(this.formElem,adatLeiras[key],key));
                    break;
                case "number":
                    this.#inputElemLista.push(new NumberUrlapView(this.formElem,adatLeiras[key],key));            
                    break;
                default:
                    break;
            }
        };
       /* txt+=` class="mb-3 mt-3">
                <label for="szul_ev" class="form-label">Születési év:</label>
                <input type="szul_ev" class="form-control"
                    id="szul_ev"
                    placeholder="1975"
                    name="szul_ev">
            </div>`;
            */
        txt+=`<div class="mb-3 mt-3">
                <input type="submit"
                id="submit"
                value="Küld">
            </div>`;        
        this.formElem.append(txt);
    }

    //kell egy saját, triggeres eseményt létrehozni, hogy a kontroller fel tudjon iratkozni a submit eseményre

    trigger(esemenyNev){
        const esemeny=new CustomEvent(esemenyNev,{detail:this.#formAdat});
        window.dispatchEvent(esemeny);
    }
}

export default UrlapView;