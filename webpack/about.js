const nethFacts = [
  "Neth is a pretty good singer. He can sing high tenor on a good day, or low bass on a bad day.",
  "Neth enjoys talking about video games. He and his friend host a podcast about Super NES games.",
  "REM is one of Neth's favorite bands. 'Harborcoat' is one of his favorite REM songs.",
  "Neth enjoys doing voices. He can do a pretty good impression of Prof. Farnsworth from Futurama.",
  "St. Louis is Neth's hometown.",
  "Neth and Ellen have a pair of adorable tuxedo cats. He will show you pictures if you ask.",
  "The two cheeseburger meal is Neth's favorite McDonald's meal and he'll never be too good for it.",
  "Places Neth likes to work: Non-Starbuck's coffee shops, his home office, Ikea.",
  "Neth will kick your ass at karaoke.",
  "Neth has a degree in philosophy from Boise State University and is damn proud of it!",
  "Neth is trying to get better at drawing and painting, but he won't be as good at it as Ellen.",
  "Neth still collects Pogs for some reason.",
  "Neth and Ellen got married in the tea shop where they first met.",
  "Neth Notes: Billionaires are not your friends.",
  "Neth likes Breadtube!",
  "Neth listens to WAY too many podcasts. He does not listen to Joe Rogan, stop asking!",
  "For some reason, Neth has a strange fascination with screen savers from the 90s. Flying toasters forever!",
  "Neth would be proud to get called an SJW.",
  "Neth Notes: As a long-time Ghostbusters fan, I think that Ghostbusters remake was fine, actually.",
  "Ever played a video game where you converse with a fish? Neth has. He really likes strange games.",
  "Neth LOVES cartoons.",
  "In another life, Neth would be a gameshow host.",
  "Neth really likes to cook. Ellen likes to take leftovers to work to make her coworkers jealous.",
  "Neth's only been out of the country twice. He's been to Japan and Ireland.",
  "Despite living in the Pacific Northwest for over 20 years, Neth's never been to Canada.",
  "Neth loves X-Men. He really likes Gambit, but admits the character can be problematic.",
  "Neth probably still remembers the words to every song in RENT.",
  "Ellen likes to remind Neth that he has ridiculously long legs.",
  "Quote from Neth: Any day in which you pet puppy can't be all bad.",
  'If you were to ask Neth if he\'s a dog or cat person, he would answer "Yes."',
  'Neth Notes: I would bet "The Adventures of Pete & Pete" still holds up.',
  "Neth isn't all that crazy about beer. He's more a cider or Scotch person.",
  "Quotes from Neth: The fact that my mom can't figure out the internet is more our fault than her's.",
  "Quotes from Neth: Super Mario World might be the closest thing possible to a perfect game.",
  "Neth doesn't like to watch sports... except curling.",
  "Neth is more of a Star Trek person than a Star Wars person.",
  "Picard is still Neth's favorite Star Trek captain.",
  "Quotes from Neth: There is no such thing as ethical capitalism.",
  "Neth loves a capella music. He still throws on his old Rockapella cds from time to time.",
  "Neth Notes: Technology is only as good or bad as what we use it for.",
  "Things from St. Louis that Neth misses: fireflies, thunderstorms, their weird-ass pizza.",
  'Neth really likes pretty lights. His mom swears the first thing he ever said was "da light."',
  "Though he really liked it as a kid, Neth refueses to rewatch Power Rangers. That new comic's alright though.",
  "Neth thought he liked anime, but turns out he just likes 'Cowboy Bebop.'",
  "Neth Notes: We really need to do something about this social media before it gets us all killed.",
  "Neth loves indie games and enjoys seeing new ways people tell stories through games.",
  "Neth Notes: Unionize! Together we bargain, alone we beg.",
  "Neth was in a boy band in high school and does not want to say anymore about that.",
  "Neth Notes: Free speach advocates often don't want it for folks who disagree with them.",
  "Neth prefers to take the train or walk over driving when he can.",
  "Ellen drew the picture of Neth that you might have seen on this page!"
];

const $nethFactsSpan = $("#nethFacts");

const fLength = nethFacts.length;

const getRandomFact = () => {
  let q = Math.floor(Math.random() * fLength);
  placeText(nethFacts[q]);
};

const placeText = text => {
  $nethFactsSpan.empty();
  $nethFactsSpan.text(text);
};

export default getRandomFact;
