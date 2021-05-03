class ProductCard extends HTMLElement{
    constructor(){
      super()
      this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
      return ['img', 'title', 'collection', 'description', 'price']
    }
    attributeChangedCallback(attribute, oldValue, newValue){
      if(newValue!==oldValue){
      switch(attribute){
        case 'img':
          this.img = newValue
          break
        case 'title':
          this.title = newValue
          break
        case 'collection':
          this.collection = newValue
          break
        case 'description':
          this.description = newValue
          break
        case 'price':
          this.price = newValue
          break
      } 
    }
    }
    getTemplate(){
      const template = document.createElement('template')
      template.innerHTML = `
      <section class='card'>
        <div class ='card__image-box'>
          <img class='card__image' src="${this.img}" alt="product">
        </div>
        <div class='card__information'>
          <h2 class='card__title'>${this.title}</h2>
          <h3 class='card__subtitle'>${this.collection}</h3>
          <p class='card__description'>${this.description}</p>
          <h3 class='card__price'>${this.price}</h3>
          <button class='buy-button' type="button">COMPRAR</button>
        </div>
      </section>
      <style>
      @import '../componentes/style-card.css'
      </style>
      `
      return template
    }
    render(){
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
      this.render()
    }
}

customElements.define('product-card', ProductCard)