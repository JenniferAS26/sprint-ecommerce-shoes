let carrito = [];

products.foreach((product) =>{
    let content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.name}</h3>
    <p>${product.p}</p>
    `
})