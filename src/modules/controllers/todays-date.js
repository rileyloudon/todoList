const todaysDate = () => {
  let day = new Date().getDate();
  let nth = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  let monthNumber = new Date().getMonth();
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let year = new Date().getFullYear();

  return monthNames[monthNumber] + ' ' + day + nth(day) + ', ' + year;
};

export default todaysDate;
