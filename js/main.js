document.addEventListener("DOMContentLoaded", function () {
    const text = "Welkom op de site van\nKeanodvs 👋";
    let index = 0;
  
    function type() {
        document.getElementById("typewriter").innerText = text.slice(0, index++);
        if (index <= text.length) {
            setTimeout(type, 100); // Voeg delay toe
        }
    }
    type();
  });
