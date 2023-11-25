export default class NumberUrlapView{
    constructor(szuloElem,obj,key) {
        this.szuloElem=szuloElem;
        this.obj=obj;
        this.key=key;
        this.numberUrlapElem();
    }

    numberUrlapElem(){
        let txt='';
        txt+=`<div class="mb-3 mt-3">
                    <label for="${this.key}" class="form-label">${this.obj.megjelenes}</label>
                    <input type="${this.obj.tipus}" class="form-control"
                        id="${this.key}"
                        placeholder="${this.obj.placeholder}"
                        min="${this.obj.pattern.min}"
                        max="${this.obj.pattern.max}"
                        value="${this.obj.value}"
                        name="${this.key}">            
            </div>`;
            this.szuloElem.append(txt);
    }

}