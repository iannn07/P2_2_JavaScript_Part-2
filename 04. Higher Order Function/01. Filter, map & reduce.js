// Filter
console.table("Filter");
const arr_filter = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

// If you're using for, it'll looked like this
console.log("Using for loop");
const for_arr_filter = [];
for (let i = 0; i < arr_filter.length; i++) {
    if (arr_filter[i] > 0) {
        for_arr_filter.push(arr_filter[i]);
    }
}
console.table(for_arr_filter);

// If you're using filter, it'll looked like this
console.log("Using HOF");
const filter_arr_filter = arr_filter.filter((num) => num > 0);
console.table(filter_arr_filter);

// Map
console.table("\nMap");
const arr_map = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

// If you're using for, it'll looked like this
console.log("Using for loop");
const for_arr_map = [];
for (let i = 0; i < arr_map.length; i++) {
    for_arr_map.push(arr_map[i] * 2);
}
console.table(for_arr_map);

// If you're using map, it'll looked like this
console.log("Using HOF");
const map_arr_map = arr_map.map((num) => num * 2);
console.table(map_arr_map);

// Reduce
console.table("\nReduce");
const arr_reduce = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

// Sum of all numbers
const sum = arr_reduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.table(sum);

// Chaining method
console.log("\nChaining method");
const chaining = arr_reduce
    .filter((num) => num > 0)
    .map((num) => num * 2);
console.table(chaining);