
//Import functions-----------------------------------------------------------------------------------//

/*This methods adds the js files to the HTML body
- basically a import function for if we end up doing some
html in the other java files.. (probably not needed)*/
function load(script) {
    document.write('<'+'script src="'+script+'" ><' + '/script>');
}

//This will be executed upon completely parsing the script tag in index.php, html body
load("character.js");
load("dungeon.js");
load("treasure.js");



/*importing all classes as modules
(Please note that this isn't done yet, and currently doesn't work. Just to clarify it's not
because the code or setup is wrong.
We are getting the error:
"Failed to load module script: The server responded with a non-JavaScript MIME type of "text/html".
Strict MIME type checking is enforced for module scripts per HTML spec".

... because we are running a local server. That means it default needs to reads js files as type = "text/javascript"
for it to work. Unfortunately all import types are supported as type = "module", which fucks things up.
So we either need and extension (Node.js) or to change the default setting in the Apache server.
The first solution is impractical considering this problem is local, and the second solution is, well...
a real mindfucker. We need to ask our supervisor for this. That or do all our coding in 1 js file, and
that's just messy in the long run...)
 */
import {Character} from "./character";
import {Treasure, Equipment, Item} from "./treasure";



//Tests---------------------------------------------------------------------------------------//

//console test
console.log("Hello World, I am javascript");

//character tests
var test = new Character("Ginny","female","elf",null);
var test2 = new Character("Conrad","male","human",null);
var characters = [
    {test},{test2},
]

console.log("Characters are: ",test.name," and ",test2.name);

