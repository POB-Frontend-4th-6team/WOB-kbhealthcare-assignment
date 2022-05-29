﻿import styles from './healthManage.module.scss'
import HealthManageCard from './HealthManageCard'
import { getHealthManageData } from 'services/health'

const HealthManage = () => {
  const { wMymaxHscoreDy, healthManageCardData } = getHealthManageData()
  const MymaxHscoreDy = wMymaxHscoreDy[Math.floor(Math.random() * wMymaxHscoreDy.length)]

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>맞춤 건강관리</h2>
      <p className={styles.subText}>
        O Care와 함께 건강관리해보세요.
        <br />
        건강점수를 최대 <span>{MymaxHscoreDy}점</span>까지 올릴 수 있어요.
      </p>
      {/* 카드 컴포넌트를 위해 ul, li태그로 나타내었습니다. */}
      {healthManageCardData.map((item, idx) => {
        return <HealthManageCard key={`key_${item.title}`} healthManageCardData={item} idx={idx + 1} />
      })}
    </section>
  )
}

export default HealthManage
