const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];

function difference(array1, array2) {
    const result = array1.reduce((newArray, currentItem) => {
        if (array2.indexOf(currentItem) === -1) {
            newArray.push(currentItem);
        }
        return newArray;
    }, []);
    return result;
}
console.log(difference(array1, array2));