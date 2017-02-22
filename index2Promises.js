console.log('***With promise***');

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
  return new Promise(function(resolve, reject) {
    console.log('1. data: ' + data.users.length);
    resolve(data);
  });
};

var prepareDataForCsvByDataPromise = function(dataPromise) {
  return dataPromise().then(function(data) {
    console.log('1. data: ' + data.users.length);
    return data;
  });
};

var writeToCsv = function(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('2. write to CVS ');
            resolve();
        }, 200);
    });
};

var notification=function(){
    console.log('3. your csv has been saved');
};

fetchData().then(prepareDataForCsv).then(writeToCsv).then(notification)
.catch(function(error) {
  console.log('something went wrong', error);
});


// prepareDataForCsvByDataPromise(fetchData).then(writeToCsv).then(notification)
// .catch(function(error) {
//   console.log('something went wrong', error);
// });