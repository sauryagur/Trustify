// Add this at the top of the file
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AgentProvider, ActorProvider } from '@ic-reactor/react';
import App from './App.tsx'
import { canisterId, idlFactory } from './declarations/backend';
import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <App />
      </ActorProvider>
    </AgentProvider>
  </StrictMode>,
)