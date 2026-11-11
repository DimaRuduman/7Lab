const laptops = ["MacBook", "ThinkPad", "Asus", "MacBook", "Dell", "Lenovo", "Asus", "Acer", "ThinkPad", "Dell"];

function unique(array) {
    const itemsOfLaptops = array.reduce((uniquArray, currentItem) => {
        if (uniquArray.indexOf(currentItem) === -1) {
            uniquArray.push(currentItem);
        }
        return uniquArray;
    }, []);
    return itemsOfLaptops;
}
console.log(unique(laptops));