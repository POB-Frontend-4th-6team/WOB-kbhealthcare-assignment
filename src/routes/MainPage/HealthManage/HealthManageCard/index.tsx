import styles from './healthManageCard.module.scss'
import { processHealthManageCardData } from './utils'
import { IHealthManageCardData } from 'types/health'

const HealthManageCard = ({
  healthManageCardData,
  idx,
}: {
  healthManageCardData: IHealthManageCardData
  idx: number
}) => {
  const { tag } = healthManageCardData
  const boj = healthManageCardData.boj.slice(1)

  const { title, value, isSmkDrnkExerciseDetail, standardOfNormal, signatureColor, svg } = processHealthManageCardData(
    healthManageCardData.title,
    healthManageCardData
  )

  return (
    <ul>
      <li className={styles.healthCard}>
        <div className={styles.icon}>{svg}</div>
        <div className={styles.info}>
          <h3>0{idx}</h3>
          <p className={styles.healthTitle} style={{ color: signatureColor }}>
            {title}
          </p>
          <p className={styles.detail}>
            {isSmkDrnkExerciseDetail || (
              <>
                {title} {value}로 <br />
                <mark>{healthManageCardData.boj[0]}</mark> 입니다.
              </>
            )}
          </p>
          <p className={styles.normal}>{standardOfNormal}</p>
          <ul className={styles.tag}>
            {tag.map((el) => {
              if (el) {
                return <li key={`key_${el}`}>#{el}</li>
              }
              return null
            })}
          </ul>
        </div>
        <div className={styles.manage}>
          <h4 style={{ color: signatureColor }}>이렇게 관리해 보세요!</h4>
          <ul>
            {boj.map((el) => {
              return <li key={`key_${el}`}>{el}</li>
            })}
          </ul>
        </div>
      </li>
    </ul>
  )
}

export default HealthManageCard
