// Player Expenses
const playerExpenses = function (event, param) {

}
document.getElementById('btn-calculate').addEventListener('click', function (event, param) {
    const perPlayerCost = getInputFieldValueById('player-cost');

    // Input field takes only number otherwise return an alert message
    if (isNaN(perPlayerCost)) {
        return alert("Enter number for per player")
    }
    let selected = 0;
    selected = arrayLength(selected);

    const playerExpenses = perPlayerCost * selected;

    console.log(playerExpenses);
    const textElement = document.getElementById('total-player-cost');
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    const newValue = textElementValue + playerExpenses;
    textElement.innerText = newValue;


    // Total Expenses
    document.getElementById('btn-calculate-total').addEventListener('click', function () {
        const managerCost = getInputFieldValueById('manager-cost');
        // Input field takes only number otherwise return an alert message
        if (isNaN(managerCost)) {
            return alert("Enter number for manager")
        }
        const coachCost = getInputFieldValueById('coach-cost');
        // Input field takes only number otherwise return an alert message
        if (isNaN(coachCost)) {
            return alert("Enter number for coach")
        }

        const totalExpenses = playerExpenses + managerCost + coachCost;
        console.log(totalExpenses)
        const textElement = document.getElementById('total-cost');
        const textElementValueString = textElement.innerText;
        const textElementValue = parseFloat(textElementValueString);
        const newValue = textElementValue + totalExpenses;
        textElement.innerText = newValue;
    })
})

