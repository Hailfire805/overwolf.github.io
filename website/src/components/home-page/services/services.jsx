import React from 'react';
import { useState } from 'react';
import './services.scss';

const Services = (props) => {
 const {} = props;

 const [appBtn, seAppBtn] = useState(false);
 const [electronAppBtn, seElectronAppBtn] = useState(false);

// ---------------------------------------------------------------------------

  const handleToggleApp = () => {
    seAppBtn(current => !current);
  }

  const handleToggleElectronApp = () => {
    seElectronAppBtn(current => !current);
  }

  return (
    <section className="services-section">
      <ul className='services-inner'>
        <li className={`service-item ${appBtn ? 'btn-hover' : ''}`}>
          <div className='assets'>
            <img
              src='/img/home-2023/platform-app-bg.webp'
              alt='Overwolf Platform App'
              className='platform-app-bg bg'
              width={512} height={280} />
            <img src='/img/home-2023/platform-app.webp' alt='Overwolf Platform App' className='platform-app symbol' />
          </div>
          <div className='info'>
            <h2>Overwolf Platform</h2>
            <p>Create powerful desktop apps and game overlays, built with 100% pure JavaScript.</p>
            <a href='/start/getting-started'
              className='btn-primary'
              onMouseEnter={handleToggleApp}
              onMouseLeave={handleToggleApp}>
              Explore</a>
            <ul className='app-info-list'>
              <li>
                <svg><use href="/img/sprite.svg#monetization" /></svg>
                Monetization
              </li>
              <li>
                <svg><use href="/img/sprite.svg#in-game-overlay" /></svg>
                In-game overlay
              </li>
              <li>
                <svg><use href="/img/sprite.svg#real-time-game-events" /></svg>
                Real time game data
              </li>
            </ul>
          </div>
        </li>

        <li className={`service-item ${electronAppBtn ? 'btn-hover' : ''}`}>
          <div className='assets'>
            <img
              src='/img/home-2023/electron-app-bg.webp'
              alt='Overwolf Electron App'
              className='electron-app-bg bg'
              width={512} height={280} />
            <img src='/img/home-2023/electron-app.webp' alt='Overwolf Electron App' className='electron-app symbol' />
          </div>
          <div className='info'>
            <h2>Overwolf Electron</h2>
            <p>Leverage an empowered <a target="_blank" href='https://www.electronjs.org/'>Electron.js</a> framework, to make your existing apps even better!</p>
            <a href='/tools/ow-electron'
              className='btn-primary'
              onMouseEnter={handleToggleElectronApp}
              onMouseLeave={handleToggleElectronApp}>
              Explore</a>
            <ul className='app-info-list'>
              <li>
                <svg><use href="/img/sprite.svg#monetization" /></svg>
                Monetization
              </li>
              <li>
                <svg><use href="/img/sprite.svg#in-game-overlay" /></svg>
                In-game overlay <span>(Coming soon)</span>
              </li>
              <li>
                <svg><use href="/img/sprite.svg#real-time-game-events" /></svg>
                Real time game data
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );

}

export default Services;