function damage_finder(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

function SaiyanPrefix(level) {
    if (level == 0) {
        return 'Saiyan';
    } else if (level == 1) {
        return 'Super Saiyan';
    } else if (level == 2) {
        return 'Super Saiyan 2';
    } else if (level == 3) {
        return 'Super Saiyan 3';
    } else if (level == 4) {
        return 'Super Saiyan 4';
    } else if (level == 5) {
        return 'Super Saiyan God';
    } else if (level == 6) {
        return 'Super Saiyan Blue';
    }
}

function Soulreaper(name, damage_low, damage_high) {
    this.type = 'Soulreaper';
    this.level = 0;
    this.name = name;
    this.originalName = this.name;
    this.damage_low = damage_low;
    this.damage_high = damage_high;
    this.health = 1000;
    this.rage = 60;

    this.attack = function attack(that) {
        var crit_chance = this.rage;
        var attacks = damage_finder(this.damage_low, this.damage_high);
        var crit = false;
        if (crit_chance >= Math.floor(Math.random() * 10 + damage_high * 2)) {
            crit = true;
            attacks *= 2;
            that.health = Math.max(that.health - attacks, 0);
            this.rage = 0;
            return crit;
        } else {
            that.health = Math.max(that.health - attacks, 0);
            this.rage = Math.min(100, this.rage + 15);
            return crit;
        }
    };

    this.heal = function heal() {
        var success = false;
        if (this.rage >= 10) {
            this.health = Math.min(this.health + 5, 1000);
            this.rage = Math.max(this.rage - 10, 0);
            success = true;
        }
        return success;
    };
    this.isDead = function isDead() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    };

    this.skip = function skip() {
        this.rage += 30;
        this.damage_low -= 5;
        this.damage_high -= 5;
    };

    this.hollowForm = function hollowForm() {
        if (this.rage >= 70) {
            this.level += 1;
            this.health += 75;
            this.damage_low += 50;
            this.damage_high += 55;
            this.rage = 20;
        } else {
            return false;
        }
    };
}
function Saiyan(name, damage_low, damage_high) {
    this.type = 'Saiyan';
    this.level = 0;
    this.name = name;
    this.originalName = this.name;
    this.damage_low = damage_low;
    this.damage_high = damage_high;
    this.health = 1000;
    this.rage = 60;

    this.attack = function attack(that) {
        var crit_chance = this.rage;
        var attacks = damage_finder(this.damage_low, this.damage_high);
        var crit = false;
        if (crit_chance >= Math.floor(Math.random() * 10 + damage_high * 2)) {
            crit = true;
            attacks *= 2;
            that.health = Math.max(that.health - attacks, 0);
            this.rage = 0;
            return crit;
        } else {
            that.health = Math.max(that.health - attacks, 0);
            this.rage = Math.min(100, this.rage + 15);
            return crit;
        }
    };

    this.heal = function heal() {
        var success = false;
        if (this.rage >= 10) {
            this.health = Math.min(this.health + 5, 1000);
            this.rage = Math.max(this.rage - 10, 0);
            success = true;
        }
        return success;
    };
    this.isDead = function isDead() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    };

    this.Transform = function Transform() {
        if (this.rage >= 70) {
            this.level += 1;
            this.name = SaiyanPrefix(this.level) + '-' + this.originalName;
            this.health += 75;
            this.damage_low += 50;
            this.damage_high += 55;
            this.rage = 20;
        } else {
            return false;
        }
    };

    this.skip = function skip() {
        this.rage += 30;
        this.damage_low -= 5;
        this.damage_high -= 5;
    };
}

function Fighter(name, damage_low, damage_high) {
    this.type = 'Fighter';
    this.name = name;
    this.damage_low = damage_low;
    this.damage_high = damage_high;
    this.health = 100;
    this.rage = 0;

    this.attack = function attack(that) {
        var crit_chance = this.rage;
        var attacks = damage_finder(damage_low, damage_high);
        var crit = false;
        if (crit_chance >= Math.floor(Math.random() + damage_high * 2)) {
            crit = true;
            attacks *= 2;
            that.health = Math.max(that.health - attacks, 0);
            this.rage = 0;
            return crit;
        } else {
            that.health = Math.max(that.health - attacks, 0);
            this.rage = Math.min(100, this.rage + 15);
            return crit;
        }
    };

    this.heal = function heal() {
        var success = false;
        if (this.rage >= 10) {
            this.health = Math.min(this.health + 5, 100);
            this.rage = Math.max(this.rage - 10, 0);
            success = true;
        }
        return success;
    };
    this.isDead = function isDead() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    };

    this.skip = function skip() {
        this.rage += 30;
        this.damage_low -= 5;
        this.damage_high -= 5;
    };
}

if (typeof exports !== 'undefined') {
    exports.Fighter = Fighter;
    exports.Saiyan = Saiyan;
    exports.damage_finder = damage_finder;
    exports.SaiyanPrefix = SaiyanPrefix;
    exports.Soulreaper = Soulreaper;
}
