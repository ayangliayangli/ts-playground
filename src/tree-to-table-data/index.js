const treeData = [
  {
    id: 1,
    label: "l1",
    children: [
      {
        id: 3,
        label: "1-2",
        children: [
          {
            id: 5,
            label: "1-2-1",
          },
          {
            id: 6,
            label: "1-2-2",
          },
          {
            id: 6,
            label: "1-2-2",
          },
        ],
      },
      {
        id: 4,
        label: "1-3",
        children: [
          {
            id: "10",
            label: "1111",
          },
          {
            id: "10",
            label: "1111",
          },
        ],
      },
    ],
  },
];

function getTableModifierOfTreeData(treeData, options = {}) {
  const tableModifier = {}; // {level-row: {rowSpan: number}}   level === col ret
  const activeLevelRowObj = {}; // { level: row }   level === col
  let activeRowIndex = 0; // 当前处理的是第几行（叶子节点）

  const defaultConfig = {
    childrenKey: "children",
    levelStart: 0,
  };

  const config = Object.assign({}, defaultConfig, options); // 具体配置文件

  /**
   * 遍历函数
   * @param {*} treeData 
   * @param {*} level 
   */
  function trans(treeData, level) {
    treeData.forEach((item, index) => {
      activeLevelRowObj[level] = activeRowIndex;
      const children = item[config.childrenKey];
      if (children) {
        // 还有子级
        trans(children, level + 1);
      } else {
        // 最后一级， 叶子节点
        // 除了最后level, 前面的level遇到处理一个叶子, active  col 的地方就要 +1
        for (let i = 0; i < level; i++) {
          const level = i;
          const col = activeLevelRowObj[level];
          const key = `${level}-${col}`;

          if (!tableModifier[key]) {
            tableModifier[key] = {
              rowSpan: 1,
            };
          } else {
            tableModifier[key].rowSpan += 1;
          }
        }
        activeRowIndex += 1; // 当前处理的行数 plus
      }
    });
  }

  trans(treeData, config.levelStart); // 开始执行逻辑
  return tableModifier; // 返回值
}

const res = getTableModifierOfTreeData(treeData);
console.log(JSON.stringify(res)); // => {"0-0":{"rowSpan":5},"1-0":{"rowSpan":3},"1-3":{"rowSpan":2}}
