let showbot = document.querySelector('#botLogo');
let jpibotbox = document.querySelector('.jpibot')

showbot.addEventListener("click", function () {
    jpibotbox.classList.toggle("showbot");
})








function jpibot() {
    let input = document.getElementById('input');
    let q = input.value;
    q = q.toLowerCase();
    let ans = "";
    if (q == "hi" || q == "hlw" || q == "hello" || q == "?") {
        ans = "Hello dear...! How can i help you"
    }
    else if (q == "who are you?" || q == "who are you" || q == "jpi full form?" || q == "jpi full form" || q == "who?" || q == "who") {
        ans = "I am a bot from JPI <br> <small>I am here to assist you. How can i help you? </small>";

    } else if (q == "what is jpi?" || q == "jpi?" || q == "?" || q == "jpi") {
        ans = "JPI is Jashore Polytecnic Institute.";
    } else if (q == "who is the principal of jpi?" || q == "jpi principal?" || q == "principal" || q == "jpi principal" || q == " do you know who is the principal of jpi?" || q == "jpi principal?" || q == "who the principal of jessore polytechnic institute?" || q == "the principal of jpi?" || q == "the principal of jpi" || q == "the principal of jessore polytechnic institute" || q == "the principal of jashore polytechnic institute?" || q == "who the principal of jessore polytechnic institute") {
        ans = "Yes Of Course <br> Here some information about him <br> <b>Name: G.M.Azizur Rahman </b><br> also you can contact with <br><b>Email: principal@jpi.edu.bd";
    } else if (q == "do you know g.m.azizur rahman?" || q == "do you know g m azizur rahman?" || q == "who is g.m.azizur rahman?" || q == "who is g m azizur rahman?" || q == "who is g.m.azizur rahman" || q == "do you know g m azizur rahman?" || q == "g.m.azizur rahman?" || q == "g m azizur rahman" || q == "g.m.azizur rahman") {
        ans = "Yes He is the Principal of Jeshore Polytechnic Institute";
    } else if (q == "how many months does it take to complete a semester?" || q == "how long a diploma semester?" || q == "how long a diploma engineering semester?") {
        ans = "It's Six month";
    } else if (q == "how many department in your collage?" || q == "department in your collage?" || q == "department" || q == "department?" || q == "how many department in jpi collage?" || q == "department in jpi collage?" || q == "department of jpi collage?" || q == "department of jpi collage") {
        ans = "There are Seven Department of our collage<br> Which is :<br> Civil Technology <br> Electronics Technology <br> Electrical technology <br> Computer Technology <br> Telecommunication Technology <br> Mechanical technology <br>Power Technology";
    } else if (q == "what is telecommunication?" || q == "telecommunication?" || q == "what is tct?" || q == "tct" || q == "telecom?" || q == "what is telecommunication" || q == "telecommunication" || q == "what is tct" || q == "tct" || q == "telecom"
    ) {
        ans = "Telecommunications, also known as telecom, is the exchange of information over significant distances by electronic means and refers to all types of voice, data and video transmission."
    } else if (q == "Jessore Polytechnic institute was established in which year?" || q == "when jessore polytechnic institute was established?" || q == "when jpi was established?"  || q == "established?" || q == "established" || q == "jpi established?" || q == "jpi born time?" || q == "jessore polytechnic institute born time?" || q == "when jpi born?" || q == "when jessore polytechnic born?" || q == "born time of jpi?" || q == "born time of jessore polytechnic institute?" || q == "born time jpi?" || q == "born time jessore polytechnic institute?" || q == "established time of jpi?" || q == "established time of jessore polytechnic institute?" || q == "when jpi founded?" || q == "when jessore polytechnic institute founded?"

        || q == "jashore Polytechnic institute was established in which year?" || q == "when jashore polytechnic institute was established?" || q == "jashore polytechnic institute born time?" || q == "when jashore polytechnic born?" || q == "born time of jashore polytechnic institute?" || q == "born time jashore polytechnic institute?" || q == "established time of jashore polytechnic institute?" || q == "when jashore polytechnic institute founded?"

        || q == "Jessore Polytechnic institute was established in which year" || q == "when jessore polytechnic institute was established" || q == "when jpi was established" || q == "jpi established" || q == "jpi born time" || q == "jessore polytechnic institute born time" || q == "when jpi born" || q == "when jessore polytechnic born" || q == "born time of jpi" || q == "born time of jessore polytechnic institute" || q == "born time jpi" || q == "born time jessore polytechnic institute" || q == "established time of jpi" || q == "established time of jessore polytechnic institute" || q == "when jpi founded" || q == "when jessore polytechnic institute founded"

        || q == "jashore Polytechnic institute was established in which year" || q == "when jashore polytechnic institute was established" || q == "jashore polytechnic institute born time" || q == "when jashore polytechnic born" || q == "born time of jashore polytechnic institute" || q == "born time jashore polytechnic institute" || q == "established time of jashore polytechnic institute" || q == "when jashore polytechnic institute founded"
    ) {
        ans = "Jessore polytechnic institute established on <b>1964</b>"
    } else if (q == "what is the code of jpi?" || q == "what is the code of jessore polytechnic institute?" || q == "what is the code of jashore polytechnic institute?" || q == "code of jpi?" || q == "code of jessore polytechnic institute?" || q == "code of jashore polytechnic institute?" || q == "jpi code?" || q == "jessore polytechnic institute code?" || q == "jashore polytechnic institute code?" || q == "jessore polytechnic code?" || q == "jashore polytechnic code?"

        || q == "what is the code of jpi" || q == "what is the code of jessore polytechnic institute" || q == "what is the code of jashore polytechnic institute" || q == "code of jpi" || q == "code of jessore polytechnic institute" || q == "code of jashore polytechnic institute" || q == "jpi code" || q == "jessore polytechnic institute code" || q == "jashore polytechnic institute code" || q == "jessore polytechnic code" || q == "jashore polytechnic code"
    ) {
        ans = "The code of jpi is <b>33053</b>"
    } else if (q == "code?" || q == "code" || q == "bot code?" || q == "bot code" || q == "ai code?" || q == "ai code") {
        ans = "Please tell me clearly. Because I have no access to show my personal code."
    } else if (q == "what is the trade code of telecommunication?" || q == "what is the trade code of tct?" || q == "tct trade code?" || q == "telecommunication trade code?"

        || q == "what is the trade code of telecommunication" || q == "what is the trade code of tct" || q == "tct trade code" || q == "telecommunication trade code"
    ) {
        ans = "Telecommunication trade code is <b>94</b>."
    } else if (q == "what is the trade code of electrical?" || q == "what is the trade code of et?" || q == "et trade code?" || q == "electrical trade code?" || q == "what is the trade code of electrical" || q == "what is the trade code of et" || q == "et trade code" || q == "electrical trade code") {
        ans = "Electrical trade code is <b>67</b>."
    } else if (q == "what is the trade code of electronics?" || q == "what is the trade code of ent?" || q == "ent trade code?" || q == "electronics trade code?" || q == "what is the trade code of electronic?" || q == "what is the trade code of ent?" || q == "ent trade code?" || q == "electronic trade code?" || q == "what is the trade code of electronics" || q == "what is the trade code of ent" || q == "ent trade code" || q == "electronics trade code"
    ) {
        ans = "Electronics trade code is <b>68</b>."
    } else if (q == "what is the trade code of machanical?" || q == "what is the trade code of mt?" || q == "mt trade code?" || q == "matchanical trade code?" || q == "what is the trade code of machanical" || q == "what is the trade code of mt" || q == "mt trade code" || q == "matchanical trade code"
    ) {
        ans = "Mechanical trade code is <b>70</b>"
    } else if (q == "what is the trade code of power?" || q == "what is the trade code of pt?" || q == "pt trade code?" || q == "power trade code?"

        || q == "what is the trade code of power" || q == "what is the trade code of pt" || q == "pt trade code" || q == "power trade code"
    ) {
        ans = "Power trade code is <b>71</b>."
    } else if (q == "what is the trade code of computer?" || q == "what is the trade code of cmt?" || q == "cmt trade code?" || q == "computer trade code?" || q == "what is the trade code of computer" || q == "what is the trade code of cmt" || q == "cmt trade code" || q == "computer trade code"
    ) {
        ans = "Computer trade code is <b>66</b."
    } else if (q == "what is the trade code of civil?" || q == "what is the trade code of ct?" || q == "ct trade code?" || q == "civil trade code?"

        || q == "what is the trade code of civil" || q == "what is the trade code of ct" || q == "ct trade code" || q == "civil trade code"
    ) {
        ans = "Civil trade code is <b>64</b>."
    } else if (q == "what is the curriculum code? " || q == "curriculum code?" || q == "diploma in engineering curriculum code?" || q == "what is diploma in engineering curriculum code?"

        || q == "what is the curriculum code " || q == "curriculum code" || q == "diploma in engineering curriculum code" || q == "what is diploma in engineering curriculum code"
    ) {
        ans = "The Curriculum  code is <b>15</b>."
    } else if (q == "what is civil?" || q == "civil?" || q == "what is ct?" || q == "ct?" || q == "what is civil engineering?" || q == "what is civil" || q == "civil" || q == "what is ct" || q == "ct" || q == "what is civil engineering"
    ) {
        ans = "Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built."
    } else if (q == "what is computer engineering?" || q == "computer?" || q == "what is cmt?" || q == "cmt?"
        || q == "what is computer engineering" || q == "computer" || q == "what is cmt" || q == "cmt"
    ) {
        ans = "Computer engineering is defined as the discipline that embodies the science and technology of design, construction, implementation, and maintenance of software and hardware components of modern computing systems and computer-controlled equipment."
    } else if (q == "what is power engineering?" || q == "power?" || q == "what is pt?" || q == "pt?"
        || q == "what is power engineering" || q == "power" || q == "what is pt" || q == "pt"
    ) {
        ans = "Power engineering is a subfield of electrical engineering and deals with generating, distributing, and transmitting electrical power."
    } else if (q == "what is  mechanical engineering?" || q == "mechanical?" || q == "what is mt?" || q == "mt?" || q == "what is  mechanical engineering" || q == "mechanical" || q == "what is mt" || q == "mt"
    ) {
        ans = "Technically, mechanical engineering is the application of the principles and problem-solving techniques of engineering from design to manufacturing to the marketplace for any object"
    }else if(q == "what is electrical engineering?" || q == "electrical?" || q ==  "what is et?" || q == "et?" || q == "what is electrical engineering" || q == "electrical" || q ==  "what is et" || q == "et"
    ){
        ans ="Electrical engineering is the field of engineering, concerned with the study, designing, and use of appliances and equipment which use any form of electricity."
    }else if(q == "what is electronic engineering?" || q == "electronic?" || q == "what is ent?" || q == "ent?"
    || q == "what is electronic engineering" || q == "electronic" || q == "what is ent" || q == "ent"
    ){
        ans ="Electronic engineering is a sub-discipline of electrical engineering which emerged in the early 20th century and is distinguished by the additional use of active components such as semiconductor devices to amplify and control electric current flow."
    }else if(q == "ent?" || q == "ent full form?" || q == "ent full form?" || q == "what is the full form of ent?" || q == "ent" || q == "ent full form"  || q == "ent" || q == "ent full form" || q == "what is the full form of ent" 
   ){
    ans = " ENT: Electronic Technology" 
   }else if(q == "et?" || q == "et full form?"  || q == "et full form?" || q == "what is the full form of et?" || q == "et" || q == "et full form"  || q == "et full form" || q == "what is the full form of et"
  ){
    ans = "ET: Electrical Technology"
  }else if(q == "cmt?" || q == "cmt full form?"  || q == "cmt full form?" || q == "what is the full form of cmt?" || q == "cmt" || q == "cmt full form"  || q == "cmt full form" || q == "what is the full form of cmt" 
 ){
    ans = " CMT: Computer Technology"
 }else if(q == "tct?" || q == "tct full form?"  || q == "tct full form?" || q == "what is the full form of tct?" || q == "tct" || q == "tct full form"  || q == "tct full form" || q == "what is the full form of tct"
){
    ans = "TCT: Telecommunication Technology"
}else if( q == "ct?" || q == "ct full form?"  || q == "ct full form?" || q == "what is the full form of ct?" || q == "ct" || q == "ct full form"  || q == "ct full form" || q == "what is the full form of ct"

){
    ans = " CT: Civil Technology" 
}else if(q == "pt?" || q == "pt full form?"  || q == "pt full form?" || q == "what is the full form of pt?" || q == "pt" || q == "pt full form"  || q == "pt full form" || q == "what is the full form of pt"
){
    ans = "PT: PowerTechnology"
}else if(q == "mt?" || q == "mt full form?"  || q == "mt full form?"|| q == "what is the full form of mt?" || q == "mt" || q == "mt full form"  || q == "mt full form" || q == "what is the full form of mt"
){
    ans =" MT: MechanicalTechnology"
}else if(q =="what time is it?" || q == "time?" || q == "time please?" || q == "time" || q == "time please" || q == "current time?" || q == "tell me the time?" || q =="what time is it now?" || q =="what is date today?" || q =="todays date?" || q =="today date?" || q =="what is date today" || q =="todays date" || q =="today date" || q =="current date?" || q =="current date" || q =="date?" || q =="date"){
    ans = getCurrentDateTime();
}




















    else {
        ans = "I am really <b>Sorry</b> sir I can't understand what do you want know. As a language based AI model currently I have limited data. Or maybe you did a spelling mistake. <br>I am <b>Under Development</b>"
    }

    document.getElementById('output').innerHTML = ans + "<br>" + "<hr>";
}













