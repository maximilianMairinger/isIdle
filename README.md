# Is idle

General purpose idle detection. Timeout based.

> Please note that Is idle is currently under development and not yet suited for production

## Installation

```shell
 $ npm i is-idle
```

## Usage

```ts
import isIdle from "is-idle"

// setup
const isScrollIdle = isIdle()
document.body.addEventListener("scroll", () => {
  isScrollIdle.stillActive()
})

// use
isScrollIdle.get((isIdle) => {
  if (isIdle) console.log("Is idle")
  else console.log("Is not idle")
})
```

Uses [josm](https://github.com/maximilianMairinger/josm) `Data` (as return value) for subscription handeling. For advanced usage read respective doc.

## Contribute

All feedback is appreciated. Create a pull request or write an issue.
