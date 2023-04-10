import GameOver from 'gameover.js';
import Sprite from 'sprite.js';
import SpriteStore from 'spritestore.js';

const interval = 50;

let main = (e) => {
    let ss = new SpriteStore();
    ss.add(new Sprite());
    let go = new GameOver();
    go.reStartGame = main;
    let loopId = setInterval(() => {
        if (Math.random() > 0.9) {
            ss.add(new Sprite());
        }
        ss.forEach((sprite) => {
            sprite.step();
        });
        if (ss.size == 0) {
            clearInterval(loopId);
            go.show();
        }
    }, interval);
    
};

window.addEventListener('DOMContentLoaded',main);
