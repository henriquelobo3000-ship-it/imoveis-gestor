export function Benefits() {
  const items = [
    'Benefit description one',
    'Benefit description two',
    'Benefit description three',
    'Benefit description four'
  ]

  return (
    <section className="container" style={{ padding: '60px 0' }}>
      {items.map((item, index) => (
        <p key={index}>✔ {item}</p>
      ))}
    </section>
  )
}
