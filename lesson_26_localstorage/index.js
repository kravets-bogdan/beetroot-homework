let list;
let keyStringify;

class LocalStorage {
  key = 'Default key';
  value = 'Defaulet value';
  constructor(key, value) {
    if (key && value) {
      this.key = key;
      this.value = value;
      list = [value];
      keyStringify = JSON.stringify(list);
      localStorage.setItem(key, keyStringify);
    } else {
      throw new Error('Enter key and value');
    }
  }
  addItem = () => {
    const oldStorageList = localStorage.getItem(this.key);
    const list = JSON.parse(oldStorageList);
    const newItem = prompt();
    list.push(newItem);
    localStorage.setItem(this.key, JSON.stringify(list));
  };

  static clearLocarStorage(key) {
    localStorage.removeItem(key);
  }
}
const test1 = new LocalStorage('admin', '123');
test1.addItem();
// const test2 = new LocalStorage('admin', '1234');
// const test3 = new LocalStorage('admin12312321Є', 1234);
// LocalStorage.clearLocarStorage('adminЄ');
