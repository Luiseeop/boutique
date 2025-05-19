fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
   
    
    const container = document.getElementById('cartes-container');

    data.forEach(produit => {
      const carte = document.createElement('div');
      carte.classList.add('div');

      carte.innerHTML = `
        <img src="${produit.image}" alt="${produit.title}" class="img">
        <div class="p10">
          <h2>${produit.title}</h2>
          <p class="size20">${produit.description}</p>
          <p class="prix">${produit.price} €</p>
        </div>
        <div class="btn">Ajouter au panier</div>
      `;

      container.appendChild(carte);
    });


    
  });
