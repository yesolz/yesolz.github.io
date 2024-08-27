document.addEventListener("DOMContentLoaded", function () {
  console.log("Document Loaded"); // 추가

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

  // 스크롤 애니메이션을 위한 코드 추가
  const animatedElements = document.querySelectorAll(".animate");

  function checkVisibility() {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add("visible");
        console.log("Element visible", element); // 추가
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // 페이지 로드 시 가시성을 체크
});
