var navbar = document.getElementById("nav")
var ddowncontent = document.getElementById("ddown-content");

var elements = [navbar, ddowncontent];

window.onscroll = function() {
    Scrolled()
}

function Scrolled(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        elements[0].classList.remove("bg-transparent");
        elements[0].classList.add("bg-black");
        elements[1].classList.remove("bg-transparent");
        elements[1].classList.add("bg-gray");
    }

    else{
        elements[0].classList.remove("bg-black");
        elements[0].classList.add("bg-transparent");
        elements[1].classList.remove("bg-gray");
        elements[1].classList.add("bg-transparent");
    }
}

