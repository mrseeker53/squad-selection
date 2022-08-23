// Player Expenses
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValueById('player-cost');
    let selected = 0;
    selected = arrayLength(selected);

    const playerExpenses = perPlayerCost * selected;

    console.log(playerExpenses);
    const textElement = document.getElementById('total-player-cost');
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    const newValue = textElementValue + playerExpenses;
    textElement.innerText = newValue;
})

// Total Expenses
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');

    const playerExpenses = expenses(totalPlayerCost);
    const totalExpenses = playerExpenses + managerCost + coachCost;
    setTextElementValueById('total-cost', totalExpenses);
    console.log(totalCost);
})