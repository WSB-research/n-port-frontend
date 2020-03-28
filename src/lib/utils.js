  export function getColumns() {
  return [
    { title: "Trade Name", field: "name", width: 150 },
    { title: "Long Name", field: "age", align: "left", formatter: "progress" },
    { title: "Total Assets", field: "col" },
    { title: "Total Liability", field: "dob", align: "center" },
    { title: "Net Assets", field: "rating", align: "center", formatter: "star" },
    { title: ", field: "passed", align: "center", formatter: "tickCross" }
  ]
}
