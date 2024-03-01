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
