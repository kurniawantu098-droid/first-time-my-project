// script.js - tombol print sederhana

const printBtn = document.getElementById("printBtn");

if (printBtn) {
  printBtn.addEventListener("click", () => {
    window.print();
  });
}

console.log("Portofolio PPKn loaded.");
