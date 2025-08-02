const monthNameContainer = document.getElementById("month-div");
const dayNameContainer = document.getElementById("day-text-div");
const dayNumContainer = document.getElementById("day-num-div");
const yearContainer = document.getElementById("year-div");

const date = new Date();
const month = date.getMonth();
monthNameContainer.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameContainer.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumContainer.innerText = date.getDate();

yearContainer.innerText = date.getFullYear();