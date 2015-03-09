/**
 * Created by tripl3inf on 1/14/15.
 */

initMainMenu = function () {
  //$('#main_menu').center()

  var body = document.querySelector('body'),
    mainMenu = d3.select('#main_menu'),
    menuItem = mainMenu.selectAll('li'),
    portBtn = mainMenu.select('.works'),
    link = mainMenu.selectAll('a'),
    svg = menuItem.selectAll('svg'),
    circlePath1 = svg.selectAll('.center circle.center1'),
    circlePath2 = svg.selectAll('.center circle.center2'),
    ring1 = svg.selectAll('.ring1'),
    btns = svg.selectAll('.buttons > g'),
    btn_mail = svg.selectAll('.btn-mail'),
    mainMenuTL = new TimelineMax()
      .set(ring1, {transformOrigin: "50% 50%"})
      .staggerTo(menuItem[0], 1.5, {autoAlpha: 1}, 0.3, 'ringS1')
//      .staggerTo(ring1, 1.5, {autoAlpha: 0.5}, 0.4, 'ringS1')
      .staggerTo(ring1, 1.5, {directionalRotation: "90_cw", ease: Back.easeOut}, 0.3, 'ringS1')

  TweenLite.set(circlePath1, {drawSVG: 0, transform: 'rotate(90deg)', transformOrigin: "50% 50%"})
  TweenLite.set(circlePath2, {drawSVG: 0, transform: 'rotate(-90deg)', transformOrigin: "50% 50%"})

  var backBtn = d3.select('.port_arw'),
    arw = backBtn.select('.arw'),
    arwHvrTL = new TimelineLite({paused: true})
      .to(arw, .4, {stroke: '#9933FF'})

  arwTL = new TimelineLite({paused:true})
    .set(backBtn, {display: 'block'})
    .set(arw, {drawSVG: 0})
    .to(arw, .8, {drawSVG: '100%', autoAlpha: .7});

  backBtn.on('mouseover', function () {
    arwHvrTL.play()
  })
    .on('mouseout', function () {
      arwHvrTL.reverse()
    })
    .on('mousedown', function () {
      arwTL.reverse()
      portClose()
      openMenu();
    })

  menuItem.each(function (d, i) {
    var $this = this,
      hoverTL = new TimelineLite({paused: true}),
      targetPath = circlePath1[i][0],
      targetPath2 = circlePath2[i][0],
      targetRing = ring1[i][0];
    if (i === 0) {
      hoverTL.to(btns[0][0], .3, {x: '-=85px', autoAlpha: '1'}, 0)
        .to(btns[0][1], .3, {x: '-=75px', y: '+=45px', autoAlpha: '1'}, 0.2)
        .to(btns[0][2], .3, {x: '-=40px', y: '+=65px', autoAlpha: '1'}, 0.4);
    }
    hoverTL.to(targetPath, 1, {autoAlpha: 0.3}, 0)
      .to(targetPath2, 1, {autoAlpha: 0.7}, 0)
      .fromTo(targetPath, 1, {drawSVG: '0'}, {drawSVG: '100%'}, 0)
      .fromTo(targetPath2, 1, {drawSVG: '0'}, {drawSVG: '100%'}, 0)
      .to(targetRing, 0.7, {autoAlpha: 0.7, stroke: '#9A40FF', directionalRotation: "0_short"}, 0)
      .to(link[0][i], 0.5, {color: '#aaff00'}, 0.3)
    $this.animation = hoverTL;
  })

  link.on('click', function () {
    d3.event.preventDefault();
  })

  // hover event
  menuItem.on("mouseenter", function () {
    //if (!mainMenuTL.isActive()) {
      this.animation.play()
    //}
  })

  menuItem.on("mouseleave", function () {
    this.animation.reverse().timeScale(1.5)
  })

  menuItem.on('mousedown', function(d, i) {
    d3.event.preventDefault();
  })

  btn_mail.on("mousedown", function() {
    //contactTL.play();
    closeMenu(loadContact());
  })

  portBtn.on("mousedown", function() {
    closeMenu(portOpen());
    console.log('port btn down')
  })





  closeMenu = function () {
    var hideMenu = function(){
      TweenLite.set(mainMenu, {display: 'none'})
      TweenLite.set($('body'), {overflow: 'scroll'});
     arwTL.play();
    }
    var closeAnimation = new TweenMax.staggerTo(menuItem[0],.8, {autoAlpha: 0, onComplete: hideMenu}, .4);
  }

  openMenu = function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    arwTL.reverse();
    TweenLite.set($('body'), {overflow: 'hidden'})
    TweenLite.set(mainMenu, {display: 'block'})
    var openAnimation = new TweenMax.staggerTo(menuItem[0],.8, {autoAlpha: 1}, .4);
  }

  return mainMenuTL;

}



