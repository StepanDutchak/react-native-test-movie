import {monthNames} from '../constants/date/month';

export const formatDateForMovieRelease = (date: string) => {
  const formDate = new Date(date);
  const month = monthNames[formDate.getMonth()];
  const day = formDate.getDate();

  const formattedDate = `${month} ${day}`;

  return formattedDate;
};
