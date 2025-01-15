import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '9feab793-e8a3-4641-9476-3748fff8e9e2',
    clientToken: 'pubf80cca8e1d417c86927fc67b2a24fc9b',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'chariscode',
    env: 'dev',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
}); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