// function getCurrentTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
  

//     var meridiem = h >= 12 ? "PM" : "AM";
//     h = h % 12;
//     h = h ? h : 12; 
  

//     var formattedTime = h + ":" + m + ":" + s + " " + meridiem;
    
//     return formattedTime;
//   }
  

//   function handleUserInput(input) {
//     input = input.toLowerCase();
    
//     if (input.includes("time") || input.includes("current time")) {
//       var currentTime = getCurrentTime();
//       return "The current time is " + currentTime + ".";
//     } else {
//       return "I'm sorry, I cannot help with that.";
//     }
//   }







  function getCurrentDateTime() {
    var today = new Date();
    
    // Get date components
    var month = today.toLocaleString("en-US", { month: "long" });
    var day = today.getDate();
    var year = today.getFullYear();
    
    // Get time components
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
  
    // Convert hours to 12-hour format
    var meridiem = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12; // 0 should be displayed as 12
  
    // Format the date and time components
    var formattedDateTime = month + " " + day + ", " + year + " - " + h + ":" + m + ":" + s + " " + meridiem;
    
    return formattedDateTime;
  }
  
  // Function to handle user input and provide responses
  function handleUserInput(input) {
    input = input.toLowerCase();
    
    if (input.includes("time") || input.includes("current time")) {
      var currentTime = getCurrentDateTime();
      return "The current time is " + currentTime + ".";
    } else if (input.includes("date") || input.includes("current date")) {
      var currentDate = getCurrentDateTime().split(" - ")[0];
      return "The current date is " + currentDate + ".";
    } else {
      return "I'm sorry, I cannot help with that.";
    }
  }
  
  // Test the bot
  console.log(handleUserInput("What is the current time?"));
  console.log(handleUserInput("Tell me the time, please."));
  console.log(handleUserInput("What's the date today?"));
  console.log(handleUserInput("What's the weather like?"));
  

