/////////////
let galleryxd = document.querySelector(".gallery");
let back = document.querySelector("#BACK");
let next = document.querySelector("#NEXT");
let img = document.querySelectorAll(".gallery div");
let imgindex = img.length;
let currentslide = 1;
console.log(imgindex);

galleryxd.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  galleryxd.scrollLeft += evt.deltaY;
});

back.addEventListener("click", function (sus) {
  galleryxd.scrollLeft += 1000;
});
next.addEventListener("click", function (sus) {
  galleryxd.scrollLeft -= 1000;
});

// let ul = document.createElement("ul");
// ul.setAttribute("id", "ss-ul");

// for (let i = 1; i <= imgindex; i++) {
//   let lithing = document.createElement("li");
//   lithing.setAttribute("data-index", i);
//   lithing.appendChild(document.createTextNode(i));
//   ul.appendChild(lithing);
// }
// document.querySelector(".gallerybig").appendChild(ul);
// let newul = document.getElementById("ss-ul");
// let bullets = Array.from(document.querySelectorAll("#ss-ul li"));
// console.log(bullets);
// ////
// for (let ii = 0; ii < bullets.length; ii++) {
//   bullets[ii].onclick = function () {
//     currentslide = parseInt(this.getAttribute("data-index"));
//   };
// }
