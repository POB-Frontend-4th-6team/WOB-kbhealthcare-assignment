type CompareTarget = 'lastYear' | 'groupAverage' | 'scoreAfterTenYears' | 'costAfterTenYears'

type IWords = {
  [key in CompareTarget]: { unit: string; increased: string; decreased: string }
}

const words: IWords = {
  lastYear: { unit: '점', increased: '높아졌어요', decreased: '낮아졌어요' },
  groupAverage: { unit: '점', increased: '높아요', decreased: '낮아요' },
  scoreAfterTenYears: { unit: '점', increased: '높아요', decreased: '낮아요' },
  costAfterTenYears: { unit: '원', increased: '높아요', decreased: '낮아요' },
}

export const getScoreDiffMessage = (compareTarget: CompareTarget, score: number) => {
  if (!Object.keys(words).includes(compareTarget)) return '-'

  if (score === 0) return '같아요'

  const { unit, increased, decreased } = words[compareTarget]

  return `${score}${unit} ${score >= 0 ? increased : decreased}`
}
