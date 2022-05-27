import data from 'assets/jsons/user_info.json'

// TODO: json파일에서 점수 데이터 가져와서 차이 계산
const getScoreDiff = () => {
  const { wxcResultMap, healthScoreList: yearData } = data
  const { wHscore, medi, hscore_peer: hscorePeer, wHscoreDy, mediDy } = wxcResultMap
  const myScore = Number(wHscore)
  const currentCost = Number(medi)
  const groupAverage = Number(hscorePeer)
  const expectScoreAfterTenYears = Number(wHscoreDy)
  const expectCostAfterTenYears = Number(mediDy)

  const currentYear = new Date().getFullYear()
  const scoreLastYear = Number(yearData.find((d) => currentYear - 1 === Number(d.SUBMIT_DATE.slice(0, 5)))?.SCORE)
  // const scoreCurrentYear = yearData.find((d) => currentYear === Number(d.SUBMIT_DATE.slice(0, 5)))?.SCORE

  const diffScoreLastYear = myScore - scoreLastYear
  const diffScoreGroupAverage = myScore - groupAverage
  const diffScoreAfterTenYear = myScore - expectScoreAfterTenYears
  const diffCostAfterTenYear = currentCost - expectCostAfterTenYears

  return {}
}

export {}
