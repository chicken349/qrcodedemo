import QRCode from 'qrcode'
import { useEffect, useState, version } from 'react'

export default function QrCode() {
  const [version, updateVersion] = useState(3)
  const [website, updateWebsite] = useState("http://google.com.hk")
  const [errorCorrectionLevel, updateErrorCorrectionLevel] = useState("L")
  const [maskPattern, updateMaskPattern] = useState(1)

  const generateQR = () => {
    QRCode.toCanvas(canvas, website, { 
      version: version, 
      errorCorrectionLevel: errorCorrectionLevel, 
      maskPattern: maskPattern }, 
      (err) => {if (err) {console.log("error:",err)}})
  }
  useEffect(() => generateQR(), [version, website, errorCorrectionLevel, maskPattern])

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "300px 400px" }}>
        <label style={{display: "inline-block" }}>Website OR Wordsss</label>
        <input placeholder="website OR wordsss" onChange={e => updateWebsite(e.target.value)}></input>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "300px 400px" }}>
        <label>Version (1-40)</label>
        <input placeholder="version" onChange={e => updateVersion(e.target.value)}></input>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "300px 400px" }}>
        <label>ErrorCorrectionLevel (L/M/Q/H)</label>
        <input placeholder="ErrorCorrectionLevel" onChange={e => updateErrorCorrectionLevel(e.target.value)}></input>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "300px 400px" }}>
        <label>MaskPattern (1-7)</label>
        <input placeholder="MaskPattern" onChange={e => updateMaskPattern(e.target.value)}></input>
      </div>
      <canvas id="canvas"></canvas>
    </div>
  )
}
