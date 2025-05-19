fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
   
    
    

    data.forEach(produit => {

      document.getElementById("cartes-container").innerHTML += `
        
      <div class="div">
      <img src="${produit.image}" alt="${produit.title}" class="img">
        <div class="p10">
          <h2>${produit.title}</h2>
          <p class="size20">${produit.description}</p>
          <p class="prix">${produit.price} €</p>
        </div>
        <div class="btn">Ajouter au panier</div>
        </div>
      `;
    });


    
  });
