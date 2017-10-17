/**
 * Created by USUARIO on 10/10/2017.
 */
var minhaVar = 'minha variavel';
function minhaFun(x, y) {
    return x + y;
}
//ecma script 2015 http://es6features.org
var num = 2;
var result = num + 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (v) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
