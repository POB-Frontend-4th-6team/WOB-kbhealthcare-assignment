import store from 'storejs'

import styles from './userInfo.module.scss'
import HealthScore from './HealthScore'

import { HealthInfo } from 'assets/svgs'
import { fetchPersonalHealthInfo } from 'services/health'

const UserInfo = () => {
  const userName = store.get('userName')
  const getUserData = fetchPersonalHealthInfo()

  return (
    <section className={styles.container}>
      <h2>
        <span>{`${userName}님의 건강점수`}</span>
        <HealthInfo className={styles.healthInfoIcon} />
      </h2>
      <div className={styles.healthScoreWrapper}>
        <HealthScore healthScore={getUserData[0].healthScore} />
        <div className={styles.infoBox}>
          <span>기본 정보</span>
          <dl>
            <dt>성별</dt>
            <dd>{getUserData[0].userGender}</dd>
            <dt>나이</dt>
            <dd>{getUserData[0].age}세</dd>
            <dt>키</dt>
            <dd>{getUserData[0].height}cm</dd>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default UserInfo
