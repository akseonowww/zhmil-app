import { useState, useEffect } from "react"
import { Plus, Minus, X } from "@phosphor-icons/react"

export default function Slot({ slot, rank, onChangePrice, onDelete }) {
  const { id, price } = slot

  const [add, setAdd] = useState("")
  const [edit, setEdit] = useState("0")
  const [hover, setHover] = useState(false)

  const num = Number(add || 0)

  const plus = () => {
    if (!num) return
    onChangePrice(id, price + num)
    setAdd("")
  }

  const minus = () => {
    if (!num) return
    onChangePrice(id, price - num)
    setAdd("")
  }

  useEffect(() => {
    setEdit(String(price))
  }, [price])

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex items-center h-[64px] border border-white/10 rounded-xl px-3"
    >

      <div className="w-[40px]">{rank}.</div>

      <input
        className="flex-1 text-[32px] bg-transparent outline-none"
        placeholder="лот"
      />

      <input
        value={edit}
        onChange={(e) => setEdit(e.target.value.replace(/\D/g, ""))}
        onBlur={() => onChangePrice(id, Number(edit || 0))}
        className="w-[140px] text-right text-[32px] bg-transparent outline-none"
      />

      <div className="flex items-center gap-2 ml-3">

        <button onClick={minus}>
          <Minus size={18} />
        </button>

        <input
          value={add}
          onChange={(e) => setAdd(e.target.value.replace(/\D/g, ""))}
          className="w-[60px] text-center bg-white/10 rounded"
        />

        <button onClick={plus}>
          <Plus size={18} />
        </button>

        {hover && (
          <button onClick={() => onDelete(id)} className="text-red-500 ml-2">
            <X size={18} />
          </button>
        )}

      </div>

    </div>
  )
}