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





  //  ========== Overlay Systame ===============

  let box1 = document.querySelector('.box-1');
  let box2 = document.querySelector('.box-2');
  let box3 = document.querySelector('.box-3');
  let box4 = document.querySelector('.box-4');
  let box5 = document.querySelector('.box-5');
  let box6 = document.querySelector('.box-6');

  let callBtn1 = document.getElementById('infoBnt1');
  let callBtn2 = document.getElementById('infoBnt2');
  let callBtn3 = document.getElementById('infoBnt3');
  let callBtn4 = document.getElementById('infoBnt4');
  let callBtn5 = document.getElementById('infoBnt5');
  let callBtn6 = document.getElementById('infoBnt6');

  let closBtn = document.querySelector('.icon');
  let closBtn2 = document.querySelector('.icon-2');
  let closBtn3 = document.querySelector('.icon-3');
  let closBtn4 = document.querySelector('.icon-4');
  let closBtn5 = document.querySelector('.icon-5');
  let closBtn6 = document.querySelector('.icon-6');

  callBtn1.addEventListener('click', function(){
    box1.classList.add('cover')
  })
  closBtn.addEventListener('click', function(){
    box1.classList.remove('cover')
  })

  callBtn2.addEventListener('click', function(){
    box2.classList.add('cover')
  })
  closBtn2.addEventListener('click', function(){
    box2.classList.remove('cover')
  })

  callBtn3.addEventListener('click', function(){
    box3.classList.add('cover')
  })
  closBtn3.addEventListener('click', function(){
    box3.classList.remove('cover')
  })

  callBtn4.addEventListener('click', function(){
    box4.classList.add('cover')
  })
  closBtn4.addEventListener('click', function(){
    box4.classList.remove('cover')
  })

  callBtn5.addEventListener('click', function(){
    box5.classList.add('cover')
  })
  closBtn5.addEventListener('click', function(){
    box5.classList.remove('cover')
  })

  callBtn6.addEventListener('click', function(){
    box6.classList.add('cover')
  })
  closBtn6.addEventListener('click', function(){
    box6.classList.remove('cover')
  });




  document.getElementById('next').onclick = function(){
    const widthitems = document.querySelector('.items').offsetWidth;
    document.querySelector('.slider-container').scrollLeft += widthitems;
  }
  document.getElementById('prev').onclick = function(){
    const widthitems = document.querySelector('.items').offsetWidth;
    document.querySelector('.slider-container').scrollLeft -= widthitems;
  }


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    // centeredSlides: true,
    autoplay: {
      delay: 1500,
    },
      
    
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      992:{
        slidesPerView: 2,
      }
    },
  });