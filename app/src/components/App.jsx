import "./App.css";

export default function App() {
  return (
    <div className="page">

      {/* HEADER */}
      <header className="header">
        <div className="logo">Company Logo</div>
        <div className="call">
          📞 Call Agent +1 800-555-555
        </div>
      </header>

    
      <section className="hero">

      
        <div className="hero-text">
          <h1>CLEAR VALUE <br /> FOR CUSTOMER</h1>
          <p>Encourage customer to complete your CTA</p>

          <button className="learn-btn">LEARN MORE</button>
        </div>

       
        <div className="contact-card">
          <h3>Contact our Agent – Miguel</h3>

          <div className="contact-info">
            <span>📞</span> <p>+1 800-555-555</p>
          </div>

          <img
            src="https://via.placeholder.com/80"
            className="agent-photo"
            alt="Agent"
          />

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />

          <button className="contact-btn">CONTACT NOW</button>
        </div>

      </section>

    </div>
  );
}
