const USER_INFO = "USER_INFO", DUPLICATE_VALUE = "DUPLICATE_VALUE"
export const userLocal = {
  set: (infoUser) => {
    let json = JSON.stringify(infoUser);
    localStorage.setItem(USER_INFO, json);
  },
  get: () => {
    let json = localStorage.getItem(USER_INFO);
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  delete: () => {
    localStorage.removeItem(USER_INFO);
  },
};

export const duplicateLocal = {
  set: (value) => {
    let json = JSON.stringify(value);
    localStorage.setItem(DUPLICATE_VALUE, json);
  },
  get: () => {
    let json = localStorage.getItem(DUPLICATE_VALUE);
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },
}
