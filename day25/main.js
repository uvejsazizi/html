var programmingLanguages = ['javascript','php','java'];

console.log(programmingLanguages);


programmingLanguages.push('python')

programmingLanguages.pop()

programmingLanguages.unshift('c++')

programmingLanguages.shift()

var programmingLanguages1 = [ 'python', 'java script', 'php']

programmingLanguages1.splice(1,2 ,'ruby');

console.log(programmingLanguages1)

console.log(programmingLanguages1);

console.log(Math.floor(Math.random()*10))

var students = ['student 1','student 2'];

var [s1, s2] = students;

console.log(s1)
console.log(s2)

var city = ['prishtin 1', 'peja 2', 'gilan 3' ]

var [s1, ,s3] = city

console.log(s1)
console.log(s3)

var number = [1,2,3,4,5,6,7,8,9,10];

var[first, second, ...otherNumbers]=number;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());

