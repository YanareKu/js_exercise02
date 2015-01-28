// def fibonacci_set(max):
//     """Return list of fibonacci numbers going up to but not beyond max."""
//     if max > 1:
//         fib_list = [1]
//         current_fib = 1
//         while current_fib < max:
//             fib_list.append(current_fib)
//             current_fib = fib_list[-1] + fib_list[-2]
//         return fib_list
//     else:
//         return [1, 1]

// def is_even(n):
//     """Is number even?"""
//     return n % 2 == 0

// print sum(filter(is_even, fibonacci_set(4000000)))

function filter(a_function, a_array) {
    var filtered_array=[];
    for(var i=0; i<a_array.length; i++) {
        if (a_function(a_array[i]) === true) {
            filtered_array.push(a_array[i]);
        }
    }
    return filtered_array;
}

function sum(array) {
    var total = 0;
    for(var i=0; i<array.length; i++) {
        total += array[i];
    }
    return total;
}


function fibonacci_set(max) {
    if (max > 1) {
        var fib_array=[1];
        var current_fib=1;
        while (current_fib < max) {
            fib_array.push(current_fib);
            current_fib = fib_array[fib_array.length-1] + fib_array[fib_array.length-2];
        }
        return fib_array;
    } else {
        return [1, 1];
    }
}

function is_even(n) {
    return (n % 2 === 0);
}


var filt_arr = filter(is_even, fibonacci_set(4000000));

sum(filt_arr);



// new_list=[]
// def filter(a_funct, b_list):
//     for i in b_list:
//         if a_funct(i) == True:
//             new_list.append(i)


