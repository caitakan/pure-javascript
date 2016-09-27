//FUNCTIONS
function notOptionMessage () {
  alert("That's not an option. You lose!");
}

function beginGameAgain() {
  var lastQuestion = prompt("Do you want to play again? Yes or no?").toLowerCase();
  if (lastQuestion === 'yes') {
    console.log("Starts the game over");
    beginGame();
  } else {
    alert("That's ok. Thanks for playing!");
  }
}

function lostGameMessage () {
  alert ("Too bad...better luck next time.");
  beginGameAgain();
}

function winGameMessage () {
  alert ("Congratulations! You won the game. Please play again to see other outcomes.");
  beginGameAgain();
}

//OBJECTS
var choices = {
  arnoldChoice: "You chose Arnold! Decide what move to make: 1. Punch 2. Bodyslam 3. Bitchslap",
  sylvesterChoice: "You chose Sylvester! You're up against the incredible Apollo Creed in the finals of the World Championship. He has gotten a few hits on you but you're still in it to win it. Decide what move to make next: 1. Hook 2. Jab 3. Straight punch",
  bruceChoice: "You chose Bruce! You're up against Chuck Norris. He has gotten a few hits on you but you're still have a little fight. Decide what move to make next: 1. Kick 2. Nunchucks 3. Smack",
};
var arnoldChoiceList = {
  arnoldPunch: "Nice punch! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands",
  arnoldBodySlam: "Nice bodyslam! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands",
  arnoldBitchslap: "Nice bitchslap! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands",
  arnoldShoot: "Nice shot! But the T-1000 absorbed the bullet. He killed you. ",
  arnoldRun: "Oh no! You couldn't outrun the T-1000. ",
  arnoldShakeHands: "Wow! The T-1000 was willing to make a compromise. He accepted the truce. ",
};
var sylvesterChoiceList = {
  sylvesterHook: "Nice Hook! But wait, Apollo counter punched you. You're about to be KO but you have one last move left. What do you do? 1. Uppercut 2. Point away 3. Cartwhell ",
  sylvesterJap: "Nice Jab! But wait, Apollo counter punched you. You're about to be KO but you have one last move left. What do you do? 1. Uppercut 2. Point away 3. Cartwhell ",
  sylvesterStraightPunch: "Ouch! Apollo countered your straight punch with a jab. This caused some severe pain to where you could die if he hits you hard enough. This is a life or death decision. What's your next move? 1. Forfeit 2. Counter moves 3. Dance ",
  sylvesterUppercut: "Oh no...the uppercut did not work. You accidently hit yourself in the face since you were so dizzy from the last blow. ",
  sylvesterPointAway: "Omg! You distracted Apollo by pointing at his shoes. You then had a chance to uppercut and KO him. ",
  sylvesterCartwheel: "Suprisingly, the cartwheel did not work. He punched you in the jaw as soon you as finished your cartwheel.",
  sylvesterForfeit: "Not a bad choice, but it pissed Apollo off so much that he won on a forfeit, he decided to punch you anyways in the gut and you died!",
  sylvesterCountermove: "This did not work. You were in too much pain from Apollo's previous hit. He punched you in the nose and you sustained permanent brain damage and died. ",
  sylvesterDance: "Say what!?!? This worked. Apollo was in utter disbelief that you had the courage to dance during this momentous moment. He was so distracted, you saw an opening for a uppercut to the jaw. ",
};
var bruceChoiceList = {
  bruceKick: "Nice Kick! But wait, Norris countered you with a roundhouse kick to the face. You're about to be out but you have one last move left. What do you do? 1. Scream 2. Run 3. Cry ",
  bruceNunchuck: "Nice nunchuck move! You hit Norris pretty hard but you need to do one last finishing move. What's your next move? 1. Slap 2. Kick 3. Push",
  bruceSmack: "What an embarassing move. Norris was stunned that you tried to smack him, so he kicked you in the face. You're down and Norris is about to finish you off. What's you're next move? 1. Dodge 2. Run 3. Play dead ",
  bruceScream: "Nice try, but this did not distract Norris. Instead, he roundhouse kicked you again. ",
  bruceRun: "Omg! You're getting away but Norris was able to catch up to you on his horse. ",
  bruceCry: "Norris was so embarrassed for you that he let you get one free punch to his face. You punched him hard enough to where he could no longer fight. ",
  bruceSlap: "Seriously? A slap? This was not the right move. Norris countered it with a roundhouse kick to the face. ",
  bruceKick2: "You did it! You defeated Norris with this finishing move. ",
  brucePush: "This was not a good choice for a finishing move. Norris instantly got up and bodyslammed you to where you could no longer breath. ",
  bruceDodge: "You were not able to dodge Norris's fatality move. He instantly defeated you. ",
  bruceRun2: "You were not fast enough to escape the wrath of Chuck Norris. He caught up to you and punched you in the face 253 times. Needless to say, you did not survive. ",
  brucePlayDead: "Say what!? This worked. Norris really thought you were dead despite the fact that you were still breathing heavily. He's strong but not so bright. He came over to check your pulse and you tripped him. He feel and broke his neck.  ",
};
//VARIABLES
var congratsMessage = "Congratulations! You won the game. Please play again to see other outcomes.";
var losingMessage = "Too bad...better luck next time.";

