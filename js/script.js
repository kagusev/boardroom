// Creating my first javascript
/**
 * creating version of object
 *
 *
 *  */
import Surfboard from "./Surfboard.js";
import Skateboard from "./Skateboard.js";

const surfboard1 = new Surfboard(
  "SUP board",
  "Infinity",
  "Blackfish",

  "ESP",
  "used",
  false,
  4,
  "Pro-Box",
  "Kirill",
  true,
  1800,
  // dims
  14,
  28,
  4.5,
  285,
  17,
  20
);

const surfboard2 = new Surfboard(
  "SUP board",
  "SIC",
  "Air Glide",
  /* dims: {
    length: 14,
    width: 32,
    volume: 300,
  }, */
  "dropstich cloth",
  "used",
  true,
  1,
  "single",
  "Kirill",
  true,
  900,
  // dims
  14,
  32,
  5,
  300,
  18,
  18
);

const skateboard1 = new Skateboard(
  "surfskate",
  "Carver",
  "777",
  "new",
  "Kirill",
  "keeper",
  250,
  36.5,
  10,
  21.25,
  4,
  7
);

//just browser console output
console.log("The surfboard1 object is:", surfboard1);
console.log("The surfboard2 object is:", surfboard2);
console.log("The skateboard1 object is:", skateboard1);
console.log("Estimated Value when  purchased was", surfboard1.estValue);

//using methods defined in clases

surfboard1.updateValue(2000);
//skateboard1.changeStatus("SellIt");
console.log("The new value of", surfboard1.brand, surfboard1.model, " is:", surfboard1.estValue);

console.log(" Current Status of", surfboard1.brand, surfboard1.model, " is:", skateboard1.status);
