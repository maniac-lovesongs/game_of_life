class SceneManager {
  constructor() {
    this.current = null;
    this.scenes = {};

    this.observers = [];
  }

  subscribe(ob) {
    this.observers.push(ob);
  }

  setCurrentScene(scene) {
    this.current = scene;
    this.updateConfig();
    this.notify();
  }

  addScenes(scenes, current) {
    if (scenes.indexOf(current) < 0) return false;
    this.current = current;
    for (let i = 0; i < scenes.length; i++) {
      let scene = scenes[i];
      this.scenes[scene] = scene === current;
    }
    this.notify();
    return true;
  }

  cloneScenes() {
    return { ...this.scenes };
  }
  notify() {
    this.observers.forEach(function(ob, j) {
      ob.onSceneManagerChange();
    });
  }

  validConfig() {
    let num_set = 0;
    for (let scene in this.scenes) if (this.scenes[scene]) num_set++;
    return num_set === 1;
  }

  makeClasses(scene, classes = []) {
    let display = scene === this.current ? "show" : "hide";
    classes.push(display);
    return classes.join(" ");
  }

  updateConfig() {
    for (let scene in this.scenes) this.scenes[scene] = scene === this.current;
  }
}
let scene_manager = new SceneManager();
export default scene_manager;
