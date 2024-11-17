function makeArray(firstArray, secondArray, maxLength){
    let totalArrList = (firstArray.concat(secondArray));
    
    if (totalArrList.length > maxLength){
        totalArrList =  totalArrList.slice(0, maxLength);
        return totalArrList;
    } 
    else if (totalArrList.length <= maxLength){
        return totalArrList;
    }

}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));