'use strict';

document.addEventListener("DOMContentLoaded", () => {
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
            div.classList.add(this.selector);
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
            p.id = this.selector;
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
    DomElement.prototype.createSquare = function () {
        const div = document.createElement('div');
        div.style.cssText = `
            position: absolute;
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            `;
        document.body.append(div);
    }

    const domElem1 = new DomElement('.block', '400px', '400px', 'yellow', '60px');

    const domElem2 = new DomElement('#main', '300px', '300px', 'blue', '30px');

    domElem1.createElem();
    domElem2.createElem();

    // document.addEventListener('DomContentLoaded', (е) => {

    const square = new DomElement('.block', '100px', '100px', 'grey');
    square.createSquare();
});



// }); 