/*
** This is a function that takes a phone number
** and returns true if it's a valid orangemali 
** number or false otherwise.
** A valid number is expected to start with the
** following prefixes(with or without +223):
** 7,82,83,90-94 
*/
function isValid(num){
    let validator = /^((00|\+)?223)?\s?(7\d|8[23]|9[0-4])\s?\d{2}\s?\d{2}\s?\d{2}$/;
    return validator.test(num);
}