const defaultInfoMsg = 'No info provided!';

const info = (msg = defaultInfoMsg) => {
console.log(`Message: ${msg||defaultInfoMsg}`)
};

const defaultError = 'No error provided!'

const error = (msg = defaultError)=>{
  console.log(`Error: ${msg || defaultError}`)
}

const defaultSuccess = 'No success provided!'

const success = (msg = defaultSuccess)=>{
  console.log(`Success: ${msg||defaultSuccess}`)
}
export default {
  info,
  error,
  success,
};
