const $ = require('jquery');
const other = require('../../lib/other');

var pic = function pic(fighter) {
    if (fighter.type == 'Saiyan') {
        if (fighter.health == 0) {
            return '../../assets/endoffightsaiyan.gif';
        }
        if (fighter.level == 0) {
            return '../../assets/base.gif';
        } else if (fighter.level == 1) {
            return '../../assets/saiyan1.gif';
        } else if (fighter.level == 2) {
            return '../../assets/saiyan2.gif';
        } else if (fighter.level == 3) {
            return '../../assets/saiyan3.gif';
        } else if (fighter.level == 4) {
            return '../../assets/saiyan4.gif';
        } else if (fighter.level == 5) {
            return '../../assets/saiyanblue.gif';
        } else if (fighter.level == 6) {
            return '../../assets/saiyang.gif';
        }
    } else if (fighter.type == 'Fighter') {
        if (fighter.health == 0) {
            return '../../assets/endoffight.gif';
        } else {
            return 'https://media.giphy.com/media/3o7abzTyxa2ahV2jo4/giphy.gif';
        }
    } else if (fighter.type == 'Soulreaper') {
        if (fighter.health == 0) {
            return '../../assets/endoffightreap.gif';
        }
        if (fighter.level == 0) {
            return '../../assets/basereaper.gif';
        } else if (fighter.level == 1) {
            return '../../assets/1reaper.gif';
        } else if (fighter.level == 2) {
            return '../../assets/2reaper.gif';
        } else if (fighter.level == 3) {
            return '../../assets/3reaper.gif';
        } else if (fighter.level == 4) {
            return '../../assets/4reaper.gif';
        } else if (fighter.level == 5) {
            return '../../assets/5reaper.gif';
        } else if (fighter.level == 6) {
            return '../../assets/6reaper.gif';
        }
    }
};
var special_Button = function special_Button(fighter2) {
    if (fighter2.type == 'Saiyan') {
        return '<button type="button" class="btn btn-danger btn-md" id="transform">[T]ransform</button></div>';
    }
    if (fighter2.type == 'Soulreaper') {
        return '<button type="button" class="btn btn-danger btn-md" id="hollow">[T]ransform</button></div>';
    } else {
        return '</div>';
    }
};

var reg_button = function reg_button() {
    return '&nbsp options are: <div class="col-lg-6" id="btn"><button type="button" class="btn btn-danger btn-md" id="attack">[A]ttack</button> &nbsp <button type="button" class="btn btn-danger btn-md" id="h">[H]eal</button> &nbsp <button type="button" class="btn btn-danger btn-md" id="skip">[S]kip</button> &nbsp';
};

var fighter1_stats = function fighter1_stats(fighter1) {
    return (
        '<div class="container col-lg-12 col-sm-8"><h3>' +
        'Name-&nbsp&nbsp&nbsp' +
        fighter1.name +
        '|&nbsp&nbsp&nbsp' +
        'Damage_Low-&nbsp&nbsp&nbsp' +
        fighter1.damage_low +
        '|&nbsp&nbsp&nbsp' +
        'Damage_High-&nbsp&nbsp&nbsp' +
        fighter1.damage_high +
        '|&nbsp&nbsp&nbsp' +
        'Health-&nbsp&nbsp&nbsp' +
        fighter1.health +
        '|&nbsp&nbsp&nbsp' +
        'Rage-&nbsp&nbsp&nbsp' +
        fighter1.rage +
        '</h3></div>' +
        '<div class="container col-lg-12 col-sm-8"><img src="' +
        pic(fighter1) +
        '" class="img-fluid" alt="Responsive imgage" height="auto" max-width="100%"/>' +
        '<div class="progress progress-striped active col-lg-10"><div class="progress-bar" style="width:' +
        fighter1.health +
        '%"></div></div>' +
        '<br>'
    );
};

