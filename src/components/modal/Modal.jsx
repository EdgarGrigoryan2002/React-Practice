import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PersonIcon2 from '@mui/icons-material/Person2';
import { Button } from '@mui/material'
import axios from 'axios';
import PermMediaIcon from '@mui/icons-material/PermMedia';


function Modal({ showModal, setShowModal, backFone, setBackFone}) {

  const [category, setCategory] = useState('')
  const [gender, setGender] = useState('')
  const [colorBoy, setColorBoy] = useState(false)
  const [colorWomen, setColorWomen] = useState(false)
  const [file, setFile] = useState('')
  const [showDisplay, setShowDisplay] = useState(false)

  function handleChange(e) {
   let files = e.target.files
   let reader = new FileReader()
   reader.readAsDataURL(files[0])
   reader.onload = (e) =>{setFile(e.target.result)};
   setShowDisplay(true)

}


  const url = "http://localhost:3002/category"


 
  return (
    <div style={{minHeight: '380px'}} className='w-[400px] flex justify-end mt-1'>
      <div style={{ borderRadius: '5px', backgroundColor: '#FFFFFF', minHeight: '370px' }} className="w-[300px]  overflow-hidden ">
        <div style={{ fontSize: '1.5rem' }} className='flex justify-around'>
          <p>Добавить Категория</p>
          <button onClick={() => {
            setShowModal(false)
            setBackFone(false)
          }} style={{ fontSize: '1.5rem' }} className='float-right '>X</button>
        </div>
        <div className=" flex mt-10 justify-around">
          <div style={{border: '1px solid #A4A4A4', borderRadius: '5px'}} className='w-[100px] cursor-pointer' onClick={() => {
            setGender('female')
            setColorBoy(!colorBoy)
            setColorWomen(false)
            }}>
            <PersonIcon2 style={{ color: colorBoy ? "blue" : '#A4A4A4' }} />Женский
          </div>
          <div style={{border: '1px solid #A4A4A4', borderRadius: '5px'}} className='w-[100px] cursor-pointer' onClick={() => {
            setGender('male')
            setColorWomen(!colorWomen)
              setColorBoy(false)
            }}>
            <PersonIcon  style={{ color: colorWomen ? "blue" : '#A4A4A4' }} />Мужской
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <input style={{
            outline: 'none',
            borderBottom: '2px solid  #C1C1C1'
          }} type="text" value={category} onChange={(e) => setCategory(e.target.value)} className='mt-6 w-[220px] h-[30px]' placeholder='Категория' />
          <input type='file' id='img' style={{display: 'none'}} name='file'  onChange={handleChange} className='mt-5 w-[200px] h-[50px]' />
           <label htmlFor="img">
           <div style={{
              width: '220px',
              height: '130px',
              border: '2px solid #C1C1C1',
              flexDirection: 'column',
              background: '#d3d3d3'  
            }} className='flex justify-center items-center mt-5 cursor-pointer'>
              <PermMediaIcon style={{
                fontSize: '1.7rem',
                display: showDisplay ? 'none' : 'block',
                color: 'white'
              }} />
              <p style={{
                fontSize: '1.3rem',
                display: showDisplay ? 'none' : 'block',
                color: 'white'
                }}>Загрузить Фото</p>
            <img style={{
              width: '100%',
              height: '100%',
              textAlign: 'center',
              display: showDisplay ? 'block' : 'none'
              }} src={file}/>
            </div>
           </label>
        </div>
        <div className='flex justify-center'>
          <Button onClick={() => {
            if (category.trim() && gender.trim() && file.trim()) {
              axios.post(url, {
                category,
               file,
                gender
              })
            }
            setCategory("")
            setShowModal(false)
            setBackFone(false)
          }} style={{
            width: '250px',
            height: '30px',
            color: 'white',
            background: 'blue',
            borderRadius: "25px",
            marginTop: '20px',
            fontWeight: 'bold',
          }}>Добавить</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal