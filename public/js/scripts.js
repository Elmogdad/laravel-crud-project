
const products = [
    { id: 1, name: "هاتف ذكي", price: 999, image: "https://via.placeholder.com/300x200.png?text=هاتف+ذكي", featured: true },
    { id: 2, name: "لابتوب", price: 1299, image: "https://via.placeholder.com/300x200.png?text=لابتوب", featured: true },
    { id: 3, name: "سماعات لاسلكية", price: 199, image: "https://via.placeholder.com/300x200.png?text=سماعات+لاسلكية", featured: true },
    { id: 4, name: "ساعة ذكية", price: 299, image: "https://via.placeholder.com/300x200.png?text=ساعة+ذكية", featured: true },
    { id: 5, name: "تلفزيون ذكي", price: 799, image: "https://via.placeholder.com/300x200.png?text=تلفزيون+ذكي" },
    { id: 6, name: "كاميرا رقمية", price: 599, image: "https://via.placeholder.com/300x200.png?text=كاميرا+رقمية" },
    { id: 7, name: "جهاز لوحي", price: 449, image: "https://via.placeholder.com/300x200.png?text=جهاز+لوحي" },
    { id: 8, name: "سماعات رأس", price: 129, image: "https://via.placeholder.com/300x200.png?text=سماعات+رأس" },
    { id: 9, name: "ماوس لاسلكي", price: 39, image: "https://via.placeholder.com/300x200.png?text=ماوس+لاسلكي" },
    { id: 10, name: "شاحن متنقل", price: 49, image: "https://via.placeholder.com/300x200.png?text=شاحن+متنقل" },
    { id: 11, name: "مكبر صوت بلوتوث", price: 89, image: "https://via.placeholder.com/300x200.png?text=مكبر+صوت+بلوتوث" },
    { id: 12, name: "طابعة ليزر", price: 179, image: "https://via.placeholder.com/300x200.png?text=طابعة+ليزر" }
];

function createProductCard(product) {
    return `
        <div class="col-md-3 mb-4">
            <div class="card product-card h-100">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text product-price mt-auto">${product.price} ريال</p>
                    <button class="btn btn-primary mt-2" onclick="addToCart(${product.id})">أضف إلى السلة <i class="fas fa-shopping-cart"></i></button>
                </div>
            </div>
        </div>
    `;
}

const featuredProductsContainer = document.getElementById('featured-products');
const allProductsContainer = document.getElementById('all-products');

products.forEach(product => {
    if (product.featured) {
        featuredProductsContainer.innerHTML += createProductCard(product);
    }
    allProductsContainer.innerHTML += createProductCard(product);
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}



/// Products page

// const products = [
//     { id: 1, name: "آيفون 13", price: 3999, category: "smartphone", image: "https://example.com/iphone13.jpg" },
//     { id: 2, name: "سامسونج جالاكسي S21", price: 3499, category: "smartphone", image: "https://example.com/galaxys21.jpg" },
//     { id: 3, name: "ماك بوك برو", price: 7999, category: "laptop", image: "https://example.com/macbookpro.jpg" },
//     { id: 4, name: "لينوفو ثينك باد", price: 4999, category: "laptop", image: "https://example.com/thinkpad.jpg" },
//     { id: 5, name: "آيباد برو", price: 3299, category: "tablet", image: "https://example.com/ipadpro.jpg" },
//     { id: 6, name: "سامسونج تاب S7", price: 2799, category: "tablet", image: "https://example.com/tabs7.jpg" },
//     { id: 7, name: "سماعات إيربودز برو", price: 999, category: "accessory", image: "https://example.com/airpodspro.jpg" },
//     { id: 8, name: "شاحن لاسلكي", price: 199, category: "accessory", image: "https://example.com/wirelesscharger.jpg" },
// ];

// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// updateCartCount();

// function updateCartCount() {
//     const cartCount = document.getElementById('cart-count');
//     cartCount.textContent = cart.length;
// }

function displayProducts(productsToDisplay = products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    productsToDisplay.forEach(product => {
        productsContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price} ريال</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">أضف إلى السلة</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('تمت إضافة المنتج إلى السلة!');
    }
}

function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    const filteredProducts = selectedCategories.length > 0
        ? products.filter(product => selectedCategories.includes(product.category))
        : products;
    displayProducts(filteredProducts);
}

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchResults = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(searchResults);
}

// عرض جميع المنتجات عند تحميل الصفحة
displayProducts();


///Page Offers

const offers = [
    { id: 1, name: "آيفون 13", originalPrice: 3999, discountPercentage: 15, image: "https://example.com/iphone13.jpg", endDate: "2024-10-15" },
    { id: 2, name: "سامسونج جالاكسي S21", originalPrice: 3499, discountPercentage: 20, image: "https://example.com/galaxys21.jpg", endDate: "2024-10-20" },
    { id: 3, name: "ماك بوك برو", originalPrice: 7999, discountPercentage: 10, image: "https://example.com/macbookpro.jpg", endDate: "2024-10-25" },
    { id: 4, name: "سماعات إيربودز برو", originalPrice: 999, discountPercentage: 25, image: "https://example.com/airpodspro.jpg", endDate: "2024-10-18" },
];

cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function displayOffers() {
    const offersContainer = document.getElementById('offers-container');
    offersContainer.innerHTML = '';

    offers.forEach(offer => {
        const discountedPrice = offer.originalPrice * (1 - offer.discountPercentage / 100);
        const endDate = new Date(offer.endDate);

        offersContainer.innerHTML += `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card">
                    <img src="${offer.image}" class="card-img-top" alt="${offer.name}">
                    <div class="discount-badge">${offer.discountPercentage}% خصم</div>
                    <div class="card-body">
                        <h5 class="card-title">${offer.name}</h5>
                        <p class="card-text">
                            <span class="original-price">${offer.originalPrice} ريال</span><br>
                            <span class="new-price">${discountedPrice.toFixed(2)} ريال</span>
                        </p>
                        <p class="offer-timer" data-end="${offer.endDate}">ينتهي العرض بعد: <span class="countdown"></span></p>
                        <button class="btn btn-primary" onclick="addToCart(${offer.id}, ${discountedPrice})">أضف إلى السلة</button>
                    </div>
                </div>
            </div>
        `;
    });

    startCountdown();
}

function startCountdown() {
    const timers = document.querySelectorAll('.offer-timer');
    timers.forEach(timer => {
        const endDate = new Date(timer.dataset.end).getTime();
        const countdownElement = timer.querySelector('.countdown');

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = endDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days}د ${hours}س ${minutes}د ${seconds}ث`;

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.textContent = "انتهى العرض";
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    });
}

function addToCart(productId, price) {
    const product = offers.find(p => p.id === productId);
    if (product) {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: price,
            image: product.image
        };
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('تمت إضافة المنتج إلى السلة!');
    }
}

// عرض العروض عند تحميل الصفحة
displayOffers();
