// Closure

/*
It's simply an encapsulation between the parent and the child of a function
*/

function parent(){
    let dad = "Ian";
    function child(){
        return "My dad name is, " + dad;
    }
    console.log(child);
    console.dir(child);
    return child;
}

parent();

// Best Practice of closure is function factories
console.log("\nFunction Factories");
function outer(){
    return function (clothes){
        console.log("I love wearing " + clothes + " in my jacket");
    }
}

let jacket = outer();
console.dir(jacket);
jacket("T-Shirt");
jacket("Shirt")

// Another example of Function Factory
function invention(invention){
    return function (name){
        console.log(name + " has invented " + invention);
    }
}

let turingMachine = invention("Turing Machine");
let monalisa = invention("Monalisa");
let pi = invention("Pi");

turingMachine("Alan Turing");
monalisa("Leonardo da Vinci");
pi("Archimedes");

console.dir(turingMachine);
console.dir(monalisa);
console.dir(pi);

// Another implementation for closure - Private Method
let gauss_inventions = function (){
    // Private variable
    let author = "Carl Gauss"
    return function (invention){
        console.log(author + " has invented " + invention);
    }
}

let algebra = gauss_inventions();

algebra("Algebra")
console.log(gauss_inventions());

// Another example - This method is used to access the inner function directly
let maclaurin = (function (){
    let author = "Colin Maclaurin"
    return function (invention){
        console.log(author + " has invented " + invention);
    }
})();

maclaurin("Cramer's Paradox");
