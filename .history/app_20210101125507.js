class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }
}

window.onload = () => {
  new App();
};
