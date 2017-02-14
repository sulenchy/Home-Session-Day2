'use strict'
 
exports.words = function(word) {
  var splitWord = word.split(" ");
  if (word.search("\t") != -1){
    splitWord=word.split("\t");
  }
  else if(word.search("\n") != -1){
    splitWord=word.split("\n");
  }
  else{
    
    
  }
  var countWord = Object.create(null);
    countWord = {};
  
    for (var i = 0;i<splitWord.length;i++) {
         var startWord = splitWord[i];
         if (countWord.hasOwnProperty(startWord)) {
          countWord[startWord]++;
        } 
        else {
            countWord[startWord] = 1;
        }
    }
  return countWord;
}