var fighter2_stats = function fighter2_stats(fighter2) {
    return (
        '<div class="container col-lg-12 col-sm-8"><h3>' +
        'Name-&nbsp&nbsp&nbsp' +
        fighter2.name +
        '|&nbsp&nbsp&nbsp' +
        'Damage_Low-&nbsp&nbsp&nbsp' +
        fighter2.damage_low +
        '|' +
        'Damage_High-&nbsp&nbsp&nbsp' +
        fighter2.damage_high +
        '|&nbsp&nbsp&nbsp' +
        'Health-&nbsp&nbsp&nbsp' +
        fighter2.health +
        '|&nbsp&nbsp&nbsp' +
        'Rage-&nbsp&nbsp&nbsp' +
        fighter2.rage +
        '</h3></div>' +
        '<div class="container col-lg-12 col-sm-8"><img src="' +
        pic(fighter2) +
        '" class="img-fluid" alt="Responsive imgage" height="auto"  max-width="100%";/>' +
        '<div class="progress progress-striped active col-lg-10"><div class="progress-bar" style="width:' +
        fighter2.health +
        '%"></div></div>'
    );
};

var createfighter1 = function createfighter1(G1name) {
    if ($('#Fighter1').val() == 'Fighter') {
        var a = other.damage_finder(10, 30);
        var b = other.damage_finder(10, 30);
        var fighter1 = new other.Fighter(
            G1name,
            Math.min(a, b),
            Math.max(a, b)
        );
    } else if ($('#Fighter1').val() == 'Saiyan') {
        var a = other.damage_finder(25, 45);
        var b = other.damage_finder(25, 45);
        var fighter1 = new other.Saiyan(G1name, Math.min(a, b), Math.max(a, b));
    } else {
        var a = other.damage_finder(25, 45);
        var b = other.damage_finder(25, 45);
        var fighter1 = new other.Soulreaper(
            G1name,
            Math.min(a, b),
            Math.max(a, b)
        );
    }
    return fighter1;
};

var createfighter2 = function createfighter2(G2name) {
    if ($('#Fighter2').val() == 'Fighter') {
        var a = other.damage_finder(10, 30);
        var b = other.damage_finder(10, 30);
        var fighter2 = new other.Fighter(
            G2name,
            Math.min(a, b),
            Math.max(a, b)
        );
    } else if ($('#Fighter2').val() == 'Saiyan') {
        var a = other.damage_finder(25, 45);
        var b = other.damage_finder(25, 45);
        var fighter2 = new other.Saiyan(G2name, Math.min(a, b), Math.max(a, b));
    } else {
        var a = other.damage_finder(25, 45);
        var b = other.damage_finder(25, 45);
        var fighter2 = new other.Soulreaper(
            G2name,
            Math.min(a, b),
            Math.max(a, b)
        );
    }
    return fighter2;
};

var heal = function heal(attacker, defender) {
    attacker.heal();
    $('#maindiv').html(
        fighter1_stats(attacker) +
            fighter2_stats(defender) +
            reg_button() +
            special_Button(defender)
    );
    if (defender.rage < 70) {
        $('#hollow').prop('disabled', true);
    }
    if (defender.rage < 10) {
        $('#h').prop('disabled', true);
    }
    if (defender.health >= 1000) {
        $('#h').prop('disabled', true);
    }
    if (defender.rage < 70) {
        $('#transform').prop('disabled', true);
    }
    $('#h').on('click', function() {
        heal(defender, attacker);
    });
    $('#skip').on('click', function() {
        skip(defender, attacker);
    });
    $('#attack').on('click', function() {
        attack(defender, attacker);
    });
    $('#transform').on('click', function() {
        transform(defender, attacker);
    });
    $('#hollow').on('click', function() {
        hollow(defender, attacker);
    });
};

var skip = function skip(attacker, defender) {
    attacker.skip();
    $('#maindiv').html(
        fighter1_stats(attacker) +
            fighter2_stats(defender) +
            reg_button() +
            special_Button(defender)
    );
    if (defender.rage < 70) {
        $('#hollow').prop('disabled', true);
    }
    if (defender.rage < 10) {
        $('#h').prop('disabled', true);
    }
    if (defender.health >= 1000) {
        $('#h').prop('disabled', true);
    }
    if (defender.rage < 70) {
        $('#transform').prop('disabled', true);
    }
    $('#h').on('click', function() {
        heal(defender, attacker);
    });
    $('#skip').on('click', function() {
        skip(defender, attacker);
    });
    $('#attack').on('click', function() {
        attack(defender, attacker);
    });
    $('#transform').on('click', function() {
        transform(defender, attacker);
    });
    $('#hollow').on('click', function() {
        hollow(defender, attacker);
    });
};

