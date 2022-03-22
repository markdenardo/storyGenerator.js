//storyGenerator by MDN
//instructions:
//1. open terminal
//2. run node
//3. copy code paste in node
//4. there are two commands: start() and add(array, string)
//5. start() -- runs the code and generates a new story
//6. add(array,string) -- adds new strings() to assigned array (character, setting, or plot) example: add(character, 'Ada Lovelace')

function start() {
  const response = false;
  const character = ["dog", "cat", "person"];
  const setting = ["mars", "baseball field", "swimming pool"];
  const plot = ["dinner", "walk", "fighting"];

  const rand = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const add = (array, string) => {
    array.push(string);
  };

  const story = (character, setting, plot) => {
    const state =
      ((story.character = character),
      (story.setting = setting),
      (story.plot = plot));
  };

  const makeStory = (story) => {
    console.log(
      `A ${rand(character)} went to ${rand(setting)} for ${rand(plot)}`
    );
  };

  story(character, setting, plot);
  makeStory(story);
}
start();
