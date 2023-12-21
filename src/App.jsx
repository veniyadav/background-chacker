import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [image, setimage] = useState('url("https://cdn.pixabay.com/photo/2019/09/05/04/39/dream-job-4453054_1280.jpg")')
  return (
    <>
      <div className=' h-screen w-full fixed duration-1000'
        style={{ backgroundImage: image, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <nav className='flex h-screen w-full my-auto items-center'>
          <div className='max-h-fit w-32 left-4 overflow-hidden relative'>
            <h6 className='justify-center text-center text'>natural background</h6>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg")')} className='m-2'>
              <img src="https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg" alt="fantasy-light-mood-heaven-lovely" className='rounded-2xl fun' />
            </div>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_640.jpg")')} className='m-2 rounded-lg'>
              <img src="https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_640.jpg" alt="Abstract Black Hole stock photo" className='rounded-2xl  fun' />
            </div>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")')} className='m-2'>
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="fantasy-light-mood-heaven-lovely" className='rounded-2xl fun' />
            </div>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg")')} className='m-2'>
              <img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg" alt="fantasy-light-mood-heaven-lovely" className='rounded-2xl fun' />
            </div>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg")')} className='m-2'>
              <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg" alt="fantasy-light-mood-heaven-lovely" className='rounded-2xl fun' />
            </div>
          </div>

          <div className='max-h-fit w-32 right-4 absolute overflow-hidden'>
            <h6 className='justify-center text-center text'>perfect history image</h6>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2016/10/30/20/08/eiffel-tower-1784212_640.jpg")')} className='m-2'>
              <img src="https://cdn.pixabay.com/photo/2016/10/30/20/08/eiffel-tower-1784212_640.jpg" alt="fantasy-light-mood-heaven-lovely" className='rounded-2xl fun'/>
            </div>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2016/08/21/22/35/san-galgano-1610962_640.jpg")')} className='m-2 rounded-lg'>
              <img src="https://cdn.pixabay.com/photo/2016/08/21/22/35/san-galgano-1610962_640.jpg" alt="Abstract Black Hole stock photo" className='rounded-2xl fun' />
            </div>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2019/06/06/10/43/statue-4255695_640.jpg")')} className='m-2'>
              <img src="https://cdn.pixabay.com/photo/2019/06/06/10/43/statue-4255695_640.jpg" alt="fantasy-light-mood-heaven-lovely" className='rounded-2xl fun' />
            </div>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2016/12/25/22/32/gladiator-1931077_640.jpg")')} className='m-2'>
              <img src="https://cdn.pixabay.com/photo/2016/12/25/22/32/gladiator-1931077_640.jpg" alt="fantasy-light-mood-heaven-lovely" className='rounded-2xl fun ' />
            </div>
            <div onClick={() => setimage('url("https://cdn.pixabay.com/photo/2014/07/10/17/18/battleship-389274_640.jpg")')} className='m-2'>
              <img src="https://cdn.pixabay.com/photo/2014/07/10/17/18/battleship-389274_640.jpg" alt="fantasy-light-mood-heaven-lovely" className='rounded-2xl fun ' />
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App
