var total = 0;
var clickMultiplier = 1;
var buyMultiplier = 1;
var generators = [{
        id: 0,
        name: "Clicker",
        cost: 25,
        ogCost: 25,
        production: 0.25,
        amountOwned: 0
    },
    {
        id: 1,
        name: "Bitcoin Miner",
        cost: 100,
        ogCost: 100,
        production: 1,
        amountOwned: 0
    },
    {
        id: 2,
        name: "Factory",
        cost: 500,
        ogCost: 500,
        production: 5,
        amountOwned: 0
    },
    {
        id: 3,
        name: "Metals",
        cost: 2500,
        ogCost: 2500,
        production: 25,
        amountOwned: 0
    },
    {
        id: 4,
        name: "Business Man",
        cost: 50000,
        ogCost: 50000,
        production: 500,
        amountOwned: 0
    },
    {
        id: 5,
        name: "Sports Team",
        cost: 250000,
        ogCost: 250000,
        production: 2500,
        amountOwned: 0
    },
    {
        id: 6,
        name: "Earth",
        cost: 5000000,
        ogCost: 5000000,
        production: 50000,
        amountOwned: 0
    },
    {
        id: 7,
        name: "Universe",
        cost: 15000000,
        ogCost: 15000000,
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
var totalId = document.getElementById("total");
var changedBuyMultiplierId = document.getElementById("changedMultiplier");

totalId.innerHTML = total;
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
    totalId.innerHTML = total;
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
    changedBuyMultiplierId.innerHTML = value;
}

function buy(id) {
    var temp = buyMultiplier * generators[id].cost;
    if (total >= temp) {
        generators[id].amountOwned += buyMultiplier;
        total -= temp;
        generators[id].cost = generators[id].cost + generators[id].production * buyMultiplier;
        document.getElementById("owned" + id).innerHTML = generators[id].amountOwned;
        totalId.innerHTML = total;
        document.getElementById("cost" + id).innerHTML = generators[id].cost;
    }
    temp = '';
}

function production() {
    for (i = 0; i < 8; i++) {
        var temp = generators[i].production * generators[i].amountOwned;
        total += temp;
    }
    totalId.innerHTML = total;

    // localStorage.setItem('total', total);
    // total = Math.round(localStorage.getItem('total') * 100) / 100;

    // localStorage.setItem('generators', JSON.stringify(generators));
    // console.log(getItem('generators'));
    (total === Infinity) ? alert("Ay! \nyou won!"): 0;
}
setInterval(production, 1000);

function load() {
    // total = parseInt(localStorage.getItem('total'));
    // generators = localStorage.getItem('generators');
}