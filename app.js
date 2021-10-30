var images = [
  "image 01.png",
  "image 02.png",
  "image 03.png",
  "image 04.png",
  "image 05.png",
  "image 06.png",
  "image 07.png",
  "image 08.png",
];

let i = -1;

var zoom = document.getElementById("defImage");

function slideimagepre() {
    i = i + 1;
    if (i <= images.length) {
      if (i == images.length) {
        i = 0;
      }
    }
      zoom.src=images[i];
}

function slideimagenext() {
i = i - 1;
  if (i <= images.length) {
    if (i == -1) {
        console.log(i)
      index = images.length-1;
      i = index;
    }
 

      }    zoom.src = images[i];

}
