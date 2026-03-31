import React, { useState, useEffect } from 'react';
import './App.css';
import robotsData from './data/robots.json';

const RobotCard = ({ robot }) => {
  return (
    <div className="robot-card">
      <div className="card-category">{robot.category}</div>
      <h3 className="card-title">{robot.model}</h3>
      
      <div className="card-stats">
        <div className="stat-item">
          <span className="stat-label">Payload</span>
          <span className="stat-value">{robot.payload} kg</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Reach</span>
          <span className="stat-value">{robot.reach} mm</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Axes</span>
          <span className="stat-value">{robot.axes}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Accuracy</span>
          <span className="stat-value">{robot.accuracy}</span>
        </div>
      </div>

      <p className="card-notes">{robot.notes}</p>
      
      <div className="card-footer">
        <div className="card-price">{robot.cost}</div>
        <div className="use-case-tag" style={{fontSize: '0.7rem', color: 'var(--accent-secondary)', fontWeight: 600}}>
          {robot.useCase}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(robotsData.map(r => r.category))];

  useEffect(() => {
    setRobots(robotsData);
    setFilteredRobots(robotsData);
  }, []);

  useEffect(() => {
    let result = robots;

    if (activeCategory !== 'All') {
      result = result.filter(r => r.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter(r => 
        r.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.notes.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredRobots(result);
  }, [activeCategory, searchQuery, robots]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="gradient-text">Robot Showcase 2026</h1>
        <p>Explore the ultimate collection of industrial robotic solutions.</p>
      </header>

      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search models, use cases..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="filters-container">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="robot-grid">
        {filteredRobots.length > 0 ? (
          filteredRobots.map((robot, idx) => (
            <RobotCard key={`${robot.model}-${idx}`} robot={robot} />
          ))
        ) : (
          <div style={{gridColumn: '1/-1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)'}}>
            No robots found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
