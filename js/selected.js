const selectedPlayerList = [];

// Display the selected players in ordered list
function displayPlayerName(player) {
    const playerList = document.getElementById('selected-players');
    playerList.innerText = '';

    for (let i = 0; i < player.length; i++) {
        const name = selectedPlayerList[i].playerName;

        const ol = document.createElement('li');
        // Display an alert message
        if (selectedPlayerList.length === 12) {
            return alert("You have already selected eleven players, no more selection !!!")
        }
        ol.innerText = name;

        playerList.appendChild(ol);
    }
}

// Select Players and push in array
function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    };
    selectedPlayerList.push(playerObj);

    displayPlayerName(selectedPlayerList);
}

// Selected Players list length
function arrayLength() {
    const selectedLength = selectedPlayerList.length;
    return selectedLength;
}