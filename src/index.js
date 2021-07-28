const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr,
        res = [];
    while (str.length > 0) {
        res.push(str.substring(0, 10));
        str = str.substring(10, str.length);
    }
    res = res.map(x => {
        let ch, 
            subRes = '';
        if (x === '**********') return ' ';
        while (x.length > 0) {
            ch = x.substring(0, 2);
            x = x.substring(2, x.length);
            subRes += ch === '00' ? '' : ch === '10' ? '.' : '-';
        }
        return subRes;
    });
    return res.map(x => {
        return x === ' ' ? x : MORSE_TABLE[x];
    }).join('');
}

module.exports = {
    decode
}