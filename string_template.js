const pattern = /\${([\w+*()-=<>.'"|\[\]\s]+)}/;

const template = {
    format(string, obj={}) {

        // if not string return undefined
        if (typeof string !== 'string') return;
        // if string is empty return undefined
        if (string.length === 0) return;
        // if not object throw error
        if (typeof obj !== 'object') throw 'invalid input';

        let result = pattern.exec(string)
        
        // If result equals to null return string
        if (!result) return string;
        
        result = this.compile(result, obj);
        
        // replace pattern with result
        string = this.replacer(string, result);
        
        // keep calling format til there is no more matches
        // then return actual result
        return this.format(string, obj);
        
    },
    compile: (expression, obj) => {

        //check if the expression cotain in the object if so return it
        _objects: for (const prop in obj) {
            if (expression[1] === prop) 
                return obj[prop];    
        }
        
        return eval(expression[1]);

    },
    replacer: (string, result) => string.replace(pattern, result)
};


module.exports = {
    template
};
