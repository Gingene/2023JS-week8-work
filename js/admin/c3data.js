function getc3Data(array) {
  const result = {};
  array.forEach(({ products }) => {
    for (let item of products) {
      if (result[item.title]) {
        result[item.title] += item.price * item.quantity;
      } else {
        result[item.title] = item.price * item.quantity;
      }
    }
  });
  const sortResult = Object.keys(result).map((item) => [
    `${item}`,
    result[item],
  ]);

  sortResult.sort((a, b) => b[1] - a[1]);
  if (sortResult.length > 3) {
    const otherTotal = sortResult.reduce((acc, c, index) => {
      if (index > 2) {
        return acc + c[1];
      }
      return acc;
    }, 0);
    sortResult.splice(3, sortResult.length - 1);
    sortResult.push(["其他", otherTotal]);
  }
  return sortResult;
}

function c3DrawPie(array) {
  const d3data = getc3Data(array);
  c3.generate({
    bindto: "#chart",
    data: {
      columns: d3data,
      type: "pie",
    },
    color: {
      pattern: ["#301E5F", "#5434A7", "#9D7FEA", "#DACBFF"],
    },
  });
}

export default c3DrawPie;
