document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".portfolio");
  const popup = document.getElementById("socialPopup");

  contactBtn.addEventListener("click", () => {
    popup.classList.toggle("hidden");
  });

  // Optional: کلیک کردن لە دەرەوەی پەنجەرەیەک داخە
  window.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && !contactBtn.contains(e.target)) {
      popup.classList.add("hidden");
    }
  });
});
