import { Link } from 'react-router-dom'
import { FrameMark } from './FrameMark'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <FrameMark size="md" />
            FRAME
          </Link>
          <p>A privacy-first mobile video editor. Your footage stays on your phone.</p>
        </div>

        <div className="footer-cols">
          <div>
            <h3>Product</h3>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/help">Help</Link>
          </div>
          <div>
            <h3>Legal</h3>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="container footer-meta">
        <p>
          © {new Date().getFullYear()} J P Ferreira Creative Ltd. FRAME name is provisional pending
          trademark checks.
        </p>
        <p>No tracking cookies. No ad SDKs.</p>
      </div>
    </footer>
  )
}
