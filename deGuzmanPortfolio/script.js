


var tl = new TimelineMax();

var animation1 = tl.from('#leafs1, #leafs2', 0.3, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
 
  .from('#stem1, #stem2', 0.3, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut}) 
  
  .from('#lowerpetals1, #lowerpetals2, #lowerpetals3', 0.6, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut})
 
  .from('#upperpetals1, #upperpetals2, #upperpetals3', 0.6, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut})


$('.play').click(function() {
    if (!animation1.isActive()) { 
  animation1.play(0);

}
})

