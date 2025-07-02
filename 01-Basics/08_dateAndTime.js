const myDate = new Date();
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString);
console.log(myDate.toLocaleString);

const mycreatedDate = new Date(2023 , 2 , 12);
console.log(mycreatedDate.toDateString());

const myNewDate = new Date("2023-01-21");
console.log(myNewDate.toDateString());

// To get Month , Year , Minutes etc
console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getTime());
console.log(myDate.getMinutes());
