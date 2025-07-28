function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, subject, message }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("responseMsg").textContent = data.message;
      document.getElementById("contactForm").reset();
    })
    .catch((err) => {
      document.getElementById("responseMsg").textContent =
        "Something went wrong. Try again later.";
      console.error(err);
    });
});
