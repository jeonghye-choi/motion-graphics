import { Ball } from './ball.js';
import { Block } from './block.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 30);
    this.ball2 = new Ball(this.stageWidth, this.stageHeight, 10, 50);
    this.ball3 = new Ball(this.stageWidth, this.stageHeight, 40, 10);
    this.block = new Block(700, 30, 300, 200);
    this.block1 = new Block(700, 30, 300, 400);
    this.block2 = new Block(700, 30, 300, 600);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.block.draw(this.ctx);
    this.block1.draw(this.ctx);
    this.block2.draw(this.ctx);
    this.ball.draw(
      this.ctx,
      this.stageWidth,
      this.stageHeight,
      this.block,
      this.block1,
      this.block2
    );
    this.ball2.draw(
      this.ctx,
      this.stageWidth,
      this.stageHeight,
      this.block,
      this.block1,
      this.block2
    );
    this.ball3.draw(
      this.ctx,
      this.stageWidth,
      this.stageHeight,
      this.block,
      this.block1,
      this.block2
    );
  }
}

window.onload = () => {
  new App();
};
