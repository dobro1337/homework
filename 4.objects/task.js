function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  (this.marks === undefined) ? this.marks = [mark] : this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  (this.marks === undefined) ? this.marks = [...marks] : this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  return (this.marks === undefined) ? 0 : (this.marks.reduce((previousValue,currentValue) => previousValue + currentValue)) / this.marks.length; 
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}