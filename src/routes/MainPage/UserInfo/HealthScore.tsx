import styles from './userInfo.module.scss'
import { HealthInfoArrow } from 'assets/svgs'
import { VictoryPie } from 'victory'

const HealthScore = () => {
  const percent = (875 / 1000) * 100
  const total = 100 - percent

  return (
    <div className={styles.healthScoreContainer}>
      <VictoryPie
        data={[
          { x: 1, y: total },
          { x: 2, y: percent },
        ]}
        labels={() => null}
        startAngle={130}
        endAngle={-130}
        animate={{
          duration: 1000,
          easing: 'bounce',
          onLoad: { duration: 1000 },
        }}
        innerRadius={120}
        colorScale={['#d9d9d9', '#f7c505']}
      />

      <div className={styles.scoreBox}>
        <h1 className={styles.score}>875</h1>
        <p className={styles.scoreName}>점</p>
      </div>
      <p className={styles.date}>2021.08.20</p>
      <p>
        건강검진결과 가져오기
        <HealthInfoArrow className={styles.healthInfoArrowIcon} />
      </p>
    </div>
  )
}

export default HealthScore
