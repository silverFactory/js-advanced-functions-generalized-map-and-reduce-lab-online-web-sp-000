function map(array, callback){
  let newArray = []
  for (const element of array){
    newArray.push(callback(element))
  }
  return newArray
}
// function reduce(array, callback, startingPoint = 0){
//   let total = startingPoint
//   let truthiness
//   for (const element of array){
//     if ((callback(element, total)) === true || (callback(element, total)) === false){
//       truthiness = callback(element, total)
//     } else {
//       total = callback(element, total)
//     }
//  }
//  if (total > 0){
//    return total
//  } else {
//    return truthiness
//  }
// }
function reduce(array, callback, startingPoint = 0){
  let total = startingPoint
  if (typeof callback(1, true) == "boolean"){
    total = true
  }
  for (const element of array){
    total = callback(element, total)
  }
  return total
}
