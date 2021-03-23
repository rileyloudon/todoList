import { formatDistanceToNowStrict } from 'date-fns';

const timeLeft = (todo) => {
  if (todo.dueDate === '∞') {
    return '∞';
  }

  const time = formatDistanceToNowStrict(todo.dueDate, { addSuffix: true });
  const formatTime = time.split(' ');

  if (formatTime[0] === 'in') {
    const unit =
      formatTime[2] === 'months' || formatTime[2] === 'month'
        ? 'mo'
        : formatTime[2][0];
    return formatTime[1] + unit;
  }
  return 'Expired';
};

export default timeLeft;
