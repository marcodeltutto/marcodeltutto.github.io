// document.addEventListener("DOMContentLoaded", function() {
//     new SweetScroll( {}
//     );
//     particlesJS("particles-js", {
//         particles: {
//             number: {
//                 value:30, density: {
//                     enable: !0, value_area: 800
//                 }
//             }
//             , color: {
//                 value: "#ffffff"
//             }
//             , shape: {
//                 type:"polygon", stroke: {
//                     width: 0, color: "#000000"
//                 }
//                 , polygon: {
//                     nb_sides: 5
//                 }
//                 , image: {
//                     src: "img/github.svg", width: 100, height: 100
//                 }
//             }
//             , opacity: {
//                 value:.5, random:!1, anim: {
//                     enable: !1, speed: 1, opacity_min: .1, sync: !1
//                 }
//             }
//             , size: {
//                 value:3, random:!0, anim: {
//                     enable: !1, speed: 19.18081918081918, size_min: .1, sync: !1
//                 }
//             }
//             , line_linked: {
//                 enable: !0, distance: 150, color: "#ffffff", opacity: .4, width: 1
//             }
//             , move: {
//                 enable:!0, speed:4, direction:"none", random:!0, straight:!1, out_mode:"out", bounce:!1, attract: {
//                     enable: !1, rotateX: 600, rotateY: 1200
//                 }
//             }
//             , nb:80
//         }
//         , interactivity: {
//             detect_on:"window", events: {
//                 onhover: {
//                     enable: !1, mode: "grab"
//                 }
//                 , onclick: {
//                     enable: !0, mode: "push"
//                 }
//                 , resize:!0
//             }
//             , modes: {
//                 grab: {
//                     distance:400, line_linked: {
//                         opacity: 1
//                     }
//                 }
//                 , bubble: {
//                     distance: 400, size: 40, duration: 2, opacity: 8, speed: 3
//                 }
//                 , repulse: {
//                     distance: 200, duration: .4
//                 }
//                 , push: {
//                     particles_nb: 4
//                 }
//                 , remove: {
//                     particles_nb: 2
//                 }
//             }
//         }
//         , retina_detect:!0
//     }
//     )
// }

// , !1);












var ctx = createCanvas("canvas1");
var number_of_balls = 50;
var balls = [];
var radius = 200;
ctx.lineWidth = 1;
var max_distance = 200;
var max_distance_neutrino = 200;
var speed_balls = 1;
var speed_neutrino = 2;

var neutrino = {
    x: 10,
    y: random(h),
    speed_x: random(0.2, 1) * speed_neutrino,
    speed_y: 0,
    size: 5,
    colour: rgb(153, 0, 0),
    angle: i * 360/number_of_balls
}

// push a ball and it's values into the array
for (var i = 0; i < number_of_balls; i++) {
  addBall(i);
}


function addBall(_i){
  var ball = {
    x: random(w),
    y: random(h),
    speed_x: posNeg() * random(0.2, 1) * speed_balls,
    speed_y: posNeg() * random(0.2, 1) * speed_balls,
    size: 3,
    colour: rgb(255),
    angle: i * 360/number_of_balls
  }
  balls.push(ball);
}

function draw(){

  ctx.background(26,34,44);

  moveBall();
  drawBall();

  ctx.fillStyle = neutrino.colour;



  neutrino.x += neutrino.speed_x;
  neutrino.y += neutrino.speed_y;
  ctx.fillEllipse(neutrino.x, neutrino.y, neutrino.size);
  if (bounce(neutrino.x, 0, w)) {
    neutrino.x = 0.1;
    neutrino.y = random(h);
  }
  // if (bounce(neutrino.y, 0, h)) neutrino.speed_y *=-1;

}


function moveBall(){

  for (var i = 0; i < balls.length; i++) {

    var b = balls[i];
    b.x += b.speed_x;
    b.y += b.speed_y;

    if (bounce(b.x, 0, w)) b.speed_x *=-1;
    if (bounce(b.y, 0, h)) b.speed_y *=-1;

  }

}


function drawBall(){
  for (var i = 0; i < balls.length; i++) {
    var b = balls[i];
    drawConnections(i);
    drawNeutrinoConnection(i);
    ctx.fillStyle = b.colour;
    ctx.fillEllipse(b.x, b.y, b.size);
  }
}

function drawConnections(_i) {

  for (var j = 0; j < balls.length; j++) {

    b1 = balls[_i];
    b2 = balls[j];
    if (j!=i) {
      if (dist(b1.x, b1.y, b2.x, b2.y) < max_distance) {
          normalised_distance = 1 -(dist(b1.x, b1.y, b2.x, b2.y) / max_distance);
          ctx.strokeStyle = rgb(160*normalised_distance);
          ctx.lineWidth=0.5;
          if (255*normalised_distance > 80) {
            ctx.line(b1.x, b1.y, b2.x, b2.y);
          }
      }
    }
  }

}


function drawNeutrinoConnection(_i) {

  for (var j = 0; j < balls.length; j++) {

    b1 = balls[_i];
    b2 = neutrino;
    if (j!=i) {
      if (dist(b1.x, b1.y, b2.x, b2.y) < max_distance_neutrino) {
          normalised_distance = 1 -(dist(b1.x, b1.y, b2.x, b2.y) / max_distance_neutrino);
          ctx.strokeStyle = rgb(153*normalised_distance, 0, 0);
          ctx.lineWidth=0.5;
          if (153*normalised_distance > 100) {
            ctx.line(b1.x, b1.y, b2.x, b2.y);
          }
      }
    }
  }

}
