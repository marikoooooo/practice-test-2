class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML=new Date().getFullYear();
    }
}

customElements.define("x-year", Year)