document.getElementById("show-toast").addEventListener("click", () => {
  const toast = document.getElementById("toast-container");

  toast.classList.remove("hide", "hidden");

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 1500);

  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("hide");
  }, 2000);
});

document.getElementById("show-sheet").addEventListener("click", () => {
  const sheet = document.getElementById("sheet-container");
  const overlay = document.getElementById("sheet-overlay");

  setTimeout(() => {
    sheet.classList.add("show");
    overlay.classList.add("show");
  }, 10);

  overlay.addEventListener("click", () => {
    sheet.classList.remove("show");
    overlay.classList.remove("show");
  });
});
