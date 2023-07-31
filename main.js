var typed= new Typed(".text",{
    strings:["Frontend Developer" ,"YouTouber" ,  "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})



//   const toggleButton = document.getElementById("toggleButton");
//   const elementToToggle = document.getElementById("elementToToggle");

//   toggleButton.addEventListener("click", () => {
//     if (elementToToggle.style.display === "none") {
//       elementToToggle.style.display = "block"; // Show the element
//     } else {
//       elementToToggle.style.display = "none"; // Hide the element
//     }
//   });

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  function myFunction1() {
    var x = document.getElementById("myDiv1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function myFunction2() {
    var x = document.getElementById("myDiv2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }