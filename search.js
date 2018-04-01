//Variables that store different HTML elements
var search = document.getElementById("search");     //The text box
var answer = document.getElementById("answer");     //The div where the answer is printed
var lookFor = document.getElementById("lookFor");   //The potions search button
var years = document.getElementById("years");       //The dropdown selector for the year
var go = document.getElementById("go");             //The year searcher button
var dark = document.getElementById("dark");         //The dark button
var light = document.getElementById("light");       //The light button
var html = document.getElementById("html");         //The entire HTML page
var error = document.getElementById("error");       //The div that displays any errors that the user input might have

//Event listeners that call functions when buttons are clicked
lookFor.addEventListener("click", potionSearch);
go.addEventListener("click", yearSearch);
dark.addEventListener("click", changeDark);
light.addEventListener("click", changeLight);

/**
 * Function that changes the color scheme to a black w/ dark green text.
 */ 
function changeDark() {
    document.body.style.color = "#00FF00";
    answer.style.color = "#00FF00";
    html.style.backgroundColor = "black";
}

/**
 * Function that changes the color scheme to a light blue w/ white text.
 */ 
function changeLight() {
    html.style.backgroundColor = "#107896";
    answer.style.color = "whitesmoke";
    document.body.style.color = "whitesmoke";
}

/**
 * Function that allows one to pull up a list of all the potions for a particular year
 */
function yearSearch() {
    //Formatting
    answer.style.fontFamily = "Georgia";
    error.innerHTML = "";
    //Stores the year value under the variable year
    var year = years.value;
    //Checks for which year is selected and sends a list of potions that are searchable (if there are none: sends 'Not implemented').
    if (year === "Year 1") {
        answer.innerHTML = "Common Antidote, Boil Cure, Swifty Draught, Wiggenweld Potion, Essence of Dittany, Faiblesse Potion, Invigoration Draught";
    }
    else if (year === "Year 2") {
        answer.innerHTML = "Confusing Draught, Bloodroot Potion, Bulgeye Potion, Laughing Potion, Murtlap Essence, Pepperup Potion, Pompion Potion, Strengthening Solution";
    }
    else if (year === "Year 3") {
        answer.innerHTML = "Babbling Beverage, Baneberry Potion, Chelidonium Miniscula, First Love Beguiling Bubbles";
    }
    else if (year === "Year 4" || year === "Year 5" || year === "Year 6" || year === "Year 7") {
        answer.innerHTML = "Not implemented";
    }
}

/**
 * Function that checks to see if a searched potion matches one in the system.
 */
