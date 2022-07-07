
setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let hours;
    let minuts = date.getMinutes();
    let seconds = date.getSeconds();
    let ms = date.getMilliseconds();
    let meridian;

    function timeformater(hr) {
      if (hr > 12) {
        hours = hr - 12;
        meridian = "PM";
      } 
      else {
        hours = hr;
        meridian = "AM";
      }
    }
    timeformater(hr);
   if(seconds<10){ document.querySelector('#seconds').textContent='0'+seconds}
   else{document.querySelector("#seconds").textContent =seconds;
}
   if(minuts<10){ document.querySelector('#minuts').textContent=' : 0'+minuts+' : '}
   else{document.querySelector("#minuts").textContent = " : " + minuts + " : ";
}
   if(hours<10){document.querySelector("#hours").textContent ='0'+hours;}
   else{document.querySelector("#hours").textContent = hours;
}
    
    
    document.querySelector('#AM-PM').textContent=meridian
},1000)