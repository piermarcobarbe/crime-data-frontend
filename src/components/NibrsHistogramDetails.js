import { format } from 'd3-format'
import React from 'react'

const fmt = format(',.0f')

const NibrsHistogramDetails = ({ data }) => {
  const highlight = v => <span className='bold red'>{v}</span>

  return (
    <div className='mt1 fs-14'>
      There were {highlight(fmt(data.ct))} incidents
      involving victims aged {highlight(`${data.x0}-${data.x1 - 1}`)}.
    </div>
  )
}

export default NibrsHistogramDetails