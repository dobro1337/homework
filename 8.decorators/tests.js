describe("Домашнее задание к занятию 8 «Функции декораторы»", () => {
  describe("Задача №1 Усовершенствованный кэширующий декоратор", () => {
    let add2 = (a, b) => a + b;
    let add3 = (a, b, c) => a + b + c;
    let upgAdd2;
    let upgAdd3;


    beforeEach(function(){
      upgAdd2 = cachingDecoratorNew(add2);
      upgAdd3 = cachingDecoratorNew(add3);
    });

    it("Декоратор кэширует", () => {
      expect(upgAdd2(1, 2)).toEqual("Вычисляем: 3");
      expect(upgAdd2(1, 2)).toEqual("Из кэша: 3");
      expect(upgAdd2(1, 2)).toEqual("Из кэша: 3");
    });

    it("Декоратор кэширует функцию 3х переменных", () => {
      expect(upgAdd3(1, 2, 3)).toEqual("Вычисляем: 6");
      expect(upgAdd3(1, 2, 3)).toEqual("Из кэша: 6");
      expect(upgAdd3(1, 2, 3)).toEqual("Из кэша: 6");
    });

    it("Декоратор кэширует только 5 значений", () => {
      expect(upgAdd3(1, 2, 4)).toEqual("Вычисляем: 7");
      expect(upgAdd3(1, 2, 5)).toEqual("Вычисляем: 8");
      expect(upgAdd3(1, 2, 6)).toEqual("Вычисляем: 9");
      expect(upgAdd3(1, 2, 7)).toEqual("Вычисляем: 10");
      expect(upgAdd3(1, 2, 8)).toEqual("Вычисляем: 11");
      expect(upgAdd3(1, 2, 8)).toEqual("Из кэша: 11");
      expect(upgAdd3(1, 2, 3)).toEqual("Вычисляем: 6");
    });
  });
  describe("Задача №2 Усовершенствованный декоратор отложенного вызова", () => {
    
    it("Декоратор выполняет первый синхронный вызов функции", () => {
      let hasCalled = false;
      const functionToDecorate = () => {
        console.log("тук тук");
        hasCalled = !hasCalled;
      }
      const decoratedFunction = debounceDecoratorNew(functionToDecorate, 100);
      decoratedFunction(1, 2, 3);
      expect(hasCalled).toBe(true);
    });

    it("Декоратор выполнит второй вызов асинхронно функции", (done) => {
      let hasCalled = false;
      const functionToDecorate = () => {
        console.log("тук тук");
        hasCalled = !hasCalled;
      }
      const decoratedFunction = debounceDecoratorNew(functionToDecorate, 100);
      decoratedFunction(1, 2, 3);
      expect(hasCalled).toBe(true);

      decoratedFunction(1, 2, 3);
      expect(hasCalled).toBe(true);

      setTimeout(() => {
        expect(hasCalled).toBe(false);
        done();
      }, 150);
    });

    it("Декоратор считает общее количество вызовов функции", () => {
      const functionToDecorate = () => console.log("тук тук");
      const decoratedFunction = debounceDecoratorNew(functionToDecorate, 100);
      expect(decoratedFunction.allCount).toBe(0);
      decoratedFunction(1, 2, 3);
      expect(decoratedFunction.allCount).toBe(1);

      decoratedFunction(1, 2, 3);
      expect(decoratedFunction.allCount).toBe(2);
    });

    it("Декоратор считает количество вызовов переданной функции", (done) => {
      const functionToDecorate = () => console.log("тук тук");
      const decoratedFunction = debounceDecoratorNew(functionToDecorate, 100);
      expect(decoratedFunction.count).toBe(0);
      decoratedFunction(1, 2, 3);
      expect(decoratedFunction.count).toBe(1);
  
      decoratedFunction(1, 2, 3);
      expect(decoratedFunction.count).toBe(1);
  
      setTimeout(() => {
        decoratedFunction(1, 2, 3);
        expect(decoratedFunction.count).toBe(2);
      }, 150);

      setTimeout(() => {
        decoratedFunction(1, 2, 3);
        expect(decoratedFunction.count).toBe(2);
      }, 200);

      setTimeout(() => {
        decoratedFunction(1, 2, 3);
        expect(decoratedFunction.count).toBe(3);
        expect(decoratedFunction.allCount).toBe(5);
        done();
      }, 400);
    });
  });
});
