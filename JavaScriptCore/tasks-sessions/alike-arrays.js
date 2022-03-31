/*
Подобни масиви
В школата по програмиране на Слончето Лони вече учат за масиви. Слончето смята, че два масива от числа са подобни, ако съдържат едни и същи числа, без да се броят повторенията. То иска да може лесно да проверява дали два масива са подобни, но все още му е трудно да напише програма за това. Помогнете му като напишете програма arrays, която проверява дали два масива са подобни.

Вход
От първия ред на стандартния вход се въвежда цяло число n – броя на елементите на първия масив. От втория ред на стандартния вход, разделени с интервали се въвеждат n цели числа – елементите на първия масив. От третия ред на стандартния вход се въвежда цяло число m – броя на елементите на втория масив. От четвъртия ред на стандартния вход, разделени с интервали, се въвеждат m цели числа – елементите на втория масив.

Изход
Ако масивите са подобни, на един ред на стандартния изход програмата трябва да изведе броя на числата, от които са съставени двата масива, без повторениията. Ако масивите не са подобни, на един ред на стандартния изход се извеждат, отделени с интервали, всички числа от първия масив, които не се съдържат във втория, подредени във възходящ ред.

Ограничения
1 ≤ n ≤ 1000;

1 ≤ m ≤ 1000;

1 ≤ елементите на масивите ≤ 1000; 
*/


let input = ['5', 
    '6 1 3 2 5', 
    '6', 
    '4 1 7 9 2 4']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let lengthArrOne = +gets();
let arrOne = gets().split(' ').map(Number);

let lengthArrTwo = +gets();
let arrTwo = gets().split(' ').map(Number);
let inclusion= 0;
let diff = []
let areEqual

let noDuplicatesOne = [...new Set(arrOne)];
let noDuplicatesTwo = [...new Set(arrTwo)]


for(let i = 0; i< noDuplicatesOne.length; i++){
    if(noDuplicatesOne.includes(noDuplicatesTwo[i])){
        inclusion++
    }
}
   
for(let item of arrOne){
    if(!arrTwo.includes(item)){
        diff.push(item);
    }
}

   
if(inclusion === noDuplicatesOne.length){
    console.log(inclusion)
}else{
    diff= diff.sort((a,b)=> a-b)
    let uniqueDiff = [...new Set(diff)]
    print(uniqueDiff.join(' '))
}