export default class TextUrlapView{
    #value="";
    #valid=false;
    constructor(szuloElem,obj,key) {
        this.szuloElem=szuloElem;
        this.obj=obj;
        this.key=key;
        this.textUrlapElem();
        this.inputElem=$(`#${this.key}`);
        this.inputElem.on("keyup",()=>{
            console.log(this.inputElem.val());
            this.#value=this.inputElem.val();
            //valid-e?
            let patternString=this.obj.pattern; //reguláris kifejezés=előre meghatározott mintázat
            let pattern = new RegExp(patternString); //szöveget átalalakítjuk reguláris objektummá
            if (pattern.test(this.#value)) {
                this.#valid=true;
            } else {
                this.#valid=false;
            };
            console.log(this.#valid);
        })
    }

    getValue(){
        return this.inputElem.val();
    }

    textUrlapElem(){
        let txt='';
        txt+=`<div class="mb-3 mt-3">
                    <label for="${this.key}" class="form-label">${this.obj.megjelenes}</label>
                    <input type="${this.obj.tipus}" class="form-control"
                        id="${this.key}"
                        placeholder="${this.obj.placeholder}"
                        pattern="${this.obj.pattern}"
                        value="${this.obj.value}"
                        name="${this.key}">            
            </div>`;
            this.szuloElem.append(txt);
    }
}