const $skillsCard = $(".skills-card-area");

const skillCards = [
  {
    title: "Full Stack Development",
    images: ["mongo", "express", "react", "node"],
    desc:
      "Full stack web design with Javascript is my bread and butter. I’ve built several full-stack applications in the MERN stack (that is MongoDB, Express, React, and Node.js) though I’ve also worked with Vue and Angular in the past. I’m always excited to try out new libraries to see what they can do."
  },
  {
    title: "Front End UX/UI",
    images: ["html", "css", "javascript", "bootstrap"],
    desc:
      "I love creating designs that really pop. No matter what your site is for, no one wants to have a boring web presence. I’m no stranger to frameworks like Bootstrap and Materialize, but I also enjoy just starting from scratch to create my own designs and constantly reading up on new ways to make a site stand out."
  },
  {
    title: "Web Content",
    images: ["gimp", "vegas", "audacity", "garageband"],
    desc:
      "Need help creating content for your sites? You’re in luck, because in my spare time, I like to use things like Sony Vegas, Garageband, and GIMP to create videos, podcasts, and images. I can even sing and make funny voices if that’s something you need for some reason."
  },
  {
    title: "And the Rest",
    images: ["csharp", "jekyll", "rubyrails", "wordpress"],
    desc:
      "So far, I’ve talked about what I use regularly, but I do like trying out new things and moving outside of my tech comfort zone. I’ve used a wide array of tools in the past (and probably will again), like Ruby on Rails, C#/.Net, Jekyll (hey, like this blog!), and Wordpress."
  }
];
const baseurl = window.location.origin;
const populateCard = card => {
  $skillsCard.find("h3").hide();
  $skillsCard.find("h3").text(card.title);
  $skillsCard.find("h3").fadeIn();
  //
  $skillsCard.find(".skills-card-desc").hide();
  $skillsCard.find(".skills-card-desc").text(card.desc);
  $skillsCard.find(".skills-card-desc").fadeIn();
  //
  let $newImgCards = $(".skills-card-images").clone(true);
  card.images.forEach((img, i) => {
    // const imageLink = "/assets/img/skills/" + img + ".jpg";
    const imageLink = `${baseurl}/assets/img/skills/${img}.jpg`;
    console.log("IMG", `${baseurl}/assets/img/skills/${img}.jpg`);
    $newImgCards
      .find(".skills-img")
      .eq(i)
      .attr("src", imageLink);
  });
  $(".skills-card-images").remove();
  $skillsCard.find("h3").after($newImgCards);
};

const changeDot = activeNumber => {
  $(".skills-nav-dots span").removeClass("dot-active");
  $(".skills-nav-dots span")
    .eq(activeNumber)
    .addClass("dot-active");
};

let cardNumber = 0;

const startCardCycling = () => {
  if (cardNumber === 3) {
    cardNumber = 0;
  } else {
    cardNumber += 1;
  }
  populateCard(skillCards[cardNumber]);
  changeDot(cardNumber);
};

// For manual nav dots
const forceCardChange = number => {
  cardNumber = number;
  populateCard(skillCards[cardNumber]);
  changeDot(cardNumber);
};

export { startCardCycling, forceCardChange };
