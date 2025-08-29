const typing = document.querySelector(".typing");
const roles = ["Frontend Dev!", "Web Developer!", "UI Designer!"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = roles[index];
  
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typing.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);  // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;  // Move to next role
    setTimeout(type, 500);  // Pause before typing next word
  } else {
    setTimeout(type, 150);  // Continue typing/deleting
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  if(typing) type();
});
