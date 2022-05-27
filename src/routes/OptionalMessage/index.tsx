import { useEffect } from 'react'
import styles from './optionalMessage.module.scss'
import data from 'assets/jsons/user_info.json'
import { getScoreDiffMessage } from 'utils/message'

// MEMO: 메시지 테스트용 컴포넌트
const OptionalMessage = (): JSX.Element => {
  // TODO: 상세결과 카드에 표시될 데이터 가져오기

  /**
   * MEMO:
   * resBMI : 체질량지수
   * resBolldPressure : 혈압
   * resTotalColesterol : 총콜레스테롤
   * smkOty : 흡연
   * resFastingBloodSuger: 식전혈당
   * drnkOty : 음주
   * exerciQty : 운동량
   * resGFR : 신사구체여과율
   */

  type Category =
    | 'resBMI'
    | 'resBloodPressure'
    | 'resTotalCholesterol'
    | 'smkQty'
    | 'resFastingBloodSuger'
    | 'drnkQty'
    | 'exerciQty'
    | 'resGFR'

  const getHealthStatusMessage = (category: Category) => {
    const { boj } = data.wxcResultMap
    const status = boj[category].split(' - ')
    const statusName = status[0]
    const comments = status[1]
    return { statusName, comments }
  }

  useEffect(() => {
    console.log(getHealthStatusMessage('resBMI'))
  }, [])

  return (
    <div>
      항목별 건강 점수 조건에 따른 메시지
      <p>{getHealthStatusMessage('resBMI').statusName}</p>
    </div>
  )
}

export default OptionalMessage
