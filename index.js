console.log("***Without promise***");
 var someThing = function() {
    var x = 2;
    return (x + 2);
};

try{
    var data=someThing();
    console.log("1. everything is great " + data);
}
catch(error){
    console.log('2. oh no', error);
}
finally{
    console.log('3. carry on');
}

