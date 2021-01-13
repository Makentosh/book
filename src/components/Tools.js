export function ScrollTo(selector) {
  let anchor = document.querySelector(selector)

  if(!anchor) return

  window.location.hash = selector

  window.scrollTo({
    left: 0,
    top: anchor.offsetTop,
    behavior: "smooth"
  })



}
