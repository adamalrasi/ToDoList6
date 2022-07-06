const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  let p = document.createElement("p");
  p.textContent = input.value;
  container.appendChild(p);
  input.value = "";

  p.addEventListener("click", function () {
    // func = p.style.textDecoration
    //   ? (p.style.textDecoration = "none")
    //   : (p.style.textDecoration = "line-through");

    if (p.style.textDecoration == "line-through") {
      p.style.textDecoration = "none";
    } else {
      p.style.textDecoration = "line-through";
    }
  });

  p.addEventListener("dblclick", function () {
    let done = confirm("Are you sure?");
    if (done) p.textContent = "";
  });
});