//BEGININNG OF GAME
  function beginGame () {
  var name = prompt("What is your name?");
  console.log(name);
  if (name !== null) {
    confirm("Thanks " + name + "!" + " Lets play the game!");
  } else {
    prompt("You did not enter your name. Please enter your name.");
  }
  //AGE QUESTION
  var appropriateAge = prompt("What's your age?");
  if (appropriateAge > 17) {
    alert("You're old enough! Play on");
  } else {
    alert("You're too young to play!");
    beginGameAgain();
  }
  //CHARACTER CHOICE QUESTION
  var answer = prompt(
    "What character do you want to use for the fight? Each scenario is different based on the character you choose. 1. Arnold 2. Sylvester 3. Bruce"
  ).toLowerCase();
  //ARNOLD CHOICE
  if (answer === '1' || answer === 'arnold' || answer === '1. arnold') {
    answer = prompt(choices.arnoldChoice).toLowerCase();
    if (answer === '1' || answer === 'punch' || answer === '1. punch') {
      answer = prompt(arnoldChoiceList.arnoldPunch).toLowerCase();
      if (answer === '1' || answer === 'shoot' || answer === '1. shoot') {
        alert(arnoldChoiceList.arnoldShoot);
        lostGameMessage ();
      } else if (answer === '2' || answer === 'run' || answer === '2. run') {
        alert(arnoldChoiceList.arnoldRun);
        lostGameMessage ();
      } else if (answer === '3' || answer === 'shake hands' || answer === "3. shake hands") {
        alert(arnoldChoiceList.arnoldShakeHands);
        winGameMessage ();
      }
    } else if (answer === '2' || answer === 'bodyslam' || answer === '2. bodyslam') {
      answer = prompt(arnoldChoiceList.arnoldBodySlam).toLowerCase();
      if (answer === '1' || answer === 'shoot' || answer === '1. shoot') {
        alert(arnoldChoiceList.arnoldShoot);
        lostGameMessage ();
      } else if (answer === '2' || answer === 'run' || answer === '2. run') {
        alert(arnoldChoiceList.arnoldRun);
        lostGameMessage ();
      } else if (answer === '3' || answer === 'shake hands' || answer === "3. shake hands") {
        alert(arnoldChoiceList.arnoldShakeHands);
        winGameMessage ();
      }
    } else if (answer === '3' || answer === 'bitchslap' || answer === '3. bitchslap') {
      answer = prompt(arnoldChoiceList.arnoldBitchslap).toLowerCase();
      if (answer === '1' || answer === 'shoot' || answer === '1. shoot') {
        alert(arnoldChoiceList.arnoldShoot);
        lostGameMessage ();
      } else if (answer === '2' || answer === 'run' || answer === '2. run') {
        alert(arnoldChoiceList.arnoldRun);
        lostGameMessage ();
      } else if (answer === '3' || answer === 'shake hands' || answer === "3. shake hands") {
        alert(arnoldChoiceList.arnoldShakeHands);
        winGameMessage ();
      }
    }
  }
  //SYLVESTER CHOICE
  else if (answer === '2' || answer === 'sylvester' || answer === '2. sylvester') {
    answer = prompt(choices.sylvesterChoice).toLowerCase();
    console.log("Answer to Q2");
    if (answer === '1' || answer === 'hook' || answer === '1. hook') {
      answer = prompt(sylvesterChoiceList.sylvesterHook).toLowerCase();
      if (answer === '1' || answer === "uppercut" || answer === "1. uppercut") {
        alert(sylvesterChoiceList.sylvesterUppercut);
        lostGameMessage ();
      } else if (answer === '2' || answer === "point away" || answer === "1. point away") {
        alert(sylvesterChoiceList.sylvesterPointAway);
        winGameMessage ();
      } else if (answer === '3' || answer === "cartwheel" || answer === "3. cartwheel") {
        alert(sylvesterChoiceList.sylvesterCartwheel);
        lostGameMessage ();
      }
    } else if (answer === '2' || answer === 'jab' || answer === '2. jab') {
      answer = prompt(sylvesterChoiceList.sylvesterJap).toLowerCase();
      if (answer === '1' || answer === "uppercut" || answer === "1. uppercut") {
        alert(sylvesterChoiceList.sylvesterUppercut);
        lostGameMessage ();
      } else if (answer === '2' || answer === "point away" || answer === "1. point away") {
        alert(sylvesterChoiceList.sylvesterPointAway);
        winGameMessage ();
      } else if (answer === '3' || answer === "cartwheel" || answer === "3. cartwheel") {
        alert(sylvesterChoiceList.sylvesterCartwheel);
        lostGameMessage ();
      }
    } else if (answer === '3' || answer === 'straight punch' || answer === '3. straight punch') {
      answer = prompt(sylvesterChoiceList.sylvesterStraightPunch).toLowerCase();
      if (answer === '1' || answer === "forfeit" || answer === "1. forfeit") {
        alert(sylvesterChoiceList.sylvesterForfeit);
        lostGameMessage ();
      } else if (answer === '2' || answer === "counter moves" || answer === "2. counter moves") {
        alert(sylvesterChoiceList.sylvesterCountermove);
        lostGameMessage ();
      } else if (answer === '3' || answer === "dance" || answer === "3. dance") {
        alert(sylvesterChoiceList.sylvesterDance);
        winGameMessage ();
      }
    }
  }
  //BRUCE CHOICE
  else if (answer === '3' || answer === 'bruce' || answer === '2. bruce') {
    answer = prompt(choices.bruceChoice).toLowerCase();
    console.log("Answer to Q2");
    if (answer === '1' || answer === 'kick' || answer === '1. kick') {
      answer = prompt(bruceChoiceList.bruceKick).toLowerCase();
      if (answer === '1' || answer === "scream" || answer === "1. scream") {
        alert(bruceChoiceList.bruceScream);
        lostGameMessage ();
      } else if (answer === '2' || answer === "run" || answer === "1. run") {
        alert(bruceChoiceList.bruceRun);
        lostGameMessage ();
      } else if (answer === '3' || answer === "cry" || answer === "3. cry") {
        alert(bruceChoiceList.bruceCry);
        winGameMessage ();
      }
    } else if (answer === '2' || answer === 'nunchucks' || answer === '2. nunchucks') {
      answer = prompt(bruceChoiceList.bruceNunchuck).toLowerCase();
      if (answer === '1' || answer === "slap" || answer === "1. slap") {
        alert(bruceChoiceList.bruceSlap);
        lostGameMessage ();
      } else if (answer === '2' || answer === "kick" || answer === "1. kick") {
        alert(bruceChoiceList.bruceKick2);
        winGameMessage ();
      } else if (answer === '3' || answer === "push" || answer === "3. push") {
        alert(bruceChoiceList.brucePush);
        lostGameMessage ();
      }
    } else if (answer === '3' || answer === 'smack' || answer === '3. smack') {
      answer = prompt(bruceChoiceList.bruceSmack).toLowerCase();
      if (answer === '1' || answer === "dodge" || answer === "3. dodge") {
        alert(bruceChoiceList.bruceDodge);
        lostGameMessage ();
      } else if (answer === '2' || answer === "run" || answer === "3. run") {
        alert(bruceChoiceList.bruceRun2);
        lostGameMessage ();
      } else if (answer === '3' || answer === "play dead" || answer === "3. play dead") {
        alert(bruceChoiceList.brucePlayDead);
        winGameMessage ();
      }
    }
  } else {
    notOptionMessage();
  }
}
beginGame();
