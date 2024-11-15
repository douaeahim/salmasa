// Les données des produits
const products = [
    {
        name: "Classic T-Shirt",
        image: "imgs/shop2.png",
        price: "$20",
    },
    {
        name: "Sporty T-Shirt",
        image: "imgs/home.png",
        price: "$25",
    },
    {
        name: "V-Neck T-Shirt",
        image: "imgs/featured2.png",
        price: "$18",
    },
    {
        name: "Graphic T-Shirt",
        image: "imgs/shop4.png",
        price: "$30",
    },
];

// Fonction pour afficher les produits dynamiquement
const loadProducts = () => {
    const productGrid = document.getElementById("product-grid");
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="alert('Added to cart: ${product.name}')">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
};

// Fonction pour scroller vers une section
const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
};

// Charger les produits au chargement de la page
window.onload = loadProducts;
