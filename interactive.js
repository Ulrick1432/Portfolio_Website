//Enable dropdown menus
//Let users toggle between light and dark mode https://dcodemania.com/post/switch-dark-light-mode-css-javascript
//alert("det virker");
const colorSwitch = document.getElementById('input-color-switch');
colorSwitch.addEventListener('click', checkMode);

function checkMode() {
    if(colorSwitch.checked) {
        darkModeOn();
    } else {
        darkModeOff();
    };
};

function darkModeOn() {
    document.body.classList.add('dark-mode');
};

function darkModeOff() {
    document.body.classList.remove('dark-mode');
};