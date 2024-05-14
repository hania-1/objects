//Objects
//simple objects
// let myBio={
//     name:'Hania Rizwan',
//     age:'18',
//     grade:'12th',
//     address:'abc'
// }
// console.log(myBio)
//nested objects
// let myBio={
//     name:'Hania Rizwan',
//     myage:{age:'18',
//            birthdate:'22', 
//            month:'Aug',
//            day:'monday'
//     },
//     grade:{
//           class:"12th",
//           clg:"govt clg",
//           scl:"kids heaven"
//     },
//     address:{
//         houseno:'124',
//         city:"karachi"
//     }
// }
// console.log(myBio.grade.scl)
//union literals
// let stdinfo: {
//     name: string;
//     rollno: number;
//     status: boolean;
//     address: string|boolean|number
// };
// stdinfo={
//     name: 'hania',
//     rollno: 23,
//     status: false,
//     address:"A-64b"
// };
//nested arrays
var bikes = [
    {
        name1: 'yamaha',
        cylinder: '4'
    }, {
        name2: 'kawasaki',
        cylinder: '4'
    }, {
        name3: "BMW S1000rr",
        cylinder: '4'
    }
];
console.log(bikes[0].name1);
console.log(bikes[1].name2);
