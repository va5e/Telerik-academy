import isNumber from 'is-number';
import _ from 'lodash';

let arr = [1, 2, 'telerik aCademy', 'john', 'mAriA', 32, 'we ARE the CHAMPIONS']

let onlyStringsArr = []

_.each(arr,function(item,i){
    if(_.isString(item)){
        onlyStringsArr.push(_.capitalize(item));
        console.log(i);
      }
})

console.log(onlyStringsArr);


