'use strict';

document.addEventListener("DOMContentLoaded", () => {

    let element = null;

    const DomElement = function (selector, height, width, bg, fontSize, top, left) {
        this.selector = selector,
            this.height = height,
            this.width = width,
            this.bg = bg,
            this.fontSize = fontSize,
            this.top = top,
            this.left = left



    };
    DomElement.prototype.createElem = function () {


        if (this.selector[0] === '.') {
            const div = document.createElement('div');
            div.classList.add(this.selector.replace('.', ''));
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
            p.id = this.selector.replace('#', '');
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
        div.classList.add(this.selector.replace('.', ''));
        div.style.cssText = `
            position: absolute;
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            top: ${this.top};
            left: ${this.left};
            `;
        element = div;
        document.body.append(div);
    }

    const domElem1 = new DomElement('.block', '400px', '400px', 'yellow', '60px');

    const domElem2 = new DomElement('#main', '300px', '300px', 'blue', '30px');

    domElem1.createElem();
    domElem2.createElem();



    const square = new DomElement('.square', '100px', '100px', 'grey', '0', '400px', '400px');
    square.createSquare();

    window.addEventListener("keydown", (e) => {

        e = e || window.event;


        switch (e.keyCode) {
            case 37:

                element.style.left = ((parseInt(element.style.left) - 10) + 'px');
                break;
            case 39:

                element.style.left = ((parseInt(element.style.left) + 10) + 'px');
                break;
            case 38:

                element.style.top = ((parseInt(element.style.top) - 10) + 'px');
                break;
            case 40:

                element.style.top = ((parseInt(element.style.top) + 10) + 'px');
                break;

        }


    });

});