/// src/components/SlotList.jsx

import { AnimatePresence, motion } from "framer-motion"
import Slot from "./Slot"

export default function SlotList({
  slots,
  onChangeTitle,
  onChangePrice,
  onDelete,
}) {
  return (
    <div className="flex flex-col gap-3">

      <AnimatePresence>

        {slots.map((slot, index) => (
          <motion.div
            key={slot.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.2 }}
          >
            <Slot
              id={slot.id}
              index={index}
              title={slot.title}
              price={slot.price}
              onChangeTitle={onChangeTitle}
              onChangePrice={onChangePrice}
              onDelete={onDelete}
            />
          </motion.div>
        ))}

      </AnimatePresence>

    </div>
  )
}