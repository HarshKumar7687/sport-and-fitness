
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    let cart = [];
    let totalPrice = 0;
  
    items.forEach(item => {
        const minusBtn = item.querySelector('.minus-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const quantityElement = item.querySelector('.quantity');
        const addToCartBtn = item.querySelector('.add-to-cart-btn');
        let quantity = 1;

        // Handle minus button click
        minusBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });

        // Handle plus button click
        plusBtn.addEventListener('click', () => {
            quantity++;
            quantityElement.textContent = quantity;
        });

        // Handle add to cart button click
        addToCartBtn.addEventListener('click', () => {
            const itemName = item.getAttribute('data-name');
            const itemPrice = parseFloat(item.getAttribute('data-price'));

            alert("Item was added");

            // Check if the item already exists in the cart
            let existingCartItem = cart.find(cartItem => cartItem.name === itemName);
            if (existingCartItem) {
                // Update the quantity if it exists
                existingCartItem.quantity += quantity;
            } else {
                // Add new item to the cart
                cart.push({ name: itemName, price: itemPrice, quantity: quantity });
            }

            // Update total price
            totalPrice += itemPrice * quantity;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            // Reset quantity to 1 for the next addition
            quantity = 1;
            quantityElement.textContent = quantity;
        });
    });

    // On checkout, store cart data in localStorage and navigate to bill.html
    checkoutButton.addEventListener('click', () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice.toFixed(2));
        window.location.href = 'bill.html'; // Redirect to bill.html
    });
});



document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const span = document.querySelector('nav span');
        const linkRect = link.getBoundingClientRect();
        const navRect = link.parentElement.getBoundingClientRect();
        
        // Calculate the left position and the width of the span
        const leftPosition = linkRect.left - navRect.left;
        const spanWidth = linkRect.width;
        
        // Update the span position and width
        span.style.left = `${leftPosition}px`;
        span.style.width = `${spanWidth}px`;
    });

    link.addEventListener('mouseleave', () => {
        const span = document.querySelector('nav span');
        span.style.width = '0px';
    });
});

