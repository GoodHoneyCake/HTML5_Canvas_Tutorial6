class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.canvasRatio = this.canvas > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvasWidth = this.stageWidth - this.canvasRatio;
    this.canvasHeight = this.stageHeight - this.canvasRatio;
  }
}

window.onload = () => {
  new App();
};
