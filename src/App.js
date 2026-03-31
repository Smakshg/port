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
  const [sortOption, setSortOption] = useState('None');

  const categories = ['All', ...new Set(robotsData.map(r => r.category))];

  const parsePayload = (payload) => {
    if (typeof payload === 'number') return payload;
    if (!payload) return 0;
    // Handle strings like "6–10", "up to 3100", "7-12"
    const match = payload.toString().match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const parseCost = (cost) => {
    if (!cost) return 0;
    const str = cost.toString().toLowerCase();
    const match = str.match(/[\d.]+/);
    if (!match) return 0;
    let val = parseFloat(match[0]);
    if (str.includes('cr')) val *= 100; // Convert Cr to Lakhs for comparison
    return val;
  };

  useEffect(() => {
    setRobots(robotsData);
    setFilteredRobots(robotsData);
  }, []);

  useEffect(() => {
    let result = [...robots];

    // Filter
    if (activeCategory !== 'All') {
      result = result.filter(r => r.category === activeCategory);
    }

    // Search
    if (searchQuery) {
      result = result.filter(r => 
        r.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.notes.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortOption === 'Price Low-High') {
      result.sort((a, b) => parseCost(a.cost) - parseCost(b.cost));
    } else if (sortOption === 'Price High-Low') {
      result.sort((a, b) => parseCost(b.cost) - parseCost(a.cost));
    } else if (sortOption === 'Payload Low-High') {
      result.sort((a, b) => parsePayload(a.payload) - parsePayload(b.payload));
    } else if (sortOption === 'Payload High-Low') {
      result.sort((a, b) => parsePayload(b.payload) - parsePayload(a.payload));
    }

    setFilteredRobots(result);
  }, [activeCategory, searchQuery, sortOption, robots]);

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
        <div className="sort-section">
          <span className="section-label">Sort by:</span>
          <select 
            className="sort-select" 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="None">Default</option>
            <option value="Price Low-High">Price: Low to High</option>
            <option value="Price High-Low">Price: High to Low</option>
            <option value="Payload Low-High">Payload: Light to Heavy</option>
            <option value="Payload High-Low">Payload: Heavy to Light</option>
          </select>
        </div>

        <div className="category-section">
          <span className="section-label">Filter by:</span>
          <div className="category-chips">
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
        </div>
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
