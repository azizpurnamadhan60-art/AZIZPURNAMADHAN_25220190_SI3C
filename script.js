const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuButton = document.getElementById("menuButton");

// Menutup menu
function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

// Membuka menu
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", closeMenu);

// Navigasi sidebar
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((item) => item.classList.remove("active"));

    link.classList.add("active");

    closeMenu();

    if (link.textContent.includes("Sign Out")) {
      alert("Anda telah memilih Sign Out.");
    }
  });
});

// Fitur pencarian
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  document
    .querySelectorAll(".document-row, .activity-item, .progress-item")
    .forEach((item) => {
      item.style.display = item.textContent.toLowerCase().includes(query)
        ? ""
        : "none";
    });
});

// DATA MAHASISWA
const student = {
  name: "AZIZ PURNAMADHAN",
  className: "SI-3C",
  initials: "NM",
};

// Menampilkan identitas mahasiswa
document.getElementById("studentName").textContent = student.name;

document.getElementById("studentClass").textContent = student.className;
