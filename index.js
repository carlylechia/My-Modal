const showModalBtn = document.querySelector(".show-modal-btn");

const closeModalBtn = document.querySelector("#close-modal-btn");

const modalWrapper = document.querySelector(".modal-wrapper");

showModalBtn.addEventListener("click", () => {
  modalWrapper.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", () => {
  modalWrapper.classList.remove("show-modal");
});

document.addEventListener("click", (e) => {
  if (e.target.contains(modalWrapper)) {
    modalWrapper.classList.remove("show-modal");
  }
});