import { useState } from "react"
import ModalChartOfAccount from "./ModalChartOfAccount"
import ModalFiscalMonth from "./ModalFiscalMonth"
import ModalFiscalYear from "./ModalFiscalYear"

export default function NonPharmacy() {
  const [isModalFiscalYearOpen, setModalFiscalYearOpen] = useState(false)
  const [isModalFiscalMonthOpen, setModalFiscalMonthOpen] = useState(false)
  const [isModalChartOfAccount, setModalChartOfAccountOpen] = useState(false)
  return (
    <div className='flex items-center justify-center h-screen'>
      <button
        onClick={() => setModalFiscalYearOpen(true)}
        className='border px-3 py-1 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-md'>
        Fiscal Year
      </button>
      <button
        onClick={() => setModalFiscalMonthOpen(true)}
        className='border px-3 py-1 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-md'>
        Fiscal Month
      </button>
      <button
        onClick={() => setModalChartOfAccountOpen(true)}
        className='border px-3 py-1 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-md'>
        Chart of Accounts
      </button>
      {isModalFiscalYearOpen && <ModalFiscalYear isOpen={isModalFiscalYearOpen} onClose={()=>setModalFiscalYearOpen(false)} />}
      {isModalFiscalMonthOpen && <ModalFiscalMonth isOpen={isModalFiscalMonthOpen} onClose={()=>setModalFiscalMonthOpen(false)} />}
      {isModalChartOfAccount && <ModalChartOfAccount isOpen={isModalChartOfAccount} onClose={()=>setModalChartOfAccountOpen(false)} />}
    </div>
  )
}
