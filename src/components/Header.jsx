import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="h-[48px] flex items-stretch justify-between border-b border-white/10  overflow-hidden">

        {/* LEFT */}
        <div className="flex items-center gap-3 px-4">

          <button className="text-[16px] opacity-80 hover:opacity-100 transition">
            ☰
          </button>

          <button className="text-[16px] opacity-80 hover:opacity-100 transition">
            🛒
          </button>

          <button
            onClick={() => setOpen(true)}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-[12px]"
          >
            ?
          </button>

        </div>

        {/* CENTER */}
        <div className="flex items-center text-[22px] font-bold uppercase tracking-widest sexsmith px-4">
          ЖМЭАУК
        </div>

        {/* RIGHT GIFS */}
        <div className="flex items-stretch h-full m-0 p-0 gap-0">

          <img
            src="https://жмилевский.рф/assets/stickers/sticker-rabbit-dnr.gif"
            className="h-full w-[48px] object-cover shrink-0"
          />

          <img
            src="https://жмилевский.рф/assets/stickers/sticker-rabbit-lnr.gif"
            className="h-full w-[48px] object-cover shrink-0"
          />

          <div className="flex items-center px-3 text-[12px] tracking-wide opacity-80 whitespace-nowrap">
            ЖМИЛЕВСКИЙ.РФ
          </div>

          <img
            src="https://жмилевский.рф/assets/stickers/sticker-rabbit-rf.gif"
            className="h-full w-[48px] object-cover shrink-0"
          />

        </div>

      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-[#111] border border-white/10 p-6 rounded-xl w-[420px] ">

            <div className="text-[18px] font-bold mb-3">
              ПРАВИЛА
            </div>

            <div className="text-[14px] opacity-80 leading-relaxed">
              • интерфейс слотов и позиций<br />
              • управление ставками<br />
              • таймер влияет на сессию<br />
              • добавление/удаление слотов<br />
              • система в реальном времени
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-5 px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition"
            >
              закрыть
            </button>

          </div>

        </div>
      )}
    </>
  )
}