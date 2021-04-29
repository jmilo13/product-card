class ProductCard extends HTMLElement{
    constructor(){
      super()
      this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
      return ['img', 'title', 'collection', 'description', 'price']
    }
    attributeChangedCallback(attribute, oldValue, newValue){
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
    getTemplate(){
      const template = document.createElement('template')
      template.innerHTML = `
      <section>
        <div>
          <img src="${this.img}" alt="product" width = 200px>
        </div>
        <div>
          <h2>${this.title}</h2>
          <h3>${this.collection}</h3>
          <p>${this.description}</p>
          <h3>${this.price}</h3>
          <button type="button">Comprar</button>
        </div>
      </section>`
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