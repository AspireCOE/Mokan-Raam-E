// optionalParamter ---------------------------------------------
var optionalParamter = function (name, age, email) {
    if (email !== undefined) {
        console.log(name + "-----" + age.toString() + "-----" + email);
    }
    else {
        console.log(name + "-----" + age.toString());
    }
};
optionalParamter("mokan", 21);
optionalParamter("mokan", 21, "m@mgmail.com");
// defaultParamter ---------------------------------------------
var defaultParamter = function (name, age, email) {
    if (email === void 0) { email = "defaultmail@gmail.com"; }
    console.log(name + "-----" + age.toString() + "-----" + email);
};
defaultParamter("mokan", 21);
defaultParamter("mokan", 21, "m@mgmail.com");
// restParamter --------------------------------------------------
var restParamter = function (a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i = 0; i < b.length; i++) {
        sum += b[i];
    }
    return sum;
};
console.log(restParamter(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function getAdd(a, b) {
    return a + b;
}
console.log(getAdd("11", "22"));
console.log(getAdd(11, 22));
