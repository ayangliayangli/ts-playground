function flat2Tree(arr, keyField, parentField, childrenField) {
  const obj = {};
  let rootId = null;
  arr.forEach((item) => {
    const key = item[keyField];
    const parentId = item[parentField];
    

    if (!obj[key]) {
      item[childrenField] = [];
      obj[key] = item;
    } else {
      const prevChildren = obj[key][childrenField];
      item[childrenField] = prevChildren;
    }

    if (!parentId) {
      rootId = key;
      return;
    }

    if (obj[parentId]) {
      obj[parentId][childrenField].push(item);
    } else {
      obj[parentId] = {
        [childrenField]: [item],
      };
    }
  });

  return obj[rootId];
}

const arr = [
  {
    id: 1,
  },
  {
    id: 2,
    pid: 1,
  },
  {
    id: 3,
    pid: 1,
  },
  {
    id: 4,
    pid: 3,
  },
];

const res = flat2Tree(arr, "id", "pid", "children");
console.log(res);
