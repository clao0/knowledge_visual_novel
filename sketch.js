// boolean to store whether to move to next or not
var moveToNext;

// height of the text screen
var txtScreenH;

// arrays containing scene scripts
var scene1;
var scene1a;
var scene1b;
var scene2;
var scene3;
var escape;
var wait;
var takeHer;
var ending;
var goodEnding;
var badEnding;

// arrays containing death scene scripts
var deathScene1;
var deathScene2;
var deathScene3;

// counter for which page of script you're on
var scriptCount;

// counter for scenes
var scene;

// array holding location of texts
var textLoc;

// images for different backgrounds
var bedroom;
var office;
var stairs;
var reporter;
var report;
var weird;
var phone;
var phoneBackground;
var phoneScreen;
var phoneCall;
var tunnel;
var basement;
var woman;
var door;
var lab;
var cityView;
var boxer;
var happy;
var socialMedia;

// images for sfx
var target;

// images for clicking
var drawers;
var remote;
var shadow;

// image for weapon
var echo360;

// var to store scripts for options
var option1;
var option2;
var option3;
var option4;
var option5;
var option6;
var option7;
var option8;

// booleans for which option you picked
var a;
var b;

// sets margin for textbox
var txtMargin;

// loads poiret font
var poiret;

// stores font size
var textSize1;

// counts hp status of stairs
var hit;
var stairsStatus;

// counts hp status of door
var doorStatus;
var hit2;

// script for different types of media
var labReport;
var news;
var messages;
var voicemail;

// tracks whether you've read the messages/report
var readMessages;
var readReport;

// sound effects
var newsIntro;
var textAlert;
var punch;
var gunshot;
var dialling;

// background Music
var shotgun;
var flight;

// counts how many times sfx has been played
var newsPlay;
var textPlay;

// counts how many times dialtone has rung
var dialCount;

