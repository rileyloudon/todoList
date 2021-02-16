import { formatDistanceToNowStrict } from 'date-fns';

const timeLeft = (todo) => {
  let time = '';
  if (todo.dueDate === '∞') {
    time = '∞';
  } else {
    time = formatDistanceToNowStrict(new Date(todo.dueDate));
  }

  return time;
};

export default timeLeft;
