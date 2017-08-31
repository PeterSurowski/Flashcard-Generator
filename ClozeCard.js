//Export the module.
module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function(){
        var splitString = this.text.split(' ');
        //console.log(splitString);
        var splitCloze = this.cloze.split(' ');
        //console.log(splitCloze);
        for (i = 0; i < splitCloze.length; i++) {
            for (j = 0; j <splitCloze.length; j++) {
                if (splitCloze[j] === splitString[i]) {
                    splitString.splice(i, 1);
                    splitString.splice(i, 0, '...');
                }
            }             
        }
        splitString = splitString.join(' ');
        console.log(splitString);
    };
    this.fullText = function(){};
}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the U.S.A.", "George Washington");

firstPresidentCloze.partial()