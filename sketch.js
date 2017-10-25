// boolean to store whether to move to next or not
var moveToNext;

// boolean to store whether or not to move backwards
var moveBackwards;

// height of the text screen
var txtScreenH;

// border image
var border;

// arrays containing scene scripts
var scene1;
var scene1a;
var scene1b;
var scene2;
var scene3;

var script;

// counter for which page of script you're on
var scriptCount;

// counter for scenes
var scene;

// location of text
var textLoc;

// images for different backgrounds
var bedroom;
var corridor;
var office;
var stairs;
var reporter;
var report;
var weird;
var phone;
var phoneBackground;
var phoneScreen;

// images for clicking
var drawers;
var remote;

// array to store background names
var backgroundName;

var option1;
var option2;
var option3;

// booleans for which option you picked
var a;
var b;

// sets margin for textbox
var txtMargin;

// loads poiret font
var poiret;

// font size
var textSize1;

// booleans to control navigation
var goUpstairs;
var goDownstairs;

// counts hp status of stairs
var hit;
var stairsStatus;

// records where you chose to look
var drawersSelected;

// script for different types of media
var labReport;
var news;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here

    hit = 0;

   frameRate(300);

    moveToNext = false;
    moveBackwards = false;
    scene1 = ["...", ".......", "Where am I?"];
    scene1a = ["What happened last night?",
"I try to recall details - anything, a date, a person, how plates of hash browns I had for breakfast - but it’s hard to concentrate when you feel like you’ve been attacked by a particularly vengeful horde of bricks.",
"Ouch… did I get mugged or something?"];
    scene2a = ["Defeat the THE STAIRS™! (Press 'H' to attack)", "asdlgjaskdgjaskldfjaskldfjasd fiNALLY!!!",
  "After what seems like an infinity, I enter what appears to be an immaculately organised office."];
    scene3 = ["Hmmm…. Dr. I.M. Scrood… there’s something about that name",
  "!!!!", "Wait… that’s my name!", "Yesterday… what on earth happened yesterday?",
"I need to do something, I should..."];
    option1 = ["1) Try and recall what happened last night.", "2) Who cares? Go back to sleep."];
    option2 = ["Whatever, I guess I should probably look around."];
    option3 = ["Hmmmm... I should look at the..."];
    option4 = ["1) Open the window", "2) Check my phone"]
    labReport = ["There appears to be a document of some kind.", "Examinitis treatment: Stage 1 observations",
  "Subjects seemed to have recovered from initial symptoms. Respiratory and heart rates have stabilised.",
"Certain subjects have begun to exhibit strange symptoms such as foaming at the mouth, biting other subjects and sporadic violent tendencies. At 17:20 Subject 666 reportedly attempted to cannibalise other subjects.",
"Treatment results highly variable. Proceeding to stage 2 testing too dangerous.",
"Well, I guess I could be a researcher of some sort? Better look around for more clues. Wait... what's that sound?"];
    news = ["Live from the capital, Cantberra, this is Mindy Leslie from FML news.",
  "Last week, medical researchers from the AHNO Medical School, lead by Dr. I. M. Scrood, claimed to have discovered a cure for examinitis, a deadly disease characterised by severe anxiety followed by lung failure and cardiac arrest.",
"Currently, Secret Operational Services are investigating the probability of “examinitis” being a form of biological warfare, inflicted by foreign states.",
"Due to preliminary trials’ astonishing results, President Dick Tater has issued an executive order to move onto stage two testing.",
"'When young people are powerful, the Party and People’s army are powerful. Soon there will be nothing for us to afraid of - not even examinitis.'",
"At 5am today, floating “fluff” microbots were released into air, granting all civilians who inhale them, immunity.",
"Civilians are advised to keep their windows open at all time, and take walks, maximising chances of exposure."];
    scriptCount = 0;
    txtScreenH = 200;
    txtMargin = 20;
    border = loadImage("assets/border.png");
    bedroom = loadImage("assets/bed3.jpg");
    corridor = loadImage("assets/corridor.jpg");
    office = loadImage("assets/office.jpg");
    stairs = loadImage("assets/stairs.jpg");
    report = loadImage("assets/labreport.jpg");
    reporter = loadImage("assets/reporter.jpg")
    phone = loadImage("assets/phone.png");
    weird = loadImage("assets/trippy.jpg");
    phoneBackground = loadImage("assets/phonebkg.jpg");


    drawers = loadImage("assets/drawers.jpg");
    remote = loadImage("assets/remote.png");


    backgroundName = ["#ffffff", bedroom, corridor, office];
    textLoc = [txtMargin*2.25, windowHeight-txtScreenH+txtMargin*2];
    a = false;
    b = false;
    scene = 1;
    goUpstairs = false;
    goDownstairs = false;
    drawersSelected = false;

    drawersX = 100;
    drawersY = 100;

    hit = 0;
    stairsStatus = "alive";

    poiret = loadFont("assets/PoiretOne-Regular.ttf");
    textSize1 = 20;
}

