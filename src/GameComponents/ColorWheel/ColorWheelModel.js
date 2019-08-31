class ColorWheelModel {
  constructor() {
    this.use_custom_color = false;
    this.observers = [];
  }

  subscribe(ob) {
    this.observers.push(ob);
  }

  notify() {
    this.observers.forEach(function(ob, i) {
      ob.onColorWheelModelChange();
    });
  }
  toggleCustom() {
    this.use_custom_color = !this.use_custom_color;
  }
  setUseCustomColor(value) {
    this.use_custom_color = value;
    this.notify();
  }
}

const color_wheel = new ColorWheelModel();
export default color_wheel;
