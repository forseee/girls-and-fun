import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"

const WheelOfFortune = () => {
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const segments = ["Приз 1", "Приз 2", "Приз 3", "Приз 4", "Приз 5", "Приз 6"]
  const segmentAngle = 360 / segments.length

  const controls = useAnimation()

  const spinWheel = async () => {
    if (isSpinning) return

    setIsSpinning(true)
    const spins = 3 // количество полных оборотов
    const finalSegment = Math.floor(Math.random() * segments.length)
    const finalRotation =
      spins * 360 + finalSegment * segmentAngle + segmentAngle / 2

    await controls.start({
      rotate: finalRotation,
      transition: { duration: 3, ease: "easeOut" },
    })

    setResult(segments[finalSegment])
    setIsSpinning(false)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          width: 300,
          height: 300,
        }}
      >
        <motion.div
          animate={controls}
          initial={{ rotate: 0 }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "5px solid #333",
            overflow: "hidden",
          }}
        >
          {segments.map((segment, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                width: "50%",
                height: "50%",
                backgroundColor: index % 2 === 0 ? "#f8b400" : "#f85f73",
                transformOrigin: "100% 100%",
                transform: `rotate(${index * segmentAngle}deg) skewY(${
                  90 - segmentAngle
                }deg)`,
              }}
            >
              {/* Текст внутри сегмента */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${
                    segmentAngle / 2
                  }deg) translate(-50%, -50%)`,
                  textAlign: "center",
                  width: "100%",
                  fontSize: 14,
                  color: "#fff",
                }}
              >
                {segment}
              </div>
            </div>
          ))}
        </motion.div>
        {/* Указатель */}
        <div
          style={{
            position: "absolute",
            top: -10,
            left: "50%",
            marginLeft: -10,
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "20px solid #333",
          }}
        />
      </div>
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        style={{ marginTop: 20 }}
      >
        Крутить колесо
      </button>
      {result && <h3 style={{ marginTop: 20 }}>Вы выиграли: {result}!</h3>}
    </div>
  )
}

export default WheelOfFortune
