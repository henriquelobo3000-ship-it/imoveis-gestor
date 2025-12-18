export function Header() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <h3>Professional House Designs</h3>
        <nav>
          <a href="#">About Us</a>
          <button style={styles.button}>Get Free Offer</button>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    background: '#6b6f82',
    color: '#fff',
    padding: '15px 0'
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    marginLeft: '15px',
    padding: '8px 14px',
    border: 'none',
    background: '#ff7a18',
    color: '#fff'
  }
}
