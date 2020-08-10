let student = {
  name: {
    first: 'Tobia',
    last: 'Prezioso'
  },
  age: 25,
  eyeColor: 'Brown',
  message: function() {
    console.log('My name is ' + this.name.first + ' ' + this.name.last + ' and I am ' + this.age + ' years old');
    // console.log('My name is ' + student.name.first + ' ' + student.name.last + ' and I am ' + student.age + ' years old'); //should not be used like this
  }
};

// console.log(student.age);
// console.log(student.eyeColor);
// console.log(student.name.first);
// console.log(student.name.last);
student.message();
