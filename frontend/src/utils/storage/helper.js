export function setLocalData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // console.log("error", error)
  }
}

export function removeLocalData(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // console.log("error", error)
  }
}

export function getLocalData(key) {
  try {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (error) {
    // console.log("error", error)
  }
}

export function isValidValue(value) {
  if (typeof value === "undefined" || value === null || value === "") {
    return false;
  }
  return true;
}

export function hasProperty(object, key) {
  if (Array.isArray(object) || typeof key != "string" || !object) {
    return false;
  } else {
    return object.hasOwnProperty(key);
  }
}

export function isValidObject(items) {
  if (Object.keys(items).length > 0) {
    return true;
  } else {
    return false;
  }
}

export function getValueFromObject(object, key) {
  if (hasProperty(object, key)) {
    if (isValidValue(object[key])) {
      return object[key];
    }
  }
  return "";
}
