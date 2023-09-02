class ButtonUser extends HTMLElement{

    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.onButtonClicked = this.onButtonClicked.bind(this)
    }

    static get observedAttributes(){
        return ["message"]
    }

    mount(){
        this.render()
        this.addListeners()
    }

    connectedCallback(){
        this.mount()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]=newValue
        this.mount()
    }

    addListeners(){
        this.shadowRoot.querySelector("button").addEventListener("click",this.onButtonClicked)
    }

    onButtonClicked(){
        const newValue = this.getAttribute("message")
        this.setAttribute("message", "Nombre alternativo:")
    }

    render(){
        this.shadowRoot.innerHTML = `
        <p>${this.message}</p>
        <button>Click aquí</button>
        `
    }

}

customElements.define("my-button", ButtonUser)
export default ButtonUser