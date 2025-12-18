export function Gallery() {
  return (
    <section className="container" style={styles.gallery}>
      <img src="https://picsum.photos/500/300?1" />
      <img src="https://picsum.photos/500/300?2" />
      <img src="https://picsum.photos/500/300?3" />
      <img src="https://picsum.photos/500/300?4" />
    </section>
  )
}

const styles = {
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '60px 0'
  }
}
