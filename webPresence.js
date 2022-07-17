
/* Week 1 Assignment
Assignment: Launching your UAT Space Program HTML Document Tags
Kaiden Wallenfelsz
kaiwalle@uat.edu */

//Fucntion for countdown timer V1 
//Fucntion is activated on clicking button start
//10
function blastoffTimerV1() {
    console.log("start() function started");
    var currTime = 10;
    console.log(currTime);
    document.getElementById("CountdownStatus").innerHTML = currTime;
    //Fucntion that counts down and prints the number on screen
    //9
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //Blastoff
    setTimeout(function () {
        currTime = currTime - 1;
        //what happens after the delay
        document.getElementById("CountdownStatus").innerHTML = "Blastoff!!!!";
        console.log(currTime);
    }, 10000)


}
//fucntion to play craps called playCraps()
function playCraps() {
    // displays "playCraps() started" in console
    console.log("playCraps() started");
    //Generate variables, die1, die2, sum
    var die1;
    var die2;
    var sum;

    //Roll the dice and displays it in console
    //takes a math.random fucntion multiplies it by 6 and adds 1 to get whole numbers 1-6 without going over or under
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    //determines the sum of both dice, saves it in variable sum, and logs the result in console
    sum = die1 + die2;
    console.log("sum is equal to " + sum);
    //follows the rules of craps and displays message for winning, losing, or tie
    //lose
    //checks to see if sum of dice is equal to 7 or 11 and changes crapsStatus to "Craps!!! You Lose!" if true
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsStatus").innerHTML = "Craps!!! You Lose!"
    }
    //win
    //checks to see if dice are equal to each other and if so checks to see if dice are even. If true displays "You Win!!!"" in crapsStatus
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsStatus").innerHTML = "You Win!!!"
    }
    //tie 
    //if both of the above statments are false displays "You did not lose. Play again?"" 
    else {
        document.getElementById("crapsStatus").innerHTML = "You did not lose. Play again?"
    }


}
function blastoffTimerV2() {
    console.log("blastoffTimerV2() Started");
    //loop that runs 11 times, 10 for countdown, 1 for Blast off.
    //Sets the variable to countdown from
    var countdownTimer = 10;
    //Sets the duration between countdowns 
    var stepTime = 1000;

    // Function that counts down from var coundownTimer using stepTime as the increment
    for (var i = 0; i < countdownTimer; i = i + 1) {
        setTimeout(function () {
            console.log(countdownTimer);
            document.getElementById("CountdownStatus").innerHTML = countdownTimer;
            countdownTimer = countdownTimer - 1;
        }, stepTime * i)

    }
    setTimeout(function () {
        document.getElementById("CountdownStatus").innerHTML = "Blastoff!!!!";
        console.log("Blastoff!");
    }, stepTime * countdownTimer)
}
//blastoff timer version 3 
function blastoffTimerV3() {
    console.log("blastoffTimerV2() Started");
    //loop that runs 11 times, 10 for countdown, 1 for Blast off.
    //Sets the variable to countdown from
    var countdownTimer = 10;
    //Sets the duration between countdowns 
    var stepTime = 1000;

    // Function that counts down from var coundownTimer using stepTime as the increment
    for (var i = 0; i <= countdownTimer; i = i + 1) {
        setTimeout(function () {
            console.log(countdownTimer);
            if (countdownTimer <= 0) {
                //if timer is less than or equal to 0 displays Blastoff!!!!
                document.getElementById("CountdownStatus").innerHTML = "Blastoff!!!!";
                console.log("Blastoff!");
            } else if (countdownTimer < 5) {
                // if timer is less than 5 displays "Warning less than ½ way to launch time left = countdownTimer"
                document.getElementById("CountdownStatus").innerHTML = "Warning less than ½ way to launch, time left = " + countdownTimer;
                countdownTimer = countdownTimer - 1;
            } else {
                // otherwise it just counts down normally
                document.getElementById("CountdownStatus").innerHTML = countdownTimer;
                countdownTimer = countdownTimer - 1;
            }

        }, stepTime * i)
    }

}
//when start button is pressed starts timer, enables stop button, and disables start button 
function startFun() {
    console.log("startFun() started");
    //every 5 seconds update display 
    document.getElementById("data").rows["seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//disables stop button when stop button is pressed and enables start button
function stopFun() {
    console.log("stopFun() started");
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function playStation() {
    //play station sounds
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function playCrazyFrog() {
    //play Crazy Frog
    console.log("playStation() started");
    mySound = new sound("Crazy Frog - Axel F.wav");
    mySound.play();
}

function sound(srcFile) {
    console.log("sound function started");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}