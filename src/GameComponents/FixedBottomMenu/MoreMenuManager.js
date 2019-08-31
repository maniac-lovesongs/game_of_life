class MoreMenuManager {
  constructor() {
    this.open = false;
    this.anchor = null;
    this.observers = [];
  }
  subscribe(ob) {
    this.observers.push(ob);
  }

  notify() {
    this.observers.forEach(function(ob, i) {
      ob.onMoreMenuChange();
    });
  }
  toggle() {
    this.open = !this.open;
    this.notify();
  }
  setState(value) {
    this.open = value;
    this.notify();
  }
}

let more_menu_manager = new MoreMenuManager();
export default more_menu_manager;
