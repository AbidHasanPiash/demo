import { useState } from "react"
import ModalFiscalYear from "./ModalFiscalYear"

export default function NonPharmacy() {
  const [isModalFiscalYearOpen, setModalFiscalYearOpen] = useState(false)
  return (
    <div className='flex items-center justify-center h-screen'>
      <button
        onClick={() => setModalFiscalYearOpen(true)}
        className='border px-3 py-1 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-md'>
        Fiscal Year
      </button>
      {isModalFiscalYearOpen && <ModalFiscalYear onClose={()=>setModalFiscalYearOpen(false)} />}
    </div>
  )
}
