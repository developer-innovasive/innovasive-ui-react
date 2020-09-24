import { Meta, Story } from '@storybook/react/types-6-0'
import { random, times } from 'lodash'
import React from 'react'
import { TableOptions } from 'react-table'

import { DataTable } from './DataTable'

export default {
  title: 'DataTable',
  component: DataTable,
} as Meta

const Template: Story<TableOptions<any>> = (args) => <DataTable {...args} />

export const Default = Template.bind({})

Default.args = {
  initialState: {
    pageSize: 10,
  },
  columns: [
    {
      Header: 'รูปภาพ',
      accessor: 'image',
      Cell: (props) => <img src={props.value} alt="" className="h-32" />,
    },
    { Header: 'ชื่อ', accessor: 'name' },
    { Header: 'อายุ', accessor: 'age' },
  ],
  data: times(95, () => ({
    image: 'https://api.adorable.io/avatars/150/abott@adorable.png',
    name: `Example name ${random(1, 100)}`,
    age: random(1, 100),
  })),
}
