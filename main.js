function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

document.querySelectorAll("#navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "Hello!\nI'm Yaesol Choi";
  const typingSpeed = 100; // 타이핑 속도 (밀리초 단위)
  let index = 0;
  const typingTextElement = document.getElementById("typing-text");

  function type() {
    if (index < text.length) {
      if (text[index] === "\n") {
        typingTextElement.innerHTML += "<br>"; // 줄바꿈 처리
      } else {
        typingTextElement.innerHTML += text[index];
      }
      index++;
      setTimeout(type, typingSpeed);
    }
  }

  type();
});