function draw() {
    // your "draw loop" code goes here

    if (scriptCount <= 3) {
      background(0,0,0);
    } else if (scene == 1 || scene == "1a" || scene == "1b") {
      background(bedroom);
    } else if (scene == 2 && scriptCount-7 < 3) {
      background(stairs);
    } else if (scene == 2) {
      background(office);
    } else if (scene == "labreport" && scriptCount <= 16) {
      background(report);
    } else if (scene == "news" || scene == "labreport") {
      background(reporter);
    } else if (scene == 3) {
      background(weird);
    }

    fill(0,0,0);
    text(moveToNext, 10, textSize1);
    text(moveBackwards, 10, textSize1*2);
    text(scriptCount, 10, textSize1*3);
    text(a, 10, textSize1*4);
    text(b, 10, textSize1*5);
    text(scene, 10, textSize1*6);
    text(mouseX, 10, textSize1*7);
    text(mouseY, 10, textSize1*8);

    fill("#ffffff");
    strokeWeight(5);
    rect(20, windowHeight-txtScreenH, windowWidth-txtMargin*2, txtScreenH-txtMargin);
    // image(border, 0, windowHeight-txtScreenH, border.width/1.58, border.height/4.8);

    if (a && scene == 1) {
      scene = "1a";
      a = false;
    } else if (b && scene == 1) {
      scene = "1b";
      b = false;
    } else if (a && scene == "1a") {
      scene = 2;
      a = false;
    } else if (scene == "news" && scriptCount > 17) {
      scene = 3.1;
    } else if (scene == "labreport" && scriptCount >= 24) {
      scene = 3;
    } else if (scene == 3 && b) {
      scene = "phone";
    }

    fill(0,0,0);
    textFont(poiret, textSize1);

    if (scriptCount == scene1.length) {
      // go to sleep option
      text(option1[0], textLoc[0], textLoc[1], windowWidth-80, 100);
      text(option1[1], textLoc[0], textLoc[1]+textSize1*2, windowWidth-80, 100);
    } else if (scriptCount == scene1.length+scene1a.length+1 && scene == "1a") {
      // go upstairs and downstairs option
      image(stairs, 0, 0, windowWidth/3, windowHeight);
      image(corridor, windowWidth*2/3, 0, windowWidth/3, windowHeight);

     if (mouseX < windowWidth/3 && mouseY < windowHeight-txtScreenH) {
       image(stairs, 0, 0, windowWidth/3+frameCount*3%windowWidth*2/3, windowHeight);
       if (frameCount*3 > windowWidth*2/3) {
         scene = 2;
       }
     } else if (mouseX > windowWidth*2/3 && mouseY < windowHeight-txtScreenH){
       image(corridor, windowWidth*2/3 - frameCount*3%600, 0, windowWidth*2/3+frameCount*3%windowWidth*2/3, windowHeight);
       goDownstairs = true;
       if (frameCount*3 > windowWidth*2/3) {
         scene = "2b";
       }
     }

      fill("#ffffff");
      strokeWeight(5);
      rect(20, windowHeight-txtScreenH, windowWidth-txtMargin*2, txtScreenH-txtMargin);
      fill(0,0,0);
      text(option2[0], textLoc[0], textLoc[1], windowWidth-80, 100);
    } else if (scene == 2 && scriptCount == 7+scene2a.length) {
      // look around option
      text(option3[0], textLoc[0], textLoc[1], windowWidth-80, 100);
      if (mouseX >= windowWidth/3 && mouseX <= windowWidth/3+100
      && mouseY >= windowHeight/2 && mouseY <= windowHeight/2+100) {
        scene = "labreport";
        scriptCount++;
    } else {
      image(drawers, windowWidth/3, windowHeight/2, 100, 100);
    }
    if (mouseX >= windowWidth/2 && mouseX <= windowWidth/2+50
    && mouseY >= windowHeight/2 && mouseY <= windowHeight/2+100) {
      scene = "news";
      scriptCount++;
    } else {
    image(remote, windowWidth/2, windowHeight/2, 50, 100);
  }
    } else if (scene == 1 && scriptCount <= 3) {
      text(scene1[scriptCount], textLoc[0], textLoc[1], windowWidth-80, 100);
    } else if (scene == "1a" && scriptCount-4 < scene1a.length) {
      if (scriptCount == scene1.length+scene1a.length) {
        textFont(poiret, textSize1*2.2);
        text(scene1a[scriptCount-4], textLoc[0], textLoc[1], windowWidth-80, 100);
        textFont(poiret, textSize1);
      } else {
      text(scene1a[scriptCount-4], textLoc[0], textLoc[1], windowWidth-80, 100);
       }
    } else if (scene == 2 && scriptCount-7 < scene2a.length) {
      if (stairsStatus == "alive") {
        if (hit < 10) {
          fill("#1DFF83");
          rect(windowWidth-250, 20, 200, 20);
          fill(0,0,0);
          rect(windowWidth-250, 20, 20*hit, 20);
          text(scene2a[0], textLoc[0], textLoc[1], windowWidth-80, 100);
          scriptCount = 7;
        } else {
          stairsStatus = "dead";
          scriptCount++;
          text(scene2a[scriptCount - 7], textLoc[0], textLoc[1], windowWidth-80, 100);
        }
      } else {
        background(office);
        text(moveToNext, 10, textSize1);
        text(moveBackwards, 10, textSize1*2);
        text(scriptCount, 10, textSize1*3);
        text(a, 10, textSize1*4);
        text(b, 10, textSize1*5);
        text(scene, 10, textSize1*6);
        fill("#ffffff");
        strokeWeight(5);
        rect(20, windowHeight-txtScreenH, windowWidth-txtMargin*2, txtScreenH-txtMargin);
        fill(0,0,0);
        text(scene2a[scriptCount - 7], textLoc[0], textLoc[1], windowWidth-80, 100);
      }
    } else if (scene == "labreport" && scriptCount <= 16) {
      // sets labreport scene
      text(labReport[scriptCount-11], textLoc[0], textLoc[1], windowWidth-80, 100);
    } else if (scene == "labreport" && scriptCount < 24) {
      text(news[scriptCount - 17], textLoc[0], textLoc[1], windowWidth-80, 100);
    } else if (scene == "news" && scriptCount - 11 < news.length) {
      text(news[scriptCount-11], textLoc[0], textLoc[1], windowWidth-80, 100);
    } else if (scene == "1b" && scriptCount-4 < scene1b.length) {
      text(scene1b[(scriptCount-4)], textLoc[0], textLoc[1], windowWidth-80, 100);
    } else if (scene == 3 && scriptCount - 24 < scene3.length) {
      if (scriptCount == 28) {
        text(scene3[scriptCount-24], textLoc[0], textLoc[1], windowWidth-80, 100);
        text(option4[0], textLoc[0], textLoc[1]+textSize1, windowWidth-80, 100);
        text(option4[1], textLoc[0], textLoc[1]+textSize1*2, windowWidth-80, 100);
      }
      text(scene3[(scriptCount-24)], textLoc[0], textLoc[1], windowWidth-80, 100);
    } else if (scene == 3.1 && scriptCount - 17 < scene3.length) {
      text(scene3[scriptCount - 17], textLoc[0], textLoc[1], windowWidth-80, 100);
    } else if (scene == "phone") {
      background("#ffd1e5");
      image(phone, windowWidth*3/8, windowHeight/20, windowWidth/4, windowHeight*9/10)
      fill("#d2f5f7");
      image(phoneBackground, windowWidth*3/8+30, windowHeight/20+100, windowWidth/4-55, windowHeight*9/10-200);
      fill("#ffffff");
      textSize(40);
      text("17:20", windowWidth*3/8+windowWidth/8-55, windowHeight/10+110);
      textSize(20);
      text("Dr. I.M. Scrood's phone", windowWidth*3/8+80, windowHeight/10+140)
      notification(windowWidth*3/8+40, windowHeight*3/20+120, "3 texts from Honeybunny xoxox");
      notification(windowWidth*3/8+40, windowHeight/4+120, "1 missed call from Dr. Nerva Sorek");

    }
     else if (scene == "1b" && scriptCount-4 >= scene1a.length) {
      background(0,0,0);
      fill("#ffffff");
      text("YOU DEAD", windowWidth/2-100, windowHeight/2);
      text("Press 'r' to reset game.", windowWidth/2-100, windowHeight/2+textSize1);
    } else {
      background("#ffffff");
      text("ERROR", windowWidth/2-100, windowHeight/2);
      text("Press 'r' to reset game.", windowWidth/2-100, windowHeight/2+textSize1);
    }
}



