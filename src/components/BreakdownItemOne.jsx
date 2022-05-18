import React from 'react'

function BreakdownItemOne({breakdown}) {
  const date = breakdown.createdAt.split('T')[0].split("-").reverse().join("/")
  return (
    <tr className="text-xs bg-blue-50 border">
    <td className="pl-6 py-6 border-l-0 border border-gray-200">
    {breakdown.userName}
    </td>
    <td className="pl-6 border border-gray-200">{breakdown.ResidenceName}</td>
    { breakdown.type === 0 ?    <td className="pl-6 border border-gray-200">electricté</td> : breakdown.type ===1 ? <td className="pl-6 border border-gray-200">electricté</td> : <td className="pl-6 border border-gray-200">autre</td> }
    <td className="text-center border border-gray-200">{breakdown.Description}</td>
    <td className="pl-6 border border-gray-200">{date}</td>

  </tr>
  )
}

export default BreakdownItemOne