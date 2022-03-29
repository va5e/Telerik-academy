export const removeFirst = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }else{
    let result = arr.slice(0,arr.length);
    result.shift();
    return result;
  }

}

export const removeLast = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }else{
    
  let result = arr.slice(0,arr.length)
  result.pop() 
  return result;
  }
};

export const addFirst = (arr, element) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }else{
    let result = arr.slice(0,arr.length)
    result.unshift(element);
    return result;
  }
};

export const addLast = (arr, element) => {

  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }else{
    let result = arr.slice(0,arr.length)
    result.push(element);
    return result;
  }
};

export const contains = (arr, element) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }else{
    if(arr.includes(element)){
      return true;
    }else{
      return false;
    }
  }
};
