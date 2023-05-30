const treeData = [
  {
    title: "root",
    key: "0",
    children: [
      {
        title: "child1",
        key: "0-0",
        children: [
          {
            title: "child1-1",
            key: "0-0-0",
            children: [
              {
                title: "child1-1-1",
                key: "0-0-0-0",
              },
              {
                title: "child1-1-2",
                key: "0-0-0-1",
              },
            ],
          },
        ],
      },
    ],
  },
];

function toMap(arr) {
  const map = new Map();

  function add(ele, pId, childrenIds = []) {
    const obj = {
      title: ele.title,
      parentId: pId,
      childrenIds,
    };
    map.set(ele.key, obj);
  }

  for (const element of arr) {
    fn(element, null);
  }
  function fn(ele, pId) {
    const { children, key } = ele;
    if (children) {
      const childrenIds = children.map((item) => item.key);
      add(ele, pId, childrenIds);
      children.forEach((item) => fn(item, key));
    } else {
      add(ele, pId);
    }
  }
  return map;
}
toMap(treeData);

function toMap1(arr) {
  const map = new Map();
  function add(key, title, pId, childrenIds = []) {
    const obj = {
      title: title,
      parentId: pId,
      childrenIds,
    };
    map.set(key, obj);
  }
  fn(arr[0], null);
  function fn({ title, key, children }, pId) {
    if (children) {
      const childrenIds = children.map((item) => item.key);
      add(key, title, pId, childrenIds);
      children.forEach((item) => fn(item, key));
    } else {
      add(key, title, pId, null);
    }
  }
  console.log("map", map);
  return map;
}
toMap1(treeData);
