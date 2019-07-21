let Fighter = function (object) {
    let name = object.name;
    let damage = object.damage;
    let hp = object.hp;
    let agility = object.agility;
    let wins = 0;
    let losses = 0;
    let totalHp = object.hp;
    return {

        getName: function () {
            return name;
        },
        getDamage: function () {
            return damage;
        },
        getAgility: function () {
            return agility;
        },
        getHealth: function () {
            return totalHp;
        },
        attack: function (defender) {
            let band = 101;
            let attackSuccess = Math.round(Math.random() * band);
            if (attackSuccess >= defender.getAgility()) {
                defender.dealDamage(damage);
                console.log(`${name} make ${damage} damage to ${defender.getName()}`);
            } else {
                console.log(`${name} attack missed`);
            }
        },
        logCombatHistory: function () {
            return `Name ${name}, Wins ${wins}, Losses ${losses}`;
        },
        heal: function (extra) {
            totalHp = Math.min(hp, totalHp + extra);
        },
        dealDamage: function (damage) {
            totalHp = Math.max(0, totalHp - damage);
        },
        addWin: function () {
            wins++;
        },
        addLoss: function () {
            losses++;
        }
    }
}

function battle(fighterFirst, fighterSecond) {
    for (const key in arguments) {
        if (arguments[key].getHealth() === 0) {
            console.log(`${arguments[key].getName()} is dead and can't fight.`);
        }
    }
    let i = 1,
        modul = 2;
    while (fighterFirst.getHealth() > 0 && fighterSecond.getHealth() > 0) {
        let competitor = i % modul === 0 ? fighterFirst : fighterSecond;
        let deffender = i % modul === 0 ? fighterSecond : fighterFirst;
        competitor.attack(deffender);
        if (deffender.getHealth() === 0) {
            deffender.addLoss();
            competitor.addWin();
        }
        i++;
    }
}