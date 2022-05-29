export interface ScoreType {
  value?: number
  x?: string
}

export interface SetColorProps {
  data: ScoreType[]
  datum: any
  myColor: string
  elseColor: string
  isYears: boolean
}
