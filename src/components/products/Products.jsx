import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PersonIcon2 from '@mui/icons-material/Person2';
import axios from 'axios';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ClearIcon from '@mui/icons-material/Clear';
;


function Products({ data, dataTwo, setShowAddCategory }) {
    const [colorWomen, setColorWomen] = useState(false)
    const [colorBoy, setColorBoy] = useState(false)
    const [gender, setGender] = useState("")
    const [getcategoryId, setGetCategoryId] = useState(0)
    const [getSubId, setGetSubId] = useState(0)
    const [getSubPrice, setGetSubPrice] = useState(0)//number
    const [subName, setSubName] = useState('')
    const [dataThree, setDataThree] = useState([])
    const [getSubCategoryId, setGetSubCategoryId] = useState(0)
    const [colorId, setColorId] = useState(0)
    const [colorBorder, setColorBorder] = useState(0)
    const [file, setFile] = useState('')
    const [showDisplay, setShowDisplay] = useState(false)
    const [showCategoryImg, setShowCategoryImg] = useState(true)


    function handleChange(e) {
        let files = e.target.files
        let reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = (e) => { setFile(e.target.result) };
        setShowDisplay(true)
    }

    const addAllUrl = "http://localhost:3002/addAllCategory"
    const renderPost = () => axios.get(addAllUrl).then(res => setDataThree(res.data))
    useEffect(() => {
        renderPost()
    }, [])


    return (
        <div style={{ minHeight: '590px', background: '#FFFFFF', borderRadius: '5px' }} className='w-[800px]'>
            <div className='w-[100%] h-[40px] flex justify-between px-5'>
                <div className="text">
                    <p style={{ fontSize: '1.5rem' }}>Добавить Изделия</p>
                </div>
                <div className="">
                    <button onClick={() => {
                        setShowAddCategory(false)
                    }} style={{ fontSize: '1.5rem', color: '#A4A4A4' }}>X</button>
                </div>
            </div>
            <div style={{ minHeight: '170px' }} className='w-[100%] flex gap-5   overflow-hidden px-2'>
                <div style={{ flexDirection: 'column' }} className='w-[60px] h-[120px] mt-6 flex justify-around items-center'>
                    <div className="">
                        <PersonIcon2 onClick={() => {
                            setColorWomen(true)
                            setColorBoy(false)
                            setGender('female')
                            setShowCategoryImg(false)
                        }} style={{
                            fontSize: '2.5rem',
                            cursor: 'pointer',
                            color: colorWomen ? 'blue' : '#A4A4A4',
                            borderRadius: '5px',
                            border: '1px solid #A4A4A4'
                        }} />
                    </div>
                    <div className="">
                        <PersonIcon onClick={() => {
                            setColorBoy(true)
                            setColorWomen(false)
                            setGender('male')
                            setShowCategoryImg(false)
                        }} style={{
                            fontSize: '2.5rem',
                            cursor: 'pointer',
                            color: colorBoy ? 'blue' : '#A4A4A4',
                            borderRadius: '5px',
                            border: '1px solid #A4A4A4'
                        }} />
                    </div>
                </div>
                <div style={{ minHeight: '150px' }} className='w-[900px] flex gap-3 mt-4 flex-wrap '>
                    {data.filter(obj => obj.gender === gender).map((obj) => {
                        return (
                            <div onClick={() => {
                                setColorBorder(obj.id)
                                setGetCategoryId(obj.id)
                            }} className='flex justify-center items-center cursor-pointer' style={{
                                background: '#FFFFFF',
                                border: colorBorder === obj.id ? '2px solid black' : '2px solid #A4A4A4',
                                width: '120px',
                                height: '100px',
                                flexDirection: "column",
                                borderRadius: '10px',
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                            }} key={obj.id}>
                                <img className='w-[50px] h-[50px] cursor-pointer' src={obj.file} alt="" />
                                <p style={{ fontSize: '1.5rem' }} className='text-center cursor-pointer'>{obj.category}</p>
                            </div>
                        )
                    })}
                    {showCategoryImg && <div style={{ minHeight: '150px' }} className='w-[100%] flex gap-3  flex-wrap '>
                        {data.map((obj) => {
                        return (
                            <div onClick={() => {
                                setColorBorder(obj.id)
                                setGetCategoryId(obj.id)
                            }} className='flex justify-center items-center cursor-pointer' style={{
                                background: '#FFFFFF',
                                border: colorBorder === obj.id ? '2px solid black' : '2px solid #A4A4A4',
                                width: '120px',
                                height: '100px',
                                flexDirection: "column",
                                borderRadius: '10px',
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                            }} key={obj.id}>
                                <img className='w-[50px] h-[50px] cursor-pointer' src={obj.file} alt="" />
                                <p style={{ fontSize: '1.5rem' }} className='text-center cursor-pointer'>{obj.category}</p>
                            </div>
                        )
                    })}
                    </div> }
                    
                </div>
            </div>

            <div style={{ minHeight: '70px' }} className='w-[100%]  flex gap-12 px-3 '>
                {dataTwo.filter(obj => obj.categoryId === getcategoryId).map((obj) => {
                    return (
                        <div key={obj.id}>
                            <button onClick={() => {
                                setGetSubCategoryId(obj.id)
                                setGetSubId(obj.id)
                                setColorId(obj.id)
                            }} style={{
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                minWidth: "100px",
                                height: '50px',
                                borderBottom: colorId === obj.id ? '7px solid blue' : '7px solid #FFFFFF'
                            }}>{obj.SubCategory}</button>
                        </div>
                    )
                })}
            </div>

            <div style={{ minHeight: '250px' }} className='w-[100%] flex justify-around '>
                <div style={{ border: '2px solid rgba(148, 144, 144, 0.459)', flexDirection: 'column' }} className=' flex items-center justify-center w-[300px] h-[250px] '>
                    <input type='file' id='nkar' style={{ display: 'none' }} onChange={handleChange} />
                    <label htmlFor="nkar">
                        <div style={{
                            height: '150px',
                            cursor: 'pointer',
                            flexDirection: 'column',
                            color: 'white',
                            background: "#d3d3d3",
                            borderRadius: '10px'
                        }} className='w-[260px] flex  items-center  justify-center'>
                            <img style={{
                                display: showDisplay ? 'block' : 'none',
                                border: '2px solid gray',
                            }} src={file} className='w-[100%] h-[100%]' />
                            <PermMediaIcon style={{
                                fontSize: '1.7rem',
                                display: showDisplay ? 'none' : 'block',

                            }} />
                            <p style={{
                                fontSize: '1.3rem',
                                display: showDisplay ? 'none' : 'block'
                            }}>Загрузить</p>
                            <p style={{
                                fontSize: '1.3rem',
                                display: showDisplay ? 'none' : 'block'
                            }}>Фото</p>
                        </div>
                    </label>
                    <div style={{ minHeight: '80px' }} className='w-[100%] px-1 flex-wrap flex items-center gap-5'>
                        {dataThree.filter(val => val.subId === getSubCategoryId).map((obj) => {
                            return (
                                <div style={{
                                    position: 'relative',
                                    zIndex: 20
                                }} key={obj.id}>
                                    <img style={{
                                        borderRadius: '5px'
                                    }} className='w-[50px] h-[50px]' src={obj.img} alt="" />
                                    <ClearIcon onClick={() => {
                                        axios.delete(addAllUrl + "/" + obj.id).then(() => renderPost())
                                    }} style={{
                                        position: 'absolute',
                                        bottom: '36px',
                                        left: '40px',
                                        cursor: 'pointer',
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '15px',
                                        background: '#FFFFFF',
                                        boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)'
                                    }} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <p className='text-center' style={{ fontSize: '1.5rem' }}>Артикул</p>
                    <input style={{
                        borderBottom: '2px solid #C1C1C1',
                        outline: 'none'
                    }} value={subName} onChange={(e) => setSubName(e.target.value)} type="text" className='w-[180px] h-[40px]' />
                </div>
                <div >
                    <p style={{ fontSize: '1.5rem', color: 'gray' }} className='text-center '>Цена</p>
                    <input style={{
                        borderBottom: '2px solid #C1C1C1',
                        outline: 'none'
                    }}  onChange={(e) => setGetSubPrice(Number(e.target.value))} type="number" className='w-[180px] h-[40px]' />
                </div>
            </div>
            <div className='w-[96%] flex justify-end'>
                <button onClick={() => {
                    if (subName.trim() && file.trim()) {
                        axios.post(addAllUrl, {
                            subId: getSubId,
                            img: file,
                            price: getSubPrice,
                            subName
                        })
                    }

                    setGetSubPrice("")
                    setShowAddCategory(false)
                }} style={{
                    width: "160px",
                    height: "40px",
                    color: 'white',
                    background: 'blue',
                    borderRadius: '10px'
                }}>Добавить</button>
            </div>
        </div>
    )
}

export default Products