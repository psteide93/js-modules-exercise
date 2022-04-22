import { difference } from "lodash"

export default function differenceDisplayer(firstArray, secondArray){
    const differenceOfArrays = difference(firstArray, secondArray)
    return `The difference between ${firstArray} and ${secondArray} is ${differenceOfArrays}`

}
