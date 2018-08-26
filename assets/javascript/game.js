var wordbank =["ABOUT" , "ABOVE" , "AFTER" , "AIRPLANE" , "ALL" , "ALLGONE" , "ALLIGATR" , "ALOT" , "AM" , "AN" , "AND" , "ANIMAL" , "ANKLE" , "ANOTHER" , "ANT" , "ANY" , "APPLE" , "APPLESAC" , "ARE" , "ARM" , "AROUND" , "ASLEEP" , "AT" , "ATE" , "ATED" , "AUNT" , "AWAKE" , "AWAY" , "BAABAA" , "BABY" , "BABYSITTER" , "BACK" , "BACKYARD" , "BAD" , "BALL" , "BALLOON" , "BANANA" , "BASEMENT" , "BASKET" , "BAT" , "BATH" , "BATHROOM" , "BATHTUB" , "BE" , "BEACH" , "BEADS" , "BEANS" , "BEAR" , "BECAUSE" , "BED" , "BEDROOM" , "BEE" , "BEFORE" , "BEHIND" , "BELT" , "BENCH" , "BESIDE" , "BETTER" , "BIB" , "BICYCLE" , "BIG" , "BIRD" , "BITE" , "BLACK" , "BLANKET" , "BLEW" , "BLEWED" , "BLLYBTTN" , "BLOCK" , "BLOCKSES" , "BLOW" , "BLOWED" , "BLUE" , "BOAT" , "BOOK" , "BOOTS" , "BOTTLE" , "BOUGHT" , "BOWL" , "BOX" , "BOY" , "BREAD" , "BREAK" , "BREAKED" , "BREAKFST" , "BRING" , "BRINGED" , "BROKE" , "BROKED" , "BROKEN" , "BROOM" , "BROTHER" , "BROWN" , "BRUSH" , "BUBBLES" , "BUCKET" , "BUG" , "BUILD" , "BUMP" , "BUNNY" , "BUS" , "BUT" , "BUTTER" , "BUTTOCKS" , "BUTTON" , "BUTTERFLY" , "BUY" , "BUYED" , "BY" , "BYE" , "CAKE" , "CALLING" , "CAME" , "CAMED" , "CAMERA" , "CAMPING" , "CAN" , "CANDY" , "CAR" , "CAREFUL" , "CARROTS" , "CARRY" , "CAT" , "CATCH" , "CEREAL" , "CHAIR" , "CHALK" , "CHASE" , "CHEEK" , "CHEERIOS" , "CHEESE" , "CHICKEN" , "CHICKEN" , "CHILD" , "CHILDREN" , "CHILDRENS" , "CHILDS" , "CHIN" , "CHOCOLATE" , "CHOOCHOO" , "CHURCH" , "CIRCUS" , "CLAP" , "CLEAN" , "CLIMB" , "CLOCK" , "CLOSE" , "CLOSET" , "CLOUD" , "CLOWN" , "COAT" , "COFFEE" , "COKE" , "COLD" , "COMB" , "COMBINE" , "COMED" , "COMPLEX" , "COMPLEX" , "COOK" , "COOKIE" , "CORN" , "COUCH" , "COULD" , "COUNTRY" , "COVER" , "COW" , "COWBOY" , "CRACKER" , "CRAYON" , "CRIB" , "CRY" , "CUP" , "CUT" , "CUTE" , "DADDY" , "DANCE" , "DARK" , "DAY" , "DEER" , "DIAPER" , "DID" , "DINNER" , "DIRTY" , "DISH" , "DO" , "DOCTOR" , "DOED" , "DOES" , "DOG" , "DOLL" , "DONKEY" , "DONT" , "DONUT" , "DOOR" , "DOWN" , "DOWNTOWN" , "DRANK" , "DRANKED" , "DRAW" , "DRAWER" , "DRESS" , "DRINK", "DRINKED" , "DRIVE" , "DROP" , "DROVE" , "DRY" , "DRYER" , "DUCK" , "DUMP" , "EACH" , "EAR" , "EAT" , "EATED" , "ED" , "EGG" , "ELEPHANT" , "EMPTY" , "EVERY" , "EYE" , "FACE" , "FALL" , "FALLED" , "FARM" , "FAST" , "FEED" , "FEET" , "FEETS" , "FELL" , "FIND" , "FINE" , "FINGER" , "FINISH" , "FIREMAN" , "FIRETRCK" , "FIRST" , "FISH" , "FIT" , "FIX" , "FLAG" , "FLEW" , "FLIED" , "FLOWER" , "FOOD" , "FOOT" , "FOOTS" , "FOR" , "FORK" , "FRIEND" , "FRNCHFRS" , "FROG" , "FULL" , "GAME" , "GARAGE" , "GARBAGE" , "GARDEN" , "GASSTATN" , "GENTLE" , "GET" , "GETTED" , "GIRAFFE" , "GIRL" , "GIVE" , "GIVEMEFV" , "GLASS" , "GLASSES" , "GLOVES" , "GLUE" , "GO" , "GOED" , "GONNA" , "GONNAGTY" , "GOOD" , "GOOSE" , "GOPOTTY" , "GOT" , "GOTTA" , "GOTTED" , "GRANDMA" , "GRANDPA" , "GRAPES" , "GRASS" , "GREEN" , "GREENBNS" , "GRR" , "GUM" , "HAD" , "HAFTA" , "HAIR" , "HAMBURGR" , "HAMMER" , "HAND" , "HAPPY" , "HARD" , "HAT" , "HATE" , "HAVE" , "HAVED" , "HE" , "HEAD" , "HEAR" , "HEARD" , "HEARED" , "HEAVY" , "HELD" , "HELICPTR" , "HELLO" , "HELP" , "HEN" , "HER" , "HERE" , "HERS" , "HI" , "HIDE" , "HIGH" , "HIGHCHAR" , "HIM" , "HIS" , "HIT" , "HOLD" , "HOLDED" , "HOME" , "HORSE" , "HOSE" , "HOT" , "HOUSE" , "HOW" , "HUG" , "HUNGRY" , "HURRY" , "HURT" , "I" , "ICE" , "ICECREAM" , "IF" , "ING" , "INSIDE" , "INTO" , "IS" , "IT" , "JACKET" , "JAR" , "JEANS" , "JELLO" , "JELLY" , "JUICE" , "JUMP" , "KEYS" , "KICK" , "KISS" , "KITCHEN" , "KITTY" , "KNEE" , "KNIFE" , "KNOCK" , "LADDER" , "LADY" , "LAMB" , "LAMP" , "LAST" , "LATER" , "LAWNMOWR" , "LEG" , "LEMME" , "LICK" , "LIGHT" , "LIKE" , "LION" , "LIPS" , "LISTEN" , "LITTLE" , "LIVINGROOM" , "LOLLIPOP" , "LONG" , "LOOK" , "LOSED" , "LOST" , "LOSTED" , "LOUD" , "LOVE" , "LUNCH" , "MAD" , "MADE" , "MAILMAN" , "MAKE" , "MAKED" , "MAN" , "MANS" , "ME" , "MEAT" , "MEDICINE" , "MELON" , "MEN" , "MENS" , "MEOW" , "MICE" , "MICES" , "MILK" , "MINE" , "MITTENS" , "MOMMY" , "MONEY" , "MONKEY" , "MOO" , "MOON" , "MOOSE" , "MOP" , "MORE" , "MORNING" , "MOTRCYCL" , "MOUSE" , "MOUSES" , "MOUTH" , "MOVIE" , "MUCH" , "MUFFIN" , "MY" , "MYSELF" , "NAIL" , "NAMEPET" , "NAMESELF" , "NAMESTTR" , "NAP" , "NAPKIN" , "NAUGHTY" , "NECKLACE" , "NEED" , "NEW" , "NEXTTO" , "NGHTNGHT" , "NICE" , "NIGHT" , "NO" , "NOISY" , "NONE" , "NOODLES" , "NOSE" , "NOT" , "NOW" , "NURSE" , "NUTS" , "OF" , "OFF" , "OLD" , "ON" , "ONTOPOF" , "OPEN" , "ORANGE1" , "ORANGE2" , "OTHER" , "OUCH" , "OUR" , "OUT" , "OUTSIDE" , "OVEN" , "OVER" , "OWIE" , "OWL" , "PAINT" , "PAJAMAS" , "PANCAKE" , "PANTS" , "PAPER" , "PARK" , "PARTY" , "PATTYCAK" , "PEAS" , "PEEKABOO" , "PEN" , "PENCIL" , "PENGUIN" , "PENIS" , "PENNY" , "PENTBTTR" , "PEOPLE" , "PERSON" , "PICK" , "PICKLE" , "PICNIC" , "PICTURE" , "PIG" , "PILLOW" , "PIZZA" , "PLANT" , "PLATE" , "PLAY" , "PLAYDOGH" , "PLAYGRND" , "PLAYPEN" , "PLEASE" , "POLICE" , "PONY" , "POOL" , "POOR" , "POPCORN" , "POPSICLE" , "PORCH" , "POTATCHP" , "POTATO" , "POTTY" , "POUR" , "PRESENT" , "PRETEND" , "PRETTY" , "PRETZEL" , "PUDDING" , "PULL" , "PUMPKIN" , "PUPPY" , "PURSE" , "PUSH" , "PUT" , "PUZZLE" , "QUACKQCK" , "QUIET" , "RADIO" , "RAIN" , "RAISIN" , "RAN" , "RANNED" , "RCKNGCHR" , "READ" , "RED" , "REFRGRTR" , "RIDE" , "RIP" , "ROCK" , "ROOF" , "ROOM" , "ROOSTER" , "RUN" , "RUNNED" , "SAD" , "SALT" , "SAME" , "SANDBOX" , "SANDWICH" , "SAT" , "SATTED" , "SAUCE" , "SAW" , "SAY" , "SCARED" , "SCARF" , "SCHOOL" , "SCISSORS" , "SEE" , "SEED" , "SHAKE" , "SHARE" , "SHE" , "SHEEP" , "SHH" , "SHIRT" , "SHOE" , "SHOESES" , "SHOPPING" , "SHORTS" , "SHOULDER" , "SHOVEL" , "SHOW" , "SHOWER" , "SICK" , "SIDEWALK" , "SING" , "SINK" , "SISTER" , "SIT" , "SITTED" , "SKATE" , "SKY" , "SLED" , "SLEEP" , "SLEEPY" , "SLIDE1" , "SLIPPER" , "SLOW" , "SMILE" , "SNACK" , "SNEAKER" , "SNOW" , "SNOWMAN" , "SNOWSUIT" , "SO" , "SOAP" , "SOBIG" , "SOCK" , "SOCKSES" , "SODA" , "SOFA" , "SOFT" , "SOME" , "SOUP" , "SPAGHETT" , "SPILL" , "SPLASH" , "SPLURAL" , "SPOON" , "SPOSSESS" , "SPRINKLRR" , "SQUIRREL" , "STAIRS" , "STAND" , "STAR" , "STAY" , "STICK" , "STICKY" , "STONE" , "STOP" , "STORE" , "STORY" , "STOVE" , "STREET" , "STROLLER" , "STRWBRRY" , "STUCK" , "SUN" , "SWEATER" , "SWEEP" , "SWIM" , "SWING" , "TABLE" , "TAKE" , "TAKED" , "TALK" , "TAPE" , "TASTE" , "TEACHER" , "TEAR" , "TEDDYBER" , "TEETH" , "TEETHS" , "TELEPHONE" , "THANKYOU" , "THAT" , "THE" , "THEIR" , "THEM" , "THEN" , "THERE" , "THESE" , "THEY" , "THINK" , "THIRSTY" , "THIS" , "THOSE" , "THROW" , "THISLITTLE" , "TICKLE" , "TIGER" , "TIGHTS" , "TIME" , "TINY" , "TIRED" , "TISSUE" , "TO" , "TOAST" , "TODAY" , "TOE" , "TOESES" , "TOMORROW" , "TONGUE" , "TONIGHT" , "TOO" , "TOOK" , "TOOTH" , "TOOTHS" , "TOOTHBRUSH" , "TOUCH" , "TOWEL" , "TOY" , "TRACTOR" , "TRAIN" , "TRASH" , "TRAY" , "TREE" , "TRICYCLE" , "TRUCK" , "TRY" , "TUMMY" , "TUNA" , "TURKEY" , "TURNAROUND" , "TURTLE" , "TV" , "UHOH" , "UNCLE" , "UNDER" , "UNDERPANTS" , "UP" , "US" , "USEFULL" , "USELESS" , "VACUUM" , "VAGINA" , "VANILLA" , "VITAMINS" , "VROOM" , "WAIT" , "WAKE" , "WALK" , "WALKER" , "WANNA" , "WAS" , "WASH" , "WATCH" , "WATER", "WE" , "WENT" , "WENTED" , "WERE" , "WET" , "WHAT" , "WHEN" , "WHERE" , "WHICH" , "WHITE" , "WHO" , "WHY" , "WILL" , "WIND" , "WINDOW" , "WINDY" , "WIPE" , "WISH" , "WITH" , "WOLF" , "WOODS" , "WOOFWOOF" , "WORK1" , "WORK2" , "WOULD" , "WRITE" , "WSHNGMCH" , "YARD" , "YELLOW" , "YES" , "YESTERDY" , "YOGURT" , "YOU" , "YOUR" , "YELLOW" , "YOURSELF" , "YUCKY" , "YUMYUM" , "ZEBRA" , "ZIPPER" , "ZOO"];
console.log(wordbank);
// wordbank. some elements of this array have numbers, misspelled, duplicates and probably other things wrong as well.

