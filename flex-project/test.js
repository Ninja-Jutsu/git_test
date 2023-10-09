const array1 = [1994,2022,3005,2004,2065];
const array2 = ['ismail', 'hamza', 'abdo', 'Karim', 'vanessa']
const arrayOfObjects = [
    {fname: array2[0], age: array1[0], fullData: function(){
      return this.fname + ' ' + this.age;
    }},
    {name: array2[1], age: array1[1]},
    {name: array2[2], age: array1[2]},
    {name: array2[3], age: array1[3]},
    {name: array2[4], age: array1[4]},
]

console.log(arrayOfObjects[0].fullData());


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = array2.entries();
let newArray = []
for (let x of f) {
    newArray.push(x)
}

console.log(newArray[0][1])

