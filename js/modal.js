function openModal(element) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var imgElement = element.querySelector("img");

  if (imgElement) {
    modalImg.src = imgElement.src; // Set the source of the modal image
    modal.style.display = "block";
  }
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
