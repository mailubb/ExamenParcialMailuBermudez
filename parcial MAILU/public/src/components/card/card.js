class CardUser extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        return ["name","specie", "gender", "house", "yearofbirth"]
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
            <div class=card>
                <h1>Name: ${this.name}</h1>
                <h3> Species: ${this.specie}</h3>
                <h3> Gender:${this.gender}</h3>
                <h3> House: ${this.house}</h3>
                <h3> Year of birth:${this.yearofbirth}</h3>
            </div>
        `
    
    }

}

customElements.define("card-preset", CardUser)
export default CardUser


