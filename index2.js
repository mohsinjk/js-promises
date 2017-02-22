console.log("***Without promise***");

var fetchData = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        users: [
          { name: 'Jack', age: 22 },
          { name: 'Tom', age: 21 },
          { name: 'Isaac', age: 21 },
          { name: 'Iain', age: 20 }
        ]
      });
    }, 500);
  });
};

var prepareDataForCsv = function(data) {
    console.log('1. data: ' + data.users.length);
    return data;
};

var writeToCsv = function(data) {
    setTimeout(function() {
        console.log('2. write to CVS ' + data.users.length);
     }, 200);
};

var notification=function(){
    console.log('3. your csv has been saved');
};


fetchData().then(function(data){
   var returnedData = prepareDataForCsv(data);
    writeToCsv(returnedData);
    notification();
});