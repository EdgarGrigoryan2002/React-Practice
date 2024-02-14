import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function SubCategory({ imgCategory, getCategoryId, setShowTwoModal,setBackFoneTwo }) {
  const [addSubCategory, setAddSubCategory] = useState('')
  const url = " http://localhost:3002/subCategory"

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          minWidth: '425px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "space-around",
          alignItems: 'center',
          background: '#FFFFFF',
          borderRadius: '5px'
        }} className=' h-[180px] '>
          <div style={{ fontSize: '1.5rem' }} className='flex justify-between w-[100%] px-2'>
            <p>{imgCategory}:  Добавить Подкатегория</p>
            <button style={{
              color: '#A4A4A4'
            }} onClick={() => {
              setShowTwoModal(false)
              setBackFoneTwo(false)
            }}>X</button>
          </div>
          <input value={addSubCategory} onChange={(e) => {
            setAddSubCategory(e.target.value)
          }} className='w-[370px] outline-none' style={{borderBottom: '1px solid #C1C1C1'}} type="text" placeholder='Подкатегория' />
          <div>
            <button onClick={() => {
              setShowTwoModal(false)
              if (addSubCategory.trim()) {
                axios.post(url, {
                  SubCategory: addSubCategory,
                  categoryId: getCategoryId
                })
              }
              setBackFoneTwo(false)
            }} style={{
              backgroundColor: '#0008C1',
              color: 'white',
              width: '330px',
              height: '30px',
              borderRadius: '25px',
              fontWeight: 'bold'
            }}>Добавить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubCategory