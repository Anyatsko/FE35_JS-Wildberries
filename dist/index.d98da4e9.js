class Products {
    constructor(){
        this.classNameActive = "active";
        this.labelAdd = "Add to cart";
        this.labelRemove = "Remove ";
    }
    handlerSetLocatStorage(element, id) {
        const { pushProduct , products  } = localStorageUtil.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }
    }
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";
        CATALOG.forEach(({ id , name , price , img  })=>{
            let activeClass = "";
            let activeText = "";
            if (productsStore.indexOf(id) === -1) activeText = this.labelAdd;
            else {
                activeClass = this.classNameActive;
                activeText = this.labelRemove;
            }
            htmlCatalog += `
                         <li>
                               <h3>${name}</h3>
                               <img scr=${img}/>
                                <span>${price.toLocaleString()} USD</span>
                               <button class="${activeClass}" onclick = "productPage.handlerSetLocatStorage(this, '${id}')"> ${activeText} </button>
                        </li>  
            `;
        });
        const html = `
                       <ul>
                        ${htmlCatalog}
                    </ul>`;
        root_products.innerHTML = html;
    }
}
const productPage = new Products();
productPage.render();

//# sourceMappingURL=index.d98da4e9.js.map
