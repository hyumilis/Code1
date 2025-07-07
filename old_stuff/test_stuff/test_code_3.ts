namespace TestCode3 {
let i: number = 0;
const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

i = randomInt(0, 3);

if(i==1){
    console.log("1");
}
else if(i==2){
    console.log("2");  
}
else{
    console.log("else");

}

switch ( i ) {
   case 1:
       console.log("hiiiii");
       break;
   case 2:
       console.log("hello");
       break;
   default: 
       console.log("bye");
       break;
}
}