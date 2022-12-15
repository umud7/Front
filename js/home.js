// Burada slide herekete getirib firratmaq ucun (el) elementinden istifade ederek yaziriq Hemdeki location bolmesini yaziriq
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Saat mentiqini xodduyan
  (function () {
    let second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  

    let today = new Date(),
        dd = String(today.getDate()).padStart(),
        mm = String(today.getMonth()).padStart(),
        yyyy = today.getFullYear(12),
        nextYear = yyyy + 1,
        dayMonth = "02/09/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    
    const timeDown = new Date(birthday).getTime(),
        time = setInterval(function() {    
  
          const now = new Date().getTime(),
                time = timeDown - now;
  
            document.getElementById("days").innerText = Math.floor(time / (day)),
            document.getElementById("hours").innerText = Math.floor((time % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((time % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((time % (minute)) / second);
        },)
    }());


    


  