/**
 * Created by zplus on 2015/6/2.
 */
(function (shapes) {
    var Triangle = shapes.Triangle = function (options) {
        this.width = options.width;
        this.height = options.height;
    };
    Triangle.prototype.getArea = function () {
        return 0.5 * this.width * this.height;
    };

    var Circle = shapes.Circle = function (options) {
        this.radius = options.radius;
    };

    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };

    Circle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
})(window.shapes = window.shapes || {});

function getArea(shape, options) {
    var Shape = window.shapes[shape],
        area = 0;

    if (Shape && typeof Shape === 'function') {
        area = new Shape(options).getArea();
    } else {
        throw new Error('Invalid shape: ' + shape);
    }

    return area;
}

getArea('Triangle', {width: 100, height: 100});
getArea('Circle', {radius: 100});


