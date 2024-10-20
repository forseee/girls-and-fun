import { useRef } from "react"
import "./App.css"
import WheelOfFortune from "./wheelsOfFortuna"
import videoFile from "./video/woman_motion.webm"

function App() {
  const videoRef = useRef(null)

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
        <source src={videoFile} type="video/webm" />
        Ваш браузер не поддерживает тег video.
      </video>
      {/* <button onClick={handlePlay}>Воспроизвести</button>
      <button onClick={handlePause}>Пауза</button> */}
    </div>
  )
}

export default App
