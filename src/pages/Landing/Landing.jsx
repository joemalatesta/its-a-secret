import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>This is a secret Santa site</h1>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
