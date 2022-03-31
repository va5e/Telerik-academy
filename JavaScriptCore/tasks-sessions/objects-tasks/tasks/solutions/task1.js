// Clone Objects

export default function (data) {
  const result = {};
  
  for(const key in data){
      
    if(Array.isArray(data[key])){
        result[key]= (data[key]).slice()
      }else if(data[key]===null){
        result[key] = data[key]
      }else if (typeof data[key] === 'object'){
        result[key]= {...data[key]}
      }else{
      result[key] = data[key]
      }
  }

  return result;
 }
