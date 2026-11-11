const capitals = ["Kyiv", "London", "Washington", "Paris", "Berlin", "Tokyo", "Ottawa", "Canberra", "Madrid", "Rome"];

function removeElement (array, ...item){

    for (let i = 0; i < item.length; i++){
        let indexOfCapital = array.indexOf(item[i]);
            if (indexOfCapital != -1){
            array.splice (indexOfCapital, 1)
        }
    }
    return array
}

removeElement(capitals, "Tokyo", "Washington");
console.log(capitals);


