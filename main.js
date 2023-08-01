var typed= new Typed(".text",{
    strings:["Frontend Developer" ,"YouTouber" ,  "Web Developer"],
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
      <br/><p><b>Diploma in Information Technology</b><br />ESOFT Metro Campus<br/>2019 - 2020</p>
      <br/><p><b>GCE A/L - Physical Science</b><br />Devi Balika Vidyalaya col-08<br/>2016 - 2019</p>
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
      <p><b>Vice Secretary</b><br />
                            IEEE Computer Society, University of Kelaniya<br/>
                            Jul 2022 - Present
                          </p> 
                          <br/><p><b>Executive Committee Member</b><br />
                          IEEE WIE Student Branch Affinity Group, University of Kelaniya<br/>
                          Jul 2022 - Present
                          
                          </p>
                          <br/><p><b>Ambassador</b><br />
                            IEEE Xtreme, University of Kelaniya<br/>
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




// function toggleMenu() {
//     const menu = document.querySelector(".about-containers");
//     const icon = document.querySelector(".details-container");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
    
//   }
  
//   function myFunction1() {
//     var x = document.getElementById("details-container active");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
   
//   }
  
//   function myFunction2() {
//     var x = document.getElementById("details-container");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
    
//   }

//   Event.currentTarget.classList.add("about-container");
