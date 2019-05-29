var total = 0;
var clickMultiplier = 1;
var buyMultiplier = 1;
var generators = [{
        id: 0,
        name: "Clicker",
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
        name: "Universe",
        cost: 15000000,
        production: 150000,
        amountOwned: 0
    }
];
var upgrades = [{
        name: "Click",
        cost: 100,
        multiplier: 2,
        maxTotal: 10,
        max: 0
    },
    {
        name: "Clicker",
        cost: 100,
        multiplier: 2,
        maxTotal: 5,
        max: 0
    },
    {
        name: "Bitcoin Miner",
        cost: 400,
        multiplier: 2,
        maxTotal: 5,
        max: 0
    },
    {
        name: "Factory",
        cost: 2000,
        multiplier: 2,
        maxTotal: 5,
        max: 0
    },
    {
        name: "Metals",
        cost: 10000,
        multiplier: 2,
        maxTotal: 5,
        max: 0
    },
    {
        name: "Business Man",
        cost: 200000,
        multiplier: 2,
        maxTotal: 5,
        max: 0
    },
    {
        name: "Sports Team",
        cost: 1000000,
        multiplier: 2,
        maxTotal: 5,
        max: 0
    },
    {
        name: "Earth",
        cost: 20000000,
        multiplier: 2,
        maxTotal: 5,
        max: 0
    },
    {
        name: "Universe",
        cost: 60000000,
        multiplier: 2,
        maxTotal: 5,
        max: 0
    }
];

document.getElementById("total").innerHTML = total;
for (i = 0; i < 8; i++) {
    document.getElementById("owned" + i).innerHTML = generators[i].amountOwned;
    document.getElementById("cost" + i).innerHTML = generators[i].cost;
    document.getElementById("production" + i).innerHTML = generators[i].production;
}
for (h = 0; h < 9; h++) {
    document.getElementById("upgradeCost" + h).innerHTML = upgrades[h].cost;
    document.getElementById("upgradeMultiplier" + h).innerHTML = upgrades[h].multiplier;
}

function click() {
    total += clickMultiplier;
    document.getElementById("total").innerHTML = total;
}
document.getElementById('click').addEventListener('click', click);

function upgrade(id, upgrade) {
    if (upgrade === 10 && upgrades[id].cost <= total && upgrades[id].max < upgrades[id].maxTotal) {
        upgrades[id].max++;
        total -= upgrades[id].cost;
        clickMultiplier *= upgrades[id].multiplier;
        upgrades[id].cost *= 4;
        upgrades[id].multiplier++;
        document.getElementById("upgradeCost" + id).innerHTML = upgrades[id].cost;
        document.getElementById("upgradeMultiplier" + id).innerHTML = upgrades[id].multiplier;
    } else if (upgrades[id].cost <= total && upgrades[id].max < upgrades[id].maxTotal) {
        upgrades[id].max++;
        total -= upgrades[id].cost;
        generators[upgrade].production *= upgrades[id].multiplier;
        upgrades[id].cost *= 4;
        upgrades[id].multiplier++;
        document.getElementById("upgradeCost" + id).innerHTML = upgrades[id].cost;
        document.getElementById("upgradeMultiplier" + id).innerHTML = upgrades[id].multiplier;
        document.getElementById("production" + upgrade).innerHTML = generators[upgrade].production;
    } else if (upgrades[id].max === upgrades[id].maxTotal) {
        document.getElementById("upgradeCost" + id).style.opacity = 0.5;
        document.getElementById("upgradeMultiplier" + id).style.opacity = 0.5;
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
        document.getElementById("owned" + id).innerHTML = generators[id].amountOwned;
        document.getElementById("total").innerHTML = total;
        document.getElementById("cost" + id).innerHTML = generators[id].cost;
    }
    temp = '';
}

function production() {
    for (i = 0; i < 8; i++) {
        var temp = generators[i].production * generators[i].amountOwned;
        total += temp;
    }
    document.getElementById("total").innerHTML = total;
}
setInterval(production, 1000);


// var upgrade = {
//     cost: 50000,
//     multiplier: 1.5,
//     max: 0
// };

// document.getElementById("upgradeCostAll0").innerHTML = upgrade.cost;
// document.getElementById("upgradeMultiplierAll").innerHTML = upgrade.multiplier;

// function upgradeProduction() {
//     if (upgrade.max < 6 && upgrade.cost <= total) {
//         total -= upgrade.cost;
//         var x;
//         for (x = 0; x < 8; x++) {
//             generators[x].production *= upgrade.multiplier;
//             document.getElementById("production" + x).innerHTML = generators[x].production;
//         }
//         upgrade.cost *= 7.5;
//         upgrade.multiplier = Math.floor(upgrade.multiplier * 1.5);
//         clickMultiplier *= 2;
//         document.getElementById("upgradeCost0").innerHTML = upgrade.cost;
//         document.getElementById("upgradeMultiplier").innerHTML = upgrade.multiplier;
//         document.getElementById("total").innerHTML = total;
//         upgrade.max++;
//     } else if (upgrade.max === 6) {
//         document.getElementById("upgradeCost0").style.opacity = 0.5;
//         document.getElementById("upgradeMultiplier").style.opacity = 0.5;
//     }
// }


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