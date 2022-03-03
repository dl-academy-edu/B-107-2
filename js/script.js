var popup = document.querySelector('.modal');
var popupBtn = document.querySelector('.button_js');
var popupClose = document.querySelector('.modal__close');
var modalInput = popup.querySelector('input');


popupBtn.addEventListener('click', function() {
    popup.classList.add('modal_open');
    modalInput.focus();
})

popupClose.addEventListener('click', function() {
    popup.classList.remove('modal_open');
    popupBtn.focus();
})

window.addEventListener('keydown', function(event) {
    // console.log(event.code);
    if (event.code === "Escape") {
        if (popup.classList.contains('modal_open')) {
            popup.classList.remove('modal_open');
            popupBtn.focus();
        }
        
    }
})