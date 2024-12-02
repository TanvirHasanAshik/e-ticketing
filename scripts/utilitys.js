function handleBooking(elementId) {

    const btnElement = document.getElementById(elementId);
    btnElement.classList.add('btn-warning');
    if (!bookSeats.includes(elementId)) {
        bookSeats.push(elementId);
        totalYourBookingSeat(elementId);
        calculatedPrice('calculated-price');
    }
    if (bookSeats.length > 0) {
        const passengerInfo = document.getElementById('passenger-info');
        passengerInfo.classList.remove('hidden');
    }
    if (bookSeats.length === 4) {
        const buttons = document.getElementsByClassName('seat');
        const coupon = document.getElementById('coupon');
        coupon.classList.remove('hidden');

        for (let button of buttons) {
            if (!bookSeats.includes(button.id)) {
                button.disabled = true;
            }
        }
    }
    document.getElementById('final-seat').innerText = bookSeats.length;

};

function totalYourBookingSeat(elementId) {
    document.getElementById('selected-seat').innerHTML += `
            <div
                class="flex justify-between px-6 border-b-2 border-gray-300 border-dashed text-gray-500 p-2">
                <h2>${elementId}</h2>
                <h2>Economy</h2>
                <h2>500</h2>
            </div>
        `

}

function calculatedPrice(elementId) {
    const element = document.getElementById(elementId);
    if (elementId === 'calculated-price') {
        totalCount += 500;
        element.innerText = totalCount;
    }

}

function handleDiscount() {
    const inputValue = document.getElementById('discount-input');

    if (inputValue.value.toLowerCase() === 'new15') {
        applyCoupon(15);
        inputValue.value = ''
    }
    if (inputValue.value.toLowerCase() === 'couple20') {
        applyCoupon(20);
        inputValue.value = ''
    }
}

function applyCoupon(discountValue) {
    const afterDiscount = document.getElementById('after-discount');
    const totalPrice = document.getElementById('calculated-price');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const discountPrice = totalPriceText * discountValue / 100;
    afterDiscount.innerText = totalPriceText - discountPrice;
}

function handlePassengerInfo(modalId) {
    const name = getElement('name');
    const email = getElement('email');
    const phone = getElement('phone');
    if (name.value === '' || email.value === '' || phone.value === '') {
        const errorMessage = getElement('error-massage');
        errorMessage.classList.remove('hidden');
    } else {
        const errorMessage = getElement('error-massage');
        errorMessage.classList.add('hidden');
        name.value = '';
        email.value = '';
        phone.value = '';
        my_modal_1.showModal();
    }

}

function getElement(elementId) {
    const element = document.getElementById(elementId);
    return element;
}