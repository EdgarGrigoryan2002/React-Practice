import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PersonIcon2 from '@mui/icons-material/Person2';
import Category from '../category/Category';
import axios from 'axios';
import { useEffect } from 'react';
import SubCategory from '../subCategory/SubCategory';
import Products from '../products/Products';
import { Slider } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Main({search, searchcategory, show ,setShow, setSearchCategory}) {
  const url = "http://localhost:3002/category"
  const [data, setData] = useState([])

  const subCatogoryUrl = "http://localhost:3002/subCategory"
  const [dataTwo, setDataTwo] = useState([])

  const addAllUrl = "http://localhost:3002/addAllCategory"
  const [dataThree, setDataThree] = useState([])
  const [colorBoy, setColorBoy] = useState(false)
  const [colorWomen, setColorWomen] = useState(false)
  const [showTwoModal, setShowTwoModal] = useState(false)
  const [imgCategory, setImgCategory] = useState([])
  const [getCategoryId, setGetCategoryId] = useState(0)
  const [gender, setGender] = useState('')
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [getSubCategoryId, setGetSubCategoryId] = useState(0)
  const [colorId, setColorId] = useState(0)
  const [colorBorder, setColorBorder] = useState(0)
  const [price, setPrice] = useState(0)

  const [showSecond, setShowSecond] = useState(false)
  const [backFone, setBackFone] = useState(false)
  const [backFoneTwo, setBackFoneTwo] = useState(false)
  const [checkId, setCheckId] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [secondPrice, setSecondPrice] = useState(0)
  const [showFiltrPrice, setShowFiltrPrice] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showData, setShowData] = useState(true)


  useEffect(() => {
    axios.get(url).then((res) => setData(res.data))
  }, [data])


  useEffect(() => {
    axios.get(subCatogoryUrl).then((res) => setDataTwo(res.data))
  }, [dataTwo])


  useEffect(() => {
    axios.get(addAllUrl).then((res) => setDataThree(res.data))
  }, [dataThree])


  return (
    <div style={{
      minHeight: '225vh',
      background: backFone || backFoneTwo ? `rgb(189, 185, 185)` : '',
    }} className='w-[100%]'>
      <div style={{
        position: 'relative',
        zIndex: 100
      }} className='flex w-[100%] h-[420px] px-1 flex-wrap  '>
        <div className='flex flex-col justify-between items-center mt-2 w-[100px] h-[100px]'>
          <div style={{
            background: 'white',
            borderRadius: '5px',
            display: 'flex',
            opacity: backFone || backFoneTwo ? '.1' : '.8',
          }} className=" flex justify-center">
            <PersonIcon2 onClick={() => {
              setColorBoy(true)
              setColorWomen(false)
              setGender("female")
              setShowData(false)
            }} className='cursor-pointer'
              style={{ fontSize: '2.5rem', color: colorBoy ? "blue" : 'black' }} />
          </div>
          <div style={{
            background: 'white',
            borderRadius: '5px',
            opacity: backFone || backFoneTwo ? '.1' : '.8',
          }} className="flex justify-center">
            <PersonIcon onClick={() => {
              setColorWomen(true)
              setColorBoy(false)
              setGender("male")
              setShowData(false)
            }} className='cursor-pointer' style={{ fontSize: '2.5rem', color: colorWomen ? "blue" : 'black' }} />
          </div>
        </div>
        <div style={{
          minHeight: '110px',
          opacity: backFone ? '.1' : ''
        }} className='w-[900px] flex gap-2 flex-wrap overflow-hidden '>
          {showData && <div style={{
          minHeight: '110px',
          opacity: backFone ? '.1' : ''
        }} className='w-[900px] flex gap-2 flex-wrap overflow-hidden '>
            {data.map((obj) => {
            return (
              <div key={obj.id} onClick={() => {
                setColorBorder(obj.id)
                setImgCategory(obj.category)
                setGetCategoryId(obj.id)
              }} className='flex justify-center items-center mt-3 cursor-pointer' style={{
                background: '#FFFFFF',
                border: colorBorder === obj.id ? '2px solid black' : '2px solid #A4A4A4',
                width: '140px',
                height: '110px',
                flexDirection: "column",
                borderRadius: '10px',
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                opacity: checkId && getCategoryId == obj.id ? '1' : '.8'
              }}>
                <img className='w-[50px] h-[50px] cursor-pointer' src={obj.file} alt="" />
                <p style={{ fontSize: '1.5rem' }} className='text-center cursor-pointer'>{obj.category}</p>
              </div>
            )
          })}
          </div> }
          {data.filter(obj => obj.gender === gender).map((obj) => {
            return (
              <div key={obj.id} onClick={() => {
                setColorBorder(obj.id)
                setImgCategory(obj.category)
                setGetCategoryId(obj.id)
              }} className='flex justify-center items-center mt-3 cursor-pointer' style={{
                background: '#FFFFFF',
                border: colorBorder === obj.id ? '2px solid black' : '2px solid #A4A4A4',
                width: '140px',
                height: '110px',
                flexDirection: "column",
                borderRadius: '10px',
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                opacity: checkId && getCategoryId == obj.id ? '1' : '.8'
              }}>
                <img className='w-[50px] h-[50px] cursor-pointer' src={obj.file} alt="" />
                <p style={{ fontSize: '1.5rem' }} className='text-center cursor-pointer'>{obj.category}</p>
              </div>
            )
          })}
        </div>
        <div style={{
          position: 'absolute',
          left: '900px',
          top: '10px',
          opacity: backFoneTwo ? '0.2' : ''
        }} >
          <Category backFone={backFone} setBackFone={setBackFone} />
        </div>
        <div style={{
          minHeight: '100px'
        }} className='w-[100%] overflow-hidden flex gap-10 px-2 '>
          <div style={{
            opacity: backFone || backFoneTwo ? '.1' : '',
          }} className=' h-[133px]'>
            <ArrowBackIosIcon onClick={() =>{ 
              setShowButton(!showButton)
              setShowFilter(false)
              setShow(true)
              setSearchCategory(false)
              setShowSecond(false)
            }} style={{
              width: '25px',
              height: '50px',
              background: '#0008C1',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
              borderRadius: '0px 5px',
              color: 'white',
              paddingLeft: '5px',
              fontSize: '2rem',
              cursor: 'pointer'
            }} />
          </div>
          {dataTwo.filter(obj => obj.categoryId === getCategoryId).map((obj) => {
            return (
              <div key={obj.id} style={{
                minWidth: "100px",
                height: '50px',
                borderRadius: '10px',
                opacity: backFone || backFoneTwo ? '.1' : ''
              }}>
                <button onClick={() => {
                  setGetSubCategoryId(obj.id)
                  setColorId(obj.id)
                  setShow(false)
                  setShowSecond(true)
                  setShowFiltrPrice(false)
                }} style={{
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  borderBottom: colorId === obj.id ? '7px solid blue' : '7px solid #FFFFFF'
                }}>{obj.SubCategory}</button>
              </div>
            )
          })}
          <div style={{
            opacity: backFone ? '.1' : ''
          }}>
            <button style={{
              background: '#FFFFFF',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
              borderRadius: '5px',
              fontSize: '1.5rem'
            }} onClick={() => {
              setShowTwoModal(true)
              setBackFoneTwo(true)
              setCheckId(true)
            }} className='w-[48px] h-[40px] mt-1'>+</button>
            <div style={{ position: 'absolute', top: '255px' }}>
              {showTwoModal && <SubCategory setBackFoneTwo={setBackFoneTwo}
                imgCategory={imgCategory} getCategoryId={getCategoryId}
                setShowTwoModal={setShowTwoModal} />}
            </div>
          </div>
        </div>
      </div>

      <div style={{ minHeight: '250px' }} className='w-[100%] overflow-hidden  flex gap-10 flex-wrap px-4'>
        {show && <div style={{
          opacity: backFone || backFoneTwo ? '.1' : '',
        }} className='w-[100%] h-[100%] overflow-hidden  flex gap-3 flex-wrap px-4'>
          {showFilter && <div style={{ flexDirection: 'column' }} className='w-[250px] h-[100px] px-3 flex '>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }} className='text-center'>Цена</p>
            </div>
            <div className='w-[100%] flex'>
              <Slider onChange={(e) => {
                setSecondPrice(e.target.value)
                setShowFiltrPrice(true)
                setShow(false)
                setShowSecond(false)
              }} min={0} max={3400} getAriaLabel={() => 'Minimum distance shift'} valueLabelDisplay="auto" disableSwap />
              <Slider min={3400} max={20000} onChange={(e) => {
                setPrice(e.target.value)
                setShow(true)
                setShowSecond(false)
                setShowFiltrPrice(false)
              }} getAriaLabel={() => 'Minimum distance shift'} valueLabelDisplay="auto" disableSwap />
            </div>
            <div className='flex'>
              <button style={{
                borderRadius: "10px",
                border: '2px solid gray'
              }} className='w-[70px] h-[40px]'>От</button>
              <p style={{
                fontSize: '1.5rem',
                marginLeft: '15px'
              }}>-</p>
              <button style={{
                borderRadius: "10px",
                border: '2px solid gray',
                marginLeft: '20px'
              }} className='w-[70px] h-[40px]'>До</button>
            </div>
          </div>}
          {showButton && <div onClick={() => setShowFilter(!showFilter)} style={{
            width: '50px',
            height: '180px',
            backgroundColor: '#0008c1',
            borderRadius: '0px 15px 15px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer'

          }}>
            <FilterAltIcon style={{
              color: 'white',
              fontSize: '35px'
            }}></FilterAltIcon>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '15px',
              color: 'white'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '15px',
                color: 'white'
              }}>
                <span>Ф</span>
                <span>и</span>
                <span>л</span>
                <span>ь</span>
                <span>т</span>
                <span>р</span>
              </div>
              <ChevronRightIcon></ChevronRightIcon>
            </div>
          </div>}

          {dataThree.filter(obj => obj.price >= price).map((obj) => {
            return (
              <div style={{
                width: '190px',
                height: '170px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#FFFFFF',
                borderRadius: '5px'
              }} key={obj.id}>
                <img className='w-[174px] h-[114px]' src={obj.img} alt="" />
                <div className='flex justify-around w-[100%]'>
                  <p style={{ fontSize: '1.3rem' }}>{obj.subName}</p>
                  <p style={{ fontSize: '1.3rem' }}>{obj.price}$</p>
                </div>
              </div>
            )
          })}</div>}

        {showFiltrPrice && <div style={{
          opacity: backFone || backFoneTwo ? '.1' : '',
        }} className='w-[100%] h-[100%] overflow-hidden  flex gap-3 flex-wrap px-4'>
          {showFilter && <div style={{ flexDirection: 'column' }} className='w-[250px] h-[100px] px-3 flex '>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }} className='text-center'>Цена</p>
            </div>
            <div className='w-[100%] flex'>
              <Slider onChange={(e) => {
                setSecondPrice(e.target.value)
                setShowFiltrPrice(true)
                setShow(false)
                setShowSecond(false)
              }} min={0} max={3400} getAriaLabel={() => 'Minimum distance shift'} valueLabelDisplay="auto" disableSwap />
              <Slider min={3400} max={20000} onChange={(e) => {
                setPrice(e.target.value)
                setShow(true)
                setShowSecond(false)
                setShowFiltrPrice(false)
              }} getAriaLabel={() => 'Minimum distance shift'} valueLabelDisplay="auto" disableSwap />
            </div>
            <div className='flex'>
              <button style={{
                borderRadius: "10px",
                border: '2px solid gray'
              }} className='w-[70px] h-[40px]'>От</button>
              <p style={{
                fontSize: '1.5rem',
                marginLeft: '15px'
              }}>-</p>
              <button style={{
                borderRadius: "10px",
                border: '2px solid gray',
                marginLeft: '20px'
              }} className='w-[70px] h-[40px]'>До</button>
            </div>
          </div>}
          {showButton && <div onClick={() => setShowFilter(!showFilter)} style={{
            width: '50px',
            height: '180px',
            backgroundColor: '#0008c1',
            borderRadius: '0px 15px 15px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer'

          }}>
            <FilterAltIcon style={{
              color: 'white',
              fontSize: '35px'
            }}></FilterAltIcon>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '15px',
              color: 'white'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '15px',
                color: 'white'
              }}>
                <span>Ф</span>
                <span>и</span>
                <span>л</span>
                <span>ь</span>
                <span>т</span>
                <span>р</span>
              </div>
              <ChevronRightIcon></ChevronRightIcon>
            </div>
          </div>}
          {dataThree.filter(obj => obj.price <= secondPrice).map((obj) => {
            return (
              <div style={{
                width: '190px',
                height: '170px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#FFFFFF',
                borderRadius: '5px'
              }} key={obj.id}>
                <img className='w-[174px] h-[114px]' src={obj.img} alt="" />
                <div className='flex justify-around w-[100%]'>
                  <p style={{ fontSize: '1.3rem' }}>{obj.subName}</p>
                  <p style={{ fontSize: '1.3rem' }}>{obj.price}$</p>
                </div>
              </div>
            )
          })}</div>}

        {showSecond && <div style={{
          opacity: backFone || backFoneTwo ? '.1' : '',
        }} className='w-[100%] h-[100%] overflow-hidden  flex gap-3 flex-wrap px-4'>
          
         
          {dataThree.filter(val => val.subId === getSubCategoryId).map((obj) => {
            return (
              <div style={{
                width: '190px',
                height: '170px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#FFFFFF',
                borderRadius: '5px'
              }} key={obj.id}>
                <img className='w-[174px] h-[114px]' src={obj.img} alt="" />
                <div className='flex justify-around w-[100%]'>
                  <p style={{ fontSize: '1.3rem' }}>{obj.subName}</p>
                  <p style={{ fontSize: '1.3rem' }}>{obj.price}$</p>
                </div>
              </div>
            )
          })}</div>}
          {searchcategory && <div style={{
            minHeight: '180px',
            opacity: backFone || backFoneTwo ? '.1' : '',
            }} className='flex gap-3  flex-wrap w-[100%] '>
            {dataThree.filter(obj => search.toLowerCase() === ""  ? "" : obj.subName.toLowerCase().includes(search) || obj.subName.toUpperCase().includes(search)).map((obj) => {
        return (
          <div style={{
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FFFFFF',
            borderRadius: '5px'
          }} key={obj.id}>
            <img className='w-[174px] h-[134px]' src={obj.img} alt="" />
            <div className='flex justify-around w-[100%]'>
              <p style={{ fontSize: '1.3rem' }}>{obj.subName}</p>
              <p style={{ fontSize: '1.3rem' }}>{obj.price}$</p>
            </div>
          </div>
        )
      })}

          </div> }
      </div>
      <div className='w-[100%] flex justify-end'>
        <button onClick={() => {
          setShowAddCategory(!showAddCategory)
        }} className='w-[70px] h-[40px] border-2'>+</button>
      </div>

      {showAddCategory && <div style={{
        display: 'flex',
        justifyContent: 'end',
        minHeight: '550px',
        marginTop: '10px'
      }} className='w-[97%] '>
        <Products data={data} dataTwo={dataTwo} setShowAddCategory={setShowAddCategory} />
      </div>}

    </div>
  )
}

export default Main