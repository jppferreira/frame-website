import { Link } from 'react-router-dom'

export function Privacy() {
  return (
    <section className="section page-hero">
      <div className="container prose">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>
          Last updated: 30 October 2026. This is a draft policy reflecting the intended V1 design of
          FRAME. It will be updated before store submission to match the shipping app, SDKs and any
          legal review.
        </p>

        <h2>Who we are</h2>
        <p>
          FRAME is published by J P Ferreira Creative Ltd. Contact:{' '}
          <Link to="/contact">Contact</Link>.
        </p>

        <h2>What FRAME does with your media</h2>
        <p>
          Video editing and project storage are designed to stay on your device. FRAME does not
          require an account and does not operate a cloud project library for your footage in V1.
          We do not upload your videos to FRAME servers for editing or storage.
        </p>

        <h2>Purchases</h2>
        <p>
          Optional Pro upgrades are billed through Apple App Store or Google Play. Those platforms
          process payment and entitlement data according to their policies. FRAME reads purchase
          entitlement state to unlock Pro features and support Restore Purchases. iOS and Android
          purchases do not automatically transfer across stores.
        </p>

        <h2>Analytics and advertising</h2>
        <p>
          The default plan is to rely on store-provided aggregate metrics only. FRAME V1 is not
          designed to include advertising SDKs, cross-app tracking or personalised marketing SDKs.
          If optional diagnostics are added later, they will be opt-in and disclosed here first.
        </p>

        <h2>Permissions</h2>
        <p>
          FRAME uses system photo/video pickers and related media access only as needed to import
          content you select. Microphone or camera capture is not part of the V1 core journey unless
          later released and disclosed.
        </p>

        <h2>Support messages</h2>
        <p>
          If you use the contact form, we receive the content you choose to send (including your
          name, email, topic, and message). Do not include private footage unless necessary.
          Contact is user-initiated; we do not publish a support address on the website.
        </p>

        <h2>Children</h2>
        <p>
          FRAME is not directed at children. Age ratings and store questionnaires will be completed
          honestly before release.
        </p>

        <h2>Changes</h2>
        <p>
          When the shipping SDK inventory or data flows change, this policy and the in-app / store
          disclosures will be updated before those builds go live.
        </p>

        <p>
          For product help, see <Link to="/help">Help</Link>. For legal terms, see{' '}
          <Link to="/terms">Terms</Link>.
        </p>
      </div>
    </section>
  )
}
