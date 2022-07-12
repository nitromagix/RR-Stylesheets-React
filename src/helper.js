//

const trace = (label) => (value) => {
  const l = label;
  const v = value;
  console.log(`\r\n|>\t${l}`);
  console.log(v);
  return v;
};

const tracej = (label) => (value) => {
  const l = label;
  const v = value;
  console.log(`\r\n|>\t${l}`);
  console.log(typeof v === "object" ? JSON.stringify(v) : v);
  return v;
};

const show = (message) => console.log(message);

const stub = (name) => `<h1>${name}</h1>`;

const isObject = (val) => val && typeof val === "object";

const deepFreeze = (obj) => {
  if (isObject(obj) && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach((name) => {
      deepFreeze(obj[name]);
    });
    Object.freeze(obj);
  }
  return obj;
};

const dateToMMDDYYYY = (date) =>
  `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

const isCssColor = (strColor) => {
  var s = new Option().style;
  s.color = strColor;
  return s.color === strColor;
};

export default trace;
export { tracej, show, stub, isObject, deepFreeze, dateToMMDDYYYY, isCssColor };
