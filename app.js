let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

var really=0;
var very=0;
var basically=0;

let overuse= really + very + basically;

const storyWords = story.split(' ');

const betterWords = better =>{
  for(let i=0; i < storyWords.length; i++){
if('really'=== storyWords[i]){
  storyWords.splice(i);
  really = really + 1;
}
}
for(let j=0; j < storyWords.length; j++){
  if('very'=== storyWords[j]){
  storyWords.splice(j);
  very = very + 1;
}
}
for(let m=0; m< storyWords.length; m++){
  if('basically' === storyWords[m]){
  storyWords.splice(m);
   basically =basically + 1;
}
}
}
let sentences = 0;
storyWords.forEach(word => {
  if(word[word.length - 1] === '.' || word[word.length-1]){
    sentences = sentences +1 ;
  }
})
const logInfo = (story, overuse, sentences) => {
  console.log(story.length);
  console.log(overuse.length);
  console.log(sentences.length);
};
betterWords();
console.log(storyWords);
console.log('story' + story.length);
console.log('storyWords' + storyWords.length);
