console.log("connected")
var menuBtn = document.getElementById('menuBtn');
var sideNav = document.getElementById("sidebar");
var menu = document.getElementById('menu');

menuBtn.onclick = function () {
    console.log("clicked")
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = '0'
        menu.src = "Images/Barber_Shop_img/close.png";
    } else {
        sideNav.style.right = "-250px"
        menu.src = "Images/Barber_Shop_img/menu.png";
    }
        
}
