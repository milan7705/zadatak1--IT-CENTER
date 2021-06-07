

//handlick click function and calling the array calculation 'candyCrush' function
function handleClick()
 {
     let inputField = document.getElementById("inputNb").value;
     let arrOfBeers = inputField.toString().split(',').map(x => +x)
     document.getElementById("finalValue").innerHTML = candyCrush(arrOfBeers, 0);
 }

 //
function candyCrush(arr, index) {
    //keeping immutability I am mapping the provided arr into a new one, which will recursively be shorter by one set of three chugged beers :)
    let newArr = [...arr];
    //condition for exiting recursion
    if (newArr.length < 3) {
        return index;
    } else {
        for (let i = 0; i < newArr.length + 1; i++) {
            //condition that checks if three adjacent elements of the provided array are equal to one another
            if (newArr[i] === newArr[i + 1] && newArr[i + 1] === newArr[i + 2]) {
                newArr.splice(i, 3)
                index++
                //long as there is at least one set of 3 adjacent and equal elements the function calls itself and repeats the process, until there are none left
                //meanwile the index keeps track of how many times over this process took place 
                return candyCrush(newArr, index)
            }
        }
    }
}