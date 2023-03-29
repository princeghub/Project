 let header = document.querySelector('.header');
 let navBtn = document.querySelector('.manu-icon');
//  let closBtn = document.querySelector('#clos');

//  navBtn.addEventListener('click', function(){
//     header.classList.add('active');

//  });

//  closBtn.addEventListener('click', function(){
//     header.classList.remove('active');
//     console.log('hello')
//  });

let toggleNavbar = function(){
    header.classList.toggle('active');
}

navBtn.addEventListener('click', function(){
    toggleNavbar()
})




window.addEventListener('scroll', function(){
    const scrpos = window.pageYOffset;
   
     if(scrpos > 200){
       header.classList.add('fixd');
     }
     else{
       header.classList.remove('fixd');
     }
   })