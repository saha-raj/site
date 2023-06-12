//
// // WORKING VERSION BEFORE ADDING VIDEO
// function openModal(imgElement) {
//   var modal = document.getElementById("modal");
//   var modalImg = document.getElementById("img01");
//   var captionText = document.getElementById("popupcaption");  // Change the ID name here
//   modal.style.display = "block";
//   modalImg.src = imgElement.src;
//   captionText.innerHTML = imgElement.nextElementSibling.innerHTML; // Fetching caption from HTML
//
//   var span = document.getElementsByClassName("close")[0];
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
// }
//
// window.addEventListener("load", function() {
//   window.addEventListener("keyup", function(event) {
//     if (event.key === "Escape") {
//       var modal = document.getElementById("modal"); // Make sure the ID here matches the modal's ID in your HTML
//       modal.style.display = "none";
//     }
//   });
// });

function openModal(mediaElement) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("img01");
  var modalVid = document.getElementById("vid01");
  var captionText = document.getElementById("popupcaption");

  if (mediaElement.tagName === 'IMG') {
    modalImg.src = mediaElement.src;
    modalImg.style.display = "block";
    modalVid.style.display = "none";
  } else if (mediaElement.tagName === 'VIDEO') {
    modalVid.src = mediaElement.src;
    modalVid.style.display = "block";
    modalImg.style.display = "none";
  }

  modal.style.display = "block";
  captionText.innerHTML = mediaElement.nextElementSibling.innerHTML;

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
    modalVid.pause();
  }
}

window.addEventListener("load", function() {
  window.addEventListener("keyup", function(event) {
    if (event.key === "Escape") {
      var modal = document.getElementById("modal");
      var modalVid = document.getElementById("vid01");
      modal.style.display = "none";
      modalVid.pause();
    }
  });
});
