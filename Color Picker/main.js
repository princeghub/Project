var change = document.querySelector('.root');
var btn = document.querySelector('.btn');
var code = document.getElementById('code');
let copyBtn = document.getElementById('copybtn');

let div = null;



window.onload = () => {
   main()
}


function main() {
   btn.addEventListener('click', function () {
      let bgColor = genaretColor()
      change.style.backgroundColor = bgColor;
      code.value = bgColor;
   })

   copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(code.value);
      if (div != null) {
         div.remove();
         div = null;
      }
      
      massageGenerator(`${code.value} Copied..!`);

   })


}

//================== color genertor funtion==========================

function genaretColor() {
   var red = Math.floor(Math.random() * 255);
   var blue = Math.floor(Math.random() * 255);
   var green = Math.floor(Math.random() * 255);



   // return `rgb(${red}, ${blue}, ${green})`
   return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
}

// ==============massage generator funtion============================

function massageGenerator(msg) {
   div = document.createElement('div')
   div.innerText = msg;
   div.className = 'toast-massage toast-msg-in'
   div.style.position = "relative"

   div.addEventListener('click', function () {
      div.classList.remove('toast-msg-in');
      div.classList.add('toast-msg-out');

      div.addEventListener('animationend', function () {
         div.remove();
         div = null;
      })
   });


   change.appendChild(div);
}

