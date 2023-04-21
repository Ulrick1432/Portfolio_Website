//Enable dropdown menus
//Let users toggle between light and dark mode https://dcodemania.com/post/switch-dark-light-mode-css-javascript
//alert("det virker");
const modeBtn = document.getElementById('dark_mode_button');
const body = document.querySelector('body');

//nedenstående function tilføjer en class til et element, når der klikkes
// på mode knappen.
modeBtn.onclick = () => {
    modeBtn.classList.toggle('active');
    body.classList.toggle('active');

}

