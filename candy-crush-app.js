let arr = [1, 3, 2, 2, 2, 3, 3, 1, 1];


function candyCrush(arr, index) {
    let newArr = [...arr];
    if (newArr.length < 3) {
    return index;
    } else {
    for (let i = 0; i < newArr.length + 1; i++) {
    if (newArr[i] === newArr[i + 1] && newArr[i + 1] === newArr[i + 2]) {
    newArr.splice(i, 3)
    index++
    return candyCrush(newArr, index)
    }
    }
    }
    }
    
    candyCrush(arr, 0)