// set up sound
function preload() {
  newsIntro = loadSound("assets/newsIntro.mp3");
  textAlert = loadSound("assets/textAlert.mp3");
  shotgun = loadSound("assets/shotgun.mp3");
  punch = loadSound("assets/punch.mp3");
  shotgun = loadSound("assets/shotgun.mp3");
  flight = loadSound("assets/flight.mp3");
  dialling = loadSound("assets/dial.wav");
  gunshot = loadSound("assets/gunfire.mp3")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    hit = 0;
    dialCount = 0;


            textLoc = [txtMargin*2.25, windowHeight-txtScreenH+txtMargin*2];
            a = false;
            b = false;
            scene = 1;
            
        newsPlay = 0;
        textPlay = 0;
        scriptCount = 0;
        txtScreenH = windowHeight/3.66;
        txtMargin = txtScreenH/10;
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
        phoneCall = loadImage("assets/phoneCall.jpg");
        tunnel = loadImage("assets/tunnel.jpg");
        basement = loadImage("assets/basement.jpg");
        echo360 = loadImage("assets/echo360.jpg");
        woman = loadImage("assets/woman.jpg");
        door = loadImage("assets/door.jpg");
        splinters = loadImage("assets/splinters.png");
        lab = loadImage("assets/lab.jpg");
        cityView = loadImage("assets/cityView.jpg");
        shadow = loadImage("assets/shadow.png");
        target = loadImage("assets/target.png");
        boxer = loadImage("assets/boxer.jpg");
        socialMedia = loadImage("assets/socialMedia.jpg");
        happy = loadImage("assets/happy.jpg");

        drawers = loadImage("assets/drawers.jpg");
        remote = loadImage("assets/remote.png");

        readReport = false;

        stairsStatus = "alive";
        doorStatus = "alive";

        poiret = loadFont("assets/PoiretOne-Regular.ttf");
        textSize1 = windowHeight/36.6;

   frameRate(300);

    readMessages = false;
    moveToNext = false;
    moveBackwards = false;

    // scripts for scenes
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
    option4 = ["1) Open the window", "2) Check my phone"];
    option5 = ["1) Listen to the voicemail", "2) Open the windows",
  "1) Read the messages", "2) No, I need to escape now", "1) Open the windows", "2) Escape now"];
    option6 = ["1) Shoot immediately", "2) Wait and see"];
    option7 = ["1) She's dangerous, shoot her now.", "2) Take her with you."];

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
    messages = ["Hey babe ;) So excited for our dinner tonight",
  "Cant believe its already been 5 years",
"So proud of u even the Prez approves of ur work!!",
"Just be sure to open ur windows ok dont want you coming down with examinitis haha"];
   voicemail = ["Dr. Scrood, I hope you’re feeling alright.",
"I’m not sure if you’ll remember this but you were assaulted by one of the test subjects. We managed to restrain her before any significant damage was done, but you must be feeling a bit under the weather.",
"Nevertheless, now is no time to wait. President Tater has gone insane!",
"The military forcibly seized the “fluff” microbots this morning and implemented stage 2 testing.",
"You need to escape. Now.",
"There’s an underground tunnel from your basement leading to the laboratory. It’s the only place in Cantberra free of the fluff now.",
"We’ve installed an app on your phone - Zone B - which takes information from social media site Chitter and sends alerts if there are any sightings of the infected within a 200 m radius.",
"Bring a weapon. The Echo360 is at tunnel’s entrance."];
   escape = ["As an expert, Dr. Sorek sounds far more trustworthy than “Honeybunny” or President Tater’s propaganda. I guess I better take my chances.",
 "Hurrying downstairs, I notice a strange contraption hanging by the door.",
"Hmmm…. I supposed this must be the Echo360? I pick it up.",
"“WARNING: HIGHLY LETHAL. CONTAINS 3 SHOTS”",
"Guess I better ration out my usage then.",
"The tunnel gives off an eerie vibe, but I suppose that’s supposed to be expected when you’re essentially in the middle of a zombie apocalypse.",
"This is a very grave situation indeed.",
"I might just drop dead from anxiety.",
"!!!", "'You have notifications from Zone B'",
"District ETN? Hang on, that's where I am.",
"I freeze. There’s the sound of footsteps approaching.",
"Wait… that couldn’t be a... could it?"];
wait = ["I decide to bide my time and wait - it’s always better to be safe than sorry.",
"As the figure approaches, I realise it’s not so foreign after all.",
"'Snugglemuffin, is that you?''",
"'You didn't answer any of my messages, and I was worried to death - so I came looking for you.'",
"'Everyone outside was behaving so weirdly though...'",
"'They kept screaming stuff like 'brainnnnnnnnssssssssssss' and trying to grab me.'",
"'Guess being a professional MMA fighter pays off right?''",
"I pause. 'Hang on... so you were outside? And inhaled the fluff?'",
"'Yeah, totally. I didn't want to catch examinitis right?'",
"How on earth can she still be ok? The effects of fluff are supposed to be immediate. What on earth...?"];
takeHer = ["I should probably take her with me to the lab - we’ll be able to properly examine her there.",
"Besides if anything goes wrong I always have the Echo360 with me.",
"'There's no time to talk - we need to get going now.'",
"Hurrying along the tunnel, we make our way to the end... only to be confronted with a barricaded door.",
"'Well... I guess we have no choice but the break it down. What a pity. Lovely door.' Honeybunny says, with a dangerous grin on her face."];

ending = ["At last, we entered the lab.",
"Turns out they had barricaded the door after getting the Zone B alert, but evidently it had turned out to be a false alarm.",
"After informing them of Honeybunny’s circumstances, we rushed her to the lab, to undergo extensive testing. Being apart for a grand total of 2 hours was excruciatingly painful, but I cried gushing waterfalls of tears for its entirety but I reminded myself it was for the good of mankind.",
"When the results came back, we were absolutely shocked. Turns out her frequent consumption of energy drink “Blue Buffalo” had saved her.",
"While “blue buffalo” was in one’s system, it rendered them immune to the nefarious effects of fluff."];
option8 = ["Dr. Sorek turned to me. 'Dr. Scrood, what do you think we should do?'",
 "1) Hack into FML news and broadcast the info", "2) Make a Bookface post - it can't wait!"];
goodEnding = ["“Live from FML news this is Mind-”",
"“Hello fellow citizens. This is Dr. I. M. Scrood from the AHNO Medical school. I regret to inform you that there has been some misleading information regarding stage 2 testing…”",
"After the broadcast, all hell broke loose. The civilians were outraged - how could they not when their very own President had lied to them, and attempted to slaughter his own people?",
"People began sharing Blue Buffalo between their friends, their acquaintances and slowly by slowly, both the outbreak of fluff and examinitis began to recede.",
"However, things did not go as planned for President Dick Tater.",
"Outrage lead into protests, and protests eventually culminated in his impeachment… as well as a lifetime sentence of doing the laundry by hand for every civilian in the country."];
badEnding = ["“GUYS SDASLDFJASDLF PRESIDENT DICK TATER IS LYING SAVE YOURSELVES DRINK BLUE BUFFALO!!1”",
"Overcome by hysteria and emotion, our Bookface post didn’t really have the impact we intended, with the majority disregarding our message.",
"‘An energy drink curing examinitis? Next you’re going to be claiming the earth is flat.’",
"Negative comments kept pouring in - even in the midst of a zombie apocalypse people somehow managed to tell us to ‘go diE you insensitive donkey-butts’",
"The comments kept coming, and coming, and coming… until one day, they just didn’t.",
"It was then we realised that there was no one left to write them.",
"We were the only survivors left in Canberra.",
"We were completely alone."];

deathScene1 = ["Now, a reasonable person would probably try to pinpoint their surroundings or figure out exactly what’s going on.",
"BUT, “reasonableness” is overrated and this blanket’s fluffiness level is absolutely heavenly.",
"Also, it appears to be morning and only absolute freaks of nature willingly wake up before 3pm.",
"In fact, I feel like I could almost fall asleep… forever.",
"A wave of drowsiness hits, and you pull the blanket closer until it’s snug like a second skin. The tension drains out of your body, muscles relaxing as your breaths become deeper.",
"...In ",
"Out...",
"...In",
"Out...",
"...In"]; // never wake up

deathScene2 = ["Well, I guess I better do what the authorities have told me. What could possibly go wrong?",
"I open the window, taking a deep breath of fresh air.",
"Then I see them, glittering in the air like floating specks of sand. Millions, billions, trillions, of tiny fluff microbots.",
"I swallow. Something doesn’t feel quite right.",
"Frantically, I attempt to shut the window but they keep pouring in - an unrelenting storm.",
"I try to scream, but it comes out more like a strangled shriek. There is fluff lodged in my throat like millions of tiny daggers, and I can taste coppery hints of blood upon my tongue.",
"Spluttering, choking, gasping, I fall to the floor.",
"“I can’t believe Mindy Leslie just mindlessly lied to me.”",
"I die."]; // open the windows

deathScene3 = ["“Take that!” I scream as I fire all the shots of the Echo360 at the zombie.",
"Hmmmm I suppose I better inspect it to make sure it’s dead. Better safe than sorry.",
"!!!", "No, I’ve made a terrible mistake! This isn’t a zombie… it’s Honeybunny!",
"“Scrood, you paTHETIC PIECE OF DONKEY CURD!! WE DATE FOR 5 YEARS AND YOU mURDER ME IN COLD BLOOD ON OUR ANNIVERSARY???!!!”",
"“WELL, IF I’M GOING TO DIE I’M TAKING YOU WITH ME!!”",
"I watch in horror as Honeybunny pulls herself up from the ground, blood-soaked knuckles clenching into fists.",
"Suddenly, a flood of memories hit me - Honeybunny is no ordinary woman, she’s a 10-time MMA world champion.",
"I gulp."]; // shoot Honeybunny

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
      if(newsPlay == 0) {
        newsIntro.play();
        newsPlay++;
      }
      background(reporter);
    } else if (scene == 3 || scene == 3.1) {
      background(weird);
    } else if (scene == "voicemail") {
      background(phoneCall);
    } else if (scene == "escape" && scriptCount - 38 <= 4) {
      dialling.stop();
      if (!shotgun.isPlaying()) {
        shotgun.play();
      }
      background(basement);
      if (scriptCount - 38 >= 2 && scriptCount - 38 <= 4) {
        image(echo360, windowWidth/3, windowHeight/3, windowWidth/3, windowHeight/4);
      }
    } else if (scene == "escape") {
      background(tunnel);

      if (scriptCount >= 47) {
        if (textPlay == 1) {
          textAlert.play();
          textPlay++;
        }

        if (!shotgun.isPlaying()) {
          shotgun.play();
        }
        notification(windowWidth/6, windowHeight/6, "someone help surrounded by zombies in district etn please i just neeofjasdlif", 2);
        notification(windowWidth/2, windowHeight/3, "if ur in district etn gET OUT NOW RUN", 2);
      }

    } else if (scene == "wait") {
      shotgun.stop();

      if (scriptCount - 52 > 1) {
        background(woman);
      } else {
        background(tunnel);
      }
    } else if (scene == "take") {
      if (!shotgun.isPlaying()) {
        shotgun.play();
      }
      if (scriptCount - 63 == takeHer.length-1) {
        background(door);
      } else {
      background(tunnel);
    }
  } else if (scene == "ending") {
    shotgun.stop();
    background(lab);
  } else if (scene == "deathScene2") {
    background(cityView);
  } else if (scene == "deathScene3") {
    shotgun.stop();
    if (scriptCount - 51 <= 1) {
      background(tunnel);
    } else {
      background(boxer);
    }
  } else if (scene == "goodEnding") {
    if (scriptCount-74 == 0) {
      if (newsPlay == 1) {
        newsIntro.play();
        newsPlay++;
      }
      background(reporter);
    } else if (scriptCount-74 == 1) {
      background(report);
    } else {
      background(happy);
    }
  }
  else if (scene == "badEnding") {
    background(socialMedia);
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
    text(readMessages, 10, textSize1*9);

    fill("#ffffff");
    strokeWeight(5);
    rect(20, windowHeight-txtScreenH, windowWidth-txtMargin*2, txtScreenH-txtMargin);

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
      b = false;
    } else if (scene == 3.1 && b) {
      scene = "phone";
      scriptCount+=7;
      b = false;
    } else if (scene == 3 && a) {
      scene = "deathScene2";
      a = false;
    } else if (scene == 3.1 && a) {
      scene = "deathScene2"
      scriptCount+=7;
      a = false;
    }
    else if (scene == "voicemail" && scriptCount > 37 && a) {
      if (readMessages) {
        scene = "deathScene2";
        scriptCount-=10;
      } else {
      scene = "messages";
    }
    } else if (scene == "voicemail" && scriptCount > 37 && b) {
      scene = "escape";
      b = false;
    } else if (scene == "escape" && scriptCount > 51 && b) {
      scene = "wait";
      b = false;
    } else if (scene == "escape" && scriptCount > 51 && a) {
      scene = "shoot";
      a = false;
    } else if (scene == "wait" && scriptCount > 62 && b) {
      scene = "take";
      b = false;
    } else if (scene == "wait" && scriptCount > 62 && a) {
      scene = "shoot";
      scriptCount-=8;
      a = false;
    }else if (scene == "ending" && scriptCount >= 68+ending.length && a) {
      scene = "goodEnding";
      a = false;
    } else if (scene == "ending" && scriptCount >= 68+ending.length && b) {
      scene = "badEnding";
      b = false;
    }

    fill(0,0,0);
    textFont(poiret, textSize1);

    if (scriptCount == scene1.length) {
      // go to sleep option
      text(option1[0], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
      text(option1[1], textLoc[0], textLoc[1]+textSize1*2, windowWidth-windowWidth/19.175, windowHeight/7.32);
    } else if (scriptCount == scene1.length+scene1a.length+1 && scene == "1a") {
      // go upstairs and downstairs option
      image(stairs, 0, 0, windowWidth/2, windowHeight);


     if (mouseX < windowWidth/2 && mouseY < windowHeight-txtScreenH) {
       image(stairs, 0, 0, windowWidth/2+frameCount*10%windowWidth/2, windowHeight);
       if (frameCount*10 > windowWidth/2) {
         scene = 2;
       }
     }


      fill("#ffffff");
      strokeWeight(5);
      rect(20, windowHeight-txtScreenH, windowWidth-txtMargin*2, txtScreenH-txtMargin);
      fill(0,0,0);
      text(option2[0], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175,  windowHeight/7.32);
    } else if (scene == 2 && scriptCount == 7+scene2a.length) {
      // look around option
      text(option3[0], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175,  windowHeight/7.32);
      if (mouseX >= windowWidth/3 && mouseX <= windowWidth/3+windowWidth/15.34
      && mouseY >= windowHeight/2 && mouseY <= windowHeight/2+windowHeight/7.32) {
        scene = "labreport";
        scriptCount++;
    } else {
      image(drawers, windowWidth/3, windowHeight/2, windowWidth/15.34, windowHeight/7.32);
    }
    if (mouseX >= windowWidth/2 && mouseX <= windowWidth/2+windowWidth/30.68
    && mouseY >= windowHeight/2 && mouseY <= windowHeight/2+windowHeight/7.32) {
      scene = "news";
      scriptCount++;
    } else {
    image(remote, windowWidth/2, windowHeight/2, windowWidth/30.68, windowHeight/7.32);
  }
    } else if (scene == 1 && scriptCount <= 3) {
      text(scene1[scriptCount], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175,  windowHeight/7.32);
    } else if (scene == "1a" && scriptCount-4 < scene1a.length) {
      if (scriptCount == scene1.length+scene1a.length) {
        textFont(poiret, textSize1*2.2);
        text(scene1a[scriptCount-4], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
        textFont(poiret, textSize1);
      } else {
      text(scene1a[scriptCount-4], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175,  windowHeight/7.32);
       }
    } else if (scene == 2 && scriptCount-7 < scene2a.length) {
      if (stairsStatus == "alive") {
        if (!shotgun.isPlaying()) {
          shotgun.play();
        }
        if (hit < 10) {
          fill("#1DFF83");
          rect(windowWidth-windowWidth/6.136, windowWidth/76.6, windowWidth/7.67, windowWidth/76.6);
          fill(0,0,0);
          rect(windowWidth-windowWidth/6.136, windowWidth/76.7, windowWidth/76.7*hit, windowWidth/76.6);
          text(scene2a[0], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
          scriptCount = 7;
        } else {
          shotgun.stop();
          stairsStatus = "dead";
          scriptCount++;
          text(scene2a[scriptCount - 7], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
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
        rect(windowWidth/76.7, windowHeight-txtScreenH, windowWidth-txtMargin*2, txtScreenH-txtMargin);
        fill(0,0,0);
        text(scene2a[scriptCount - 7], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
      }
    } else if (scene == "labreport" && scriptCount <= 16) {
      // sets labreport scene
      readReport = true;
      text(labReport[scriptCount-11], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    } else if (scene == "labreport" && scriptCount < 24) {
      text(news[scriptCount - 17], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    } else if (scene == "news" && scriptCount - 11 <= news.length) {
      text(news[scriptCount-11], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    } else if (scene == "1b" && scriptCount-4 < deathScene1.length) {
      text(deathScene1[scriptCount-4], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    } else if (scene == 3 && scriptCount - 24 < scene3.length) {
      if (scriptCount == 28) {
        text(scene3[scriptCount-24], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
        text(option4[0], textLoc[0], textLoc[1]+textSize1, windowWidth-windowWidth/19.175, windowHeight/7.32);
        text(option4[1], textLoc[0], textLoc[1]+textSize1*2, windowWidth-windowWidth/19.175, windowHeight/7.32);
      } else {
      text(scene3[(scriptCount-24)], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    }
    } else if (scene == 3.1 && scriptCount - 17 < scene3.length) {
      if (scriptCount - 17 == scene3.length-1) {
        text(scene3[scriptCount-17], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
        text(option4[0], textLoc[0], textLoc[1]+textSize1, windowWidth-windowWidth/19.175, windowHeight/7.32);
        text(option4[1], textLoc[0], textLoc[1]+textSize1*2, windowWidth-windowWidth/19.175, windowHeight/7.32);
      } else {
      text(scene3[scriptCount - 17], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    }
    } else if (scene == "phone") {
      // displays phone
      background("#ffd1e5");
      image(phone, windowWidth*3/8, windowHeight/20, windowWidth/4, windowHeight*9/10)
      fill("#d2f5f7");
      image(phoneBackground, windowWidth*3/8+windowWidth/51.13, windowHeight/20+windowHeight/7.32, windowWidth/4-windowWidth/30.68, windowHeight*9/10-windowHeight/3.66);
      fill("#ffffff");
      textSize(textSize1*2);
      text("17:20", windowWidth*3/8+windowWidth/8-windowWidth/27.89, windowHeight/10+windowHeight/6.65);
      textSize(textSize1*0.8);
      text("Dr. I.M. Scrood's phone", windowWidth*3/8+windowWidth/19.175, windowHeight/10+windowHeight/5.229, )
      notification(windowWidth*3/8+windowWidth/38.35, windowHeight*3/20+windowHeight/6.1, "4 texts from Honeybunny xoxox", 1);
      notification(windowWidth*3/8+windowWidth/38.35, windowHeight/4+windowHeight/6.1, "1 missed call from Dr. Nerva Sorek", 1);

     readMessages = true;

// controls whether to choose voicemail or messages
      if (mouseX >= windowWidth*3/8+windowWidth/38.35 && mouseX <= ((windowWidth*3/8+windowWidth/38.35)+windowWidth/4*0.8)
    && mouseY >= windowHeight*3/20+windowHeight/6.1 && mouseY <= (windowHeight*3/20+windowHeight/6.10)+windowHeight/10*0.8) {
      scene = "messages";
    }  else if (mouseX >= windowWidth*3/8+windowWidth/38.35 && mouseX <= ((windowWidth*3/8+windowWidth/38.35)+windowWidth/4*0.8)
    && mouseY >= windowHeight/4+windowHeight/6.1 && mouseY <= (windowHeight/4+windowHeight/6.1)+windowHeight/10*0.8) {
      scene = "voicemail";
    }
} else if (scene == "voicemail" && scriptCount - 31 <= voicemail.length) {
  // controls voicemail + sound
  if (dialCount == 0) {
    silence();
    dialling.play();
    dialCount++;
  }
  if (scriptCount - 29 == voicemail.length) {
    text("Hmmm... I should", textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    if (readMessages) {
    text(option5[4], textLoc[0], textLoc[1]+textSize1, windowWidth-windowWidth/19.175, windowHeight/7.32);
    text(option5[5], textLoc[0], textLoc[1]+textSize1*2, windowWidth-windowWidth/19.175, windowHeight/7.32);
  } else {
    text(option5[2], textLoc[0], textLoc[1]+textSize1, windowWidth-windowWidth/19.175, windowHeight/7.32);
    text(option5[3], textLoc[0], textLoc[1]+textSize1*2, windowWidth-windowWidth/19.175, windowHeight/7.32);
  }
  } else {
    text(voicemail[scriptCount-29], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
  }
}
else if (scene == "messages") {
  // plays sound
  background("#ffd1e5");
  if (textPlay == 0) {
    silence();
    textAlert.play();
    textPlay++;
  }
  // displays phone
  image(phone, windowWidth*3/8, windowHeight/20, windowWidth/4, windowHeight*9/10)
  fill("#d2f5f7");
    image(phoneBackground, windowWidth*3/8+windowWidth/51.13, windowHeight/20+windowHeight/7.32, windowWidth/4-windowWidth/30.68, windowHeight*9/10-windowHeight/3.66);
  notification(windowWidth*3/8+windowWidth/38.35, windowHeight/10+windowHeight/7.32, "Hey babe ;) So excited for our dinner tonight", 1.5);
  notification(windowWidth*3/8+windowWidth/38.35, windowHeight/10*2.5+windowHeight/8.15, "Cant believe its already been 5 years", 1.5);
  notification(windowWidth*3/8+windowWidth/38.35, windowHeight/10*4+windowHeight/9.175, "So proud of u even the Prez approves of ur work!!", 1.5)
  notification(windowWidth*3/8+windowWidth/38.35, windowHeight/10*5.5+windowHeight/10.486, "Just be sure to open ur windows ok catch examinitis haha", 1.5);

  notification(windowWidth/76.7*2, windowHeight/36.7, option5[0], 1);
  notification(windowWidth/76.7*2, windowHeight/36.7+textSize1*5, option5[1], 1);

// controls display of messages/voicemail
if (mouseX >= windowWidth/76.7 && mouseX <= windowWidth/76.7+windowWidth/4*0.8
&& mouseY >=  windowHeight/36.7 && mouseY <=  windowHeight/36.7+windowHeight/10*0.8) {
  scene = "voicemail";
}

if (mouseX >= windowWidth/76.7 && mouseX <= windowWidth/76.7+windowWidth/4*0.8
&& mouseY >=  windowHeight/36.7+textSize1*5 && mouseY <=  windowHeight/36.7+textSize1*5+windowHeight/10*0.8) {
  scene = "deathScene2";
}

} else if (scene == "escape" && scriptCount-38 <= escape.length) {
// controls escape scene
  if (scriptCount - 38 == escape.length) {
    text(option6[0], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    text(option6[1], textLoc[0], textLoc[1]+textSize1, windowWidth-windowWidth/19.175, windowHeight/7.32);

  } else {
  text(escape[scriptCount - 38], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
}
} else if (scene == "shoot") {
  // controls shooting scene + sfx
  background(tunnel);
  image(shadow, windowWidth/3, windowHeight/3, windowWidth/3, windowHeight/3);

image(target, mouseX, mouseY, windowWidth/15.34, windowHeight/7.34);

  if (mouseX >= windowWidth/3 && mouseX <= windowWidth*2/3
     && mouseY >= windowHeight/3 && mouseY <= windowHeight*2/3) {
       gunshot.play();
       scene = "deathScene3";
     }
} else if (scene == "deathScene3" && scriptCount - 51 < deathScene3.length) {
  // honeybunny kills you
  text(deathScene3[scriptCount - 51], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
}
else if (scene == "wait" && scriptCount - 52 <= wait.length) {
  // controls wait scene
  if (scriptCount - 52 == wait.length) {
    text(option7[0], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    text(option7[1], textLoc[0], textLoc[1]+textSize1, windowWidth-windowWidth/19.175, windowHeight/7.32);
  } else {
  text(wait[scriptCount - 52], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
}
} else if (scene == "take" && scriptCount - 63 < takeHer.length) {
  // controls take scene

  // controls battle with door
if (scriptCount - 63 == takeHer.length - 1) {
  if (doorStatus == "alive") {
    if (hit < 10) {
      fill("#1DFF83");
      rect(windowWidth-250, 20, 200, 20);
      fill(0,0,0);
      rect(windowWidth-250, 20, 20*hit, 20);
      text(takeHer[takeHer.length-1], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
      scriptCount = takeHer.length+62;
    } else {
      doorStatus = "dead";
      scriptCount++;
      scene = "ending";
    }
  }
} else {
  // if not at battle, display text like usual
  hit = 0;
  text(takeHer[scriptCount - 63], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
}
} else if (scene == "ending" && scriptCount-68 <= ending.length) {
  // plays ending
  if (scriptCount - 68 == ending.length) {
    // controls option8
    text(option8[0], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
    text(option8[1], textLoc[0], textLoc[1]+textSize1, windowWidth-windowWidth/19.175, windowHeight/7.32);
    text(option8[2], textLoc[0], textLoc[1]+textSize1*2, windowWidth-windowWidth/19.175, windowHeight/7.32);
  } else {
  text(ending[scriptCount - 68], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
}
} else if (scene == "goodEnding" && scriptCount-74 < goodEnding.length) {
   // plays good ending
  text(goodEnding[scriptCount - 74], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
} else if (scene == "deathScene2" && scriptCount - 28 < deathScene2.length) {
  // plays deathScene2
  text(deathScene2[scriptCount - 28], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
} else if (scene == "badEnding" && scriptCount-74 < badEnding.length) {
  // play badEnding
    text(badEnding[scriptCount - 74], textLoc[0], textLoc[1], windowWidth-windowWidth/19.175, windowHeight/7.32);
}
 else if (scene == "1b" && scriptCount-4 >= scene1a.length
 || scene == "deathScene2" && scriptCount - 28 >= deathScene2.length
|| scene == "deathScene3" && scriptCount - 51 >= deathScene3.length
|| scene == "badEnding" && scriptCount - 74 >= badEnding.length) {
   // creates 'game over' screen for if you die
      background(0,0,0);
      fill("#ffffff");
      text("Unfortunately, you have died.", windowWidth/2-windowHeight/7.32, windowHeight/2);
      text("Be careful who you listen to - words can kill.", windowWidth/2-windowHeight/7.32, windowHeight/2+textSize1);
      text("Press 'r' for a second chance.", windowWidth/2-windowHeight/7.32, windowHeight/2+textSize1*2);
    } else {
    // creates completion screen if you survive
      background("#ffffff");
      text("You have chosen who to trust wisely. Congraluations.", windowWidth/2-windowHeight/7.32, windowHeight/2);
      text("Press 'r' to play again.", windowWidth/2-windowHeight/7.32, windowHeight/2+textSize1);
    }
}

// controls navigation for game
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {

    if (scene == "1b" || scene == "deathScene2") {
      // conditional accounts for conflicts with branching
          moveToNext = true;
          scriptCount++;
          moveToNext = false;
      } else if (readReport) {
      if (scriptCount+1 <= windowHeight/7.320 && scriptCount != 3 &&
      scriptCount != 28 && scriptCount != 37 && scriptCount != 51 &&
    scriptCount != 62 && scriptCount != 73 && scriptCount != 10 && scriptCount != 67
     && scriptCount != 7)  {
       // conditonals account for when there are option screens
       // so you should not be able to move forward
      moveToNext = true;
      scriptCount++;
      moveToNext = false;
    }
  } else {
    if (scriptCount+1 <= windowHeight/7.320 && scriptCount != 3 &&
    scriptCount != 28 && scriptCount != 37 && scriptCount != 51 &&
  scriptCount != 62 && scriptCount != 73 && scriptCount != 10 && scriptCount != 21 && scriptCount != 67
&& scriptCount != 7) {
    moveToNext = true;
    scriptCount++;
    moveToNext = false;
  }
}
}

// controls scene changing and navigation
  if (keyCode == UP_ARROW) {
    if (scriptCount == 3 || scriptCount == 28 || scriptCount == 37 ||
    scriptCount == 51 || scriptCount == 62 || scriptCount == 73 || scriptCount == 21) {
      // can only change when at an option screen
   b = false;
   a = true;
   scriptCount++;
 }
 } else if (keyCode == DOWN_ARROW){
   if (scriptCount == 3 || scriptCount == 28 || scriptCount == 37 ||
   scriptCount == 51 || scriptCount == 62 || scriptCount == 73 || scriptCount == 21) {
   a = false;
   b = true;
   scriptCount++;
 }
 }
}

function keyTyped() {
// resets the game
  if (key == 'r') {
    window.location.reload();
  }

  // controls the battle scene hit function
  // plays sound
  if (key == 'h' && scriptCount == 7 || scriptCount == 67) {
    if (hit < 10) {
        punch.play();
      hit++;
    } else {
      hit = 10;
    }
  }
}

// draws notifications for phone and Chitter
function notification(x, y, textMsg, height) {
  noStroke();
  fill("#ffffff");
  textSize(textSize1*0.8);
  translate(x, y);
  rect(0, 0, windowWidth/4*0.8, windowHeight/10*0.8*height);
  fill(0,0,0);
  text(textMsg, windowWidth/102.26, windowHeight/48.9, (windowWidth/4*0.8)-windowWidth/153.4, (windowHeight/10*0.8)-windowHeight/73.4);
  translate(-x, -y);
  strokeWeight(5);
  textSize(textSize1);
}

// silences everything
function silence() {
  gunshot.stop();
  dialling.stop();
  shotgun.stop();
  flight.stop();
  newsIntro.stop();
}
