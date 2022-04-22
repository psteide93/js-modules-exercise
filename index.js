const arrayOne = [1, 2, 3]
const arrayTwo = [2, 3, 4]

import differenceDisplayer from "./utilities/difference"

const p = document.querySelector("#Result")
p.textContent = differenceDisplayer(arrayOne, arrayTwo)

