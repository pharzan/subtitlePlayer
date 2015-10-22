/**
 * Created by Farzan on 10/22/2015.
 */

var subtitlePlayer = function () {

    this.view = function () {

        return m('div', 'hello world')
    }
};

myPlayer = new subtitlePlayer();
m.mount(document.body, myPlayer);
