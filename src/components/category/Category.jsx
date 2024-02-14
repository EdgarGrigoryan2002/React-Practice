import { Button } from '@mui/material'
import React from 'react'
import Modal from '../modal/Modal'
import { useState } from 'react'
function Category({ backFone, setBackFone}) {

  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ flexDirection: 'column' }} className='flex w-[400px] '>
      <div>
        <Button style={{
          background: "#FFFFFF",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          borderRadius: "5px",
          color: '#A4A4A4',
          fontSize: '2rem',
        }} onClick={() => {
          setShowModal(true)
          setBackFone(true)
        }}  className='float-right w-[50px] h-[110px]'>+</Button>
      </div>
      <div>
        {showModal && <Modal backFone={backFone} setBackFone={setBackFone}
          showModal={showModal} setShowModal={setShowModal} />}
      </div>
    </div>
  )
}

export default Category