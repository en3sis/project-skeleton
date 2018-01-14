function myFirstFunction(e){
//do some action.
window.addEventListener('keydown' , function(e){
//do some action});

function mySecondFunction(e){
//do some action.
window.addEventListener('keydown' , function(e){
//do some action});

//calling first function
myFirstFunction();
//add another event listener to make me go to the second function.
window.addEventListener('keydown' , function(e){
mySecondFunction();
});