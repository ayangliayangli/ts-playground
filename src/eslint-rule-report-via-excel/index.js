import ExcelJs from "exceljs";

const genReport = (rows, destFile) => {
  const workbook = new ExcelJs.Workbook();
  const mySheet = workbook.addWorksheet("mySheet");
  mySheet.addRow(["ruleName", "count"]);
  mySheet.addRows(rows);
  // write to file
  workbook.xlsx.writeFile(destFile);
};

async function main() {
  const workBook = new ExcelJs.Workbook();
  await workBook.xlsx.readFile(
    "/Users/ligfee/Desktop/eslint 禁用规则top10.xlsx"
  );

  const sheet = workBook.getWorksheet(1);
  const obj = {};
  sheet.eachRow((row, rowNumber) => {
    console.log(`${rowNumber}: ${row.values[1]} ${row.values[2]}`);
    const ruleName = row.values[1];
    const count = row.values[2];
    if (ruleName in obj) {
      obj[ruleName] += count;
    } else {
      obj[ruleName] = count;
    }
  });

  const sortedArr = Object.entries(obj).sort((a, b) => {
    const [, aCount] = a;
    const [, bCount] = b;
    return bCount - aCount;
  });

  genReport(sortedArr, "/Users/ligfee/Desktop/eslint 禁用规则top10-2.xlsx");

  console.log(sortedArr);
}

main();
