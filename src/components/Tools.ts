export function ScrollTo(selector: string) {
  let anchor: HTMLAnchorElement | null = document.querySelector(selector)

  if(!anchor) return

  window.location.hash = selector

  window.scrollTo({
    left: 0,
    top: anchor.offsetTop,
    behavior: "smooth"
  })
}
