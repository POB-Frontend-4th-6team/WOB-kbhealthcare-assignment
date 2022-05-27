import styles from './healthCharts.module.scss'
import YearsChart from './YearsChart'

const HealthCharts = () => {
  return (
    <section className={styles.container}>
      <h2>HealthCharts</h2>
      <YearsChart />
    </section>
  )
}

export default HealthCharts
