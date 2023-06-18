// input = [
//   { id: 1, city: "北京", pId: 0 },
//   { id: 2, city: "河南", pId: 0 },
//   { id: 3, city: "山西", pId: 0 },
//   { id: 4, city: "洛阳", pId: 2 },
//   { id: 5, city: "晋中", pId: 3 },
//   { id: 6, city: "榆次", pId: 5 },
// ];

// result = [
//   { id: 1, city: "北京", pId: 0 },
//   { id: 2, city: "河南", pId: 0, children: [{ id: 4, city: "洛阳", pId: 2 }] },
//   {
//     id: 3,
//     city: "山西",
//     pId: 0,
//     children: [
//       {
//         id: 5,
//         city: "晋中",
//         pId: 3,
//         children: [{ id: 6, city: "榆次", pId: 5 }],
//       },
//     ],
//   },
// ];
const input = [
  { id: 1, city: "北京", pId: 0 },
  { id: 2, city: "河南", pId: 0 },
  { id: 3, city: "山西", c: 0 },
  { id: 4, city: "洛阳", pId: 2 },
  { id: 5, city: "晋中", pId: 3 },
  { id: 6, city: "榆次", pId: 5 },
];

function toTree(arr) {
  const map = new Map();
  arr.forEach((item) => {
    map.set(item.id, item);
  });

  const res = [];

  const add = (ele, pId) => {
    if (map.get(pId)) {
      if (!map.get(pId).children) {
        map.get(pId).children = [];
      }
      map.get(pId).children.push(ele);
    } else {
      res.push(ele);
    }
  };
  arr.forEach((item) => {
    add(item, item.pId);
  });
  return res;
}
console.log(JSON.stringify(totreee(input), null, 2));

function totreee(arr) {
  const map = new Map();
  arr.forEach((item) => {
    map.set(item.id, item);
  });
  const result = [];
  const fn = (ele, pId) => {
    if (map.get(pId)) {
      if (map.get(pId).children) {
        map.get(pId).children.push(ele);
      } else {
        map.get(pId).children = [ele];
      }
    } else {
      result.push(ele);
    }
  };
  arr.forEach((ele) => {
    fn(ele, ele.pId);
  });

  return result;
}
