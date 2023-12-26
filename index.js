function findMinAndRemove(array){
    let arrayLength = array.length
    let minimum = null;
    let minimumIndex;

    for (let i = 0; i < arrayLength; i++) {
        if (minimum === null) {
            minimum = array[i];
            minimumIndex = i
        }
        else {
            if (array[i] < minimum) {
                minimum = array[i]
                minimumIndex = i
            }
        }
    }

    array.splice(minimumIndex, 1)
    return minimum
}

function selectionSort(array){
    let arrayLength = array.length
    let sortedArray = []

    while (sortedArray.length < arrayLength) {
        sortedArray.push(findMinAndRemove(array))
    }

    return sortedArray
}
