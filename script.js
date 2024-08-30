//Without array:
// var name1, name2, name3, name4, name5;
// name1 = 'Sakline';
// name2 = 'Mostak';
// name3 = 'Hasib';
// name4 = 'Akhi';
// name5 = 'Kamrunnesa';
// document.write(name4);


// with using array:
// var names = new Array(5);
// names[0] = 'Sakline';
// names[1] = 'Mostak';
// names[2] = 'Hasib';
// names[3] = 'Akhi';
// names[4] = 'Kamrunnesa';
// document.write(names[4] + '<br>');
// document.write(names[1]);


// // or
var names = ['Sakline', 'Mostak', 'Hasib', 'Akhi', 'Kamrunnesa'];
document.write(names.length + '<br>');
document.write(names[2]);
console.log(names);


names.push('Talukder');    // push method
console.log(names);
names.unshift('Safi');   // unshift opposite of push
console.log(names);



names.pop();            //pop method
console.log(names);
names.shift();      // shift opposiite of pop
console.log(names);


names.splice(1, 0, 'Mofiz', 'abdul');   //adding elements using splice.
console.log(names);


names.splice(1, 2);         //removing elements using splice.
console.log(names);


var newArray = names.slice(2);  //sliching elements using slice.
console.log(newArray);          //it will not change previous elements.
console.log(names);

names.sort();                   // sorting string elements using sort.
console.log(names);
names.reverse();
console.log(names);

var number = new Array(22, 33, 5, 1, 21);   // sorting number elements using sort.
number.sort(function (a, b) {
    return a - b;
});
console.log(number);




// var country1 = ['Bangladesh', 'India'];
// var country2 = ['Pakistan', 'Nepal'];
// var country = country1.concat(country2);     //concat mathod
// console.log(country);




// array use with for loop
// var names = new Array();
// for (var i = 0; i < 5; i++) {
//     names[i] = parseInt(prompt('Enter here Number :'));
// }
// var sum = 0;
// for (i = 0; i < 5; i++) {
//     console.log(names[i]);
//     sum = sum + names[i];
// }

// console.log('Addition =' + sum);


