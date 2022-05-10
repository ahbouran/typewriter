const sentence = "hello there from lighthouse labs";
let delay = 0;
for (let char of sentence) {
  setTimeout(() => 
    process.stdout.write(char)
    //console.log(char)
  , delay) 
  delay += 100
  //console.log("delay: ", delay)
};

