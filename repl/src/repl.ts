import isIdle from "../../app/src/isIdle"
//const testElem = document.querySelector("#test")

const isScrollIdle = isIdle()

document.body.addEventListener("scroll", () => {
  isScrollIdle.stillActive()
})
