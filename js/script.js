const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});



//! date and clock 
var tday=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var tmonth=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
            
function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;
            
var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+"";
document.getElementById('clockbox').innerHTML=clocktext;
}
            
GetClock();
setInterval(GetClock,1000);
//! date and clock 

//! search yazarken yukarı kayma önleme
// HTML içerisindeki arama inputunu seçin
const searchInput = document.querySelector('.search-input');

// Arama inputuna odaklandığınızda sayfanın yukarı kaymasını engelleyen fonksiyon
searchInput.addEventListener('focus', function() {
    // Arama inputunun mevcut kaydırma durumunu alın
    const scrollY = window.scrollY;

    // Arama inputa odaklandığınızda kaydırma durumunu sabitleyin
    window.onscroll = function() {
        window.scrollTo(0, scrollY);
    };
});

// Arama inputundan çıkıldığında kaydırma engellemesini kaldırın
searchInput.addEventListener('blur', function() {
    window.onscroll = null;
});


//visitor count

var ziyaretciSayaci = document.getElementById("sayac");
    var ziyaretciSayisi = 0;

    // Sayfa yüklendiğinde veya ziyaretçi sayısı arttığında bu fonksiyonu çağırın
    function ziyaretciSayisiniArtir() {
        ziyaretciSayisi++;
        ziyaretciSayaci.textContent = ziyaretciSayisi;
    }

    // Sayfa yüklendiğinde ziyaretçi sayacını artırın
    window.onload = ziyaretciSayisiniArtir;

  
//
    //CONTACT BUTON SUCCES AND ERROR
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
    
      const nameInput = document.querySelector('input[name="name"]');
      const mailInput = document.querySelector('input[name="mail"]');
      const phoneInput = document.querySelector('input[name="phone"]');
    
      const nameValue = nameInput.value.trim();
      const mailValue = mailInput.value.trim();
      const phoneValue = phoneInput.value.trim();
    
      if (nameValue === "" || mailValue === "" || phoneValue === "") {
        showToast("Please fill in all fields.", "error", 3000);
        return;
      }
    
      const formData = new FormData(this);
    
      fetch("php/contact.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        const responseMessage = document.getElementById("response-message");
    
        if (data.trim() === "Veri başarıyla eklendi.") {
          showToast("Success: We will contact you soon.", "success", 3000);
          nameInput.value = "";
          mailInput.value = "";
          phoneInput.value = "";
        } else {
          showToast("Error: Try again later.", "error", 3000);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    });
    
    function showToast(message, type, duration) {
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.textContent = message;
      document.body.appendChild(toast);
    
      setTimeout(function() {
        toast.classList.add('show');
        setTimeout(function() {
          toast.classList.remove('show');
          setTimeout(function() {
            toast.remove();
          }, 300);
        }, duration);
      }, 100);
    }
	
	
	
	

    











