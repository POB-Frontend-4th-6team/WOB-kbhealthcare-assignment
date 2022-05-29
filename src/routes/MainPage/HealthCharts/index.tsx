import { fetchAverageInfo, fetchForecastInfo, fetchYearsChartInfo } from 'services/health'
import { ScoreType } from 'types/health'

import styles from './healthCharts.module.scss'
import ScoreChart from '../_components/Chart'

const HealthCharts = () => {
  const { yearsInfo, message: yearMessage } = fetchYearsChartInfo()
  const { score: averageScore, message: groupMessage } = fetchAverageInfo()
  const { score: healthScore, message: scoreForecastMessage } = fetchForecastInfo().health
  const { score: expenseScore, message: expenseForecastMessage } = fetchForecastInfo().expense

  // datum은 CallbackArgs 타입 안에 있는 값 중 any 타입
  const setColor = (data: ScoreType[], datum: any, myColor: string, elseColor: string, isYears: boolean) => {
    if (isYears) return datum.x === data[data.length - 1].x ? myColor : elseColor
    return datum.x === '나' ? myColor : elseColor
  }

  return (
    <>
      <section className={styles.container}>
        <h2>
          나의 건강점수 <br /> 분석결과
        </h2>
        <button type='button' className={styles.detail}>
          검진결과 자세히
        </button>
        <p className={styles.compare}>
          {yearMessage.startMessage} <mark>{yearMessage.endMessage}</mark>
        </p>
        <ScoreChart data={yearsInfo} setColor={setColor} isYears />
        <p className={styles.compare}>
          {groupMessage.startMessage} <mark>{groupMessage.endMessage}</mark>
        </p>
        <ScoreChart data={averageScore} setColor={setColor} isYears={false} />
      </section>

      <section className={styles.container}>
        <h2>나의 10년 후 건강 예측</h2>
        <p className={styles.compare}>
          {scoreForecastMessage.startMessage} <mark>{scoreForecastMessage.endMessage}</mark>
        </p>
        <ScoreChart data={healthScore} setColor={setColor} isYears={false} />
        <p className={styles.compare}>
          {expenseForecastMessage.startMessage} <mark>{expenseForecastMessage.endMessage}</mark>
        </p>
        <ScoreChart data={expenseScore} setColor={setColor} isYears={false} />
      </section>
    </>
  )
}

export default HealthCharts
