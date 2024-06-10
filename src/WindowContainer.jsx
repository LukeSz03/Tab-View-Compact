import React from 'react';
import './WindowContainer.css';
import collapse from './assets/collapse.svg';
import Tab from './Tab';

const WindowContainer = ({window}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const title = "Window 1";
  const tabs = window.tabs || [];
  const tabCount = tabs.length;
  const handleTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    minWidth: '34px',
    minHeight: '34px',
    maxHeight: '34px',
    maxWidth: '34px',
    marginTop: '4px',
    marginBottom: '4px',
    position: 'relative',
    justifyContent: 'center'
  };

  return (
    <div className='window'>
        <div className='window-title' onClick={handleTitleClick}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', fontFamily: 'system-ui' }}>{title}</span>
            <div style={iconContainerStyle}>
                {isCollapsed ? <span style={{ fontFamily: 'system-ui' }}>{tabCount}</span> : <img src={collapse} alt="Collapse Icon" />}
            </div>
        </div>
        <div className='tabs' style={{ display: isCollapsed ? 'none' : 'flex' }}>
            {tabs.map((tab, index) => (
              <Tab key={index} tab={tab}></Tab>
            ))}
        </div>
    </div>
  );
};

export default WindowContainer;
