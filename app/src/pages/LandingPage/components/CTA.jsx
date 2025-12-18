export function CTA() {
  return (
    <section style={styles.cta}>
      <div className="container">
        <h2>Contact us and get a free offer</h2>

        <form style={styles.form}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <button>Get Free Offer</button>
        </form>
      </div>
    </section>
  )
}

const styles = {
  cta: {
    background: '#6b6f82',
    color: '#fff',
    padding: '60px 0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    gap: '10px'
  }
}
