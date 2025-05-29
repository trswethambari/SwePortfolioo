const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");
const downloadBtn = document.getElementById("downloadBtn");

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src;
    downloadBtn.href = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
