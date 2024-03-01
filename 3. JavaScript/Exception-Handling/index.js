//throwing exception
// let i = "";
// if (!!i) {
//   console.log(i);
// } else {
//   throw new Error("Error laading this script");
// }
// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
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
// }
//getting month
// var CustomError = /** @class */ (function (_super) {
//     __extends(CustomError, _super);
//     function CustomError(message, code) {
//         var _this = _super.call(this, message) || this;
//         _this.code = code;
//         return _this;
//     }
//     return CustomError;
// }(Error));
// function getMonthName(mo) {
//     mo--;
//     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     if (months[mo]) {
//         return months[mo];
//     }
//     else {
//         var error = new CustomError("Invalid Month Number", "INVALID_INPUT_ERROR");
//         throw error;
//     }
// }
// try {
//     var monthName = getMonthName(14);
// }
// catch (error) {
//     var monthName = "unknown";
//     console.log(error);
// }
// finally {
//     console.log("Exiting code.");
// }

// try {
//   lalla;
// } catch (err) {
//   console.log("The engine can't understand this code, it's invalid");
// }

// try {
//     lalala; // error, variable is not defined!
//   } catch  {
//     // console.log(err.name); // ReferenceError
//     // console.log(err.message); // lalala is not defined
//     // console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

//     // // Can also show an error as a whole
//     // // The error is converted to string as "name: message"
//     // console.log(err); // ReferenceError: lalala is not defined
//     console.log("Error");
//   }

// let json = "{ bad json }";

// try {

//   let user = JSON.parse(json); // <-- when an error occurs...
//   console.log( user.name ); // doesn't work

// } catch (err) {
//   // ...the execution jumps here
//   console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
//   console.log( err.name );
//   console.log( err.message );
// }

// let error = new Error("Things happen o_O");

// console.log(error.name); // Error
// console.log(error.message); //
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  console.log(user.name);
} catch (err) {
  console.log("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
}
