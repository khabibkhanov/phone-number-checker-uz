const CheckEnteredNumber = (number) => {
    const prefixs = [ "33", "50",  "77", "88", "90", "91", "93", "94", "95", "97", "99" ];
    const prefixOfEnteredNumber = number.slice(3, 5);
    const validNumber = /^998\d{9}$/;

    // check if the reciever number is a valid format
    if (!validNumber.test(number)) {
        return { 
            error: 'Invalid number format, it should start with 998 and followed by 7 digits' 
        }
    }

    // check if reciever number's MNC is valid format
    if (prefixs.indexOf(prefixOfEnteredNumber) === -1) {
        return { 
            error: 'Invalid mobile network code(MNC), please check it and try again.' 
        }
    }

    return {
        number
    }
}

console.log(CheckEnteredNumber('998911234567')) // { number: '998913574568' }
console.log(CheckEnteredNumber('998963574568')) // { error: 'Invalid mobile network code(MNC), please check it and try again.' }
console.log(CheckEnteredNumber('798911234567')) // { error: 'Invalid number format, it should start with 998 and followed by 7 digits' }
console.log(CheckEnteredNumber('99891123456')) // { error: 'Invalid number format, it should start with 998 and followed by 7 digits' }