const shoppingContent = document.getElementById('shoppingContent');
const cart = [];

products.forEach((product) => {
    const  content = document.createElement('div');
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.Name}</h3>
      <p>${product.price} $</p>
    `;
    shoppingContent.append(content);

   const addToCarBtn = document.createElement('button');
   addToCarBtn.innertText = "buy";

   content.append(addToCarBtn);

   addToCarBtn.addEventListener('clink', ()=>{
    cart.push({
      "id": producto,
      "name": "GOwalk Joy",
      "category": "Women",
      "price": 175,
      "brand": "Skechers",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error ipsam obcaecati aliquid ducimus nobis! Beatae unde possimus officia necessitatibus veniam incidunt alias earum, saepe rem, at iure impedit quos!",
      "images": [
        "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1562183241-840b8af0721e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        "https://images.unsplash.com/photo-1577983156459-59be31b0d11c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=477&q=80",
        "https://images.unsplash.com/photo-1629097499121-290fd9a95dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
      ],
      "thumbnails": [
        "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "hhttps://images.unsplash.com/photo-1562183241-840b8af0721e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        "https://images.unsplash.com/photo-1577983156459-59be31b0d11c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=477&q=80",
        "https://images.unsplash.com/photo-1629097499121-290fd9a95dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
      ]
    },)
   })
   });
   
   
    // const content = element.innerHTML;
});