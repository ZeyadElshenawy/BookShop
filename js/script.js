const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

if (searchBtn) {
    searchBtn.onclick = () => {
        if (searchForm) searchForm.classList.toggle('active');
    };
}

function showMore() {
    const hiddenContent = document.querySelector('.hidden');
    const button = document.querySelector('.btn-showMore');
    if (!hiddenContent || !button) return;
    const isHidden = getComputedStyle(hiddenContent).display === 'none';
    hiddenContent.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'show less' : 'show more';
}

window.onscroll = () => {
    const header2 = document.querySelector('.header .header-2');
    if (!header2) return;
    if (window.scrollY > 80) {
        header2.classList.add('active');
    } else {
        header2.classList.remove('active');
    }
};

function fadeOut() {
    const loader = document.querySelector('.loader-container');
    if (loader) loader.style.display = 'none';
}

window.onload = () => {
    setTimeout(fadeOut, 3500);
};


document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemCount = document.querySelector('.cart-icon span');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart-icon');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.querySelector('.sidebar-close');

    const cartItems = [];
    let totalAmount = 0;

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const nameEl = document.querySelectorAll('.box .content h3')[index];
            const priceEl = document.querySelectorAll('.price')[index];
            if (!nameEl || !priceEl) return;

            const item = {
                name: nameEl.textContent,
                price: parseFloat(priceEl.textContent.slice(1)),
                quantity: 1,
            };
            const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push(item);
            }
            totalAmount += item.price;
            updateCartUI();
        });
    });

    function updateCartUI() {
        updateCartItemCount(cartItems.length);
        updateCartItemList();
        updateCartTotal();
    }

    function updateCartItemCount(count) {
        if (cartItemCount) cartItemCount.textContent = count;
    }

    function updateCartItemList() {
        if (!cartItemsList) return;
        cartItemsList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('individual-cart-item');
            cartItem.innerHTML = `
                <span>(${item.quantity}x) ${item.name}</span>
                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsList.appendChild(cartItem);
        });

        document.querySelectorAll('.remove-item').forEach((btn) => {
            btn.addEventListener('click', (event) => {
                const idx = event.target.dataset.index;
                removeItemFromCart(idx);
            });
        });
    }

    function removeItemFromCart(index) {
        const item = cartItems[index];
        if (!item) return;
        totalAmount -= item.price * item.quantity;
        cartItems.splice(index, 1);
        updateCartUI();
    }

    function updateCartTotal() {
        if (cartTotal) cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
    }

    if (cartIcon && sidebar) {
        cartIcon.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    if (closeButton && sidebar) {
        closeButton.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
});


/* contact us input focus */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    this.parentNode.classList.add("focus");
}

function blurFunc() {
    if (this.value === "") {
        this.parentNode.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


if (typeof Swiper !== 'undefined') {
    new Swiper(".book-slider", {
        loop: true,
        centeredSlides: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    new Swiper(".reviews-slider", {
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    new Swiper(".books-slider", {
        spaceBetween: 10,
        grabCursor: false,
        loop: true,
        centeredSlides: true,
        autoplay: { delay: 9000, disableOnInteraction: false },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            450: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
        },
    });
}
