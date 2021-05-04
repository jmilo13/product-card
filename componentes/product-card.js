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
      ${this.getStyle()}
      </style>
      `
      return template
    }
    getStyle(){
      return `:host{
        --image-background: #5a6cb2;
        --information-background: #ffffff;
        --title-color: #444;
        --title-size: 4em;
        --gray: #6f6f6f;
        --button-color: #5a6cb2;
        --text-button-color: #fff;
        max-width: 71rem;
        font-size: 62.5%;
    }
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    .card{
        max-width: 85%;
        margin: auto;
        background: blue;
    
    }
    .card__image-box{
        position: relative;
        width: 100%;
        min-height: 25em;
        padding: 4em 1em;
        background: var(--image-background);
    }
    .card__image-box::before{
        position: absolute;
        content:'Nike';
        font-size: 12em;
        font-weight: 800;
        opacity: 0.1;
    }
    .card__image{
        width: 80%;
        min-width: 20em;
        position: relative;
        bottom: -12em;
    
    }
    .card__information{
        display: flex;
        flex-direction: column;
        padding: 4em 2em 2em 2em;
        background: var(--information-background);
    }
    .card__title{
        padding: 0.5em 0;
        color: var(--title-color);
        font-size: var(--title-size);
    }
    .card__subtitle{
        color: var(--gray)
    }
    .card__description{
        font-size: 1.6em;
        padding: 1.25em 0;
    }
    .card__price{
        font-size: 4em;
        color: var(--gray);
    }
    .buy-button{
        min-width: 8.438em;
        min-height: 3.125rem;
        margin: 0.625rem 0;
        background: var(--button-color);
        color: var(--text-button-color);
        border-radius: 2.5rem;
        border: none;
        align-self: flex-end;
    }
    
    @media (min-width: 1080px){
        :host{
            max-width: 110em;
        }
        .card{
            display: flex;
        }
        .card__image-box{
            min-width: 45em;
            min-height: 60em;
        }
        .card__image-box::before{
            top: 0;
        }
        .card__image{
            position: absolute;
            width: 73em;
            transform: rotate(-30deg);
            bottom: -1.9em;
            left: -21em;
        }
        .card__information{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 4em ;
        }
        .card__description{
            padding: 3.125em 0rem 3.125rem 3.125rem;
        }
    }
    `
    }
    render(){
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
      this.render()
    }
}

customElements.define('product-card', ProductCard)