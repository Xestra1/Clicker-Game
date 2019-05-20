var total = 10000000;
var buyMultiplier = 1;
var upgrade = {
    cost: 50000,
    multiplier: 2,
    max: 0
};
var generators = [{
        id: 0,
        name: "Bitcoin Miner",
        cost: 100,
        production: 1,
        amountOwned: 0
    },
    {
        id: 1,
        name: "Factory",
        cost: 500,
        production: 5,
        amountOwned: 0
    },
    {
        id: 2,
        name: "Metals",
        cost: 2000,
        production: 20,
        amountOwned: 0
    },
    {
        id: 3,
        name: "Business Man",
        cost: 50000,
        production: 500,
        amountOwned: 0
    },
    {
        id: 4,
        name: "Sports Team",
        cost: 1000000,
        production: 10000,
        amountOwned: 0
    },
    {
        id: 5,
        name: "Earth",
        cost: 10000000,
        production: 100000,
        amountOwned: 0
    }
];

document.getElementById("total").innerHTML = total;
document.getElementById("owned0").innerHTML = generators[0].amountOwned;
document.getElementById("cost0").innerHTML = generators[0].cost;
document.getElementById("production0").innerHTML = generators[0].production;
document.getElementById("owned1").innerHTML = generators[1].amountOwned;
document.getElementById("cost1").innerHTML = generators[1].cost;
document.getElementById("production1").innerHTML = generators[1].production;
document.getElementById("owned2").innerHTML = generators[2].amountOwned;
document.getElementById("cost2").innerHTML = generators[2].cost;
document.getElementById("production2").innerHTML = generators[2].production;
document.getElementById("owned3").innerHTML = generators[3].amountOwned;
document.getElementById("cost3").innerHTML = generators[3].cost;
document.getElementById("production3").innerHTML = generators[3].production;
document.getElementById("owned4").innerHTML = generators[4].amountOwned;
document.getElementById("cost4").innerHTML = generators[4].cost;
document.getElementById("production4").innerHTML = generators[4].production;
document.getElementById("owned5").innerHTML = generators[5].amountOwned;
document.getElementById("cost5").innerHTML = generators[5].cost;
document.getElementById("production5").innerHTML = generators[5].production;
document.getElementById("upgradeCost").innerHTML = upgrade.cost;
document.getElementById("upgradeMultiplier").innerHTML = upgrade.multiplier;

function click() {
    total++;
    document.getElementById("total").innerHTML = total;
}
document.getElementById('click').addEventListener('click', click);

function upgradeProduction() {
    if (upgrade.max < 6) {
        total -= upgrade.cost;
        var x;
        for (x = 0; x < 6; x++) {
            generators[x].production *= upgrade.multiplier;
            document.getElementById("production" + x).innerHTML = generators[x].production;
        }
        upgrade.cost *= 2;
        upgrade.multiplier *= 2;
        document.getElementById("upgradeCost").innerHTML = upgrade.cost;
        document.getElementById("upgradeMultiplier").innerHTML = upgrade.multiplier;
        document.getElementById("total").innerHTML = total;
        upgrade.max++;
    } else {
        document.getElementById("upgrade").style.opacity = 0.5;
    }
}

function multiplier(value) {
    buyMultiplier = value;
    document.getElementById("changedMultiplier").innerHTML = value;
}

function buy(id) {
    if (total >= generators[id].cost) {
        generators[id].amountOwned += buyMultiplier;
        total -= generators[id].cost;
        generators[id].cost = Math.floor(generators[id].cost * 0.01 + generators[id].cost);
        document.getElementById("owned" + id).innerHTML = generators[id].amountOwned;
        document.getElementById("total").innerHTML = total;
        document.getElementById("cost" + id).innerHTML = generators[id].cost;
    }
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

    document.getElementById("total").innerHTML = total;
}
setInterval(production, 1000);