//1. Напишите функцию, которая возвращает последнюю цифру заданного числа, вместо цифры на выходе отобразить слово.
// К примеру: 128 -> «восемь»

var m = 128;
var n = String(m).split("");
var end = +n[n.length-1];
alert(end);
switch (end){
    case 1:
       alert('один');
        break;
    case 2:
        alert ('два');
        break;
    case 3:
        alert ('три');
        break;
    case 4:
        alert ('четыре');
        break;
    case 5:
        alert ('пять');
        break;
    case 6:
        alert ('шесть');
        break;
    case 7:
        alert ('семь');
        break;
    case 8:
        alert ('восемь');
        break;
    case 9:
        alert ('девять');
        break;
    case 0:
        alert ('ноль');
        break;
    default:
        alert('не число')
}


//2. Напишите функцию, которая меняет цифры или слова в обратном порядке.
// Пример: 1024 -> 4201 или Английский -> йиксйилгнА.

var word = 'Olya';
function reverse (str) {
    return str.split('').reverse().join('');
}
alert(reverse(word));

//3.Создать функцию - расширение, которая будет на входе принимать два объекта
// (objA и objB) и объединять их в один (objC)

var objA = {name: 'Nikol', year: 1995, likeanimal: 'parrot'};
var objB = {country: 'Canada', city: 'Toronto'};
var objC = Object.assign({},objA, objB);
console.log(objC);

//4. Напишите функцию, которая найдет самого молодого человека в определенном массиве людей и выведет результат
// в виде ФИO. У каждого человека должны быть firstName, lastName и age

var people = [
{firstName: "Валя", lastName: "Иванова", age: 20},
{firstName: "Оля", lastName: "Петрова", age: 16},
{firstName: "Сергей", lastName: "Сидоров", age: 25},
{firstName: "Женя", lastName: "Ситников", age: 18}
];

var local_min = Infinity;
var index_min = Infinity;
for (i=0; i<people.length; i++) {
    if (people[i].age < local_min) {
    local_min = people[i].age;
    index_min = i;
    }
}
alert (people[index_min].firstName+' '+people[index_min].lastName);


console.log();

//5. Напишите функцию, которая группирует массив людей по первой букве имени и возвращает группы как объект JavaScript.
// Желательно без использования циклов.

var names = ['Olia', 'Oksana', 'Katya', 'Masha', 'Dasha', 'Yana', 'Alisa', 'Galina', 'Zina', 'Natasha', 'Diana', 'Maya'];

var startsWithA = names.filter((name) => name.startsWith("A"));
var startsWithB = names.filter((name) => name.startsWith("B"));
var startsWithC = names.filter((name) => name.startsWith("C"));
var startsWithD = names.filter((name) => name.startsWith("D"));
var startsWithE = names.filter((name) => name.startsWith("E"));
var startsWithF = names.filter((name) => name.startsWith("F"));
var startsWithG = names.filter((name) => name.startsWith("G"));
var startsWithH = names.filter((name) => name.startsWith("H"));
var startsWithI = names.filter((name) => name.startsWith("I"));
var startsWithJ = names.filter((name) => name.startsWith("J"));
var startsWithK = names.filter((name) => name.startsWith("K"));
var startsWithL = names.filter((name) => name.startsWith("L"));
var startsWithM = names.filter((name) => name.startsWith("M"));
var startsWithN = names.filter((name) => name.startsWith("N"));
var startsWithO = names.filter((name) => name.startsWith("O"));
var startsWithP = names.filter((name) => name.startsWith("P"));
var startsWithQ = names.filter((name) => name.startsWith("Q"));
var startsWithR = names.filter((name) => name.startsWith("R"));
var startsWithS = names.filter((name) => name.startsWith("S"));
var startsWithT = names.filter((name) => name.startsWith("T"));
var startsWithU = names.filter((name) => name.startsWith("U"));
var startsWithV = names.filter((name) => name.startsWith("V"));
var startsWithW = names.filter((name) => name.startsWith("W"));
var startsWithX = names.filter((name) => name.startsWith("X"));
var startsWithY = names.filter((name) => name.startsWith("Y"));
var startsWithZ = names.filter((name) => name.startsWith("Z"));
console.log(startsWithA);
console.log(startsWithB);
console.log(startsWithC);
console.log(startsWithD);
console.log(startsWithE);
console.log(startsWithF);
console.log(startsWithG);
console.log(startsWithH);
console.log(startsWithI);
console.log(startsWithJ);
console.log(startsWithK);
console.log(startsWithL);
console.log(startsWithM);
console.log(startsWithN);
console.log(startsWithO);
console.log(startsWithP);
console.log(startsWithQ);
console.log(startsWithR);
console.log(startsWithS);
console.log(startsWithT);
console.log(startsWithU);
console.log(startsWithV);
console.log(startsWithW);
console.log(startsWithX);
console.log(startsWithY);
console.log(startsWithZ);



//6. Создать функцию конструктор для товара, в котором должны быть свойства, методы и скрытые параметры (маржа и она
// может быть разной в зависимости от типа товара).

function Items (name, type, price, cena) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.cena = cena;
    var marja = price - cena;
    this.class = function () {
        console.log(this.name+', '+this.type+', '+this.price);
         }
}


//7. Создать функцию для инициализации плеера, в которой в качестве аргумента будет приходить опции плеера, другой
// аргумент передает тип устройства (desktop, laptop, tablet, mobile), где в зависимости от типа будут передаваться
// размеры плеера.

function pleer (option, type) {
this.option = option;
this.type = type;
switch (type){
    case 'desktop':
    this.size = 'big';
    break;
    case 'laptop':
        this.size = 'medium';
        break;
    case 'tablet':
        this.size = 'small';
        break;
    case 'mobile':
        this.size = 'tiny';
        break;
}
this.pleerr = function () {
    console.log(this.option+', '+this.type+', '+this.size);
}
}
var desktop1 = new pleer('Dell', 'desktop');
var laptop1 = new pleer('Lenovo', 'laptop');
var tablet1 = new pleer ('LG', 'tablet');
var mobile1 = new pleer('HTC', 'mobile');

desktop1.pleerr();
laptop1.pleerr();
tablet1.pleerr();
mobile1.pleerr();



