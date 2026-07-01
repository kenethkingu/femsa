import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

// Dev-time font loader compliance warning
if (import.meta.env.DEV) {
  document.fonts.ready.then(() => {
    const friendsLoaded = document.fonts.check('1em Friends');
    const bodyFontLoaded = document.fonts.check('1em BodyFont');
    
    if (!friendsLoaded) {
      console.warn(
        `%c⚠️ BRAND COMPLIANCE WARNING: Font 'Friends' failed to load. Ensure 'Friends-Bold.woff2' and 'Friends-Bold.woff' are placed in 'src/assets/fonts/'.`,
        'color: #f96419; font-weight: bold; font-size: 12px;'
      );
    }
    if (!bodyFontLoaded) {
      console.warn(
        `%c⚠️ BRAND COMPLIANCE WARNING: Font 'BodyFont' failed to load. Ensure 'Body-Regular.woff2' and 'Body-Regular.woff' are placed in 'src/assets/fonts/'.`,
        'color: #f96419; font-weight: bold; font-size: 12px;'
      );
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
