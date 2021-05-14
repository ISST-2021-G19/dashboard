import React, { useMemo } from 'react'
import { View, ViewProps } from 'react-native'
import { PieChart, Pie, Cell,  LabelList, ResponsiveContainer, Tooltip } from 'recharts'

export interface SurveyPieChartProps extends ViewProps {
  dataset: [string|number, number][]
}

const SCORE_LABELS = { '4': '++', '3': '+', '2': '+-', '1': '-', '0': '--'}
const COLORS = [
  '#1f82c0',
  '#669dcc',
  '#a2c4d7',
  '#cfe1e9',
  '#ddd',
];

export function SurveyPieChart(props: SurveyPieChartProps) {
  const { dataset, ...otherProps } = props
  const data = useMemo(() => props.dataset.map(([score, value]) => ({
    score,
    value,
    label: (SCORE_LABELS[score as keyof typeof SCORE_LABELS]) ?? '',
  })), [dataset])

  return (
    <View {...otherProps}>
      <ResponsiveContainer>
        <PieChart data={data}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#ccc"
          >
            <LabelList dataKey="label" position="inside" strokeWidth={0} fill="white" />
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

        </PieChart>
      </ResponsiveContainer>
    </View>
  )
}
