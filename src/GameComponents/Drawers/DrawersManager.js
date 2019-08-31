class DrawersManager {
  constructor(drawers) {
    this.drawers = {};
    this.observers = [];
    for (let i = 0; i < drawers.length; i++) {
      let drawer = drawers[i];
      this.drawers[drawer] = false;
    }
  }
  openDrawer(name) {
    this.drawers[name] = true;
    this.notify();
  }

  closeDrawer(name) {
    this.drawers[name] = false;
    this.notify();
  }
  subscribe(ob) {
    this.observers.push(ob);
  }
  notify() {
    for (let i = 0; i < this.observers.length; i++)
      this.observers[i].onDrawersChange();
  }
  cloneDrawers() {
    return { ...this.drawers };
  }
}

const drawers_manager = new DrawersManager(["speed", "color"]);
export default drawers_manager;
