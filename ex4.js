function deepCopy(obj) {

  if (obj instanceof WeakSet || obj instanceof WeakMap) return obj;
  // WeakSet과 WeakMap은 참조 주소만을 비교하기에 그대로 반환해도 됌.

  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) return obj.map(deepCopy);

  if (obj instanceof Set) return new Set([...obj].map(deepCopy));

  if (obj instanceof Map) {
    const copy = new Map();
    obj.forEach((value, key) => copy.set(deepCopy(key), deepCopy(value)));
    return copy;
  }

  return Reflect.ownKeys(obj).reduce((copy, key) => {
    copy[key] = deepCopy(obj[key]);
    return copy;
  }, Object.create(Object.getPrototypeOf(obj)));

}

module.exports = { deepCopy };
