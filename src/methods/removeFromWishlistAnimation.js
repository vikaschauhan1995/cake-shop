

export function removeFromWishlistAnimation() {
  const element = document.createElement('div');
  const container = document.querySelector("#removeBookmarkContainer");
  element.innerHTML = "- 1";
  element.style.marginTop = "0px";
  container.appendChild(element);
  setTimeout(() => {
    element.style.marginTop = '30px';
    setTimeout(() => {
      container.removeChild(element);
    }, 400);
  }, 200);
}