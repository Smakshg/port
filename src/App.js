import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import robotsData from './data/robots.json';

const CustomDropdown = ({ label, options, value, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-label">{label}</div>
      <button
        className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="trigger-content">
          {icon && <span className="trigger-icon">{icon}</span>}
          <span>{selectedOption.label}</span>
        </div>
        <svg className="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`dropdown-item ${value === opt.value ? 'active' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const RobotModal = ({ robot, onClose }) => {
  if (!robot) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <div className="modal-category">{robot.category}</div>
          <h2 className="modal-title">{robot.model}</h2>
          <div className="modal-company">{robot.company}</div>
        </div>

        <div className="modal-body">
          <div className="modal-main-spec">
            <div className="spec-box primary">
              <span className="spec-label">Payload Capacity</span>
              <span className="spec-value">{robot.payload} <small>kg</small></span>
            </div>
            <div className="spec-box primary">
              <span className="spec-label">Maximum Reach</span>
              <span className="spec-value">{robot.reach} <small>mm</small></span>
            </div>
          </div>

          <div className="modal-details-grid">
            <div className="detail-item">
              <span className="detail-label">Mechanical Axes</span>
              <span className="detail-value">{robot.axes}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Precision / Accuracy</span>
              <span className="detail-value">{robot.accuracy}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Typical Use Case</span>
              <span className="detail-value">{robot.useCase}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Estimated Cost</span>
              <span className="detail-value highlight">{robot.cost}</span>
            </div>
          </div>

          <div className="modal-notes-section">
            <h4 className="notes-heading">Technical Notes & Features</h4>
            <p className="modal-notes">{robot.notes || "No additional technical documentation available for this model."}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="primary-btn" onClick={() => window.print()}>Print Specs</button>
          <button className="secondary-btn" onClick={onClose}>Close Terminal</button>
        </div>
      </div>
    </div>
  );
};

const RobotCard = ({ robot, onClick }) => {
  return (
    <div className="robot-card" onClick={onClick}>
      <div className="card-top">
        <div className="card-category" data-category={robot.category}>{robot.category}</div>
        <div className="company-badge">{robot.company}</div>
      </div>
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
      </div>

      <div className="card-footer">
        <div className="card-price">{robot.cost}</div>
        <div className="view-detail-hint">View System Specs &rarr;</div>
      </div>
    </div>
  );
};

function App() {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCompany, setActiveCompany] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('None');
  const [selectedRobot, setSelectedRobot] = useState(null);

  const categories = ['All', ...new Set(robots.map(r => r.category).filter(Boolean))];
  const companies = ['All', ...new Set(robots.map(r => r.company).filter(Boolean))];

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
    const normalizedData = robotsData.map(r => {
      let category = r.category || 'Other';
      // Normalize common category name variations
      if (category.toLowerCase().includes('welding')) category = 'Welding';
      if (category.toLowerCase().includes('palletizing')) category = 'Palletizing';
      if (category.toLowerCase().includes('painting')) category = 'Painting';
      if (category.toLowerCase().includes('deburring')) category = 'Deburring';

      return {
        ...r,
        category: category,
        company: r.company ? r.company.trim() : 'Unknown'
      };
    });
    setRobots(normalizedData);
    setFilteredRobots(normalizedData);
  }, []);

  useEffect(() => {
    // Base cleanup: Filter out header rows that might be in the JSON
    let result = robots.filter(r =>
      r.model &&
      !r.model.toLowerCase().includes('robot model') &&
      !r.model.toLowerCase().includes('robot series') &&
      !r.model.toLowerCase().includes('company')
    );

    // Category Filter
    if (activeCategory !== 'All') {
      result = result.filter(r => r.category === activeCategory);
    }

    // Company Filter
    if (activeCompany !== 'All') {
      result = result.filter(r => r.company === activeCompany);
    }

    // Search
    if (searchQuery) {
      result = result.filter(r =>
        r.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
  }, [activeCategory, activeCompany, searchQuery, sortOption, robots]);

  const sortOptions = [
    { label: 'Default', value: 'None' },
    { label: 'Price: Low to High', value: 'Price Low-High' },
    { label: 'Price: High to Low', value: 'Price High-Low' },
    { label: 'Payload: Light to Heavy', value: 'Payload Low-High' },
    { label: 'Payload: Heavy to Light', value: 'Payload High-Low' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-badge">System Status: Active</div>
        <h1 className="gradient-text">Robot Showcase 2026</h1>
        <p className="scan-counter">Scanning {robots.length.toLocaleString()} Industrial Solutions...</p>
      </header>

      <div className="search-filter-section">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search models, companies, use cases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="dropdown-row">
          <CustomDropdown
            label="Category"
            options={categories.map(c => ({ label: c, value: c }))}
            value={activeCategory}
            onChange={setActiveCategory}
            icon="📁"
          />
          <CustomDropdown
            label="Manufacturer"
            options={companies.map(c => ({ label: c, value: c }))}
            value={activeCompany}
            onChange={setActiveCompany}
            icon="🏭"
          />
          <CustomDropdown
            label="Sort By"
            options={sortOptions}
            value={sortOption}
            onChange={setSortOption}
            icon="⚖️"
          />
        </div>
      </div>

      <div className="robot-grid">
        {filteredRobots.length > 0 ? (
          filteredRobots.map((robot, idx) => (
            <RobotCard 
              key={`${robot.model}-${idx}`} 
              robot={robot} 
              onClick={() => setSelectedRobot(robot)}
            />
          ))
        ) : (
          <div className="no-results">
            No systems found matching current query.
          </div>
        )}
      </div>

      <RobotModal 
        robot={selectedRobot} 
        onClose={() => setSelectedRobot(null)} 
      />
    </div>
  );
}

export default App;
