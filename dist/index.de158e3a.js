const cards = document.querySelectorAll(".products__cards");
cards.forEach((el)=>{
    const btn = el.querySelectorAll(".product-cart");
    const title = el.querySelectorAll("h3");
    const price = el.querySelectorAll(".price");
    const img = el.querySelectorAll(".product-name");
    btn.addEventListener("click", ()=>{
        const cartStorage = localStorage.getItem("cart") || "[]";
        const cart = JSON.parse(cartStorage);
        const card = {
            title,
            price,
            img
        };
        localStorage.getItem("cart", JSON.stringify([
            ...cart,
            card
        ]));
    });
});

//# sourceMappingURL=index.de158e3a.js.map
