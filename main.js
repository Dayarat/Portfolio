var typed= new Typed(".text",{
    strings:["Web Developer" , "Frontend Developer" ,"Backend Develover" ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


// Get the status elements
const status1Element = document.getElementById("details-container1");
const status2Element = document.getElementById("details-container2");
console.log(status1Element);

let status1Active = false;
let status2Active = false;
// Function to set the status for Button 1
function setStatus1Active() {
    status1Active = !status1Active;
    if (status1Active) {
        setStatus2Inactive();
      const customMessage = `
      <p><b>B.Sc. (Hons.) in Software Engineering</b><br />University of Kelaniya<br/>2021 - 2025</p>
      
      <br/><p><b>GCE A/L - Physical Science</b><br />Mahinda College Galle<br/>2016 - 2019</p>
      `;
      status1Element.innerHTML = customMessage;
    } else {
      status1Element.innerHTML = "";
    }
}

function setStatus1Inactive() {
  status1Element.textContent = "";
}

// Function to set the status for Button 2
function setStatus2Active() {
    status2Active = !status2Active;
    if (status2Active) {
        setStatus1Inactive();
      const customMessage = `
      <p><b>Committee Member</b><br />
                            SESA Student Society, University of Kelaniya<br/>
                            Jul 2022 - Present
                          </p> 
                          <br/><p><b>Committee Member</b><br />
                          ZPM National Movement, University of Kelaniya<br/>
                          Jul 2022 - Present
                          
                          </p>
                          <br/><p><b>Team Player</b><br />
                            VolleyBall Team, University of Kelaniya<br/>
                          Jul 2022 - Present
                          </p>
      `;
      status2Element.innerHTML = customMessage;
    } else {
      status2Element.innerHTML = "";
    }
}

function setStatus2Inactive() {
  status2Element.textContent = "";
}

// Add event listeners to reset status using right-click (contextmenu)
document.getElementById("togglebtn1").addEventListener("contextmenu", function (e) {
  e.preventDefault();
  setStatus1Inactive();
  setStatus2Inactive();
});

document.getElementById("togglebtn2").addEventListener("contextmenu", function (e) {
  e.preventDefault();
  setStatus2Inactive();
  setStatus1Inactive();
});

// let circularProgress = document.querySelector(".circular-progress"),
//     progressValue = document.querySelector(".progress-value");

// let progressStartValue = 0,
//     progressEndVAlue = 30,
//     speed = 100;

// let progress = setInterval(()=> {
//   progressStartValue++;

//   progressValue.textContent = `${progressStartValue}%`
//   circularProgress.style.background = `conic-gradient(#0ef ${progressStartValue * 3.6}deg, #ededed 0deg)`

//   if(progressStartValue==progressEndVAlue){
//     clearInterval(progress);
//   }
// }, speed)

document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll(".header .navbar a");

  navbarLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      // Remove 'active' class from all links
      navbarLinks.forEach(link => link.classList.remove("active"));
      
      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });
};

// Detect when a section comes into view
// const skillsSections = document.getElementById('skills');
// const progressBars = document.querySelectorAll('.skill-bar');

// function showProgress(){
//   progressBars.forEach(progressBar=> {
//     const value = progressBar.dataset.progress;
//     progressBar.style.opacity = 1;
//     progressBar.style.width = `${value}%`;
//   });
// }

// function hideProgress(){
//   progressBars.forEach(p=> {
//     p.style.opacity = 0;
//     p.style.width =0;
//   });
// }

// window.addEventListener('scroll',()=> {
//   const sectionPos = skillsSections.getBoundingClientRect().top;
//   const screenPos = window.innerHeight/2;

//   if(sectionPos < screenPos){
//     showProgress();
//   }else{
//     hideProgress();
//   }
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbxQEdApm7tEhaFkcVQwlZjZv8N5oaKHPtkb0wHTEwRrI3iwtC8Akvezap5KsULzBhzP1A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
