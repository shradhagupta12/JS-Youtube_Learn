const coding = ['JS' , 'Java' , 'CPP' , 'PY' , 'Ruby']

// Type1
coding.forEach( function (language) {
    // console.log(language);
})

// Type2
coding.forEach( (language) => {
    // console.log(language);
} )

// Type3
function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe);

// Type4
coding.forEach( (item , index , arr) =>{
    // console.log(item , index , arr);
} )

// Type5
const myCoding = [
    {
        name : 'Javascript',
        fileName : 'js'
    },
    {
        name : 'Python',
        fileName : 'py'
    },
    {
        name : 'Java',
        fileName : 'java'
    }
]

myCoding.forEach( (item) => {
    // console.log(item.fileName);
} )
