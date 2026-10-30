import './EditorPreview.css'

export function EditorPreview() {
  return (
    <div className="preview" aria-hidden="true">
      <div className="preview-glow" />
      <div className="preview-device">
        <div className="preview-screen">
          <div className="preview-topbar">
            <span>Travel reel</span>
            <span className="preview-export">Export</span>
          </div>

          <div className="preview-stage">
            <div className="preview-frame">
              <div className="preview-sky" />
              <div className="preview-horizon" />
              <div className="preview-title">golden hour</div>
            </div>
          </div>

          <div className="preview-tools">
            <span>Split</span>
            <span>Trim</span>
            <span className="is-active">Text</span>
            <span>Audio</span>
          </div>

          <div className="preview-timeline">
            <div className="preview-track video-track">
              <div className="clip clip-a">Clip 01</div>
              <div className="clip clip-b">Clip 02</div>
              <div className="clip clip-c">Clip 03</div>
            </div>
            <div className="preview-track audio-track">
              <div className="clip audio">Soundtrack</div>
            </div>
            <div className="playhead" />
          </div>
        </div>
      </div>
    </div>
  )
}
