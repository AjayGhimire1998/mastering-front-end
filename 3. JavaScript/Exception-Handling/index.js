//throwing exception
// let i = "";
// if (!!i) {
//   console.log(i);
// } else {
//   throw new Error("Error laading this script");
// }


//error.message, error.code

/**
 * The function creates a custom exception with a specified error message and code.
 * @param message - The `message` parameter is a string that represents the error message you want to
 * associate with the custom exception.
 * @returns An instance of the Error class with a custom error message and a code property set to
 * 'THIS_IS_A_CUSTOM_ERROR_CODE'.
 */
// function CustomException(message) {
//     const error = new Error(message);
//     error.code = 'THIS_IS_A_CUSTOM_ERROR_CODE';
//     return error
// }

// // console.log(CustomException("Cannot load.").message); //cannot load.

// CustomException.prototype = Object.create(Error.prototype)

// const customError = new CustomException("Custom exception test");
// console.log(customError.message);


//try catch finally

// try {
//     let i = ""
//     if (!!i)
//     console.log("Try");
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log("I run anyway");
}




