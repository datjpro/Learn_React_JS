import * as name from "./name.js";
import df from "./defaul.js";

console.log(name.myVar);
name.myFunction();
console.log(df);
console.log("Bien df2: ", name.df2); // undefined

import df2 from "./name.js";
console.log("Bien df2: ", df2);
