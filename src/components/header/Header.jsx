import SearchIcon from '@mui/icons-material/Search';


function Header({setSearch, setSearchCategory, setShow}) {
  


  return (
    <div style={{ background: '#FFFFFF', minHeight: '150px', flexDirection: 'column' }} className='w-[100%] flex items-center justify-center'>
      <div onClick={() => {
        setSearchCategory(true)
        setShow(false)
      }} style={{
        backgroundColor: '#E8EAEB',
        borderRadius: '10px',
        width: '340px',
        height: '42px',
        borderRadius: '50px'
      }} className=' flex items-center gap-1 justify-center '>
        <div>
          <input onChange={(e)=> setSearch(e.target.value)} style={{
            width: '250px',
            height: '30px',
            background: 'none',
            outline: 'none'
          }} type='search' placeholder='Поиск' />
        </div>
        <div>
          <SearchIcon style={{
            background: 'blue',
            color: 'white',
            fontSize: '2rem',
            borderRadius: "25px",
            cursor: 'pointer'
          }} />
        </div>
      </div>
     
    </div>
  )
}

export default Header