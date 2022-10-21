class TicTacToe {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    player1 = {
        name: "",
        type: "Person",
        moves: 0,
        symbol: "X",
    };
    player2 = {
        name: "",
        type: "Person",
        moves: 0,
        symbol: "O",
    };
    activePlayer = null;

    constructor(player1, player2, player1Type, player2Type) {
        this.player1.name = player1;
        this.player2.name = player2;
        this.player1.type = player1Type;
        this.player2.type = player2Type;
        this.activePlayer = this.player1;
    }

    changeActivePlayer() {
        if (this.activePlayer.name === this.player1.name) {
            this.activePlayer = this.player2;
        } else {
            this.activePlayer = this.player1;
        }

        const activePlayerEl = document.getElementById("activePlayer");
        activePlayerEl.textContent = `Turn of: ${this.activePlayer.name}`;
    }

    makeMove(row, col) {
        const symbol = this.activePlayer.symbol;

        this.board[row][col] = symbol;
        this.activePlayer.moves += 1;

        this.changeActivePlayer();

        return symbol;
    }

    clearCell(row, col) {
        this.board[row][col] = 0;
        this.activePlayer.moves -= 1;
    }
}

if (window.location.href.includes("SelectPlayers")) {
    const startGameButton = document.getElementById("StartGame");

    startGameButton.addEventListener("click", () => {
        const player1Name = document.getElementById("name-player1");
        const player1Type = document.querySelector(
            "input[name='selection1']:checked"
        );

        if (!player1Type) {
            alert("No se ha seleccionado tipo de jugador 1");

            return;
        }

        const player1TypeValue = player1Type.id;

        const player2Name = document.getElementById("name-player2");
        const player2Type = document.querySelector(
            "input[name='selection2']:checked"
        );

        if (!player2Type) {
            alert("No se ha seleccionado tipo de jugador 2");

            return;
        }

        const player2TypeValue = player2Type.id;

        let player1NameValue;
        let player2NameValue;

        if (player1TypeValue === "CPU1") {
            player1NameValue = "Maquinon";
        } else {
            player1NameValue = player1Name.value;
        }

        if (player2TypeValue === "CPU2") {
            player2NameValue = "Maquinaza";
        } else {
            player2NameValue = player2Name.value;
        }

        sessionStorage.setItem("player1NameValue", player1NameValue);
        sessionStorage.setItem("player2NameValue", player2NameValue);
        sessionStorage.setItem("player1TypeValue", player1TypeValue);
        sessionStorage.setItem("player2TypeValue", player2TypeValue);

        window.location.href = "../pages/game.html";
    });
}

if (window.location.href.includes("game")) {
    let game;

    const initGame = () => {
        const player1NameValue = sessionStorage.getItem("player1NameValue");
        const player2NameValue = sessionStorage.getItem("player2NameValue");
        const player1TypeValue = sessionStorage.getItem("player1TypeValue");
        const player2TypeValue = sessionStorage.getItem("player2TypeValue");

        game = new TicTacToe(
            player1NameValue,
            player2NameValue,
            player1TypeValue,
            player2TypeValue
        );

        const player1 = document.getElementById("player1info");
        const player2 = document.getElementById("player2info");
        const activePlayer = document.getElementById("activePlayer");

        player1.textContent = `Player 1: ${game.player1.name} - X`;
        player2.textContent = `Player 2: ${game.player2.name} - O`;
        activePlayer.textContent = `Turn of: ${game.activePlayer.name}`;
    };

    const onClickCell = (row, col, cell) => {
        if (game.activePlayer.moves === 3) {
            game.clearCell(row, col);

            cell.innerHTML = "";
        } else if (!game.board[row][col]) {
            const symbol = game.makeMove(row, col);
            const symbolEl = document.createElement("img");

            symbolEl.src =
                symbol === "X" ? "../img/cross.png" : "../img/circle.png";

            symbolEl.classList.add("token-image");
            cell.appendChild(symbolEl);
        } else {
            alert("Choose a new cell");
        }
    };

    const box0 = document.getElementById("box0");
    box0.addEventListener("click", () => onClickCell(0, 0, box0));

    const box1 = document.getElementById("box1");
    box1.addEventListener("click", () => onClickCell(0, 1, box1));

    const box2 = document.getElementById("box2");
    box2.addEventListener("click", () => onClickCell(0, 2, box2));

    const box3 = document.getElementById("box3");
    box3.addEventListener("click", () => onClickCell(1, 0, box3));

    const box4 = document.getElementById("box4");
    box4.addEventListener("click", () => onClickCell(1, 1, box4));

    const box5 = document.getElementById("box5");
    box5.addEventListener("click", () => onClickCell(1, 2, box5));

    const box6 = document.getElementById("box6");
    box6.addEventListener("click", () => onClickCell(1, 2, box6));

    const box7 = document.getElementById("box7");
    box7.addEventListener("click", () => onClickCell(2, 1, box7));

    const box8 = document.getElementById("box8");
    box8.addEventListener("click", () => onClickCell(2, 2, box8));

    initGame();
}
