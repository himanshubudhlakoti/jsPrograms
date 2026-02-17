const arr = [1, 2, 3, 4, 5, 1, 3, 4, 11];

function findUniqueNumber(arr) {

    return [...new Set(arr)];
}


function findUniqueNumber2(arr) {

    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }

    }

    return uniqueArr;
}


function findUniqueNumber3(arr) {

    const result = arr.filter((item) => (item > 4))
    console.log("filter result", result)
}

function reduceFn(arr) {

    return arr.reduce((accu, cuurentvalue, currentIndex, fullInputarray) => {

        console.log("unique currentIndex", currentIndex, "--->", fullInputarray)

        return accu = accu + 1;
    }, 0);
}

function reduceFn2(arr) {

    return arr.reduce((accu, cuurentvalue, currentIndex, fullInputarray) => {


        accu.push(cuurentvalue);

        return accu;
    }, []);
}

function findFn(arr) {

    return arr.find((item, index) => item == 100)
}

function someFn(arr) {


    return arr.some((item, index, full) => {

        return item == 11

    })
}

function includesFn(arr) {


    return arr.includes(2,1)
}




console.log("unique array", findUniqueNumber(arr))
console.log("common array", findUniqueNumber2(arr))
console.log("common array", findUniqueNumber3(arr))
// console.log("reduceFn", reduceFn(arr))
console.log("findFn", findFn(arr))
console.log("someFn", someFn(arr))
console.log("includesFn", includesFn(arr))
console.log("includesFn", includesFn(arr))
console.log("includesFn", includesFn(arr))