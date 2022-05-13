function circle (radius){
    this.radius = radius;
    

    this.getArea = function() {
        return Math.PI * Math.pow(this.radius, 2);
    };

    this.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };

}

let circle1 = new circle(4);
console.log(`CircleArea: ${circle1.getArea()}`);
// console.log(`CirclePerimeter: ${circle1.getPerimeter()}`);