import { formatDistanceToNowStrict } from 'date-fns';

const timeLeft = (todo) => {
  let time = '';
  if (todo.dueDate === '∞') {
    return (time = '∞');
  } else {
    time = formatDistanceToNowStrict(todo.dueDate, { addSuffix: true });

    let formatTime = time.split(' ');

    if (formatTime[0] === 'in') {
      let unit = '';
      formatTime[2] === 'months' || formatTime[2] === 'month'
        ? (unit = 'mo')
        : (unit = formatTime[2][0]);
      return formatTime[1] + unit;
    } else {
      return (time = 'Expired');
    }
  }
};

export default timeLeft;
