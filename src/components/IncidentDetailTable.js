import { format } from 'd3-format'
import React from 'react'

const formatPercent = format('.0%')
const formatNumber = format(',')

const IncidentDetailTable = ({ data, title }) => {
  const total = data.reduce((a, b) => (a + b.count), 0)
  const dataParsed = data.map(d => ({ ...d, percent: (d.count / total) }))
  const cols = [
    { name: '', width: 3 },
    { name: 'Percent', width: 2 },
    { name: title, width: 4 },
    { name: 'Incidents', width: 3 },
  ]

  dataParsed.sort((a, b) => a.key > b.key)

  return (
    <table className='mb2 pb2 border-bottom'>
      <caption className='bold left-align'>{title}</caption>
      <thead>
        <tr>
          {cols.map((c, i) => (
            <th
              key={i}
              className={`col-${c.width} ${i < 3 ? 'v-hide' : 'h5 red right-align'}`}
            >
              {c.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataParsed.map((d, i) => (
          <tr key={i}>
            <td>
              <div className='progress-bar my1'>
                <span className='rtl' style={{ width: `${d.percent * 100}%` }} />
              </div>
            </td>
            <td className='bold right-align'>{formatPercent(d.percent)}</td>
            <td className='px2'>{d.key}</td>
            <td className='right-align'>{formatNumber(d.count)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default IncidentDetailTable
