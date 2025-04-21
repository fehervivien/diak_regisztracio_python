// JavaScript kód az űrlap validálásához
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("regForm");
  const feedback = document.getElementById("feedback");

    // Ellenőrizzük, hogy az űrlap létezik-e
  form.addEventListener("submit", function (event) {
    const nev = document.getElementById("nev").value.trim();
    const email = document.getElementById("email").value.trim();
    const szak = document.getElementById("szak").value.trim();

    // Ellenőrizzük, hogy a mezők ki vannak-e töltve
    if (!nev || !email || !szak) {
      // Ne küldje el az űrlapot
      event.preventDefault();
      feedback.textContent = "Kérlek, tölts ki minden mezőt!";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Küldés folyamatban...";
      feedback.style.color = "green";
    }
  });
});
