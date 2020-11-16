const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
            'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const cesar = {
    encode: (string, n) => {
        let message = '';
        string = string.toLowerCase();
        for (let i = 0; i < string.length; i++) {
            let c = string[i];
            if (c.match(/[a-zñ]/i)) {
                let code = (abc.indexOf(c) + parseInt(n)) % 27;
                if (code < 0) code += 27;
                message += abc[code];
            } else {
                message += c;
            }
        }
        return message;
    },
    decode: (string, n) => {
        let message = '';
        string = string.toLowerCase();
        for (let i = 0; i < string.length; i++) {
            let c = string[i];
            if (c.match(/[a-zñ]/i)) {
                let code = (abc.indexOf(c) - parseInt(n)) % 27;
                if (code < 0) code += 27;
                message += abc[code];
            } else {
                message += c;
            }
        }
        return message;
    }
}

function start(type) {
    const text = $('#string').val();
    const n = $('#n').val();
    if (text.length == 0) return;
    const result = (type)? cesar.encode(text, n): cesar.decode(text, n);
    $('#result').val(result);
}