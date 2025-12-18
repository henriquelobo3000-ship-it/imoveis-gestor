export function Hero() {
  return (
    <section style={styles.hero}>
      <div className="container">
        <h1>Show Your Customers Their Needs</h1>
        <p>A supporting statement for your value proposition.</p>

        <div>
          <button style={styles.primary}>Get Free Offer</button>
          <button style={styles.secondary}>Tell Me More</button>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    background: '#6b6f82',
    color: '#fff',
    padding: '80px 0'
  },
  primary: {
    background: '#ff7a18',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    marginRight: '10px'
  },
  secondary: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid #fff',
    padding: '10px 20px'
  }
}
