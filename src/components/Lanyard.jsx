import './Lanyard.css';

export default function Lanyard() {
  return (
    <div className="lanyard-container">
      {/* Lanyard Strap */}
      <div className="lanyard-strap">
        <div className="lanyard-text">
          Portfolio • Frontend • Backend • ML Engineer • Data Science • Portfolio • Frontend • Backend • ML Engineer
        </div>
      </div>
      
      {/* Card */}
      <div className="lanyard-card">
        <img 
          src="/suraj-photo.png" 
          alt="Suraj Joshi" 
          className="lanyard-photo"
        />
        <div className="lanyard-info">
          <h3>Suraj Joshi</h3>
          <p>ML Engineer & Backend Developer</p>
        </div>
      </div>
    </div>
  );
}
