import { Meta } from '@storybook/react/types-6-0'
import { DateTime } from 'luxon'
import React from 'react'

import { fromDateTimeToThaiSentence, fromThaiSentenceToDateTime, getTimeRangeSentence } from '../../helpers/date-helpers'

export default {
  title: 'Helpers/Date Helpers',
} as Meta

export const FromDateTimeToThaiSentence = () => (
  <div>
    <p>{fromDateTimeToThaiSentence(DateTime.local())}</p>
    <p>{fromDateTimeToThaiSentence(DateTime.local(), 'EEEE')}</p>
  </div>
)

FromDateTimeToThaiSentence.storyName = 'fromDateTimeToThaiSentence'

export const FromThaiSentenceToDateTime = () => (
  <div>
    <p>{fromDateTimeToThaiSentence(fromThaiSentenceToDateTime('09 ต.ค. 2563', 'dd MMM yyyy'), 'EEE, dd MMMM yyyy')}</p>
  </div>
)

FromThaiSentenceToDateTime.storyName = 'fromThaiSentenceToDateTime'

export const GetTimeRangeSentence = () => (
  <div>
    <p>{getTimeRangeSentence(DateTime.local(), DateTime.local().plus({ days: 1 }))}</p>
    <p>{getTimeRangeSentence(DateTime.local(), DateTime.local().plus({ days: 1 }), 'th')}</p>
    <p>{getTimeRangeSentence(DateTime.local(), DateTime.local().plus({ minutes: 30 }))}</p>
    <p>{getTimeRangeSentence(DateTime.local(), DateTime.local())}</p>
  </div>
)

GetTimeRangeSentence.storyName = 'getTimeRangeSentence'
