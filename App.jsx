import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const renderContent = () => {
    switch (activeTab) {
      case 'Tab1':
        return <p>You are in  Tab 1</p>;
      case 'Tab2':
        return <p>You are in Tab 2</p>;
      case 'Tab3':
        return <p>You are in Tab 3</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {['Tab1', 'Tab2', 'Tab3'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === tab ? '#007bff' : '#eee',
              color: activeTab === tab ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ marginTop: '20px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default TabComponent;
