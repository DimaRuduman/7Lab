const capitals = ["Kyiv", "London", "Washington", "Paris", "Berlin", "Tokyo", "Ottawa", "Canberra", "Madrid", "Rome"];

function removeElement (array, item){
        let indexOfCapital = array.indexOf(item);
        if (indexOfCapital != -1){
            array.splice (indexOfCapital, 1)
        }
    return array
}

removeElement(capitals, "Tokyo");
console.log(capitals);


