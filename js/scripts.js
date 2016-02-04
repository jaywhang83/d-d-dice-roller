function Dice(sides, rolls, modifier) {
  this.sides = sides;
  this.rolls = rolls;
  this.modifier = modifier;
};

Dice.prototype.play = function () {
  var min = 1;
  var max = this.sides;
  var counter  = 1;
  var totalRolls =[];
  var numberHolder = 0;
  while (counter <= this.rolls) {
    counter++;
    totalRolls.push(Math.floor(Math.random() * (max - min +1)) + min);
  }
  return totalRolls;
};

Dice.prototype.playDiceOnly = function () {
  var min = 1;
  var max = this.sides;
  var counter  = 1;
  while (counter <= this.sides) {
    counter++;
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
}

function points(totalRolls, modifierOperator, modifierNumber) {
  var totalPoints = 0;
  totalRolls.forEach(function(index)  {
    totalPoints += index;
  });
  if (modifierOperator === "+") {
    totalPoints += modifierNumber;
  } else if (modifierOperator === "-") {
    totalPoints -= modifierNumber;
  }
  return totalPoints;
};


$(document).ready(function() {
  $("#diceRoll, img").click(function(){
    var die2 = this.name;
    var die4 = this.name;
    var die6 = this.name;
    var die8 = this.name;
    var die10 = this.name;
    var die12 = this.name;
    var die20 = this.name;
    var die100 = this.name;
    var roll2Num = parseInt($("input#d2NumOfRolls").val());
    var roll4Num = parseInt($("input#d4NumOfRolls").val());
    var roll6Num = parseInt($("input#d6NumOfRolls").val());
    var roll8Num = parseInt($("input#d8NumOfRolls").val());
    var roll10Num = parseInt($("input#d10NumOfRolls").val());
    var roll12Num = parseInt($("input#d12NumOfRolls").val());
    var roll20Num = parseInt($("input#d20NumOfRolls").val());
    var roll100Num = parseInt($("input#d100NumOfRolls").val());
    var xRollNum = parseInt($("input#dxNumOfRolls2").val());

    if (die2 === "2-sided") {
      var sides = 2;
      var newDice = new Dice(sides);
      var rolled = newDice.playDiceOnly();
      var total = rolled;

      $(".result.active").prepend(rolled.toString()+ ", " + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + "d" + sides + ")" + ":" + "\n");
    }

    if (die4 === "4-sided") {
      var sides = 4;
      var newDice = new Dice(sides);
      var rolled = newDice.playDiceOnly();
      var total = rolled;

      $(".result.active").prepend(rolled.toString()+ ", " + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + "d" + sides + ")" + ":" + "\n");
    }

    if (die6 === "6-sided") {
      var sides = 6;
      var newDice = new Dice(sides);
      var rolled = newDice.playDiceOnly();
      var total = rolled;

      $(".result.active").prepend(rolled.toString()+ ", " + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + "d" + sides + ")" + ":" + "\n");
    }

    if (die8 === "8-sided") {
      var sides = 8;
      var newDice = new Dice(sides);
      var rolled = newDice.playDiceOnly();
      var total = rolled;

      $(".result.active").prepend(rolled.toString()+ ", " + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + "d" + sides + ")" + ":" + "\n");
    }

    if (die10 === "10-sided") {
      var sides = 10;
      var newDice = new Dice(sides);
      var rolled = newDice.playDiceOnly();
      var total = rolled;

      $(".result.active").prepend(rolled.toString()+ ", " + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + "d" + sides + ")" + ":" + "\n");
    }

    if (die12 === "12-sided") {
      var sides = 12;
      var newDice = new Dice(sides);
      var rolled = newDice.playDiceOnly();
      var total = rolled;

      $(".result.active").prepend(rolled.toString()+ ", " + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + "d" + sides + ")" + ":" + "\n");
    }

    if (die20 === "20-sided") {
      var sides = 20;
      var newDice = new Dice(sides);
      var rolled = newDice.playDiceOnly();
      var total = rolled;

      $(".result.active").prepend(rolled.toString()+ ", " + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + "d" + sides + ")" + ":" + "\n");
    }

    if (die100 === "100-sided") {
      var sides = 100;
      var newDice = new Dice(sides);
      var rolled = newDice.playDiceOnly();
      var total = rolled;

      $(".result.active").prepend(rolled.toString()+ ", " + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + "d" + sides + ")" + ":" + "\n");
    }

    if(roll2Num !== 0) {
      var sides = 2;
      var modifierNumber = parseInt($("input#d2ModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();
      var newDice = new Dice(sides, roll2Num, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + roll2Num + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + "2 Sided Dice:");
    }

    if (roll4Num !== 0) {
      var sides = 4;
      var modifierNumber = parseInt($("input#d4ModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();
      var newDice = new Dice(sides, roll4Num, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + roll4Num + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + "4 Sided Dice:");
    }

    if(roll6Num !== 0) {
      var sides = 6;
      var modifierNumber = parseInt($("input#d6ModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();

      var newDice = new Dice(sides, roll6Num, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + roll6Num + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + "6 Sided Dice:");
    }

    if(roll8Num !== 0) {
      var sides = 8;
      var modifierNumber = parseInt($("input#d8ModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();
      var newDice = new Dice(sides, roll8Num, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + roll8Num + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + "8 Sided Dice:");
    }

    if(roll10Num !== 0) {
      var sides = 10;
      var modifierNumber = parseInt($("input#d10ModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();
      var newDice = new Dice(sides, roll10Num, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + roll10Num + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + "10 Sided Dice:");
    }

    if(roll12Num !== 0) {
      var sides = 12;
      var modifierNumber = parseInt($("input#d12ModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();

      var newDice = new Dice(sides, roll12Num, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + roll12Num + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + "12 Sided Dice:");
    }

    if(roll20Num !== 0) {
      var sides = 20;
      var modifierNumber = parseInt($("input#d20ModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();
      var newDice = new Dice(sides, roll20Num, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + roll20Num + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + "20 Sided Dice:");
    }

    if(roll100Num !== 0) {
      var sides = 100;
      var modifierNumber = parseInt($("input#d100ModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();
      var newDice = new Dice(sides, roll100Num, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + roll100Num + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + "100 Sided Dice:");
    }

    if(xRollNum !== 0) {
      var sides = parseInt($("input#dxNumOfRolls1").val());
      var modifierNumber = parseInt($("input#dxModNumber").val());
      var modifierOperator = $("input[type = 'radio']:checked").val();
      var newDice = new Dice(sides, xRollNum, modifierNumber);
      var rolled = newDice.play();
      var total = points(rolled, modifierOperator, modifierNumber);

      $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
      $(".result.active").prepend("\n" + "Roll(" + xRollNum + "d" + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");
      $(".result.active").prepend("\n" + sides + " Sided Dice:");
    }
  });

  $(".inputclear").click(function() {
    $("input[type ='text']").val(0)
    $("input[value = '+']").prop("checked", true);
  });

  function checkingId(id) {
    var idBank =["player1", "player2", "player3", "player4"];
    for (var i =0; i < idBank.length; i++) {
      if (id !== idBank[i]) {
        $("#"+idBank[i]+"text").hide();
        $("#"+idBank[i]+"text").removeClass("active")
        $("#"+idBank[i]).removeClass("active");
       }
      else if (id === idBank[i]){
        $("#"+id+"text").show();
        $("#"+idBank[i]+"text").addClass("active");
        $("#"+id).addClass("active");
      }
    }
  };

  $(".playerclear").click(function(){
    $("input[type ='text']").val(0)
    $("input[value = '+']").prop("checked", true);
  });

  var idBank =["player1", "player2", "player3", "player4"];
  idBank.forEach(function(id){

    $(".player").click(function() {
      id = this.id;
      checkingId(id);
      $(".playerclear").click(function(){
        $("#"+id+"text").empty();
      });
    });
  });
});
