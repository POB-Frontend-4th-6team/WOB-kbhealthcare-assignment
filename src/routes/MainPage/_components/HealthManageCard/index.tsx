import styles from './healthManageCard.module.scss'
import {
  HealthIcon1 as BloodPressureIcon,
  HealthIcon2 as BMIIcon,
  HealthIcon3 as DrnkIcon,
  HealthIcon4 as GFRIcon,
  HealthIcon5 as CholesterolIcon,
  HealthIcon6 as SmokeIcon,
  HealthIcon7 as FastingBloodSugerIcon,
  HealthIcon8 as ExerciseIcon,
} from 'assets/svgs'

interface IHealthManageCardData {
  title: string
  value: string
  boj: string[]
  tag: string[]
}

const HealthManageCard = ({
  healthManageCardData,
  idx,
}: {
  healthManageCardData: IHealthManageCardData
  idx: number
}) => {
  const processHealthManageCardData = (_title: string) => {
    let title = ''
    let value = ''
    let isSmkDrnkExerciseDetail: string | boolean = false
    let normalOfStandard = ''
    const { tag } = healthManageCardData
    const boj = healthManageCardData.boj.slice(1)
    let signatureColor = ''
    let svg: JSX.Element | null = null

    if (_title === 'resBMI') {
      title = '체질량 지수는'
      value = `${healthManageCardData.value}kg/㎡`
      normalOfStandard = '정상 : 18.5 ~ 22.9 kg/㎡'
      signatureColor = '#7bcf3d'
      svg = <BMIIcon />
    }
    if (_title === 'resBloodPressure') {
      title = '혈압은'
      value = `${healthManageCardData.value}mmHg`
      normalOfStandard = '정상 : 이완 60~79 / 수축 90~119 mmHg'
      signatureColor = '#ca64e8'
      svg = <BloodPressureIcon />
    }
    if (_title === 'resTotalCholesterol') {
      title = '총콜레스테롤은'
      value = `${healthManageCardData.value}mg/dL`
      normalOfStandard = '정상 : 200 mg/dL 이하'
      signatureColor = '#3f60f0'
      svg = <CholesterolIcon />
    }
    if (_title === 'smkQty') {
      title = '흡연'
      isSmkDrnkExerciseDetail = `${healthManageCardData.boj[0]}`
      signatureColor = '#68a0eb'
      svg = <SmokeIcon />
    }
    if (_title === 'resFastingBloodSuger') {
      title = '식전혈당은'
      value = `${healthManageCardData.value}mg/dL`
      normalOfStandard = '정상 : 69~99 mg/dL'
      signatureColor = '#d990f0'
      svg = <FastingBloodSugerIcon />
    }
    if (_title === 'drnkQty') {
      title = '음주'
      isSmkDrnkExerciseDetail = `${healthManageCardData.boj[0]}`
      signatureColor = '#e99318'
      svg = <DrnkIcon />
    }
    if (_title === 'exerciQty') {
      title = '운동량'
      isSmkDrnkExerciseDetail = `${healthManageCardData.boj[0]}`
      signatureColor = '#73ccbc'
      svg = <ExerciseIcon />
    }
    if (_title === 'resGFR') {
      title = '신사구체여과율은'
      value = `${healthManageCardData.value}mL/min `
      normalOfStandard = '정상 : 60 mL/min 이상'
      signatureColor = '#edb3b4'
      svg = <GFRIcon />
    }

    return {
      title,
      value,
      isSmkDrnkExerciseDetail,
      normalOfStandard,
      tag,
      boj,
      signatureColor,
      svg,
    }
  }

  const { title, value, isSmkDrnkExerciseDetail, normalOfStandard, tag, boj, signatureColor, svg } =
    processHealthManageCardData(healthManageCardData.title)

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
          <p className={styles.normal}>{normalOfStandard}</p>
          <ul className={styles.tag}>
            {tag.map((el) => {
              if (el) {
                return <li key={`key_${el}`}>#{el}</li>
              }
              return undefined
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