function potionSearch() {
    //Temporarily takes the value, storing it in hold, and then converts it to lowercase
    var potion = search.value.toLowerCase().trim();
    //Formatting
    answer.style.fontFamily = "Georgia";
    answer.innerHTML = "";
    error.innerHTML = "";
    //The actual search
    if (potion === "common antidote") {
        distillTwo("powdered honey", "powdered bezoar", 4, "standard ingredient", 1, "water bottle");
        distillTwo("mint sprig", "standard ingredient", 2, "honey water", 1, "green common antidote");
        brewing("pinched unicorn horn", "blue common antidote");
        distillOne("powdered honey", 2, "mistletoe berries", "yellow common antidote");
        end("common antidote");
    }
    else if (potion === "boil cure") {
        distillOne("powdered snake fang", 3, "pungous onions", "honey water");
        distillTwo("shrake powder", 1, "flobberworm mucus", 1, "standard ingredients", "yellow boil cure");
        distillTwo("distilling catalyst", 1, "porcupine quill", 1, "honey water", "orange boil cure");
        distillOne("powdered honey", 2, "shrake spine", "green boil cure");
        end("boil cure");
    }
    else if (potion === "swifty draught") {
        brewing("salt", "water bottle");
        brewing("salt", "blue swifty draught");
        distillOne("salt", 2, "standard ingredient", "red swifty draught");
        distillOne("salt", 3, "standard ingredient", "green swifty draught");
        brewing("salt", "purple swifty draught");
        end("swifty draught");
    }
    else if (potion === "wiggenweld potion") {
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
        distillTwo("salt", 3, "sliced bursting mushroom", 1, "distilling catalyst", "honey water");
        brewing("salamander blood", "blue blackfire potion");
        distillTwo("salamander blood", 2, "sliced bursting mushroom", 3, "distilling catalyst", "red blackfire potion");
        brewing("salamander blood", "green blackfire potion");
        distillThree("salamander blood", 3, "fine wartcap powder", 1, "sliced bursting mushrooms", 2, "distilling catalyst", "grey blackfire potion");
        end("blackfire potion");
    }
    else if (potion === "essence of dittany") {
        brewing("boom berry", "water");
        brewing("boom berry", "grey essence of dittany");
        distillTwo("boom berry", 2, "standard ingredient", 5, "dittany", "orange essence of dittany");
        distillTwo("boom berry", 1, "standard ingredient", 3, "dittany", "green essence of dittany");
        brewing("dittany", "red essence of dittany");
        end("essence of dittany");
    }
    else if (potion === "faiblesse potion") {
        brewing("newt", "leech juice");
        distillTwo("newt", 1, "adder's fork", 1, "sloth brain", "base faiblesse potion");
        distillTwo("salamander blood", 3, "belladonna", 5, "doxy eggs", "light grey faiblesse potion");
        distillTwo("newt", 1, "standard ingredient", 1, "honey water", "dark grey faiblesse potion");
        distillTwo("newt", 4, "standard ingredient", 1, "honey water", "grey faiblesse potion");
        distillTwo("powdered snake fang", 3, "sneezewort", 1, "leech juice", "orange faiblesse potion");
        end("faiblesse potion");
    }
    else if (potion === "invigoration draught") {
        brewing("powdered snake fang", "water bottle");
        distillThree("powdered snake fang", 1, "honey water", 2, "lavender", 1, "wolf's tooth", "grey invigoration draught");
        brewing("powdered snake fang", "pink invigoration draught");
        distillThree("powdered snake fang", 2, "bone", 3, "lavender", 2, "standard ingredient", "blue invigoration draught");
        end("invigoration draught");
    }
    else if (potion === "confusing draught") {
        brewing("gulf", "water bottle");
        distillTwo("gulf", 2, "scurvy grass", 6, "standard ingredient", "blue confusing draught");
        distillTwo("gulf", 1, "sneezewort", 1, "standard ingredient", "green confusing draught");
        distillOne("gulf", 3, "lionfish spine", "yellow confusing draught");
        distillTwo("gulf", 2, "lionfish spine", 3, "flobberworm mucus", "orange confusing draught");
        brewing("gulf", "red confusing draught");
        end("confusing draught");
    }
    else if (potion === "bloodroot potion") {
        brewing("powdered bloodroot", "honey water");
        distillTwo("distilling catalyst", 4, "powdered bloodroot", 3, "standard ingredient", "orange bloodroot potion");
        distillTwo("newt", 2, "powdered bloodroot", 3, "lavender", "red bloodroot potion");
        brewing("newt", "yellow bloodroot potion");
        distillTwo("newt", 5, "standard ingredient", 1, "foxglove tincture", "grey bloodroot potion");
        brewing("powdered bloodroot", "incomplete bloodroot potion");
        end("bloodroot potion");
    }
    else if (potion === "bulgeye potion") {
        brewing("newt eye", "honey water");
        brewing("pufferfish eye", "green bulgeye potion");
        distillTwo("newt eye", 2, "beetle eye", 1, "honey water", "pale bulgeye potion");
        distillThree("newt eye", 3, "beetle eye", 7, "standard ingredient", 1, "eel eye", "orange bulgeye potion");
        distillTwo("eel eye", 3, "lavender", 2, "lemongrass", "red bulgeye potion");
        brewing("mint sprig", "blue bulgeye potion");
        distillTwo("crushed flitterby", 2, "pufferfish eye", 1, "eel eye", "light green bulgeye");
        distillTwo("crushed flitterby", 3, "lavender", 2, "silverweed", "dark red bulgeye potion");
        end("bulgeye potion");
    }
    else if (potion === "laughing potion") {
        distillTwo("powdered honey", 3, "chopped alihotsy", 2, "standard ingredient", "water bottle");
        distillTwo("distilling catalyst", 2, "chopped alihotsy", 1, "standard ingredient", "orange laughing potion");
        brewing("crushed billywig wings", "green laughing potion");
        distillTwo("distilling catalyst", 2, "chopped alihotsy", 3, "crushed billywig wings", "light grey laughing potion");
        distillOne("crushed billywig wing", 3, "knarl quill", "blue laughing potion");
        distillFive("crushed billywig wing", 3, "puffskein hair", 3, "puffskein hair",3, "puffskein hair", 3, "puffskein hair", 3, "puffskein hair", "grey laughing potion");
        brewing("powdered horseradish", "red laughing potion");
        end("laughing potion");
    }
    else if (potion === "murtlap essence") {
        brewing("boom berry", "essence of dittany");
        brewing("salamander blood", "grey murtlap essence");
        distillTwo("boom berry", 2, "murtlap tentacle", 1, "crushed flitterby", "red murtlap essence");
        brewing("boom berry", "pink essence of dittany");
        distillThree("salamader blood", 2, "murtlap tentacle", 5, "dittany", 1, "murtlap tincture", "light green murtlap essence");
        end("murtlap essence");
    }
    else if (potion === "pepperup potion") {
        distillTwo("powdered honey", 2,"mandrake root", 1, "bicorn horn", "physical base");
        brewing("salamander blood", "grey pepperup potion");
        distillTwo("salamander blood", 3, "lavender", 1, "bicorn horn", "red pepperup potion");
        brewing("mandrake root", "blue pepperup potion");
    }
    else if (potion === "pompion potion") {
        brewing("crushed flitterby", "water bottle");
        distillOne("powdered honey", 4, "crushed flitterby", "grey pompion potion");
        distillTwo("distilling catalyst", 2, "fluxweed", 3, "standard ingredient", "green pompion potion");
        distillTwo("distilling catalyst", 2, "fluxweed", 1, "bouncing bulb mixture", "light green pompion potion");
        brewing("crushed flitterby", "red pompion potion");
        distillTwo("newt", 3, "foxglove", 1, "foxglove tincture", "yellow pompion potion");
        end("pompion potion");
    }
    else if (potion === "strengthening solution") {
        brewing("griffin claw", "physical base");
        distillTwo("powdered snake fang", 5, "lavender", 1, "snake fang", "light grey strengthening solution");
        brewing("salamander blood", "light blue strengthening solution");
        distillThree("griffen claw", 3, "lavender", 1, "standard ingredient", 1, "snake fang", "grey strengthening solution");
        distillFour("salamander blood", 3, "bone", 2, "lavender", 3, "standard ingredient", 1, "griffin claw", "red strengthening solution");
        brewing("powdered snake fang", "unfinished strengthening solution");
        end("strengthening solution");
    }
    else if (potion === "babbling beverage") {
        distillTwo("crushed lovage", 5, "scurvy grass", 1, "honey water", "physical base");
        distillFive("crushed lovage", 1, "doxy egg", 1, "doxy egg", 1, "doxy egg", 1, "doxy egg", 1, "doxy egg", "muddy brown babbling beverage");
        brewing("sloth brain", "black babbling beverage");
        brewing("crushed lovage", "dull red babbling beverage");
        distillThree("distilling catalyst", 1, "adders fork", 5, "scurvy grass", 1, "foxglove tincture", "bright babbling beverage");
        brewing("jobberknoll feather", "golden babbling beverage");
        brewing("doxy egg", "yellow babbling beverage");
        end("babbling beverage");
    }
    else if (potion === "baneberry potion") {
        brewing("baneberry", "honey water");
        distillTwo("bloodroot", 10, "standard ingrdient", 3, "baneberry", "orange baneberry potion");
        distillOne("bloodroot", 3, "bloodroot", "pink baneberry potion");
        distillTwo("mistletoe berry", 4, "peppermine powder", 1, "baneberry", "red baneberry potion");
        brewing("salt", "grey baneberry potion");
        distillTwo("baneberry", 2, "salt", 5, "baneberry", "silver baneberry potion");
        distillOne("baneberry", 10, "salt", "red baneberry potion");
        brewing("bloodroot", "deep red baneberry potion");
        end("baneberry");
    }
    else if (potion === "chelidonium miniscula") {
        brewing("poppy head", "light yellow chelidonium miniscula");
        distillOne("poppy head", 2, "standard ingredient", "yellow chelidonium miniscula");
        distillTwo("sneeze wort", 3, "scurvy grass", 5, "standard ingredient", 1, "brown chelidonium miniscula");
        distillFour("poppy head", 1, "powdered lionfish spine", 1, "powdered lionfish spine", 1, "powdered lionfish spine", 1, "powdered lionfish spine", "green chelidonium miniscula");
        brewing("poppy head", "grey chelidonium miniscula");
        brewing("poppy head", "light yellow chelidonium miniscula");
    }
    else if (potion === "first love beguiling bubbles") {
        distillTwo("powdered pearl", 2, "crushed lovage", 1, "moonstone", "love potion base");
        brewing("cherry blossom", "yellow first love beguiling bubbles");
        distillTwo("cherry blossom", 3, "rose thorns", 2, "ashwinder egg", "green first love beguiling bubbles");
        distillThree("cherry blossom", 2, "rose thorns", 1, "ashwinder egg", 3, "crushed lovage", "blue first love beguiling bubbles");
        distillOne("powdered moonstone", 1, "hair", "incomplete first love beguiling bubbles");
        end("first love beguiling bubbles");
    }
    //Null check + error message
    else {
        error.style.color = "#9b0000";
        if (!potion) {
            error.innerHTML = "Error: potionName cannot be null.";
        }
        else {
            error.innerHTML = "Error: " + potion + " not found";
        }
    }
}

