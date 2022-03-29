// const course = {
//     name:'Music',
//     teacher:'Mr.Stoyan',
//     studentsCount:25,
//     weekDay:'Friday',
// }

// console.log(`${course.name} by ${course.teacher}. Every ${course.weekDay}, expected attendance: ${course.studentsCount}`)
// /**
//  * 
//  * @param {} courseName string
//  * @param {} teacherName string
//  * @param {} weekD string
//  * @param {} studesCount Number
//  */
// const createCourse = (courseName,teacherName,studentsCount,weekDay)=>{
// return {
//     name:courseName,
//     teacher:teacherName,
//     studentsCount:studentsCount,
//     weekDay: weekDay,
// }

// }

// const getCourseLabel = (obj)=>{
//     const label = `${obj.name} by ${obj.teacher}. Every ${obj.weekDay}, expected attendance: ${obj.studentsCount}`;
// return label;
// }

// const math = createCourse('Math', 'Ms. Atanasova', 31, 'Monday');
//     const label = getCourseLabel(math);
//     console.log(label);

//     const chemistry = createCourse('Chemestry', 'Ms. Keranova', 100, 'Friday');
//     console.log(getCourseLabel(chemistry));

//     console.log(chemistry);



    // const pointOne = {};
    // const pointTwo = pointOne;
    // pointTwo.x = 10;
    // delete pointOne.x;
    // console.log(pointTwo.x);

    // What's the result? 
    // a) undefined <--------
    // b) 10
    // c) TypeError
    

    // const letters = ['a', 'e', 'c', 'b', 'd'];
    // const lettersCopy = letters;
    // lettersCopy.sort();
    // console.log(letters);

    // // What's the result?
    // // a) [ 'a', 'b', 'c', 'd', 'e' ] <-----------------
    // // b) Error: you can't sort letters
    // // c) [ 'a', 'e', 'c', 'b', 'd' ]
    


    // const person = { name: 'Pesho' };
    // const modify = (p) => {
    //   p.name = 'Gosho';
    // };
    // modify(person);
    // console.log(person.name);

    // // What's the result?
    // // a) Pesho
    // // b) Gosho <----------
    // // c) undefined
 


    // const person = { name: 'Pesho' };
    // const modify = (p) => {
    //   p = { name: 'Gosho' }
    // };
    // modify(person);
    // console.log(person.name);

    // // What's the result?
    // // a) Pesho <------------- ?????
    // // b) Gosho
    // // c) undefined
   


    
    // const user1 = { name: 'Pesho' };
    // const user2 = { ...user1 };
    // user2.name = 'Gosho';
    // user2.age = 30;
    // console.log(`${user1.name} ${user1.age} ${user2.name} ${user2.age}`);

    // // What's the result?
    // // a) Gosho 30 Gosho 30
    // // b) Pesho 30 Gosho 30
    // // c) Pesho undefined Gosho 30 <--------------------
    // // d) Pesho undefined Pesho undefined
  


   
    // const user1 = { name: 'Pesho' };
    // const user2 = { name: 'Pesho' };
    // const user3 = user1;
    // console.log(user1 === user2);
    // console.log(user2 === user3);
    // console.log(user1 === user3);

    // // What's the result?
    // // a) false, false, true <----------------
    // // b) false, true, true
    // // c) true, true, false
    // // d) true, false, true
   


    // const user1 = { name: 'Pesho' };
    // const user2 = { name: 'Gosho' };
    // const user3 = { ...user1, ...user2 };

    // console.log(user3);
    // console.log(user1 === user2);
    // console.log(user1 === user3);
    // console.log(user2 === user3);

    // // What's the result?
    // // a) { name: 'Pesho', name: 'Gosho' }, false, false, false
    // // b) { name: 'Gosho' }, false, true, true
    // // c) { name: 'Gosho' }, false, false, false <------------????
    // // d) { name: 'Pesho' }, false, true, true
    // // e) { name: 'Gosho' }, true, true, true
    // // f) { name: 'Gosho' }, false, true, true
  
    let obj1 = {};
    const obj2 = {};

    obj1.key = 'value';
    obj2.key = 'value';

    console.log(obj1.key);
    console.log(obj2.key);

    // // What's the result?
    // // a) value, undefined
    // // b) Error - can't modify a constant
    // // c) value, value <-----------------