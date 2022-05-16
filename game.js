player1Name = localStorage.getItem("playerOneLogin");
player2Name = localStorage.getItem("playerTwoLogin");
player1Score = 0;
player2Score = 0;
questionTurn = "player_1";
answerTurn = "player_2";


document.getElementById("player1Name").innerHTML = player1Name + "-";
document.getElementById("player2Name").innerHTML = player2Name + "-";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send() {
    get_n1 = Number(document.getElementById("numberOne").value);
    console.log("number one = " + get_n1);

    get_n2 = Number(document.getElementById("numberTwo").value);
    console.log("number two = " + get_n2);

    result = get_n1 * get_n2;
    console.log("product =" + result);

    checkBtn = "<button class='btn btn-success' onclick='check()'> CHECK </button> <br>";
    question = "<h4 id='questionDisplay'>" + get_n1 + "x" + get_n2 + "</h4> <br>";
    answer = "<input id='answer' placeholder='Enter answer here'> <br>";
    myOutput = question + answer + checkBtn;
    document.getElementById("output").innerHTML = myOutput;
    document.getElementById("numberOne").value = " ";
    document.getElementById("numberTwo").value = " ";
    // document.getElementById("numberOne").placeholder = "enter number one";
    // document.getElementById("numberTwo").placeholder = "enter number two";
    numberOne.setAttribute("placeholder", "enter number one");
    numberTwo.setAttribute("placeholder", "enter number two");
}

function check() {
    var answer = parseInt(document.getElementById("answer").value);
    console.log(answer);

    if (answer == result) {
        if (answerTurn == "player_1") {
            player1Score++;
            document.getElementById("player1Score").innerHTML = player1Score;
            document.getElementById("player2Score").innerHTML = player2Score;
        } else {
            player2Score++;
            document.getElementById("player1Score").innerHTML = player1Score;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }

    if (questionTurn == "player_1") {
        questionTurn = "player_2";
        answerTurn = "player_1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2Name;
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player1Name;
    }
    else{
        questionTurn = "player_1";
        answerTurn = "player_2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
    }
    document.getElementById("output").innerHTML = " ";
}