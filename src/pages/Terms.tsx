import { Link } from 'react-router-dom'

export function Terms() {
  return (
    <section className="section page-hero">
      <div className="container prose">
        <p className="eyebrow">Terms</p>
        <h1>Terms of Use</h1>
        <p>
          Last updated: 30 October 2026. Draft terms for the FRAME mobile application and this
          website. Final wording is subject to legal review before public launch.
        </p>

        <h2>The service</h2>
        <p>
          FRAME is a mobile video editor. You use it to import media you select, edit locally, and
          export files on your device. This website provides product information, privacy/terms
          pages and support contact details. It does not require an account.
        </p>

        <h2>Your content and licences</h2>
        <p>
          You are responsible for having the rights to any video, photo or audio you import,
          including music synchronisation rights for social posting. FRAME does not grant you rights
          to third-party media.
        </p>

        <h2>Subscriptions and purchases</h2>
        <p>
          Optional paid features are sold through Apple or Google. Payment terms, renewal,
          cancellation and refunds follow the applicable store rules. Prices shown in the stores are
          authoritative. Restore Purchases applies to the same platform store account.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Do not misuse the app or site, attempt to interfere with billing entitlements, or use
          FRAME to infringe others’ rights. We may refuse support for abusive requests.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The app and site are provided as available. Editing depends on device capability, storage
          and media compatibility. We do not guarantee every codec, HDR variant or export setting
          on every device.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, J P Ferreira Creative Ltd is not liable for indirect or
          consequential losses arising from use of FRAME, including lost media where you did not
          keep original copies. Keep originals of important footage.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms: <Link to="/contact">Contact</Link>. Privacy practices:{' '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  )
}
