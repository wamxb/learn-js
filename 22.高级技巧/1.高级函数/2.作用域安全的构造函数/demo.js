/**
 * Created by zplus on 2015/6/3.
 */
function Person(name, age, job) {
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job);
    }
}

var person1 = Person('Nicholas', 29, 'Software Engineer');
console.log(window.age);
console.log(person1.name);

var person2 = Person('zplus', 20, 'Ergonomic');
console.log(person2.name);