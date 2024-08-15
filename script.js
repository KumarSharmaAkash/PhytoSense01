	// Navbar
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
   
  menu.onclick = () => {
      navbar.classList.toggle('active');
  }
   
  window.onscroll = () => {
      navbar.classList.remove('active');
  }
  // Dark Mode
  let darkmode = document.querySelector('#darkmode');
   
  darkmode.onclick = () => {
      if(darkmode.classList.contains('bx-moon')){
          darkmode.classList.replace('bx-moon','bx-sun');
          document.body.classList.add('active');
      }else{
          darkmode.classList.replace('bx-sun','bx-moon');
          document.body.classList.remove('active');
      }
  }
   
  // Scroll Reveal
  const sr = ScrollReveal ({
      origin: 'top',
      distance: '40px',
      duration: 2000,
      reset: true
  });
   
   
  sr.reveal(`.home-text, .home-img,
              .about-img, .about-text,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`, {
      interval: 200
  })

  document.getElementById("learn-more-btn").addEventListener("click", function() {
    const moreDetails = document.getElementById("more-details");
    
    if (moreDetails.classList.contains("hidden")) {
        moreDetails.classList.remove("hidden");
        moreDetails.style.display = "block";
        this.textContent = "Show Less";
    } else {
        moreDetails.classList.add("hidden");
        moreDetails.style.display = "none";
        this.textContent = "Learn More";
    }
});


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 1600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

