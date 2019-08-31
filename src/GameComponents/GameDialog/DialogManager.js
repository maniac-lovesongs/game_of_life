class DialogManager {
  constructor() {
    this.open = {};

    this.observers = [];
  }

  addDialogs(closed, opened) {
    for (let i = 0; i < closed.length; i++) this.open[closed[i]] = false;
    for (let i = 0; i < opened.length; i++) this.open[opened[i]] = true;
  }

  subscribe(ob) {
    this.observers.push(ob);
  }

  notify() {
    this.observers.forEach(function(ob, i) {
      ob.onDialogChange();
    });
  }

  closeDialog(id) {
    this.open[id] = false;
    this.notify();
  }

  openDialog(id) {
    this.open[id] = true;
    this.notify();
  }

  cloneState() {
    return { ...this.open };
  }
}

let dialog_factory = new DialogManager();
export default dialog_factory;
