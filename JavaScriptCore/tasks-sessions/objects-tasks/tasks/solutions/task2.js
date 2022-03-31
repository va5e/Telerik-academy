// Game of Key-owns

/**
 * 
 * @param {{ keys: string[], first: object, second: object }} data 
 */
export default function (data) {

let result = {};
data['keys'].forEach((key) => {
    result[key] = null;
});

for (const key in result) {
    const keyInFirst = key in data['first'];
    const keyInSecond = key in data['second'];
    
    if (keyInFirst && keyInSecond) {
        let keyArr = [];
        keyArr.push(data['first'][key]);
        keyArr.push(data['second'][key]);
        result[key] = keyArr;
    } else if (keyInFirst) {
        result[key] = data['first'][key];
    } else if (keyInSecond) {
        result[key] = data['second'][key];
    }
}
return result;
}
 

