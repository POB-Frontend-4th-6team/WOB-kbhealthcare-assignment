import styles from './userInfo.module.scss'
import HealthScore from './HealthScore'

import { HealthInfo } from 'assets/svgs'

import { fetchAverageInfo, fetchForecastInfo, fetchYearsChartInfo } from 'services/health'

const UserInfo = () => {
  const check = () => {
    fetchAverageInfo()
    fetchForecastInfo()
    fetchYearsChartInfo()
  }
  return (
    <section className={styles.container}>
      <button type='button' onClick={check}>
        1239123123
      </button>
      <h2>
        <span>김헬스님의 건강점수</span>
        <HealthInfo className={styles.healthInfoIcon} />
      </h2>
      <div className={styles.healthScoreWrapper}>
        <HealthScore />
        <div className={styles.infoBox}>
          <span>기본 정보</span>
          <dl>
            <dt>성별</dt>
            <dd>남성</dd>
            <dt>나이</dt>
            <dd>36세</dd>
            <dt>키</dt>
            <dd>176.8cm</dd>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default UserInfo
