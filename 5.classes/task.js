class PrintEditionItem {
    #_state;
    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.#_state = 100;
        this.type = null;
    }

    set state(stateItem){
        if(stateItem < 0)
            stateItem = 0 ;
        else if(stateItem > 100)
            stateItem = 100;
        this.#_state = stateItem;
    }
    get state() {
        return this.#_state;
    }

    fix() {
        this.state *= 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author,name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = "detective";
    }
}
//задача 2

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        (book.state > 30) ? this.books.push(book) : console.log("Состояние книги плохое");
    }

    findBookBy(type, value) {
        let index = this.books.findIndex(element => element[type] === value);
        return (index > -1) ? this.books[index] : null;
    }

    giveBookByName(bookName) {
        let index =this.books.findIndex(element => element.name === bookName);
        let book = null;
        if(index > -1) {
            book = this.books[index];
            this.books.splice(index,1);
        }
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    addMark(mark,subject) {
        if(mark > 5 || mark < 2) 
            return false;
        this.marks[subject] === undefined ? this.marks[subject] = [mark] : this.marks[subject].push(mark);
        return true;
    }

    getAverageBySubject (subject){
        return (this.marks[subject] === undefined) ? 0 : (this.marks[subject].reduce((previousValue,currentValue) => previousValue + currentValue)) / this.marks[subject].length; 
    }

    getAverage() {
        let keys = Object.keys(this.marks);
        return keys.length > 0 ? keys.reduce((value,currentValue) => value + this.getAverageBySubject(currentValue),0) / keys.length : 0 ;
    }
}

