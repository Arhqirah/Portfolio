window.addEventListener("load", sidenVises);

function sidenVises() {
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#forside").classList.add("hide");
  document.querySelector("header").classList.add("hide");
  document.querySelector("footer").classList.add("hide");
  document.querySelector("main").classList.add("hide");
  document.querySelector("#starth1").classList.add("fade");
  document.querySelector("#start").addEventListener("animationend", visForside);
}

function visForside() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#forside").classList.remove("hide");
  document.querySelector("header").classList.remove("hide");
  document.querySelector("footer").classList.remove("hide");
  document.querySelector("main").classList.remove("hide");

  document.querySelector("header").classList.add("fadeUp");
  document.querySelector("#forside").classList.add("fadeUp");
  document.querySelector("footer").classList.add("fadeUp");
}
