module.exports = function check(str, bracketsConfig) {

    let openClose = new Map();

    for (let i = 0; i < bracketsConfig.length; i++) {
        openClose.set(bracketsConfig[i][0], bracketsConfig[i][1]);
    }

    let arr = str.split('');

    let check = new Array();
    for (let i of arr) {
        let checkItem = check.pop();
        if (checkItem != undefined) {
            let close = openClose.get(checkItem);
            if (close != i) {
                check.push(checkItem)
                check.push(i);
            }
        } else {
            check.push(i);
        }
        
    }
    return check.length == 0 ? true : false;
}
