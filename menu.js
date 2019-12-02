function Menu() {
    this.windowWidth = window.innerWidth;
    this.OpenMenu   = OpenMenu;
    this.CloseMenu  = CloseMenu;

    function OpenMenu(_id) {
        if (this.windowWidth <= 900) {
            document.getElementById(_id).style.width = "100%";
        } 
    }

    function CloseMenu(_id) {
        if (this.windowWidth <= 900) {
            document.getElementById(_id).style.width = "0%";
        }
    }
}

var navbar = new Menu();
function openNavbar() {
        navbar.OpenMenu("content-menu");
}
function closeNavbar() {
    navbar.CloseMenu("content-menu");
}

//When the user resizes the window size, the page will refrash
window.onresize = function(){
    location.reload();
 };