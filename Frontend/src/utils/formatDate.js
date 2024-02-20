export default (date) => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [{ value: mo }, ,{ value: da }] = dtf.formatToParts(d);
  return `${da} ${mo}`;
};

export function formatDateCustom(date) {
  const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  var formattedDate;

  try {
    formattedDate = new Intl.DateTimeFormat('en-gb', options).format(date);
  } catch (error) {
    formattedDate = new Intl.DateTimeFormat('en-gb', options).format(new Date(date));
  }

  // console.log(formattedDate);

  return formattedDate;

//   // Extract day, month, and year
//   const [, day, month, year] = formattedDate.match(/(\d+)(\D+)(\w+), (\d+)/);

//   // Add the ordinal suffix to the day
//   const ordinalSuffix = getOrdinalSuffix(day);
//   return `${day}${ordinalSuffix} ${month}, ${year}`;
// }

// function getOrdinalSuffix(day) {
//   if (day >= 11 && day <= 13) {
//     return 'th';
//   }
//   const lastDigit = day % 10;
//   switch (lastDigit) {
//     case 1:
//       return 'st';
//     case 2:
//       return 'nd';
//     case 3:
//       return 'rd';
//     default:
//       return 'th';
//   }
}

// // Example usage
// const today = new Date();
// const formattedToday = formatDateCustom(today);
// console.log(formattedToday);

// export const formatDateCustom = (date) => {
//   const d = new Date(date);
//   const dtf = new Intl.DateTimeFormat("en", {
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//   });

//   const [{ value: mo }, ,{ value: da }] = dtf.formatToParts(d);
//   return `${da} ${mo}, 2023`;
// };