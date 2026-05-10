import { useState } from "react"
import Timer from "./components/Timer"
import SlotList from "./components/SlotList"
import Header from "./components/Header"

const createSlot = (id) => ({ id, price: 0 })

export default function App() {
  const [slots, setSlots] = useState(
    Array.from({ length: 10 }).map((_, i) => createSlot(i + 1))
  )

  const changePrice = (id, value) => {
    setSlots((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, price: Math.max(Number(value) || 0, 0) } : s
      )
    )
  }

  const deleteSlot = (id) => {
    setSlots((prev) => prev.filter((s) => s.id !== id))
  }

  const addSlots = (count) => {
    setSlots((prev) => {
      const start = prev.length ? prev[prev.length - 1].id + 1 : 1
      return [
        ...prev,
        ...Array.from({ length: count }).map((_, i) => ({
          id: start + i,
          price: 0,
        })),
      ]
    })
  }

  return (
    <div className="min-h-screen bg-green  flex flex-col">

      {/* HEADER */}
      <Header />

      {/* TIMER BLOCK */}
      <div className="flex justify-center py-8">
        <Timer />
      </div>

      {/* SLOT AREA */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-[1000px]">
          <SlotList
            slots={slots}
            onChangePrice={changePrice}
            onDelete={deleteSlot}
          />
        </div>
      </div>

      {/* SLOT CONTROLS */}
      <div className="flex justify-center gap-3 py-6">

        <button
          onClick={() => addSlots(1)}
          className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition"
        >
          +1 слот
        </button>

        <button
          onClick={() => addSlots(3)}
          className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition"
        >
          +3 слота
        </button>

        <button
          onClick={() => addSlots(10)}
          className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition"
        >
          +10 слотов
        </button>

      </div>

    </div>
  )
}