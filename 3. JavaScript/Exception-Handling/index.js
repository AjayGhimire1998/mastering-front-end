//throwing exception
// let i = "";
// if (!!i) {
//   console.log(i);
// } else {
//   throw new Error("Error laading this script");
// }


//error.message, error.code

function CustomException(message) {
    const error = new Error(message);
    error.code = 'THIS_IS_A_CUSTOM_ERROR_CODE';
    return error
}

console.log(CustomException("Cannot load.").message); //cannot load.