function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    // TODO: need to include total length later
    if (scriptCount+1 <= 40) {
    moveToNext = true;
    scriptCount++;
    moveToNext = false;
  }
  }

  if (keyCode == LEFT_ARROW) {
    if (scene == "1a" || scene == "1b" && scriptCount-1 <= 4) {
      scriptCount == 4;
    } else if (scriptCount-1 >= 0) {
    moveBackwards = true;
    scriptCount--;
    moveBackwards = false;
  }

  }

  if (keyCode == UP_ARROW) {
   b = false;
   a = true;
   scriptCount++;
 } else if (keyCode == DOWN_ARROW){
   a = false;
   b = true;
   scriptCount++;
 }
}

function keyTyped() {
  if (key == 'r') {
    window.location.reload();
  }
  if (key == 'h') {
    if (hit < 10) {
      hit++;
    } else {
      hit = 10;
    }
  }
}

function speechBubble(x, y, something) {
  noStroke();
  fill("#ffffff")
  translate(x, y);
  rect(0, 0, windowWidth/4*0.8, windowHeight/10*0.8);
  triangle(windowWidth/4*0.8-(windowWidth/4*0.8)/10, windowHeight/10*0.8,
   windowWidth/4*0.8, windowHeight/10*0.8,
       windowWidth/4*0.8, windowHeight/10*0.8+(windowHeight/10*0.8)/3);
  fill(0,0,0);
  text(something, 20, 15, (windowWidth/4*0.8)-10, (windowHeight/10*0.8)-10);
  translate(-x, -y);

}

function notification(x, y, something) {
  noStroke();
  fill("#ffffff")
  translate(x, y);
  rect(0, 0, windowWidth/4*0.8, windowHeight/10*0.8);
  fill(0,0,0);
  text(something, 15, 15, (windowWidth/4*0.8)-10, (windowHeight/10*0.8)-10);
  translate(-x, -y);

}
