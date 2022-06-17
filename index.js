const _ = require('lodash');

let array=[100,"Syed",200,"Jagdeesh","Lavish",300];

let countData=(array)=>{
    let numberCount=0;
    let stringCount=0;
    _.forEach(array,(value)=>{
        (_.isNumber(value))?numberCount++:numberCount;
        (_.isString(value))?stringCount++:stringCount;
    });
    return {numberCount,stringCount};
}

console.log(countData(array));

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
   
  console.log(_.sortBy(users, [function(o) { return o.user; }]));
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   
 console.log( _.sortBy(users, ['user', 'age']));
  // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
  