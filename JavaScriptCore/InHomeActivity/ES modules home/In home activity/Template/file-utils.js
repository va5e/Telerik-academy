import { readFileSync, writeFileSync, renameSync } from 'fs';
// import { result } from 'lodash';

export const fileRead = (path) => {
  try {
    const result = readFileSync(path, 'utf8');
    return result;
  } catch (error) {
    return error.message;
  }
};

export const fileJoin = (filePath, ...paths) => {
    let result = '';
    for(const path of paths){
      result += fileRead(path)
    }
 writeFileSync(filePath,result) 
 }

export const fileRename = (filePath, newPath) => {

  renameSync(filePath,newPath);
  console.log(`Old ${filePath} is now ${newPath}!`)

};
