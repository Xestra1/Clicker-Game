var total = 0;
var clickMultiplier = 1;
var buyMultiplier = 1;
var upgrade = {
    cost: 50000,
    multiplier: 1.5,
    max: 0
};
var generators = [{
        id: 0,
        name: "Bitcoin Miner",
        cost: 25,
        production: 0.25,
        amountOwned: 0
    },
    {
        id: 1,
        name: "Bitcoin Miner",
        cost: 100,
        production: 1,
        amountOwned: 0
    },
    {
        id: 2,
        name: "Factory",
        cost: 500,
        production: 5,
        amountOwned: 0
    },
    {
        id: 3,
        name: "Metals",
        cost: 2500,
        production: 25,
        amountOwned: 0
    },
    {
        id: 4,
        name: "Business Man",
        cost: 50000,
        production: 500,
        amountOwned: 0
    },
    {
        id: 5,
        name: "Sports Team",
        cost: 250000,
        production: 2500,
        amountOwned: 0
    },
    {
        id: 6,
        name: "Earth",
        cost: 5000000,
        production: 50000,
        amountOwned: 0
    },
    {
        id: 7,
        name: "Bitcoin Miner",
        cost: 15000000,
        production: 150000,
        amountOwned: 0
    }
];

document.getElementById("total").innerHTML = total;
for (i = 0; i < 8; i++) {
    document.getElementById("owned" + i).innerHTML = generators[i].amountOwned;
    document.getElementById("cost" + i).innerHTML = generators[i].cost;
    document.getElementById("production" + i).innerHTML = generators[i].production;
}
document.getElementById("upgradeCost0").innerHTML = upgrade.cost;
document.getElementById("upgradeMultiplier").innerHTML = upgrade.multiplier;

function click() {
    total += clickMultiplier;
    document.getElementById("total").innerHTML = total;
}

document.getElementById('click').addEventListener('click', click);

function upgradeProduction() {
    if (upgrade.max < 6 && upgrade.cost <= total) {
        total -= upgrade.cost;
        var x;
        for (x = 0; x < 8; x++) {
            generators[x].production *= upgrade.multiplier;
            document.getElementById("production" + x).innerHTML = generators[x].production;
        }
        upgrade.cost *= 7.5;
        upgrade.multiplier = Math.floor(upgrade.multiplier * 1.5);
        clickMultiplier *= 2;
        document.getElementById("upgradeCost0").innerHTML = upgrade.cost;
        document.getElementById("upgradeMultiplier").innerHTML = upgrade.multiplier;
        document.getElementById("total").innerHTML = total;
        upgrade.max++;
    } else if (upgrade.max === 6) {
        document.getElementById("upgradeCost0").style.opacity = 0.5;
        document.getElementById("upgradeMultiplier").style.opacity = 0.5;
    }
}

function multiplier(value) {
    buyMultiplier = value;
    document.getElementById("changedMultiplier").innerHTML = value;
}

function buy(id) {
    var temp = buyMultiplier * generators[id].cost;
    if (total >= temp) {
        generators[id].amountOwned += buyMultiplier;
        total -= temp;
        generators[id].cost = generators[id].cost + generators[id].production * buyMultiplier;
        // Math.floor(generators[id].cost * 0.01 + generators[id].cost)
        document.getElementById("owned" + id).innerHTML = generators[id].amountOwned;
        document.getElementById("total").innerHTML = total;
        document.getElementById("cost" + id).innerHTML = generators[id].cost;
    }
    temp = '';
}

function production() {
    var genTotal0 = generators[0].production * generators[0].amountOwned;
    total += genTotal0;

    var genTotal1 = generators[1].production * generators[1].amountOwned;
    total += genTotal1;

    var genTotal2 = generators[2].production * generators[2].amountOwned;
    total += genTotal2;

    var genTotal3 = generators[3].production * generators[3].amountOwned;
    total += genTotal3;

    var genTotal4 = generators[4].production * generators[4].amountOwned;
    total += genTotal4;

    var genTotal5 = generators[5].production * generators[5].amountOwned;
    total += genTotal5;

    var genTotal6 = generators[6].production * generators[6].amountOwned;
    total += genTotal6;

    var genTotal7 = generators[7].production * generators[7].amountOwned;
    total += genTotal7;

    document.getElementById("total").innerHTML = total;
}
setInterval(production, 1000);



// var autoClicker = {
//     cost: 100000,
//     haveAutoClicker: false
// };

// document.getElementById("upgradeCost1").innerHTML = autoClicker.cost;
// document.getElementById("Autoclicker").innerHTML = autoClicker.haveAutoClicker;

// if (autoClicker.haveAutoClicker === false) {
//     document.getElementById('click').addEventListener('click', click);
//     console.log('object');
// } else if (autoClicker.haveAutoClicker === true) {
//     document.getElementById('click').addEventListener('onmouseenter', click);
//     console.log('objfdsect');
// }

// function upgradeAutoClicker() {
//     if (autoClicker.cost <= total && autoClicker.haveAutoClicker === false) {
//         total -= autoClicker.cost;
//         autoClicker.haveAutoClicker = true;
//         document.getElementById("Autoclicker").innerHTML = autoClicker.haveAutoClicker;
//         document.getElementById("upgradeCost1").style.opacity = 0.5;
//         document.getElementById("Autoclicker").style.opacity = 0.5;
//     }
// }