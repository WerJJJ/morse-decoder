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
    let res  = expr.split('**********');
    let finalResult = "";
    for (let i in res){
        let countWord = res[i].length / 10;
        let word = [];
        for (let j = 0; j < countWord; j++){
            word[j] = res[i].slice(j * 10, (j+1)*10);
            word[j] = word[j].split('');
            let k = 0;
            while (word[j][k] === '0'){
                word[j].splice(0,1);
            }
            word[j] = word[j].join('');
        }
        console.log(word); 
        let letters;
        let result;
        for (let j = 0; j < countWord; j++){
            letters = [];
            for (let z = 0; z < word[j].length; z = z + 2){
                letters[z/2] = word[j].slice(z, z+2);
            }
             result = letters.map(function(item){
                if (item == '10') return '.';
                else if (item == '11') return '-';
            })
            result = result.join('');
            finalResult += MORSE_TABLE[result];
        }
        finalResult = finalResult + " ";
    }
    return finalResult.trim();
}

module.exports = {
    decode
} 