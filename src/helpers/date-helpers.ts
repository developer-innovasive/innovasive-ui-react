import { DateTime } from 'luxon'

/**
|--------------------------------------------------
| DATE TIME TO THAI SENTENCE
|--------------------------------------------------
*/
export function fromDateTimeToThaiSentence(date: DateTime, format: string = 'dd MMM yyyy'): string {
  return date.reconfigure({ locale: 'th', outputCalendar: 'buddhist' }).toFormat(format)
}

/**
|--------------------------------------------------
| THAI SENTENCE TO DATE TIME
|--------------------------------------------------
*/
export function fromThaiSentenceToDateTime(date: string, format: string): DateTime {
  const td = DateTime.fromFormat(date, format, { locale: 'th' })
  return td.minus({ year: 543 })
}

/**
|--------------------------------------------------
| TIME RANGE SENTENCE
|--------------------------------------------------
*/
export function getTimeRangeSentence(start: DateTime, end: DateTime, locale: 'th' | 'en' = 'en'): string {
  const outputCalendar = locale == 'th' ? 'buddhist' : 'iso8601'
  const startDate = start.reconfigure({ locale, outputCalendar })
  const endDate = end.reconfigure({ locale, outputCalendar })

  if (startDate.hasSame(endDate, 'days') && startDate.hasSame(endDate, 'months') && startDate.hasSame(endDate, 'years')) {
    if (!startDate.hasSame(endDate, 'hours') || !startDate.hasSame(endDate, 'minutes')) {
      return `${startDate.toFormat('dd MMM yyyy T')} - ${endDate.toFormat('T')}`
    }
    return `${endDate.toFormat('dd MMM yyyy T')}`
  }

  if (endDate > startDate) {
    return `${startDate.toFormat('dd MMM yyyy')} - ${endDate.toFormat('dd MMM yyyy T')}`
  }

  return ''
}
