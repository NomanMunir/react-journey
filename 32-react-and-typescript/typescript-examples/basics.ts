
/// complex types:

//array:

let hobbies : string[];

hobbies = ["hello", "world"];

let person: {
    name: string,
    age: number
};

person = {
    name: 'Max',
    age: 32, 
}

let people: {
    name: string,
    age: number
}[];

people = [{
    name: 'Max',
    age: 32, 
}, 
{
    name: 'Nauman',
    age: 32, 
}]


// union type and type inference

let course : string| number = "complete react course";
course = 12312;

// function and type

function add (a: number, b: number)
{
    return a+b;
}


// Generics

function insertAtBeginning(array:any[], value:any)
{
    const newArray = [value, ...array]
    return newArray;
}

const demoArr = [1, 2, 3];

const updatedArr = insertAtBeginning(demoArr, 0);