//전역 변수
let pMan; //팩멘
let m1, m2, m3, m4; //몬스터 1, 2, 3
let scl = 20; //스케일
let playfield = 600; //맵 크기
let newgame;
let highscore = 0;

let mapData; //맵 데이터
let pointMap = []; //점수 
for (let i = 0; i < 30; i++) {
  pointMap[i] = new Array(30).fill(0); // 각 행을 0으로 초기화
}

// 맵 
let map_level1 = [
  [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
  [1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1], 
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1], 
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,1,1,1, 1,0,1,1,1, 1,0,1,1,1, 1,1,1,0,1, 1,1,1,0,1, 1,1,1,0,1],
  [1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
  [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1,1, 1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
];

function setup() {
  createCanvas(playfield, playfield + 40);
  background(51);
  frameRate(8);
  
  newGame();
}

function draw() {
  background(20);
  if(newgame) newGame();
  
  wall(mapData);
  drawPointMap(pointMap);
  
  pMan.show();
  pMan.update(mapData);
  pointEat(pointMap);
  
  m1.show();
  m1.update(mapData);
  m2.show();
  m2.update(mapData);
  m3.show();
  m3.update(mapData);
  m4.show();
  m4.update(mapData);
  
  pMan.death(m1);
  pMan.death(m2);
  pMan.death(m3);
  pMan.death(m4);
  
  scoreboard();
}

function newGame() {
  pMan = new obj(true);
  m1 = new obj(false);
  m2 = new obj(false);
  m3 = new obj(false);
  m4 = new obj(false);
  
  m1.x = 28 * scl;
  m1.y = 1 * scl;
  m2.x = 1 * scl;
  m2.y = 28 * scl;
  m3.x = 28 * scl;
  m3.y = 28 * scl;
  m4.x = 1 * scl;
  m4.y = 1 * scl;
  
  //기본 맵 1로 설정, 맵 그리기 점수 맵 생성
  mapData = map_level1;
  wall(mapData);
  createPointMap(mapData);
  drawPointMap(pointMap);
  newgame = 0;
}

function keyPressed() {
  if (keyCode === UP_ARROW){
      pMan.dir(0, -1);
      pMan.pacDir = PI*1.5;
  }else if (keyCode === DOWN_ARROW) {
      pMan.dir(0, 1);
      pMan.pacDir = PI*0.5;
  }else if (keyCode === RIGHT_ARROW) {
      pMan.dir (1, 0);
      pMan.pacDir = PI;
  }else if (keyCode === LEFT_ARROW) {
      pMan.dir (-1, 0);
      pMan.pacDir = 0;
  }
}

function obj(type) {
  // 객체의 상태에 관한 필드
  
  this.x = 220; //객체의 x 위치
  this.y = 220; //객체의 y 위치
  this.xspeed = 0; //x 방향 이동속도
  this.yspeed = 0; //y 방향 이동속도
  this.type = type;
  this.pacCount = 0;
  this.pacDir = PI;
  
  // 점수 필드
  this.score = 0;

  //객체의 이동방향을 정하는 메소드
  this.dir = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
 // 점수 얻는 메소드
  this.eat = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.score++;
      text(this.score, 70, 625);
      if (this.score > this.highscore) {
        this.highscore = this.score;
      }
      text(this.highscore, 540, 625);
      return true;
    } else {
      return false;
    }
  } 

  //몬스터와 만났을 때, 죽음 판정하는 메소드
  this.death = function(monster) {
    let d = dist(this.x, this.y, monster.x, monster.y);
    if (d < 1) {
      if (highscore < this.score) highscore = this.score;      
      this.score = 0;
      newgame = 1;
    }
  }
 
  //맵 데이터를 받아 객체를 이동시키는 메소드
  this.update = function(mapData) {
    //객체가 맵에 부딛히지 않을 때, 이동할 수 있게함.  
    if(mapData[this.x / scl + this.xspeed][this.y / scl + this.yspeed] == 0) {
        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;
    }
    if (!this.type) {
        switch (Math.floor(Math.random() * 4) + 1) {
          case 1:
            if (this.yspeed != 1) this.dir(0, -1);
            break;
          case 2:
            if (this.yspeed != -1) this.dir(0, 1);
            break;
          case 3:
            if (this.xspeed != -1)this.dir(1, 0);
            break;
          case 4:
            if (this.xspeed != 1) this.dir(-1, 0);
            break;
        }
    }
  }
  
  //객체를 그리는 메소드
  this.show = function(){
    if (this.type) { //팩맨 그림
      if (this.pacCount <= 3) {        
        push();
        fill(255, 255, 0);
        arc(this.x + scl/2, this.y + scl/2, scl, scl, -PI * 0.8 - this.pacDir, PI * 0.8 - this.pacDir, PIE);
        pop();
        this.pacCount++;
      } else {
        push();
        fill(255, 255, 0);
        circle(this.x + scl/2, this.y + scl/2, scl);
        pop();
        this.pacCount++;
        if (this.pacCount >= 6) this.pacCount = 0;
      }
    } else { //몬스터 그림
      push();
      fill(255);
      ghost(this.x + scl/2,this.y + scl/2);
      pop();
    }
  } 
}

//맵 데이터를 받아서 벽을 생성함
function wall(mapData) {
  push();
  noStroke();
  fill(70,0,255);
  for (let i = 0; i < playfield/scl; i++) {
    for (let j = 0; j < playfield/scl; j++) {
      if (mapData[i][j]) rect(i*scl, j*scl, scl, scl);
    }
  }
  pop();
}

function ghost(x,y){
  push();
  translate(x, y);
  scale(0.05);
  
  rect(-140,-180,280,300,360,360,0,0);
  beginShape();
  vertex(-140,100);
  bezierVertex(-140,190,-125,180,-115,160);
  bezierVertex(-90,110,-80,130,-70,150);
  bezierVertex(-50,190,-40,180,-30,160);
  bezierVertex(0,110,10,130,20,150);
  bezierVertex(40,190,50,180,60,160);
  bezierVertex(90,110,100,130,110,150);
  bezierVertex(135,190,140,180,140,100);
  endShape();

  fill(255,255,255);
  circle(90,-60,70);
  circle(-30,-60,70);
  
  fill(6,64,138);
  circle(105,-60,32);
  circle(-15,-60,32);
  pop();
}

function createPointMap(mapData) {
  for (let i = 0; i < playfield/scl; i++) {
    for (let j = 0; j < playfield/scl; j++) {
      if (mapData[i][j] == 0) pointMap[i][j] = 1;
    }
  }
}

function drawPointMap(pointMap) {
  push();
  noStroke();
  fill(255,255,0);
  for (let i = 0; i < playfield/scl; i++) {
    for (let j = 0; j < playfield/scl; j++) {
      if (pointMap[i][j]) rect(i*scl + 8, j*scl + 8, 4, 4);
    }
  }
  pop();
}

function pointEat(pointMap) {
  for (let i = 0; i < playfield/scl; i++) {
    for (let j = 0; j < playfield/scl; j++) {
      if (pointMap[i][j] === 1) {
        let d = dist(pMan.x, pMan.y, i * scl, j * scl);
        if (d < 1) {
          pointMap[i][j] = 0; // 포인트를 제거
          pMan.score += 10; // 점수 추가
        }
      }
    }
  }
}

function scoreboard() {

  fill(0);
  rect(0, 600, 600, 40);

  fill(255,255,255);
  textFont('Courier New');

  textSize(19);
  text("Score: ", 280, 625);
  text(pMan.score.toString(), 350, 625);
  text("Highscore: ", 420, 625)
  text(highscore.toString(), 535, 625)
}