function randomInteger(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);

}
// this function will return a random number with parameters being the range.


    var wordThisGame = wordbank[randomInteger(0, wordbank.length -1)];
    // selects a random element from the wordbank array
    var underScore = document.getElementById("word-blanks").textContent;
    // underScore has the current/default text inside "word blanks"
                     document.getElementById("word-blanks").innerHTML=underScore;
                     //sets underscore to have access to "word-blanks" ?? i think.. not being used maybe have to use later


    var gameWordArray=[];
    var blanksArray=[];
//declared global array variables that can be used in the next function

//pushes word from wordbank array into variable to be used inside the for loop
for (var i = 0; i < wordThisGame.length; i++) {  
        gameWordArray = wordbank.push();                          
        gameWordArray = blanksArray.push(" _ ");
        document.getElementById("word-blanks").innerHTML = blanksArray;
        console.log([i]);
}

//==================================================key press stuff =======================================================//


    var keyP= "";
    document.onkeyup = function(event){
    var keyP = event.key;
        console.log(keyP + " this is keyP");
        // key presses now linked to keyP
        var keysPressed = [];
        // declares array variable for keyspressed to have keyP be pushed into hopefully
        console.log(keysp);
        keysPressed.push(keyP);



var keyCodes = {
  65: "a", 
  66: "b", 
  67: "c", 
  68: "d", 
  69: "e", 
  70: "f", 
  71: "g", 
  72: "h", 
  73: "i", 
  74: "j", 
  75: "k", 
  76: "l", 
  77: "m", 
  78: "n", 
  79: "o", 
  80: "p", 
  81: "q", 
  82: "r", 
  83: "s", 
  84: "t", 
  85: "u", 
  86: "v", 
  87: "w", 
  88: "x", 
  89: "y", 
  90: "z" 
}



    //runs this function on keypressses
    if(keyP.keyCode > 64 && keyP.keyCode < 91){
        // checks to see if pressed key is inside our range of a-z
        document.getElementById("#wrong-guesses-sofar").text("You pressed: " + keyCodes[keyP.keyCode]);
      // updates wrong-guesses-sofar card div of keys pressed
    } else {
        document.getElementById("#keypressrec").text("Key not recognized");
       

}


    keysPressed.push(keyP.keyCode);
//strip out any duplicate values immediately after adding the keypress value
   // keysPressed = document.filter(keysPressed);

    if(keysPressed.indexOf(keyP.keyCode,keysPressed) === -1){
        document.getElementById("#wrong-guesses-sofar").textContent("You pressed: " + keyCodes[keyP.keyCode]);
        // im having a hard time trying to get this if statement to put text into the element but document.getElementById("#targetdiv") just wont work.
        // i cant find why its not working other than the suggestion that the script be at the bottom of the page 
        // textContent will also be unable to read null
      } else {
        console.log("wrong key");
        // put this here just because document.getElementById was giving me issues
        //document.getElementById("#wrong-guesses-sofar").textContent("You have pressed this key before!!"));  <-- supposed to be here
      }

     

      var keysp = keysPressed.map(function(value){
        return keyCodes[value];
      }).sort().join(', ');
    }
          
      //document.getElementById("#wrong-guesses").text(keyP);

    
    
    




    //object.onkeyup = function(){
        
    //}; all console logs and test below this point===========================================================
    console.log("----------------------console.log tests----------------------------------------")
    console.log(blanksArray + " " + " blanksarray " + Object.prototype.toString.call(blanksArray))
    console.log(gameWordArray + " gameWordArray " + Object.prototype.toString.call(gameWordArray));
    console.log(underScore + " underscore " + Object.prototype.toString.call(underScore));
    console.log(wordbank.length + " word length " + Object.prototype.toString.call(wordbank.length));
    console.log(wordThisGame + " this games word is " + Object.prototype.toString.call(wordThisGame));
    console.log(keyP + " keypr keypress test" + Object.prototype.toString.call(keyP));
    console.log("----------------------console.log tests-------------------------------------end")
    //console.log(wordbank + " words " + Object.prototype.toString.call(wordbank));







    console.log("test------------------------     ");
    function assertEqual(expected,actual,testName) {
        if ( expected === actual) {
            console.log(" passed " + testName);
        }else{
            console.log(" failed " + testName);
        }
    }
    // assertEqual is set up to take variables and compare them to the stated expected results

    var testName =" wordbank length test";
    var expected = wordbank.length;
    var actual = randomInteger();//fucntionname(input);
    assertEqual(expected,actual,testName);

    var testName ="for loop length of word iteration";
    var expected = gameWordArray;
    var actual = i;//fucntionname(input);
    assertEqual(expected,actual,testName);

    var testName = " blankarray length test i = blanksArray.length " + blanksArray;
    var expected = blanksArray.length;
    var actual = i;//fucntionname(input);
    assertEqual(expected,actual,testName);

    var testName = " array length to word length compare";
    var expected = gameWordArray.length;
    var actual = blanksArray.length;//fucntionname(input);
    assertEqual(expected,actual,testName);


    console.log("test-------------------------- end");

    //never got to use because i was having too much problem with document.method() giving me some kind of trouble or not a function errors
