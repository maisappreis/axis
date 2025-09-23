export function useMethodsUtils() {
  const makeLittleStars = () => {
    const container = document.getElementById("star-container");
    if (!container) return;

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // posição aleatória
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";

      // tamanho aleatório
      const size = Math.random() * 4 + 2;
      star.style.width = size + "px";
      star.style.height = size + "px";

      // delay aleatório da animação
      star.style.animationDelay = (Math.random() * 3) + "s";

      container.appendChild(star);
    }
  };

  const changeBackground = () => {
    const bg1 = document.querySelector(".bg1") as HTMLElement | null;
    const bg2 = document.querySelector(".bg2") as HTMLElement | null;;

    let showingBg1 = true;

    setInterval(() => {
      if(bg1 && bg2) {
        if (showingBg1) {
          bg1.style.opacity = "0";
          bg2.style.opacity = "1";
        } else {
          bg1.style.opacity = "1";
          bg2.style.opacity = "0";
        }
      }
      
      showingBg1 = !showingBg1;
    }, 3000); // Altera a cada 3 segundos
  };

  const confirmAttendance = () => {
    // Criação de links para WhatsApp: https://criar.wa.link/
    // `https://wa.me/${props.phone}?text=${encodeURIComponent(props.text)}`;
    window.open("https://wa.link/rgsqsq", "_blank");
  };


  const openMap = () => {
    window.open('https://maps.app.goo.gl/2YUDsPEY4ieYZr6j7', '_blank');
  };

  return {
    makeLittleStars,
    changeBackground,
    confirmAttendance,
    openMap
  };
};