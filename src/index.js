module.exports = function check(str, bracketsConfig) {
    let closedBrackets = [];
    let bracketType;
    for (let bracket of str) {
        bracketsConfig.forEach((el) => {
            if (el.indexOf(bracket) === 0) {
                if (bracket !== closedBrackets[closedBrackets.length - 1]) {
                    closedBrackets.push(el[1]);
                    bracketType = "opened";
                } else if (bracket === closedBrackets[closedBrackets.length - 1]) {
                    bracketType = 'closed';
                }
                
            } else if (el.indexOf(bracket) === 1) {
                bracketType = "closed";
            }
        });
        if (bracketType === "closed") {
            if (closedBrackets.length === 0) {
                return false;
            } else if (bracket !== closedBrackets.pop()) {
                return false;
            }
        }
    }
    return closedBrackets.length === 0;
};