var hollow = function hollow(attacker, defender) {
    attacker.hollowForm();
    $('#maindiv').html(
        fighter1_stats(attacker) +
            fighter2_stats(defender) +
            reg_button() +
            special_Button(defender)
    );
    if (defender.rage < 70) {
        $('#hollow').prop('disabled', true);
    }
    if (defender.rage < 10) {
        $('#h').prop('disabled', true);
    }
    if (defender.health >= 1000) {
        $('#h').prop('disabled', true);
    }
    if (defender.rage < 70) {
        $('#transform').prop('disabled', true);
    }
    $('#h').on('click', function() {
        heal(defender, attacker);
    });
    $('#skip').on('click', function() {
        skip(defender, attacker);
    });
    $('#attack').on('click', function() {
        attack(defender, attacker);
    });
    $('#transform').on('click', function() {
        transform(defender, attacker);
    });
    $('#hollow').on('click', function() {
        hollow(defender, attacker);
    });
};
var transform = function transform(attacker, defender) {
    attacker.Transform();
    $('#maindiv').html(
        fighter1_stats(attacker) +
            fighter2_stats(defender) +
            reg_button() +
            special_Button(defender)
    );
    if (defender.rage < 70) {
        $('#hollow').prop('disabled', true);
    }
    if (defender.rage < 10) {
        $('#h').prop('disabled', true);
    }
    if (defender.health >= 1000) {
        $('#h').prop('disabled', true);
    }
    if (defender.rage < 70) {
        $('#transform').prop('disabled', true);
    }
    $('#h').on('click', function() {
        heal(defender, attacker);
    });
    $('#skip').on('click', function() {
        skip(defender, attacker);
    });
    $('#attack').on('click', function() {
        attack(defender, attacker);
    });
    $('#transform').on('click', function() {
        transform(defender, attacker);
    });
    $('#hollow').on('click', function() {
        hollow(defender, attacker);
    });
};
var attack = function attack(attacker, defender) {
    attacker.attack(defender);
    $('#maindiv').html(
        fighter1_stats(attacker) +
            fighter2_stats(defender) +
            reg_button() +
            special_Button(defender)
    );
    if (defender.isDead() == true) {
        return $('#maindiv').html(
            '<div class="jumbotron"><center><h1>' +
                attacker.name +
                '&nbsp Wins</h1></center></div>' +
                fighter1_stats(attacker) +
                fighter2_stats(defender)
        );
    }
    if (defender.rage < 70) {
        $('#hollow').prop('disabled', true);
    }
    if (defender.rage < 10) {
        $('#h').prop('disabled', true);
    }
    if (defender.health >= 1000) {
        $('#h').prop('disabled', true);
    }
    if (defender.rage < 70) {
        $('#transform').prop('disabled', true);
    }
    $('#h').on('click', function() {
        heal(defender, attacker);
    });
    $('#skip').on('click', function() {
        skip(defender, attacker);
    });
    $('#attack').on('click', function() {
        attack(defender, attacker);
    });
    $('#transform').on('click', function() {
        transform(defender, attacker);
    });
    $('#hollow').on('click', function() {
        hollow(defender, attacker);
    });
};
$('#initialform').on('click', function() {
    fighter1 = createfighter1($('#G1').val());
    fighter2 = createfighter2($('#G2').val());
    $('#maindiv').html(
        fighter1_stats(fighter1) +
            fighter2_stats(fighter2) +
            '<button class="btn btn-danger btn-md" id="start">Begin</button>'
    );
    $('#start').on('click', function() {
        $('#maindiv').html(
            fighter1_stats(fighter1) +
                fighter2_stats(fighter2) +
                reg_button() +
                special_Button(fighter1)
        );
        if (fighter1.rage < 70) {
            $('#hollow').prop('disabled', true);
        }

        if (fighter1.rage < 10) {
            $('#h').prop('disabled', true);
        }
        if (fighter1.health >= 1000) {
            $('#h').prop('disabled', true);
        }
        if (fighter1.rage < 70) {
            $('#transform').prop('disabled', true);
        }
        $('#h').on('click', function() {
            heal(fighter1, fighter2);
        });
        $('#skip').on('click', function() {
            skip(fighter1, fighter2);
        });
        $('#attack').on('click', function() {
            attack(fighter1, fighter2);
        });
        $('#hollow').on('click', function() {
            hollow(fighter1, fighter2);
        });
    });
});
