/**
 *
 * @param {*} data 数组
 * @param {*} options 指定列使用哪个字段判断是否需要合并 { 0: 'pid', 1: 'cid', 2: 'sid' }
 */
function getMergeRowCellModifierViaFlatArr(data, colMergeRules) {
  let preActiveRow = null; // 前一行数据
  const activeColRowMap = {}; // { colName: rowIndex } colName 如果需要累加，累加在 rowIndex 上面
  const ret = {}; // { colName-rowIndex: { rowSpan: number } }

  const colNames = Object.keys(colMergeRules); // 所有的列名称数组

  for (let i = 0; i < data.length; i++) {
    const activeRow = data[i];

    if (i == 0) {
      colNames.forEach((colName) => {
        activeColRowMap[colName] = 0;
      });
      preActiveRow = activeRow; // last
      continue;
    }

    colNames.forEach((colName) => {
      const compareKey = colMergeRules[colName];
      if (activeRow[key] === preActiveRow[compareKey]) {
        // 需要累加
        const activeRow = activeColRowMap[colName];
        const retKey = `${colName}-${activeRow}`;
        if (!ret[retKey]) {
          ret[retKey] = {
            rowSpan: 2,
          };
        } else {
          ret[retKey].rowSpan += 1;
        }
      } else {
        // 新的单元格开始了，不需要合并
        activeColRowMap[colName] = i; // 把当前列的acc row 设置为当前行
      }
    });

    preActiveRow = activeRow; // last
  }

  return ret;
}

export default getMergeRowCellModifierViaFlatArr;

// test
const data = [
  {
    pid: 1,
    cid: 1,
    sid: 1,
  },
  {
    pid: 1,
    cid: 1,
    sid: 2,
  },
  {
    pid: 1,
    cid: 1,
    sid: 3,
  },
  {
    pid: 1,
    cid: 2,
    sid: 4,
  },
  {
    pid: 1,
    cid: 2,
    sid: 5,
  },
  {
    pid: 1,
    cid: 2,
    sid: 6,
  },
  {
    pid: 1,
    cid: 1,
    sid: 1,
  },
  {
    pid: 1,
    cid: 1,
    sid: 2,
  },
  {
    pid: 1,
    cid: 1,
    sid: 3,
  },
  {
    pid: 1,
    cid: 2,
    sid: 4,
  },
  {
    pid: 1,
    cid: 2,
    sid: 6,
  },
  {
    pid: 1,
    cid: 2,
    sid: 6,
  },
];

const res = getMergeRowCellModifierViaFlatArr(data, {
  0: "pid", // pid这一列使用pid这个字段
  1: "cid",
  2: "sid",
});

console.log(res);
