// input = [
//   { id: 1, city: "北京", pid: 0 },
//   { id: 2, city: "河南", pid: 0 },
//   { id: 3, city: "山西", pid: 0 },
//   { id: 4, city: "洛阳", pid: 2 },
//   { id: 5, city: "晋中", pid: 3 },
//   { id: 6, city: "榆次", pid: 5 },
// ];

// result = [
//   { id: 1, city: "北京", pid: 0 },
//   { id: 2, city: "河南", pid: 0, children: [{ id: 4, city: "洛阳", pid: 2 }] },
//   {
//     id: 3,
//     city: "山西",
//     pid: 0,
//     children: [
//       {
//         id: 5,
//         city: "晋中",
//         pid: 3,
//         children: [{ id: 6, city: "榆次", pid: 5 }],
//       },
//     ],
//   },
// ];
const input = [
  { id: 1, city: "北京", pid: 0 },
  { id: 2, city: "河南", pid: 0 },
  { id: 3, city: "山西", pid: 0 },
  { id: 4, city: "洛阳", pid: 2 },
  { id: 5, city: "晋中", pid: 3 },
  { id: 6, city: "榆次", pid: 5 },
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
    add(item, item.pid);
  });
  return res;
}
console.log(JSON.stringify(toTree(input), null, 2));
