// Graduates
/**
 * 
 * @param {{
    course: string;
    minPassingGrade: number;
    students: {
        name: string;
        grades: number[];
    }[];
}} data 
 */
export default function (data) {
  const newObj = {};
newObj.course = data.course;
newObj.minPassingGrade = data.minPassingGrade
newObj.courseAverage = +(0).toFixed(1)
newObj.graduates = [];
let sumAvgs = 0;

for(const object of data.students){
    let {name,grades}=object;
        const avg = +(grades.reduce((a,b)=>a+b,0) / grades.length).toFixed(1)
    
    if(avg >= data.minPassingGrade){
        newObj.graduates.push({name:name, score:avg})
        sumAvgs+=avg
    }
}
  if(newObj.graduates.length != 0){
  newObj.courseAverage = +(sumAvgs / newObj.graduates.length).toFixed(1)
}
  return newObj;
}



