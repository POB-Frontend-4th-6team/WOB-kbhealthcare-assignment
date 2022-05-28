import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import { CallbackArgs } from 'victory-core'

import styles from './costForecastChart.module.scss'

const CostForecastChart = () => {
  const compareMediExpenseDecade = [
    { x: '나', mediExpense: 93335 },
    { x: '10년 후', mediExpense: 129455 },
  ]

  return (
    <div className={styles.container}>
      <VictoryChart height={300}>
        <VictoryAxis style={{ axis: { stroke: 'white' }, tickLabels: { fontSize: 20 } }} />
        <VictoryBar
          data={compareMediExpenseDecade}
          barWidth={60}
          x='x'
          y='mediExpense'
          labels={({ datum }) => datum.mediExpense}
          style={{
            data: {
              fill: ({ datum }) => (datum.x === '나' ? '#ffd300' : '#fe612c'),
            },
            labels: {
              fill: ({ datum }: CallbackArgs) => (datum.x === '나' ? '#fe612c' : 'black'),
              fontSize: 20,
            },
          }}
        />
        <VictoryLine data={compareMediExpenseDecade} x='x' y='mediExpense' />
        <VictoryScatter
          data={compareMediExpenseDecade}
          x='x'
          y='mediExpense'
          style={{
            data: {
              fill: ({ datum }) => (datum.x === '나' ? 'grey' : 'white'),
              stroke: ({ datum }) => (datum.x === '나' ? 'none' : 'black'),
              strokeWidth: 1,
            },
          }}
          size={5}
        />
      </VictoryChart>
    </div>
  )
}

export default CostForecastChart