/**
 * Function to end a recipe.
 * @param {string} potion - final potion's name
 */
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

/**
 * Function to write distilling steps with two ingredient in the cauldron
 * @param {string} ingredient - the ingredient at the top of the brewing stand
 * @param {number} one - the amount of an object in the first slot of the cauldron
 * @param {string} a - the ingredient in the first slot of the cauldron
 * @param {number} two - the amount of an object in the second slot of the cauldron
 * @param {string} b - the ingredient in the second slot of the cauldron
 * @param {number} three - the amount of an object in the third slot of the cauldron
 * @param {string} c - the ingredient in the third slot of the cauldron
 * @param {string} four - the amount of an object in the fourth slot of the cauldron
 * @param {string} d - the ingredient in the fouth slot of the cauldron
 * @param {string} base - the potion/liquid at the bottom of the brewing stand
 */
function distillFour(ingredient, one, a, two, b, three, c, four, d, base) {
    answer.innerHTML += "Put " + ingredient + " in the distiller along with " + base + " and put " + one + " " + a + ", " + two + " " + b + ", " + three + " " + c + ", and " + four + " " + d + " in the cauldron. ";
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
 * @param {string} four - the amount of an object in the fourth slot of the cauldron
 * @param {string} d - the ingredient in the fouth slot of the cauldron
 * @param {string} five - the amount of an object in the fifth slot of the cauldron
 * @param {string} e - the ingredient in the fifth slot of the cauldron
 * @param {string} base - the potion/liquid at the bottom of the brewing stand
 */
function distillFive(ingredient, one, a, two, b, three, c, four, d, five, e, base) {
    answer.innerHTML += "Put " + ingredient + " in the distiller along with " + base + " and put " + one + " " + a + ", " + two + " " + b + ", " + three + " " + c + ", " + four + " " + d + ", and " + five + " " + e + " in the cauldron. ";
}