const colors = ["#f6d35f", "#f6759f", "#d06ef3", "#837af6", "#4eb8d2"];

document.firstElementChild.style.setProperty(
  "--primary",
  colors[Math.floor(Math.random() * colors.length)]
);
