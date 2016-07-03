TweenMax.to("#Umbrella", 20,  {
  rotation:360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

TweenMax.staggerTo(".bird", 10, {
  opacity: 1,
  x: 3,
  y: 5,
  repeat: -1,
  yoyo: true,
  ease: Linear.easeNone
}, 10);

TweenMax.staggerTo(".stars", 5, {
  opacity: 1,
  repeat: -1,
  yoyo: true,
  ease: Linear.easeNone
}, 3);

TweenMax.staggerTo(".lines", 16, {
  opacity: 1,
  repeat: -1,
  yoyo: true,
  ease: Linear.easeNone
}, 3);

TweenMax.to("#Light", 7, {
	css: {fill: "#5c7999"},
	yoyo: true,
	repeat: -1,
	ease: Linear.easeNone
});

var messages = new TimelineMax({repeat: -1, delay: 2, repeatDelay: 2});
messages.to("#Bottom_Chat", 4, {y: -39})
	.to("#Top_Chat", 2, {opacity: 0}, 0)
	.to("#Top_Chat", 0, {y: 39}, 2)
	.to("#Top_Chat", 4, {opacity: 1}, 2)
	.to("#Bottom_Chat", 2, {opacity: 0}, 6)
	.to("#Top_Chat", 4, {y: 0}, 6)
	.to("#Bottom_Chat", 0, {y: 0}, 8)
	.to("#Bottom_Chat", 2, {opacity: 1}, 8);