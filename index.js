let started = false;

let cpu_chosen = ['rock1', 'paper1', 'scissors1']

$(".btn").click(function () {
let userChosen = this.id;
// console.log(userChosen)

animatePress(userChosen)


let random = Math.floor(Math.random() * 3);

let cpuChosen= cpu_chosen[random]

animatePress(cpuChosen)

if (userChosen == "rock" && cpuChosen == "scissors1" ||
userChosen == "paper" && cpuChosen == "rock1" ||
userChosen == "scissors" && cpuChosen == "paper1"
){
      $('p.game_started').text('Player WINS')
} else if (userChosen == "rock" && cpuChosen == "rock1" ||
userChosen == "paper" && cpuChosen == "paper1" ||
userChosen == "scissors" && cpuChosen == "scissors1"){
    $('p.game_started').text('It Is A DRAW')
} else{
  $('p.game_started').text('CPU WINS')
}


})


function animatePress(chosenOption){

    $("#" + chosenOption).addClass("pressed");
    setTimeout(function () {
          $("#" + chosenOption).removeClass("pressed");
        }, 1000);

}
