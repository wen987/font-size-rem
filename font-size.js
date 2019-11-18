var html = document.querySelector('html');
if (html.offsetWidth > 750) {
    var rem = 750 / 7.5;
    document.getElementsByTagName('body')[0].style.width=750+"px"
} else {
    var rem = html.offsetWidth / 7.5;
}
html.style.fontSize = rem + "px";
