let scenarioToPresent = document.querySelector('#scenario');
let pathToChoose = document.querySelector('#optionPath');



class storyPage {
    constructor(id, text, options, timeDilation, game) {
        this.id = id;
        this.text = text;
        this.options = options;
        this.timeDilation = timeDilation;
        this.game = game;
    }

/*
    stringToHTML = function (str) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(str, 'text/html');
        let InnerHtmlToAdd = doc.getElementsByClassName('h2Item')[0].innerHTML;
        return InnerHtmlToAdd;
    }
*/
// This function 
    //storyPageLoader = () {
      //const pathNode = storyLines.find(identifier => identifier.id === this.id);
        // pathNode is a representation of the selected element, we are now in the object we work with
       // scenarioToPresent.innerText = pathNode.this.text
        //Next we remove the other options we are not in
       // while (pathToChoose.firstChild) {
            /// removing the default options
       //     pathToChoose.removeChild(pathToChoose.firstChild)
      //  }
   // }


/*
    get Name() {
        return this.stringToHTML(this.name);
    };

    get Sinopsis() {
        return this.stringToHTML(this.sinopsis);
    };

    get Description() {
        return this.stringToHTML(this.description);

    };
    get Examples() {
        return this.stringToHTML(this.examples);

    };
    get Author() {
        return this.stringToHTML(this.author);
    };

    get All() {
        return this.stringToHTML(this.name) + this.stringToHTML(this.sinopsis) + this.stringToHTML(this.description) + this.stringToHTML(this.examples) + this.stringToHTML(this.author);
    };

}
*/
}