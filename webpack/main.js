import generateFinalBoard from "./home";
import getRandomFact from "./about";
import { startCardCycling, forceCardChange } from "./skills";

const velocity = -0.2;

let quoteGenerated = false;

// Handles the scrolling of the different sections and the background changes
$(window)
  .scroll(function() {
    const $window = $(window);
    const $main = $("main");
    const $section = $("section");
    const $menuLink = $(".menu-link");

    const scroll = $window.scrollTop();

    $section.each(function() {
      var $this = $(this);
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // get the color and number from data prop
        let $color = $(this).data("color");
        let $secNumber = $this.data("number");
        // recolor the background
        $main.removeClass();
        $main.addClass("color-" + $color);
        // set the corresponding link to active
        $menuLink.removeClass("menu-active");
        let $change = $('a[data-color="' + $color + '"]');
        $change.addClass("menu-active");
        // activate the proper card
        $section.removeClass("visible-active");
        let $activeCard = $("section[data-color='" + $color + "']");
        $activeCard.addClass("visible-active");
        // makes background image scroll at different speed
        let test = 654 * $secNumber;
        $activeCard.css(
          "backgroundPosition",
          "center top " +
            Math.round(($activeCard.position().top - test) * velocity) +
            "px"
        );
        // generate Neth fact if about is active
        if ($color === "about") {
          if (!quoteGenerated) {
            quoteGenerated = true;
            getRandomFact();
          }
        } else {
          quoteGenerated = false;
        }
      }
    });
  })
  .scroll();

$(".home-link").each(function(index) {
  $(this).on("focus", () => {
    $.scrollTo($(".home-link").eq(index));
  });
});

$(document).ready(() => {
  // Add Grid to DOM on Page Load
  generateFinalBoard();

  // Controlls for Skill Cards
  const cardTime = 10000;
  let isCycle = true;
  let cardCycling = setInterval(startCardCycling, cardTime);

  $(".skills-play-pause").on("click", () => {
    if (isCycle) {
      clearInterval(cardCycling);
      $(".skills-play-pause i").removeClass("fa-pause");
      $(".skills-play-pause i").addClass("fa-play");
      isCycle = false;
    } else {
      cardCycling = setInterval(startCardCycling, cardTime);
      $(".skills-play-pause i").removeClass("fa-play");
      $(".skills-play-pause i").addClass("fa-pause");
      isCycle = true;
    }
  });

  $(".skills-nav-dots span").each(function(index) {
    $(this).on("keypress click", () => {
      forceCardChange(index);
    });
  });
});
