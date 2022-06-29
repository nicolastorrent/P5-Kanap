class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }
}



fetch("http://localhost:3000/api/products")
.then(data => data.json())
.then(jsonListProduct => {
    console.log(jsonListProduct);
    for (let jsonProduct of jsonListProduct) {
        let product = new Product(jsonProduct);
        document.getElementById("items").innerHTML +=
        `<a href="./product.html?id=${product._id}">
        <article>
          <img src="${product.imageUrl}" alt="${product.altTxt}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
      </a>`
    }
}).catch((error) =>{
    alert("connexion impossible")
})
