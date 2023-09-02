import * as components from "./components/indexHijo.js"
import data from "./components/data.js"

class AppContainer extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }


    render(){
        data.forEach((user) => {
            this.shadowRoot.innerHTML += `
            <card-preset name="${user.name}" specie="${user.species}" gender="${user.gender}" house="${user.house}" yearofbirth= "${user.yearOfBirth}"></card-preset>
            <my-button message="Prueba"> </my-button>
            `
        });
        
    }

}

customElements.define("app-container", AppContainer)