import {
  BloodPressureIcon,
  BMIIcon,
  DrnkIcon,
  GFRIcon,
  CholesterolIcon,
  SmokeIcon,
  FastingBloodSugerIcon,
  ExerciseIcon,
} from 'assets/svgs'
import { IHealthManageCardData } from 'types/health'

interface IProcessedHealthManageCardData {
  title: string
  value: string
  isSmkDrnkExerciseDetail: boolean | string
  standardOfNormal: string
  signatureColor: string
  svg: JSX.Element
}

export const processHealthManageCardData = (
  subject: string,
  healthManageCardData: IHealthManageCardData
): IProcessedHealthManageCardData => {
  return {
    resBMI: {
      title: '체질량 지수는',
      value: `${healthManageCardData.value}kg/㎡`,
      isSmkDrnkExerciseDetail: false,
      standardOfNormal: '정상 : 18.5 ~ 22.9 kg/㎡',
      signatureColor: '#7bcf3d',
      svg: <BMIIcon />,
    },
    resBloodPressure: {
      title: '혈압은',
      value: `${healthManageCardData.value}mmHg`,
      isSmkDrnkExerciseDetail: false,
      standardOfNormal: '정상 : 이완 60~79 / 수축 90~119 mmHg',
      signatureColor: '#ca64e8',
      svg: <BloodPressureIcon />,
    },
    resTotalCholesterol: {
      title: '총콜레스테롤은',
      value: `${healthManageCardData.value}mg/dL`,
      isSmkDrnkExerciseDetail: false,
      standardOfNormal: '정상 : 200 mg/dL 이하',
      signatureColor: '#3f60f0',
      svg: <CholesterolIcon />,
    },
    smkQty: {
      title: '흡연',
      value: '',
      isSmkDrnkExerciseDetail: `${healthManageCardData.boj[0]}`,
      standardOfNormal: '',
      signatureColor: '#68a0eb',
      svg: <SmokeIcon />,
    },
    resFastingBloodSuger: {
      title: '식전혈당은',
      value: `${healthManageCardData.value}mg/dL`,
      isSmkDrnkExerciseDetail: false,
      standardOfNormal: '정상 : 69~99 mg/dL',
      signatureColor: '#d990f0',
      svg: <FastingBloodSugerIcon />,
    },
    drnkQty: {
      title: '음주',
      value: '',
      isSmkDrnkExerciseDetail: `${healthManageCardData.boj[0]}`,
      standardOfNormal: '',
      signatureColor: '#e99318',
      svg: <DrnkIcon />,
    },
    exerciQty: {
      title: '운동량',
      value: '',
      isSmkDrnkExerciseDetail: `${healthManageCardData.boj[0]}`,
      standardOfNormal: '',
      signatureColor: '#73ccbc',
      svg: <ExerciseIcon />,
    },
    resGFR: {
      title: '신사구체여과율은',
      value: `${healthManageCardData.value}mL/min `,
      isSmkDrnkExerciseDetail: false,
      standardOfNormal: '정상 : 60 mL/min 이상',
      signatureColor: '#edb3b4',
      svg: <GFRIcon />,
    },
  }[subject]!
}
