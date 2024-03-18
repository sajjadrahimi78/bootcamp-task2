const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

// 1- بتونه این دیتا رو بر اساس تاریخ صعودی و نزولی مرتب کنه.

// const notesList1 = [...notesList];
// // notesList1.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
// notesList1.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
// console.log(notesList1);

// 2- همچنین کاربر بتونه بر اساس عنوان نودها و همچنین تکمیل بودن (نبودن) فیلتر کنه

// const notesList2 = [...notesList];
// // notesList2.sort((a, b) => a.title.localeCompare(b.title));

// notesList2.filter((node) => {
//   if (node.title && node.completed) {
//     console.log(node);
//   }
// });

// =================================================================

// in Array ->
// if String => Array.sort()
// if number => Array.sort((a,b) => a - b)

// in Array of Object
// if number => Array.sort((a,b) => a - b)
// if String => Array.sort((a,b) => a.name.localeCompare(b.name))

// =================================================================

function filterStatus(data, status) {
  switch (status) {
    case "all":
      return data;

    case "completed":
      return data.filter((n) => n.completed);

    case "uncompleted":
      return data.filter((n) => !n.completed);

    default:
      return data;
  }
}

function sortData(data, sortBy) {
  let sortedData;
  if (sortBy === "earliest") {
    sortedData = [...data].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }
  if (sortBy === "latest") {
    sortedData = [...data].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  return sortedData;
}

function searchData(data, filter) {
  const filteredData = data.filter((note) => note.title.toLowerCase().includes(filter.trim().toLowerCase()));
  return filteredData;
}

function queryData(data, { filter, sortBy, status }) {
  let filteredData ;

  // filter
  filteredData = searchData(data, filter);

  // filter for status
  filteredData = filterStatus(filteredData, status);

  // sort
  filteredData = sortData(filteredData, sortBy);

  return filteredData;
}

console.log(
  queryData(notesList, { filter: " Co", sortBy: "latest", status: "all" })
);

console.log(
  queryData(notesList, {
    sortBy: "earliest",
    filter: "Co",
    status: "uncompleted",
  })
);

// latest => 2024, 2023, 2022 => des. => a > b ? -1 : 1 => eq. => b - a
// earliest => 2021, 2022, 2023,.. => asc. => a > b ? 1 ? -1 => eq. => a - b

