class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render() {
        const html = document.getElementById("cart_content").onclick = headerPage.handlerOpenShoppingPage();
    
        root_header.innerHTML = html;
    }
};

const headerPage = new Header();
