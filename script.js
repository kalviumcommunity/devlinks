// Copy profile link button — matches id in HTML and handles clipboard errors
const btn = document.getElementById("copy-btn");
if (btn && navigator.clipboard) {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      btn.textContent = "Copied!";
      // revert label after a short delay
      setTimeout(() => { btn.textContent = "Copy profile link"; }, 2000);
    } catch (err) {
      // Keep a helpful console message for failures (e.g., insecure context)
      console.error("Copy failed:", err);
    }
  });
}
