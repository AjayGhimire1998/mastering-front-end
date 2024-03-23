/* The commented code block is written in TypeScript and demonstrates various concepts such as variable
declaration, functions, async functions, type annotations, union types, type aliases, and type
checking. */
// let myName: string = "Ajay";
// console.log(myName);
/**
 * The function `printID` takes an `ID` parameter and prints it in uppercase if it is a string.
 * @param {ID} id - The `id` parameter is of type `ID`, which is expected to be a string.
 */
function printID(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    console.log(id);
}
printID("ajay123");
printID(2445);
