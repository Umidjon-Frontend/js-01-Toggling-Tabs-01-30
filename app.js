const toggleNavs = document.querySelectorAll(".toggle__navWrap div");
const select = document.querySelector("select");
const selects = document.querySelectorAll("option");

toggleNavs.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    removeClassActive();
    toggle.classList.add("active");
    selects[index].selected = true;
  });
});

function removeClassActive() {
  toggleNavs.forEach((toggle, index) => {
    toggle.classList.remove("active");
    selects[index].selected = false;
  });
}

select.addEventListener("change", (e) => {
  if (select.value === "0") {
    removeClassActive();
    toggleNavs[0].classList.add("active");
    selects[0].selected = true;
  }
  if (select.value === "1") {
    removeClassActive();
    toggleNavs[1].classList.add("active");
    selects[1].selected = true;
  }
  if (select.value === "2") {
    removeClassActive();
    toggleNavs[2].classList.add("active");
    selects[2].selected = true;
  }
});
