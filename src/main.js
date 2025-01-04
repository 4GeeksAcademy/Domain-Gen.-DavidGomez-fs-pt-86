let pronoun = ["the", "our"];
let adjective = ["perfect", "best"];
let noun = ["country", "woman"];

for(let p = 0; p < pronoun.length; p++){
  for(let a=0; a<adjective.length; a++){
    for(let n=0; n<noun.length; n++){
      console.log(pronoun[p] + adjective[a] + noun[n]+'.com');
    }
  }
}