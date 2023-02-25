
{/* 

Basic algorithmic scripting

Reverse a String

Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/}
function reverseString(string) {
    var temp = string[string.length-1]
    
    for(let key=string.length-2;key>=0;key--)
        {
            temp+=string[key]
        }
    return temp;
}
 reverseString("hello")