import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error - CSS side-effect import
import './styles/index.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
