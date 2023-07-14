const shopContent = document.getElementById("shopContent");



let shopping = [];

products.foreach((product) =>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.name}</h3>
    <p class="price">${product.price}</p>
    `;

    shopContent.append(content);


    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        shopping.push({
            id: product.id,
            img: product.img,
            price

        })
    })
})