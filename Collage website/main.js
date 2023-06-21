var swiper = new Swiper(".myhero", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  autoplay: true,
});


// let date = document.getElementById('date');
let popup = document.querySelector('.showBtn');
let popupcancel = document.querySelector('.fa-xmark');

popup.addEventListener("click", function () {
  document.querySelector('#depertment').classList.add("active");
});

popupcancel.addEventListener("click", function () {
  document.querySelector('.subjectBox').classList.remove("active");
})



// date.innerHTML = [datetask];

// let datetask = new Date().toLocaleDateString();
// console.log(datetask);

let tread1 = document.querySelector('.tread-1');
let tread2 = document.querySelector('.tread-2');
let tread3 = document.querySelector('.tread-3');
let tread4 = document.querySelector('.tread-4');
let tread5 = document.querySelector('.tread-5');
let tread6 = document.querySelector('.tread-6');
let tread7 = document.querySelector('.tread-7');

let Cbtn1 = document.querySelector('.Cbtn-1')
let Cbtn2 = document.querySelector('.Cbtn-2')
let Cbtn3 = document.querySelector('.Cbtn-3')
let Cbtn4 = document.querySelector('.Cbtn-4')
let Cbtn5 = document.querySelector('.Cbtn-5')
let Cbtn6 = document.querySelector('.Cbtn-6')
let Cbtn7 = document.querySelector('.Cbtn-7')

let Sbtn1 = document.querySelector('.Sbtn-1');
let Sbtn2 = document.querySelector('.Sbtn-2');
let Sbtn3 = document.querySelector('.Sbtn-3');
let Sbtn4 = document.querySelector('.Sbtn-4');
let Sbtn5 = document.querySelector('.Sbtn-5');
let Sbtn6 = document.querySelector('.Sbtn-6');
let Sbtn7 = document.querySelector('.Sbtn-7');

Sbtn1.addEventListener("click", function () {
  tread1.classList.add("show")
});
Cbtn1.addEventListener("click", function () {
  tread1.classList.remove("show")
});

Sbtn2.addEventListener("click", function () {
  tread2.classList.add("show")
});
Cbtn2.addEventListener("click", function () {
  tread2.classList.remove("show")
});

Sbtn3.addEventListener("click", function () {
  tread3.classList.add("show")
});
Cbtn3.addEventListener("click", function () {
  tread3.classList.remove("show")
});

Sbtn4.addEventListener("click", function () {
  tread4.classList.add("show")
});
Cbtn4.addEventListener("click", function () {
  tread4.classList.remove("show")
});

Sbtn5.addEventListener("click", function () {
  tread5.classList.add("show")
});
Cbtn5.addEventListener("click", function () {
  tread5.classList.remove("show")
});

Sbtn6.addEventListener("click", function () {
  tread6.classList.add("show")
});
Cbtn6.addEventListener("click", function () {
  tread6.classList.remove("show")
});

Sbtn7.addEventListener("click", function () {
  tread7.classList.add("show")
});
Cbtn7.addEventListener("click", function () {
  tread7.classList.remove("show")
});


let header = document.querySelector('nav')


window.addEventListener('scroll', function () {
  const scrpos = window.pageYOffset;

  if (scrpos > 200) {
    header.classList.add('fixd');
  } else {
    header.classList.remove('fixd')
  }
})









function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  // Convert hours to 12-hour format
  var meridiem = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12; // 0 should be displayed as 12

  // Add leading zero if needed
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + meridiem;

  t = setTimeout(function () {
    startTime();
  }, 500);
}

startTime();














