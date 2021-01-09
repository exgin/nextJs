import { parseISO, format } from 'date-fns';
/* A Top level componenet */

// Used to formating the date, we can pass this into other components
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
