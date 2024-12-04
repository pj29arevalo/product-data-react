import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://gtecombv.com/" target="_blank" rel="noopener noreferrer">
          GT Ecom Analytics
        </a>
        <span className="ms-1">&copy; 2024 GT ECM.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Created by</span>
        <a href="https://elpidioarevalojr.com" target="_blank" rel="noopener noreferrer">
          Peejay Arevalo
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
