!function(e){var s={};function t(a){if(s[a])return s[a].exports;var o=s[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=s,t.d=function(e,s,a){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var o in e)t.d(a,o,function(s){return e[s]}.bind(null,o));return a},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=0)}([function(e,s,t){"use strict";t.r(s);var a=$("#grid"),o=[0,0],i=[],n=[{name:"O-0",xAxis:[0,0,1,1],yAxis:[0,1,0,1]},{name:"L-1",xAxis:[0,0,0,1],yAxis:[0,1,2,0]},{name:"L-2",xAxis:[0,1,2,2],yAxis:[0,0,0,1]},{name:"L-3",xAxis:[0,1,2,2],yAxis:[1,1,0,1]},{name:"L-4",xAxis:[0,0,1,2],yAxis:[0,1,1,1]},{name:"L-5",xAxis:[0,1,1,1],yAxis:[2,0,1,2]},{name:"L-6",xAxis:[0,1,1,1],yAxis:[0,0,1,2]},{name:"L-7",xAxis:[0,0,0,1],yAxis:[0,1,2,2]},{name:"L-8",xAxis:[0,0,1,2],yAxis:[0,1,0,0]},{name:"I-9",xAxis:[0,1,2,3],yAxis:[0,0,0,0]},{name:"I-10",xAxis:[0,0,0,0],yAxis:[0,1,2,3]},{name:"T-11",xAxis:[0,0,0,1],yAxis:[0,1,2,1]},{name:"T-12",xAxis:[0,1,1,1],yAxis:[1,0,1,2]},{name:"T-13",xAxis:[0,1,1,2],yAxis:[1,0,1,1]},{name:"T-14",xAxis:[0,1,1,2],yAxis:[0,0,1,0]},{name:"Z-15",xAxis:[0,0,1,1],yAxis:[0,1,1,2]},{name:"Z-16",xAxis:[0,0,1,1],yAxis:[1,2,0,1]},{name:"Z-17",xAxis:[0,1,1,2],yAxis:[1,0,1,0]},{name:"Z-18",xAxis:[0,1,1,2],yAxis:[0,0,1,1]}],r=function(e){for(var s,t,a=e.length;0!==a;)t=Math.floor(Math.random()*a),s=e[a-=1],e[a]=e[t],e[t]=s;return e},l=r(["115, 106, 248","222, 61, 31","64, 229, 44","156, 44, 229","229, 220, 44","250, 165, 83","115, 106, 248","222, 61, 31","64, 229, 44","156, 44, 229","229, 220, 44","250, 165, 83"]),c=r([["assets/img/skills/html","assets/img/skills/css","assets/img/skills/javascript","assets/img/skills/csharp"],["assets/img/projects/honpron","assets/img/projects/rainyday","assets/img/projects/90snotebook","assets/img/projects/jag"],["assets/img/skills/mongo","assets/img/skills/express","assets/img/skills/react","assets/img/skills/node"],["assets/img/projects/calculator","assets/img/projects/charttest","assets/img/projects/pogs","assets/img/projects/flyingtoaster"],["assets/img/skills/rubyrails","assets/img/skills/wordpress","assets/img/skills/bootstrap","assets/img/skills/gimp"],["assets/img/projects/rambling","assets/img/projects/tictactoe","assets/img/projects/tomato","assets/img/projects/vgquote"],["assets/img/skills/github","assets/img/skills/webpack","assets/img/skills/vue","assets/img/skills/jqeury"]]),h=function(e,s,t,o){var i="linear-gradient(\n    rgba(".concat(t,", 0.5), rgba(").concat(t,', 0.5)\n  ), url("./').concat(o,'.jpg")');a.children().eq(e).children().eq(s).removeClass("empty").css("background",i).css("backgroundSize","cover")},d=function(e){for(var s,t,i=!0,n=0;n<4;n++)s=e.xAxis[n]+o[0],t=e.yAxis[n]+o[1],a.children().eq(s).children().eq(t).hasClass("empty")||(i=!1);return i},u=function(){a.empty(),function(){for(var e=0;e<5;e++){for(var s=$("<tr></tr>"),t=0;t<8;t++){var o=$("<td></td>").addClass("empty");s.append(o)}a.append(s)}}(),o=[0,0]},m=function(){i.length||n.forEach(function(e,s){i.push(s)});var e=Math.floor(Math.random()*i.length),s=i[e];return i.splice(e,1),n[s]},g=function(){o[1]++,o[1]===a.children().eq(0).children().length&&(o[1]=0,o[0]++)},f=function(e,s){var t=l[s],a=0,i="";do{i=m(),a++}while(a<20&&!d(i));20===a?p(e,s):(!function(e,s,t){for(var a=0;a<4;a++){var i=t[a];h(e.xAxis[a]+o[0],e.yAxis[a]+o[1],s,i)}}(i,t,e),g())},p=function(e,s){g(),f(e,s)},y=function(){u(),c.forEach(function(e,s){setTimeout(function(){f(e,s)},500*s)})},k=["Neth is a pretty good singer. He can sing high tenor on a good day, or low bass on a bad day.","Neth enjoys talking about video games. He and his friend host a podcast about Super NES games.","REM is one of Neth's favorite bands. 'Harborcoat' is one of his favorite REM songs.","Neth enjoys doing voices. He can do a pretty good impression of Prof. Farnsworth from Futurama.","St. Louis is Neth's hometown.","Neth and Ellen have a pair of adorable tuxedo cats. He will show you pictures if you ask.","The two cheeseburger meal is Neth's favorite McDonald's meal and he'll never be too good for it.","Places Neth likes to work: Non-Starbuck's coffee shops, his home office, Ikea.","Neth will kick your ass at karaoke.","Neth has a degree in philosophy from Boise State University and is damn proud of it!","Neth is trying to get better at drawing and painting, but he won't be as good at it as Ellen.","Neth still collects Pogs for some reason.","Neth and Ellen got married in the tea shop where they first met.","Neth Notes: Billionaires are not your friends.","Neth likes Breadtube!","Neth listens to WAY too many podcasts. He does not listen to Joe Rogan, stop asking!","For some reason, Neth has a strange fascination with screen savers from the 90s. Flying toasters forever!","Neth would be proud to get called an SJW.","Neth Notes: As a long-time Ghostbusters fan, I think that Ghostbusters remake was fine, actually.","Ever played a video game where you converse with a fish? Neth has. He really likes strange games.","Neth LOVES cartoons.","In another life, Neth would be a gameshow host.","Neth really likes to cook. Ellen likes to take leftovers to work to make her coworkers jealous.","Neth's only been out of the country twice. He's been to Japan and Ireland.","Despite living in the Pacific Northwest for over 20 years, Neth's never been to Canada.","Neth loves X-Men. He really likes Gambit, but admits the character can be problematic.","Neth probably still remembers the words to every song in RENT.","Ellen likes to remind Neth that he has ridiculously long legs.","Quote from Neth: Any day in which you pet puppy can't be all bad.",'If you were to ask Neth if he\'s a dog or cat person, he would answer "Yes."','Neth Notes: I would bet "The Adventures of Pete & Pete" still holds up.',"Neth isn't all that crazy about beer. He's more a cider or Scotch person.","Quotes from Neth: The fact that my mom can't figure out the internet is more our fault than her's.","Quotes from Neth: Super Mario World might be the closest thing possible to a perfect game.","Neth doesn't like to watch sports... except curling.","Neth is more of a Star Trek person than a Star Wars person.","Picard is still Neth's favorite Star Trek captain.","Quotes from Neth: There is no such thing as ethical capitalism.","Neth loves a capella music. He still throws on his old Rockapella cds from time to time.","Neth Notes: Technology is only as good or bad as what we use it for.","Things from St. Louis that Neth misses: fireflies, thunderstorms, their weird-ass pizza.",'Neth really likes pretty lights. His mom swears the first thing he ever said was "da light."',"Though he really liked it as a kid, Neth refueses to rewatch Power Rangers. That new comic's alright though.","Neth thought he liked anime, but turns out he just likes 'Cowboy Bebop.'","Neth Notes: We really need to do something about this social media before it gets us all killed.","Neth loves indie games and enjoys seeing new ways people tell stories through games.","Neth Notes: Unionize! Together we bargain, alone we beg.","Neth was in a boy band in high school and does not want to say anymore about that.","Neth Notes: Free speach advocates often don't want it for folks who disagree with them.","Neth prefers to take the train or walk over driving when he can.","Ellen drew the picture of Neth that you might have seen on this page!"],v=$("#nethFacts"),b=k.length,w=function(e){v.empty(),v.text(e)},x=function(){var e=Math.floor(Math.random()*b);w(k[e])},N=$(".skills-card-area"),A=[{title:"Full Stack Development",images:["mongo","express","react","node"],desc:"Full stack web design with Javascript is my bread and butter. I’ve built several full-stack applications in the MERN stack (that is MongoDB, Express, React, and Node.js) though I’ve also worked with Vue and Angular in the past. I’m always excited to try out new libraries to see what they can do."},{title:"Front End UX/UI",images:["html","css","javascript","bootstrap"],desc:"I love creating designs that really pop. No matter what your site is for, no one wants to have a boring web presence. I’m no stranger to frameworks like Bootstrap and Materialize, but I also enjoy just starting from scratch to create my own designs and constantly reading up on new ways to make a site stand out."},{title:"Web Content",images:["gimp","vegas","audacity","garageband"],desc:"Need help creating content for your sites? You’re in luck, because in my spare time, I like to use things like Sony Vegas, Garageband, and GIMP to create videos, podcasts, and images. I can even sing and make funny voices if that’s something you need for some reason."},{title:"And the Rest",images:["csharp","jekyll","rubyrails","wordpress"],desc:"So far, I’ve talked about what I use regularly, but I do like trying out new things and moving outside of my tech comfort zone. I’ve used a wide array of tools in the past (and probably will again), like Ruby on Rails, C#/.Net, Jekyll (hey, like this blog!), and Wordpress."}],j=window.location.origin+window.location.pathname,I=function(e){N.find("h3").hide(),N.find("h3").text(e.title),N.find("h3").fadeIn(),N.find(".skills-card-desc").hide(),N.find(".skills-card-desc").text(e.desc),N.find(".skills-card-desc").fadeIn();var s=$(".skills-card-images").clone(!0);e.images.forEach(function(e,t){var a="".concat(j,"assets/img/skills/").concat(e,".jpg");s.find(".skills-img").eq(t).attr("src",a)}),$(".skills-card-images").remove(),N.find("h3").after(s)},S=function(e){$(".skills-nav-dots span").removeClass("dot-active"),$(".skills-nav-dots span").eq(e).addClass("dot-active")},T=0,M=function(){3===T?T=0:T+=1,I(A[T]),S(T)},C=!1;$(window).scroll(function(){var e=$(window),s=$("main"),t=$("section"),a=$(".menu-link"),o=e.scrollTop();t.each(function(){var e=$(this);if(e.position().top<=o&&e.position().top+e.height()>o){var i=$(this).data("color"),n=e.data("number");s.removeClass(),s.addClass("color-"+i),a.removeClass("menu-active"),$('a[data-color="'+i+'"]').addClass("menu-active"),t.removeClass("visible-active");var r=$("section[data-color='"+i+"']");r.addClass("visible-active");var l=654*n;r.css("backgroundPosition","center top "+Math.round(-.2*(r.position().top-l))+"px"),"about"===i?C||(C=!0,x()):C=!1}})}).scroll(),$(".home-link").each(function(e){$(this).on("focus",function(){$.scrollTo($(".home-link").eq(e))})}),$(document).ready(function(){y();var e=!0,s=setInterval(M,1e4);$(".skills-play-pause").on("click",function(){e?(clearInterval(s),$(".skills-play-pause i").removeClass("fa-pause"),$(".skills-play-pause i").addClass("fa-play"),e=!1):(s=setInterval(M,1e4),$(".skills-play-pause i").removeClass("fa-play"),$(".skills-play-pause i").addClass("fa-pause"),e=!0)}),$(".skills-nav-dots span").each(function(e){$(this).on("keypress click",function(){I(A[T=e]),S(T)})})})}]);