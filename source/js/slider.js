document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector(".explanation");

  if (slider) {
    const explanationSlider = slider.querySelector(".explanation__slider");
    const explanationScale = slider.querySelector(".explanation__scale");
    const imageAfter = slider.querySelector(".explanation__image-after");
    const imageBefore = slider.querySelector(".explanation__image-before");
  }

  if (window.matchMedia('(max-width: 767px)').matches) {
    setMobileSlider();
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    setTabletSlider();
  }

  window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setMobileSlider();
    }

    if (window.matchMedia('(min-width: 768px)').matches) {
      setTabletSlider();
    }
  });

  function setMobileSlider() {

    // при движении кнопки должно меняться explanation Scale
    explanationScale.oninput = () => {
    // должен перерисовываться clip (второе число) в before: rect(0, 278px, 560px, 0);
    // должен перерисовываться clip (4 числов) в after clip: rect(0, 560px, 560px, 278px);
      let rectBefore = (560 / 100 ) * explanationScale.value;
      let rectAfter = 560 - rectBefore;

    // также должно меняться положение ползунка по оси X
    // нужно присвоить кнопке свойство лефт равное процентам

    explanationSlider.left = explanationScale.value

    imageBefore.style.clip = "rect(0px 75px 75px 0px)";
    // это свойство должно быть расписано через формулу, которая со string взаимодействует.

  }

});
