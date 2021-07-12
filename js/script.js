const modal = document.querySelector(".modal");
const buttonSearch = document.querySelector(".button-search");
const bookingForm = document.querySelector(".booking-form");
const dateDelivery = document.querySelector(".date-delivery");
const dateDeparture = document.querySelector(".date-departure");

modal.classList.add("modal--close");

buttonSearch.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.toggle("modal--close");
});

dateDelivery.required = false;
dateDeparture.required = false;
bookingForm.addEventListener("submit", function(event) {
    if (!dateDelivery.value || !dateDeparture.value) {
        event.preventDefault();
        bookingForm.classList.remove("modal-error");
        bookingForm.offsetWidth = bookingForm.offsetWidth;
        bookingForm.classList.add("modal-error");
    }

});