"use strict";
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function calaCircle(value) {
        return value * MyMath.PI;
    }
    MyMath.calaCircle = calaCircle;
})(MyMath || (MyMath = {}));
