var search = document.getElementById("search");
var answer = document.getElementById("answer");
var lookFor = document.getElementById("lookFor");
var years = document.getElementById("years");
var go = document.getElementById("go");

lookFor.addEventListener("click", potionSearch);
go.addEventListener("click", yearSearch);

function yearSearch() {
    var year = years.value;
    if (year === "Year 1") {
        answer.innerHTML = "Common Antidote, Boil Cure, Swifty Draught, Wiggenweld Potion, Essence of Dittany, Faiblesse Potion, Invigoration Draught";
    }
}

function potionSearch() {
    var hold = search.value;
    var potion = hold.toLowerCase();
    if (potion === "common antidote") {
        answer.innerHTML = "";
        distillTwo("powdered honey", "powdered bezoar", 4, "standard ingredient", 1, "water bottle");
        distillTwo("mint sprig", "standard ingredient", 2, "honey water", 1, "green common antidote");
        brewing("pinched unicorn horn", "blue common antidote");
        distillOne("powdered honey", 2, "mistletoe berries", "yellow common antidote");
        end("common antidote");
    }
    else if (potion === "boil cure") {
        answer.innerHTML = "";
        distillOne("powdered snake fang", 3, "pungous onions", "honey water");
        distillTwo("shrake powder", 1, "flobberworm mucus", 1, "standard ingredients", "yellow boil cure");
        distillTwo("distilling catalyst", 1, "porcupine quill", 1, "honey water", "orange boil cure");
        distillOne("powdered honey", 2, "shrake spine", "green boil cure");
        end("boil cure");
    }
    else if (potion === "swifty draught") {
        answer.innerHTML = "";
        brewing("salt", "water bottle");
        brewing("salt", "blue swifty draught");
        distillOne("salt", 2, "standard ingredient", "red swifty draught");
        distillOne("salt", 3, "standard ingredient", "green swifty draught");
        brewing("salt", "purple swifty draught");
        end("swifty draught");
    }
    else if (potion === "wiggenweld potion") {
        answer.innerHTML = "";
        brewing("salamander blood", "water bottle");
        brewing("salamander blood", "red wiggenweld potion");
        brewing("salamander blood", "orange wiggenweld potion");
        distillOne("salamander blood", 5, "lionfish spine", "green wiggenweld potion");
        distillTwo("salamander blood", 5, "lionfish spine", 2, "flobberworm mucus", "pink wiggenweld potion");
        distillOne("salamander blood", 5, "flobberworm mucus", "yellow wiggenweld potion");
        distillTwo("salamander blood", 5, "flobberworm mucus", 1, "honey water", "purple wiggenweld potion");
        brewing("salamander blood", "blue wiggenweld potion");
        end("wiggenweld potion");
    }
    else if (potion === "blackfire") {
        answer.innerHTML = "";
        distillTwo("salt", 3, "sliced bursting mushroom", 1, "distilling catalyst", "honey water");
        brewing("salamander blood", "blue blackfire potion");
        distillTwo("salamander blood", 2, "sliced bursting mushroom", 3, "distilling catalyst", "red blackfire potion");
        brewing("salamander blood", "green blackfire potion");
        distillThree("salamander blood", 3, "fine wartcap powder", 1, "sliced bursting mushrooms", 2, "distilling catalyst", "grey blackfire potion");
        end("blackfire potion");
    }
    else if (potion === "essence of dittany") {
        answer.innerHTML = "";
        brewing("boom berry", "water");
        brewing("boom berry", "grey essence of dittany");
        distillTwo("boom berry", 2, "standard ingredient", 5, "dittany", "orange essence of dittany");
        distillTwo("boom berry", 1, "standard ingredient", 3, "dittany", "green essence of dittany");
        brewing("dittany", "red essence of dittany");
        end("essence of dittany");
    }
    else if (potion === "faiblesse potion") {
        answer.innerHTML = "";
        brewing("newt", "leech juice");
        distillTwo("newt", 1, "adder's fork", 1, "sloth brain", "base faiblesse potion");
        distillTwo("salamander blood", 3, "belladonna", 5, "doxy eggs", "light grey faiblesse potion");
        distillTwo("newt", 1, "standard ingredient", 1, "honey water", "dark grey faiblesse potion");
        distillTwo("newt", 4, "standard ingredient", 1, "honey water", "grey faiblesse potion");
        distillTwo("powdered snake fang", 3, "sneezewort", 1, "leech juice", "orange faiblesse potion");
    }
    else if (potion === "invigoration draught") {
        answer.innerHTML = "";
        brewing("powdered snake fang", "water bottle");
        distillThree("powdered snake fang", 1, "honey water", 2, "lavender", 1, "wolf's tooth", "grey invigoration draught");
        brewing("powdered snake fang", "pink invigoration draught");
        distillThree("powdered snake fang", 2, "bone", 3, "lavender", 2, "standard ingredient", "blue invigoration draught");
    }
    else {
        answer.innerHTML = "Potion not found";
    }
}

function end(potion) {
    answer.innerHTML += "And that's the recipe for " + potion + ". ";
}

/**
 * Function to write brewing steps
 * @param {string} ingredient - the top ingredient in the brewing stand
 * @param {string} potion - the potion that goes in the bottom of the brewing stand
 */
function brewing(ingredient, potion) {
    answer.innerHTML += "Put " + ingredient + " with " + potion + ". ";
}

/**
 * Function to write distilling steps with one ingredient in the cauldron
 * @param {string} ingredient - the ingredient at the top of the brewing stand
 * @param {number} one - the amount of an object in the first slot of the cauldron
 * @param {string} a - the ingredient in the first slot of the cauldron
 * @param {string} base - the potion/liquid at the bottom of the brewing stand.
 */
function distillOne(ingredient, one, a, base) {
    answer.innerHTML += "Put " + ingredient + " in the distiller along with " + base + " and put " + one + " " + a + " in the cauldron. ";
}

/**
 * Function to write distilling steps with two ingredient in the cauldron
 * @param {string} ingredient - the ingredient at the top of the brewing stand
 * @param {number} one - the amount of an object in the first slot of the cauldron
 * @param {string} a - the ingredient in the first slot of the cauldron
 * @param {number} two - the amount of an object in the second slot of the cauldron
 * @param {string} b - the ingredient in the second slot of the cauldron
 * @param {string} base - the potion/liquid at the bottom of the brewing stand
 */
function distillTwo(ingredient, one, a, two, b, base) {
    answer.innerHTML += "Put " + ingredient + " in the distiller along with " + base + " and put " + one + " " + a + " and " + two + " " + b + " in the cauldron. ";
}

/**
 * Function to write distilling steps with two ingredient in the cauldron
 * @param {string} ingredient - the ingredient at the top of the brewing stand
 * @param {number} one - the amount of an object in the first slot of the cauldron
 * @param {string} a - the ingredient in the first slot of the cauldron
 * @param {number} two - the amount of an object in the second slot of the cauldron
 * @param {string} b - the ingredient in the second slot of the cauldron
 * @param {number} three - the amount of an object in the third slot of the cauldron
 * @param {string} c - the ingredient in the third slot of the cauldron
 * @param {string} base - the potion/liquid at the bottom of the brewing stand
 */
function distillThree(ingredient, one, a, two, b, three, c, base) {
    answer.innerHTML += "Put " + ingredient + " in the distiller along with " + base + " and put " + one + " " + a + ", " + two + " " + b + ", and " + three + " " + c + " in the cauldron. ";
}
