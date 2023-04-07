let header = document.querySelector('.header');
let manu = document.querySelector('.mobile');

let toggleNavbar = () => {
    header.classList.toggle('active');
}

manu.addEventListener('click', function(){
    toggleNavbar()
})


//  About Me js code ==========
let changeBtn1 = document.getElementById('innerBtn1');
let changeBtn2 = document.getElementById('innerBtn2');

let box1 = document.getElementById('innerBox1');
let box2 = document.getElementById('innerBox2');

changeBtn1.addEventListener('click', function(){
    box1.style.display = "block";
    box2.style.display = "none";
})
changeBtn2.addEventListener('click', function(){
    box1.style.display = "none";
    box2.style.display = "block";
})

window.addEventListener('scroll', function(){
    const scrpos = window.pageYOffset;

    if( scrpos > 200){
        header.classList.add('fixd');
    }else{
        header.classList.remove('fixd')
    }
})