
function parseCount(valueParse) {
    let value = Number.parseFloat(valueParse);
    if(isNaN(value)){
            throw new Error("Невалидное значение");
    }
    return value;
}

function validateCount(valueParse) {
    try{
        return parseCount(valueParse);
    }catch(error){
        return error;
    }
}

class Triangle {
    constructor(a,b,c) {
        if( (a + b) < c || (b + c) < a || (c + a ) < b){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea()  {
        let p = this.getPerimeter() * 0.5;
        let area = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return Number.parseFloat(area.toFixed(3));
    }
}

function  getTriangle(a,b,c) {
    try{
        return new Triangle(a,b,c)
    }
    catch(error) {
        return { getArea() {return "Ошибка! Треугольник не существует"}, getPerimeter() {return "Ошибка! Треугольник не существует"} };
    }
}