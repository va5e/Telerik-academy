import { readFileSync, writeFileSync, renameSync } from 'fs';
import { result } from 'lodash';

export const fileRead = (path) => {
  try {
    const result = readFileSync(path, 'utf8');
    return result;
  } catch (error) {
    return error.message;
  }
};

export const fileJoin = (filePath, ...paths) => {
  
   return writeFileSync(fileRead(filePath,fileRead(...paths)))  
  
 
}

export const fileRename = (filePath, newPath) => {
return renameSync(filePath,newPath)

};
