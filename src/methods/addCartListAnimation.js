

export function addCartListAnimation(mouseX, mouseY) {
  const element = document.createElement('div');
  element.setAttribute('id', 'wishSquare');
  // .classList.add('wishlistBookmarkIcon');
  // element.style.backgroundColor = "red";
  element.style.position = "fixed";
  element.style.top = `${mouseY - 220}px`;
  element.style.left = `${mouseX - 80}px`;

  const cart = document.querySelector("#cartFortAwesomeIcon");
  // console.log("cart", cart.getBoundingClientRect().left);


  document.body.appendChild(element);
  setTimeout(() => {
    element.style.left = `${cart.getBoundingClientRect().left}px`;
    element.style.top = `${cart.getBoundingClientRect().top}px`;
    element.style.height = '30px';
    element.style.width = '30px';
    setTimeout(() => {
      document.body.removeChild(element);
    }, 400);
  }, 200)
}