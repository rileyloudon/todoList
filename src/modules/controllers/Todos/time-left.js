import { formatDistanceToNowStrict } from 'date-fns';

const timeLeft = (todo) => {
  let time = '';
  if (todo.dueDate === '∞') {
    return (time = '∞');
  } else {
    time = formatDistanceToNowStrict(todo.dueDate);

    let formatTime = time.split(' ');
    let unit = '';
    formatTime[1] === 'months' || formatTime[1] === 'month'
      ? (unit = 'mo')
      : (unit = formatTime[1][0]);
    return formatTime[0] + unit;
  }
};

export default timeLeft;
