localStorage.setItem("test", 34234);
localStorage.getItem("test");
console.log('localStorage.getItem("test");: ', localStorage.getItem("test"));

const user = {
  name: "Oleg",
};
const userStringufy = JSON.stringify(user);
localStorage.setItem("user", userStringufy);

localStorage.removeItem("test");

class LocalStorage {
  key = "Default key";
  value = "Defaulet value";
  constructor(key, value) {
    if (key && value) {
      localStorage.setItem((this.key = key), (this.value = value));
    } else {
      throw new Error("Enter key and value");
    }
  }

  static clearLocarStorage(key) {
    localStorage.removeItem(key);
  }
}
const test1 = new LocalStorage("admin", "123");
const test2 = new LocalStorage("adminЄ", "1234");
const test3 = new LocalStorage("admin12312321Є", 1234);
LocalStorage.clearLocarStorage("adminЄ");
