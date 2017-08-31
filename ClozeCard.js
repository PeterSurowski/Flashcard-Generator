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
            for (j = 0; j < splitString.length; j++) {
                if (splitCloze[i] === splitString[j]) {
                    splitString.splice(i, 1);
                    splitString.splice(i, 0, '...');
                    //I could not figure out how to see whether none of the words matched the close, but I believe I would put that code here.                 
                } 
            }           
        }
        splitString = splitString.join(' ');
        console.log(splitString);
    };
    this.fullText = function(){
        console.log(this.text);
    };
}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the U.S.A.", "Carrot Top");

console.log(firstPresidentCloze.cloze);
firstPresidentCloze.partial();
firstPresidentCloze.fullText();
