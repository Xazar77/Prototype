'use strict';



const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize


};
DomElement.prototype.createElem = function () {

   
    if (this.selector[0] === '.') {
        const div = document.createElement('div');
        div.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            margin: 0 auto; 
            `;
        div.innerHTML = 'Это созданный DIV';
        document.body.append(div);
    }
    if (this.selector[0] === '#') {
        const p = document.createElement('p');
        p.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize}; 
            margin: 0 auto;
           `;
        p.innerHTML = 'Это созданный P';
        document.body.append(p);

    }

};


const domElem1 = new DomElement('.block', '400px', '400px', 'yellow', '60px');

const domElem2 = new DomElement('#main', '300px', '300px', 'blue', '30px');



domElem1.createElem();
domElem2.createElem();

console.log(domElem1);



