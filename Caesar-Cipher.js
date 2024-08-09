const phrase = process.argv[2].toLowerCase();
const shift = parseInt(process.argv[3]);

const caesarShift = (char, shift) => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + shift) % 26 + 26) % 26 + 97);
    }
    return char;
};

const encryptedPhrase = phrase.split('')
    .map(char => caesarShift(char, shift))
    .join('');

console.log(encryptedPhrase);
