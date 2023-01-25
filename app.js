const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4.5 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-play";
    case "link":
      return "fa-regular fa-eye";
    default:
      return "fa-regular fa-hand-pointer"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}



function hideMenu() {
  let menuOpen = document.querySelector(".toggler").checked;

  if ((menuOpen = true)) {
    document.querySelector(".toggler").checked = false;
  }
}
window.addEventListener("scroll", hideMenu);



const links = document.querySelectorAll("a.text-link");
const checkbox = document.querySelector("input[type='checkbox']");

links.forEach(link => {
    link.addEventListener("click", function() {
        checkbox.checked = false;
    });
});




// animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }

  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// light - dark 

const toggle = document.getElementById('toggle');

toggle.addEventListener('change', () => {
  //change theme web
  document.body.classList.toggle('dark')
})


// mail js

// const contactForm = document.getElementById('contact-form'),
//       contactName = document.getElementById('name'),
//       contactEmail = document.getElementById('email'),
//       contactMessage = document.getElementById('message')
//       contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) => {
//   e.PreventDefault()

//   if (contactName.value === '' || contactEmail.value ==='' || contactMessage.value ==='') {
//       contactMessage.classList.remove('color-blue')
//       contactMessage.classList.add('color-red')

//       contactMessage.textContent = 'Write all the input file '

//   }else {
//     emailjs.sendForm('service_a1ji6zi','template_vy0q6zd','contact-form','XNZVZ-O94y44awfqe')
//       .then(() => {
//         contactMessagePop.classList.add('color-blue')
//         contactMessagePop.textContent = 'Message sent'

//         setTimeout(() => {
//           contactMessagePop.textContent = ''
//         }, 5000)
//       })
//   }
// }
// contactForm.addEventListener('submit', sendEmail)