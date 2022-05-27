import { useEffect } from 'react'
import styles from './optionalMessage.module.scss'
import data from 'assets/jsons/user_info.json'
import { getScoreDiffMessage } from 'utils/message'

// MEMO: 메시지 테스트용 컴포넌트
const OptionalMessage = (): JSX.Element => {
  // TODO: json데이터로부터 얻은 점수로 메시지 출력하기
  const diffScoreLastYear = 0
  const diffScoreMaleAverage = 0
  const diffScoreAfterTenYear = 0
  const diffCostAfterTenYear = 0

  useEffect(() => {
    console.log(getScoreDiffMessage('lastYear', 1))
    console.log(getScoreDiffMessage('lastYear', 0))
    console.log(getScoreDiffMessage('lastYear', -1))
    console.log(getScoreDiffMessage('maleAverage', 1))
    console.log(getScoreDiffMessage('maleAverage', 0))
    console.log(getScoreDiffMessage('maleAverage', -1))
    console.log(getScoreDiffMessage('scoreAfterTenYear', 1))
    console.log(getScoreDiffMessage('scoreAfterTenYear', 0))
    console.log(getScoreDiffMessage('scoreAfterTenYear', -1))
    console.log(getScoreDiffMessage('costAfterTenYear', 1))
    console.log(getScoreDiffMessage('costAfterTenYear', 0))
    console.log(getScoreDiffMessage('costAfterTenYear', -1))
  }, [])

  return <div>항목별 건강 점수 조건에 따른 메시지</div>
}

export default OptionalMessage
