import React, { useState } from 'react'

export default function HiddenAnnex() {
  const [showAnnex, setShowAnnex] = useState();
  return (
    <>
      <div className={`slider-annex ${showAnnex && "slider-annex-active"}`}
        onClick={() => setShowAnnex(!showAnnex)}>
        <div className='contenido'>

        </div>
      </div>
    </>
  )
}
