let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

function showMore() {
    var hiddenContent = document.querySelector('.hidden');
    var button = document.querySelector('button');
    if (hiddenContent.style.display === 'none') {
      hiddenContent.style.display = 'block';
      button.textContent='show less'
    } else {
      hiddenContent.style.display = 'none';
      button.textContent='show more'
    }
  }


window.onscroll = () => {
    
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');

    }
    }

    window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');

        }
        
        fadeOut();
}

function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
    document.querySelector('.loader-container').style.display = 'none';
}

window.onload = function() {
    setTimeout(fadeOut, 3500);
};


document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemCount = document.querySelector('.cart-icon span');
    const cartItemsList = document.querySelector('.cart-items'); 
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart-icon'); // Corrected selector
    const sidebar = document.getElementById('sidebar');

    let cartItems = [];
    let totalAmount = 0;

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const item = {
                name: document.querySelectorAll('.box .content h3')[index].textContent,
                price: parseFloat(document.querySelectorAll('.price')[index].textContent.slice(1)),
                quantity: 1,
            };
            const existingItem = cartItems.find(
                (cartItem) => cartItem.name === item.name,
            );
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push(item);
            }
            totalAmount += item.price;
            updateCartUI();
        });

        function updateCartUI() {
            updateCartItemCount(cartItems.length);
            updateCartItemList();
            updateCartTotal();
        }

        function updateCartItemCount(count) {
            cartItemCount.textContent = count;
        }

        function updateCartItemList() {
            cartItemsList.innerHTML = '';
            cartItems.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-items', 'individual-cart-item');
                cartItem.innerHTML = `<span> (${item.quantity}x)${item.name}</span> 
                                        <span class="price">$${(item.price * item.quantity).toFixed(2)}
                                        </span>`;
                cartItemsList.appendChild(cartItem);
            });
            const removeButtons = document.querySelectorAll('.remove-item');
            removeButtons.forEach((button) => {
                button.addEventListener('click', (event) => {
                    const index = event.target.dataset.index;
                    removeItemFromCart(index);
                });
            });
        }

        function removeItemFromCart(index) {
            const removeItem = cartItems.splice(index, 1)[0];
            totalAmount -= removeItem.price * removeItem.quantity;
            updateCartUI();
        }

        function updateCartTotal() {
            cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
        }

        cartIcon.addEventListener('click', ()=>{
            sidebar.classList.add('open');
        });

        const closeButton = document.querySelector('.sidebar-close');
        closeButton.addEventListener('click', ()=>{ 
            sidebar.classList.remove('open');
        });
    });
});




/* contact us */

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});














var swiper1 = new Swiper(".book-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteration:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
           
        },
        768: {
            slidesPerView: 2,
            
        },
        1024: {
            slidesPerView:3,
            
        },
    },
});


var swiper2 = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteration:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
           
        },
        768: {
            slidesPerView: 2,
            
        },
        1024: {
            slidesPerView:3,
            
        },
    },
});

var swiper3 = new Swiper(".books-slider", {
    spaceBetween: 10,
    grabCursor: false,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

