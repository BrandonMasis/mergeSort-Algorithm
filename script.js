function fibs(n) {
    var arr = [0, 1];
    for (var i = 0; i < n; i++) {
        arr[i + 2] = arr[i + 1] + arr[i];
    }
    return arr.slice(0, n);
}
function fibsRec(n) {
    if (n < 2) {
        return n;
    }
    else {
        return fibsRec(n - 1) + fibsRec(n - 2);
    }
}
function merge(leftHalf, rightHalf) {
    var mergedArray = [];
    var leftCount = 0, rightCount = 0;
    while (leftCount < leftHalf.length && rightCount < rightHalf.length) {
        if (leftHalf[leftCount] < rightHalf[rightCount]) {
            mergedArray.push(leftHalf[leftCount]);
            leftCount++;
        }
        else {
            mergedArray.push(rightHalf[rightCount]);
            rightCount++;
        }
    }
    if (leftHalf[leftCount]) {
        var unaddedElements = leftHalf.slice(leftCount);
        mergedArray.push.apply(mergedArray, unaddedElements);
    }
    else {
        var unaddedElements = rightHalf.slice(rightCount);
        mergedArray.push.apply(mergedArray, unaddedElements);
    }
    return mergedArray;
}
function mergeSort(arr) {
    var middleIndex = Math.floor(arr.length / 2);
    var leftHalf = [arr.slice().splice(0, middleIndex)];
    var rightHalf = [arr.slice().splice(leftHalf.length)];
    if (arr.length < 2) {
        return arr;
    }
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}
// Notes for myself while doing this:
// If it cannot be split it must be merge
//Select the minimun of the two
//Add selected to the sorted array
//For mergin I need newArr, arrA, arrB. Comparing the item[0] of both arr, adding the minimun to the newArr, and removin it from arrA, to compare again
// Well that didn't work because I need to add the remaning items as well, so it's better using counts
