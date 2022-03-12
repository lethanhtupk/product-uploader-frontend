import React from 'react'
import { paths } from '~/components/elements/Icon/paths'

interface Props {
  name: string
  viewBox?: string
  style: string
}

const Icon = ({ name, viewBox = '0 0 24 24', style }: Props) => {
  const svgStyle =
    paths[name].type === 'stroke' ? { stroke: 'currentColor', fill: 'none', strokeWidth: 2 } : { fill: 'currentColor' }

  return (
    <div className={style}>
      <svg width="100%" height="100%" viewBox={viewBox} style={svgStyle} xmlns="http://www.w3.org/2000/svg">
        {paths[name].path}
      </svg>
    </div>
  )
}

export default Icon
