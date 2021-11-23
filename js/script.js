let rolamento

function rolar() {
    if (scrollY > rolamento) {
        document.getElementById("nav").style.marginTop='20px';
    } else {
        document.getElementById("nav").style.marginTop='00px';
    }
}