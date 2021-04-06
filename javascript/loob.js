for (let i = 0; i <19; i++) {
if (i=7) {
    break
}    
console.log('hello ');
}


let pass= prompt('enter your password')
let con= prompt('confirm your password')

while (!pass===con) {
    let pass= prompt('it is not matching, repeat the password')
    let con =prompt('confirm the password again')
}

let array = [5,7,87,879,98,65]