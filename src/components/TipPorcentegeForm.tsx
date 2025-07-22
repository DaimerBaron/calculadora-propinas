import React from "react";

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPorcentegeFormProps = {
    tip: number
    setTip: React.Dispatch<React.SetStateAction<number>>;
}
export default function TipPorcentegeForm({ setTip, tip}: TipPorcentegeFormProps) {
  return (
    <div className="space-y-2 border-t border-gray-300 mt-5">
        <h2 className="text-xl font-black mt-3 mb-3">Propinas</h2>
        <form>
            
            {tipOptions.map((option) => (
            <div key={option.id} className="flex items-center gap-2">
             
                <label htmlFor={option.id}> {option.label}</label>
                <input
                    type="radio"
                    name="tip"
                    id={option.id}
                    value={option.value}
                    onChange={e => setTip(Number(e.target.value))}
                    checked= {option.value === tip}
                 />
                
            </div>
        ))}
        </form>
    </div>
  )
}
