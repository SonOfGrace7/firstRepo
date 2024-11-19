intro = "Hello world II ";
console.log("HELLO WORLD II");
// alert("Hello world II");
// document.write("Hello world II dSOUOUNAVOUNOA");
// document.getElementById("second").innerHTML = "Hello World II jhoufhciuc";



myName = "Kay kay xp";
myName = "kamsi ugwu";

const mylikes = " be very wealthy and healthy";

let shop = [
    "shirts",
    "trousers",
    ["polo", "baggi", "shorts"],
    "inners",
    "babbies",
];

console.log(shop[2][0])


let fruits =["Banana", "Orange", "Apple","Mango"];


fruits.push("cashew");
fruits.push(`cova`);
// fruits.pop();
// fruits.pop();

// fruits.shift();
fruits.unshift("pawpaw");
delete fruits[0];


let arrJoin = fruits;

console.log(arrJoin);

const myGirls =["joy", "lone"];
const myBoys = ["Emil","Tobias" ,"linus"];
let myKids = myBoys.concat(myGirls, fruits);
myKids = myKids.join("... ");
console.log(myBoys);
fruits.copyWithin(2, 1);
console.log(myKids);



// c//onst myArr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// //];
// c//onst newArr = myArr.flat();
// //console.log(newArr);


fruits = ["Banana", "Orange", "Apple","Mangonn"];
let myfruit =fruits.slice(1, 4 );
console.log(fruits);
console.log(myfruit)

// fruits.sort()
//console.log(fruits)

let sorted = fruits.toSorted();
console.log(sorted)

const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b); for ascending order call back 
// points.sort((a, b) => b - a); for descending order
points.sort((a, b) => a - b);
console.log(points.at(-2));
console.log(Math.max.apply(null, points));

cars = [
    { type: "Volvo", year: 2016},
    { type: "Saab", year: 2001},
    { type: "BNW", year: 2010},
];
 
cars.sort((a, b) => a - b);
console.log(cars);

 let changed = []
points.forEach((x, inx, arr) => {
    changed.push((x + 20));
});

// console.log(changed); 

// points.map((x, idx, arr) => {
//    changed.push((x += idx));
// });

console.log(changed);
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);

let point1 = [40, 100, 1, 5, 25, 10];

let lessNum = point1.filter((x) => x > 25);
console.log(lessNum);

let finalResult = point1.reduce((result, value) => result + value);

let bool = point1.some((value) => value > 50);

console.log(bool);


let strings = "ada, obi, nneka, ekene";

let names = Array.from(strings);

const keys = point1.keys();
console.log(keys);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log([year]);
console.log([...q1, "ap", "may"]);
