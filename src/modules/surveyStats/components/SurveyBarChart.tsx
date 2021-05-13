import React, { useMemo } from 'react'
import { View, ViewProps } from 'react-native'
import { Cell, BarChart, CartesianGrid, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts'

export interface SurveyBarChartProps {
  height?: number
  width?: number
  dataset: [number|string, number][]
  style?: ViewProps['style']
}

const SCORE_LABELS = { '4': '++', '3': '+', '2': '+-', '1': '-', '0': '--'}
const COLORS = [
  '#1f82c0',
  '#669dcc',
  '#a2c4d7',
  '#cfe1e9',
  '#ddd',
];

export function SurveyBarChart(props: SurveyBarChartProps) {
  const { dataset, ...otherProps } = props
  const data = useMemo(() => props.dataset.map(([score, value]) => ({
    label: (SCORE_LABELS[score as keyof typeof SCORE_LABELS]) ?? '',
    value,
    score,
  })), [dataset])

  return (
    <View {...otherProps}>
      <ResponsiveContainer>
        <BarChart data={data} barCategoryGap={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="value" fill="#ccc">
            {data.map((d, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </View>
  )
}
