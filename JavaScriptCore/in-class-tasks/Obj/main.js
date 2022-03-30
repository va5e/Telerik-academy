
// let person = {
//     firstName: 'Vassil',
//     age: 25,
//     egn: 9702235367,
// }

// const getKeys = (obj) => {
//     const result = Object.keys(obj);
    
//     return result;
// }

// const dltKey = (obj,key)=>{
//     const keys = getKeys(obj);
//     const newObj = {};
//     for(const item of keys){
//         newObj[item]=obj[item];
//     }
//     delete newObj[key];
// return newObj;
// }

// // console.log(dltKey(person,'age'));
// // console.log(person)


// const dltKeys = (obj,...keys)=>{
//     const keysCol = getKeys(obj);
//     const newObj = {};
//     for(const item of keysCol){
//         newObj[item]=obj[item];
//     }
//     for(const item of keys){
//         console.log(item)
//         delete newObj[item]
//     }
// return newObj;
// }
// console.log(person);
// console.log(dltKeys(person,'firstName'))

// const getTypeStats = obj => {
//    const newObj = {
//        strings:0,
//        numbers:0,
//        booleans:0,
//        objects:0,
//        functions:0,
//        arrays:0,
//        symbols:0,
//        undefineds:0,
//        nulls:0
//    };

//      for (const key in obj) {
//         if (Array.isArray(obj[key])) {
//             newObj['arrays']++
//         }else if(typeof obj[key] === 'number' ){
//             newObj['numbers']++
//         }else if(typeof obj[key] === 'string'){
//             newObj['strings']++
//         }else if(obj[key] === 'null'){
//             newObj['nulls']++
//         }else if(typeof obj[key] === 'symbol'){
//             newObj['symbols']++
//         }else if(typeof obj[key] === 'undefined'){
//             newObj['undefineds']++
//         }else if(typeof obj[key] === 'object'){
//             newObj['objects']++
//         }else if(typeof obj[key] === 'function'){
//             newObj['functions']++
//         }else if(typeof obj[key] === 'boolean'){
//             newObj['booleans']++
//         }
//     }
//    let result = {}
//    for (const key in newObj){
//        if(newObj[key]){
//             result[key] = newObj[key]
//        }
//    }
// return result;

// }

// console.log(getTypeStats({age:true, func: nameS = (a)=>a*a, arr:[1,2,3,4]}));

const parsUrl = string =>{
    const urlObj = {}
    const protocol = string.slice(0,string.indexOf(':'))
    const host = string.split('/')[2];
    const pathWithHost = (string.split('//')[1]).slice(string.indexOf('/'),string.indexOf('?'))
    const path = pathWithHost.slice(pathWithHost.indexOf('/'),pathWithHost.indexOf('?'))
    let query = string.slice(string.indexOf('?')+1)
    query = query.split('&')
    let queryPairsArr= []
    for (let item of query) {
        queryPairsArr.push(item.split('='));
    }
          
    urlObj['protocol']=protocol
    urlObj['host']=host
    urlObj['path']=path
    urlObj['query']=Object.fromEntries(queryPairsArr);
  
    return urlObj
}
const parsedUrl =(parsUrl('https://learn.telerikacademy.com/course/view.php?id=36&as=fs&afs=sdg'))

console.log(parsedUrl)
// 'https://learn.telerikacademy.com/course/view.php?id=36&as=fs&afs=sdg'
// 'https://google.com/search?q=cats&region=eu'