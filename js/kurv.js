document.addEventListener('DOMContentLoaded', () => {
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const quantitySpan = document.querySelector('.quantity');
    const priceElement = document.querySelector('.price');
    const summaryPriceElement = document.querySelector('.summary-price');
    const summarySubtotalElements = document.querySelectorAll('.summary-subtotal');
    const summaryTotalElement = document.querySelector('.summary-total');
    const unitPrice = parseInt(priceElement.dataset.unitPrice, 10); // Get the unit price from the data attribute

    let quantity = 1;

    function updatePrice() {
        const totalPrice = unitPrice * quantity;
        priceElement.textContent = `${totalPrice} DKK`;
        summaryPriceElement.textContent = `${totalPrice} DKK`;
        summarySubtotalElements.forEach(el => el.textContent = `${totalPrice} DKK`);
        summaryTotalElement.textContent = `${totalPrice} DKK`;
    }

    minusButton.addEventListener('click', () => {
        if (quantity > 1) { // Ensure quantity doesn't go below 1
            quantity--;
            quantitySpan.textContent = quantity;
            updatePrice();
        }
    });

    plusButton.addEventListener('click', () => {
        quantity++;
        quantitySpan.textContent = quantity;
        updatePrice();
    });

    // Initial price update
    updatePrice();
});
