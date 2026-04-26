import React from 'react'

const Footer = ({
    children,
    className = "",
    height = "normal",
    padding = "normal"
}) => {
    const paddings = {
    none: "",
    small: "p-4",
    normal: "p-6",
  };

  const heights = {
    smaller: "h-32 md:h-24",
    small: "h-48 md:h-32",
    normal: "h-64 md:h-48",
  };
  const baseClass = `${heights[height]} ${paddings[padding]} ${className}`
  return (
    <div className={`relative bg-neutral-950 flex flex-col md:flex-row md:justify-between gap-5 items-center ${baseClass}`}>
        <div className='copyright'>
            <p className='text-xs'>&#169; 2025 NEON_CODEX // ALL_RIGHTS_RESERVED</p>
        </div>
        <div className='text-neutral-600 text-xs space-x-4'>
        {children}
        </div>
        <div className='text-tertiary text-xs'>
            <p>SYSTEM_ONLINE</p>
        </div>
    </div>
  )
}

export default Footer