import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets/assets'
import AlbumItems from './AlbumItems'
import SongItems from './SongItems'

const DisplayHome = () => {
  return (
    <>
        <Navbar/>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-[21]'>Your top Playlist</h1>
          <div className='flex overflow-auto'>
            {albumsData.map((item,index)=>(<AlbumItems key={index} 
            name={item.name} 
            desc={item.desc} 
            id={item.id} 
            image={item.image}/>))}
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-[21]'>Recently Played</h1>
          <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongItems key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
            />))}
          </div>
        </div>
    </>
  )
}

export default DisplayHome

//duplicate varama iruka index ah key ah pass panniruvom
//item name la iruka oru oru object ah name desc ellamey vangikalom
//aprm adhukulla AlbumItems ah mount panniranum.... so idhudhan props anga parameter ah 
// anga props kudutha maari inga attribute ah key and values ah pass panniralom