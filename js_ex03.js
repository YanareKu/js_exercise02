
var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3",
    "33", "999", "9"];


var duplicate=[];

function returnDups(arr) {
    // Loops trhough array
    for(var i = 0;i < arr.length; i++) {
        // uses .lastIndexOf to find index of last occurance of arr[i]
        // if the index of last occurance does not match index of arr[i]
        if((arr.lastIndexOf(arr[i]) != i) &&

        // AND if arr[i] is not in the array duplicate (-1 = not found in array)
           (duplicate.indexOf(arr[i]) == -1)) {
            // add to array duplicate
            duplicate.push(arr[i]);
        }
    }
    return duplicate;
}

returnDups(classroomIds);