import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "@phosphor-icons/react"

export default function Timer() {
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(10 * 60 * 1000)

  const startRef = useRef(0)
  const baseRef = useRef(0)

  useEffect(() => {
    if (!running) return

    startRef.current = Date.now()
    baseRef.current = time

    const id = setInterval(() => {
      const diff = Date.now() - startRef.current
      const next = Math.max(baseRef.current - diff, 0)
      setTime(next)
    }, 30)

    return () => clearInterval(id)
  }, [running, time])

  const formatMain = (ms) => {
    const min = Math.floor(ms / 60000)
    const sec = Math.floor((ms % 60000) / 1000)

    return (
      String(min).padStart(2, "0") +
      ":" +
      String(sec).padStart(2, "0")
    )
  }

  const formatMs = (ms) => {
    return String(Math.floor(ms % 1000)).padStart(3, "0")
  }

  const change = (v) => {
    setTime((t) => {
      const updated = Math.max(t + v, 0)
      baseRef.current = updated
      startRef.current = Date.now()
      return updated
    })
  }

  return (
    <div className="flex flex-col items-center text-white">

      <div className="flex items-center gap-6">

        {/* TIMER */}
        <div className="relative inline-block leading-none">

          <div className="text-[136px] font-black font-mono tracking-[-6px]">
            {formatMain(time)}
          </div>

          <div className="absolute bottom-4 right-[-12px] text-[34px] text-white/30 font-mono font-bold">
            .{formatMs(time)}
          </div>

        </div>

        {/* PLAY / PAUSE */}
        <button
          onClick={() => setRunning((p) => !p)}
          className="w-[78px] h-[78px] rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
        >
          {running ? <Pause size={30} /> : <Play size={30} />}
        </button>

      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap justify-center gap-2 mt-4 text-[13px]">

        <button onClick={() => change(-120000)} className="px-3 py-1.5 bg-white/10 rounded hover:bg-white/20">
          -2m
        </button>

        <button onClick={() => change(-60000)} className="px-3 py-1.5 bg-white/10 rounded hover:bg-white/20">
          -1m
        </button>

        <button onClick={() => change(-30000)} className="px-3 py-1.5 bg-white/10 rounded hover:bg-white/20">
          -30s
        </button>

        <button onClick={() => change(30000)} className="px-3 py-1.5 bg-white/10 rounded hover:bg-white/20">
          +30s
        </button>

        <button onClick={() => change(60000)} className="px-3 py-1.5 bg-white/10 rounded hover:bg-white/20">
          +1m
        </button>

        <button onClick={() => change(120000)} className="px-3 py-1.5 bg-white/10 rounded hover:bg-white/20">
          +2m
        </button>

      </div>

    </div>
  )
}