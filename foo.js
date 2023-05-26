import "./setup.js";
import { foo } from "npm:@marvinh/yes/global-window";

// Should print "it works"
console.log(foo());
