const shopContent = document.getElementById("shopContent");



let shopping = [];

products.foreach((product) =>{
    let content = document.createElement("div");
    content.c
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.name}</h3>
    <p class="price">${product.price}</p>
    `;

    shopContent.append(content);


    let comprar = document.createElement("button");
    comprar.innerText = "comprar"

    content.append(comprar);
})