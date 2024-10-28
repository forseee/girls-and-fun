import { useRef } from "react"
import "./App.css"
import WheelOfFortune from "./wheelsOfFortuna"
import webmVideo from "./video/woman_motion.webm"
import hevcVideo from "./video/woman_motion.mov"

function App() {
  const videoRef = useRef(null)

  const isAppleDevice = /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)
  const videoSource = isAppleDevice ? hevcVideo : webmVideo

  const handlePlay = () => {
    videoRef.current.play()
    videoRef.current.controls = false
  }

  const handlePause = () => {
    videoRef.current.pause()
    videoRef.current.controls = false
    videoRef.current.blur()
  }
  return (
    <div>
      {/* <p style={{textAlign: 'center', fontSize: 30, lineHeight:0}}>AI телки от Дэна</p> */}
      <WheelOfFortune />
      <video
        autoPlay
        loop
        muted
        tabIndex={-1}
        src={videoSource}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 100,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        onContextMenu={(e) => e.preventDefault()}
        ref={videoRef}
        width="640"
        height="400"
        controls={false}
        preload="auto"
      >
        Ваш браузер не поддерживает тег video.
      </video>
      {/* <button onClick={handlePlay}>Воспроизвести</button>
      <button onClick={handlePause}>Пауза</button> */}
    </div>
  )
}

export default App
