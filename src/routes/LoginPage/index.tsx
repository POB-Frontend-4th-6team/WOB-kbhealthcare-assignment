import styles from './loginPage.module.scss'

const LoginPage = () => {
  const handleLoginOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleLoginOnSubmit}>
        <label htmlFor='idInput'>UserID</label>
        <input id='idInput' type='text' />
      </form>
      <div className={styles.logoContainer} />
    </div>
  )
}

export default LoginPage
