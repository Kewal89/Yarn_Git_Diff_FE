const dayjs = require('dayjs')
require('dayjs/plugin/duration')

dayjs.extend(require('dayjs/plugin/duration'))

const numberToText = (number: number) => {
  const numberText = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  if (number < 20) {
    return numberText[number];
  } else if (number < 100) {
    const tens = Math.floor(number / 10);
    const remainder = number % 10;
    return `${numberText[tens * 10]} ${remainder > 0 ? numberText[remainder] : ''}`;
  } else {
    return 'Number out of range';
  }
}

const formatTimeDifference = (timestamp: string) => {
  const now = dayjs()
  const targetDate = dayjs(timestamp)

  const duration = dayjs.duration(now.diff(targetDate))

  const years = duration.years()
  const months = duration.months()
  const days = duration.days()
  const hours = duration.hours()
  const minutes = duration.minutes()

  if (years > 0) {
    return `${numberToText(years)} year${years > 1 ? 's' : ''} ago`
  } else if (months > 2) {
    return `${numberToText(months)} month${months > 1 ? 's' : ''} ago`
  } else if (days >= 7) {
    const weeks = Math.floor(days / 7)
    return `${numberToText(weeks)} week${weeks > 1 ? 's' : ''} ago`
  } else if (days > 0) {
    return `${numberToText(days)} day${days > 1 ? 's' : ''} ago`
  } else if (hours > 0) {
    return `${numberToText(hours)} hour${hours > 1 ? 's' : ''} ago`
  } else {
    return `${numberToText(minutes)} minute${minutes > 1 ? 's' : ''} ago`
  }
}
export {
  formatTimeDifference
}