function fullName (firstName, lastName) {
return firstName +` `+ lastName ;
};

let result = fullName(`Jacob`,`Joel`);

let expected = `Jacob Joel`;

if (result !== expected) {
throw new Error(`${result} does not match ${expected}`)
};