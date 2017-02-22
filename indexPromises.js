
console.log('***With promise***');

var someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    var x = 2;
    resolve(x + 2);
  });
};
var showData=function(data) {
  console.log("1. everything is great " + data);
  return data;
};
var showOtherData=function(data) {
  console.log("1.1. everything is great " + data);
};
var showError=function(error){
    console.log('2. oh no', error);
};
var showFinally=function(error){
    console.log('3. carry on');
};
someAsyncThing()
    .then(showData)
    .then(showOtherData)
    .catch(showError)
    .then(showFinally);

