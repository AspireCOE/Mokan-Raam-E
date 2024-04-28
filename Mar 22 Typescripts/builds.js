var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color) {
        this.color = color;
    }
    Car.prototype.show = function () {
        console.log("color is: " + this.color);
    };
    return Car;
}());
var car = new Car("blue");
car.show();
var Benz = /** @class */ (function (_super) {
    __extends(Benz, _super);
    function Benz(color, price) {
        var _this = _super.call(this, color) || this;
        _this.price = price;
        return _this;
    }
    Benz.prototype.display = function () {
        console.log("color is :" + this.color);
        console.log("price is :" + this.price);
    };
    return Benz;
}(Car));
var benz = new Benz("blue", 100000);
benz.display();
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(color, price, variant) {
        var _this = _super.call(this, color, price) || this;
        _this.price = price;
        return _this;
    }
    Bmw.prototype.display = function () {
        console.log("color is :" + this.color);
        console.log("price is :" + this.price);
        console.log("variant is :" + this.variant);
    };
    return Bmw;
}(Benz));
var bmw = new Bmw("blue", 100000, "SX100");
bmw.display();
