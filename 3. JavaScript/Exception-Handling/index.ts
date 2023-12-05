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
// }

//getting month

class CustomError extends Error {
    code: string;

    constructor(message: string, code: string){
        super(message);
        this.code = code;
    }
}

function getMonthName (mo: number): string {
    mo--;

    const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (months[mo]) {
        return months[mo];
    } else {
        const error = new CustomError("Invalid Month Number", "INVALID_INPUT_ERROR")
        throw error;
    }
}

try {
    let monthName = getMonthName(14)
} catch (error){
    let monthName = "unknown";
    console.log(error);
    
} finally {
    console.log("Exiting code.");
    
}





