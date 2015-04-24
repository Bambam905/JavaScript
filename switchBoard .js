var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  // Add your code here!
  default:
    console.log("Well Thats a unique choice no idea how to spell or pronounce that." + " " + candy + " " + "....is that right?") 
    var answer = prompt("Is" + " " + candy + " " + "right yes or no?")
    var yes = true 
       if ( yes ) {
           console.log("Oh good I thought my memory was failing me")
       }else {
           console.log("Oh dang I guess my memory isn't what it use to be!") }
    break;
}
