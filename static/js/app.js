document.getElementById("cars").addEventListener("click", (ev) => {
  if (ev.target.classList.contains("more")) {
    const btn = ev.target;
    const desc = btn.parentElement.querySelector(".description");
    if (desc.style.display == "block") {
      desc.style.display = "none";
      btn.textContent = "Show more";
    } else {
      desc.style.display = "block";
      btn.textContent = "Hide";
    }
  }
});

// document.getElementById("cars").addEventListener("click", ({ target }) => {
//   if (target.classList.contains("more")) {
//     const desc = target.parentElement.querySelector(".description");
//     if (desc.style.display == "block") {
//       desc.style.display = "none";
//       target.textContent = "Show More";
//     } else {
//       desc.style.display = "block";
//       target.textContent = "Hide";
//     }
//   }
// });
