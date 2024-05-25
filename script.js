
var typed = new Typed(".typing", {
    strings: ["Website Developer", "Full Stack Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hiddenSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}