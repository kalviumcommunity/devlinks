const btn = document.getElementById("copy-btn");
if (btn) {
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href);
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy profile link";
    }, 2000);
  });
}

