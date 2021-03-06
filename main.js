const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const galleryBtns = document.querySelectorAll('.gallery-btn');

/********************************* HEADER *********************************/

document.querySelector(".hamburger").addEventListener("click", () => {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    close.classList.add("active")
  }
});

document.querySelector(".close").addEventListener("click", () => {
  if (close.classList.contains("active")) {
    close.classList.remove("active");
    menu.classList.remove("active")
  }
});

/********************************* LANDING PAGE *********************************/


if (document.querySelector("#landing")) {
  document.querySelector(".landing-image").addEventListener("click", () => {
    window.location.href = 'order.html'
  })
}

/********************************* ORDER PAGE *********************************/

if (document.querySelector("#order")) {
  let body = document.querySelector("body");
  let modal = document.querySelector(".modal");

  window.setTimeout(() => {
   showModal();
  }, 5000);

  const hideModal = () => {
   modal.classList.remove("active")
   body.classList.remove("modal-active")
  }

  const showModal = () => {
    modal.classList.add("active")
    body.classList.add("modal-active")
  }

  document.querySelector(".modal-button").addEventListener("click", () => {
    if (document.querySelector(".modal-email-field").value) {
      document.querySelector(".modal-content").innerHTML =
      `<h3>Your coupon code is <span class='yellow'>cakelovers</span></h3>`
      ocument.querySelector(".modal-content").innerHTML =
      `<i tabindex="0" class="modal-close fas fa-times"></i>`
      document.querySelector(".modal-close").addEventListener("click", () => {
        hideModal()
      })
    }
  })

  document.querySelector(".modal-close").addEventListener("click", () => {
    hideModal()
  })

  const validateForm = () => {
    alert("Thanks for ordering a cake with us!")
  }

  document.querySelector("form").addEventListener("submit", () => {
    validateForm()
  })
}

/********************************* ACCESSIBILITY FUNCTIONALITY *********************************/
document.querySelector('.hamburger').addEventListener('keyup', () => {
  if (event.keyCode === 13) {
    menu.classList.add("active");
    close.classList.add("active")
  }
});

galleryBtns.forEach(btn => {
  btn.addEventListener('keyup', () => {
    if(event.keyCode === 13) {
      window.location.href = 'order.html';
    }
  });
});

close.addEventListener('keyup', () => {
  if (event.keyCode === 13) {
    menu.classList.remove("active");
    close.classList.remove("active")
  }
})

document.querySelector(".modal-close").addEventListener('keyup', () => {
  let modal = document.querySelector(".modal");
  let body = document.querySelector("body");
  if (event.keyCode === 13) {
    modal.classList.remove("active")
    body.classList.remove("modal-active")
  }
});
