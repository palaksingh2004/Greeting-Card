 // Open the envelope after a few seconds or on click
 setTimeout(() => {
  document.querySelector('.envelope').classList.add('open');
}, 1000);
function showSurprise() {
  // Navigate to your rose petal heart page (e.g., heart.html)
  window.location.href = "greeting.html";
}