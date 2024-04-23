import React, { useEffect, useState } from 'react'
import "./Yt.css"

function YT() {
  const [youTubeVideos, setVideos] = useState([])
  useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyD6if0p6yNyMNwVKHTH81mkIMkVC7FnDi8&channelId=UCE_M8A5yxnLfW0KghEeajjw& part=snippet,id&order=date&maxResults=12"
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.item)
      })
  }, []);




  return (
    <>
      <section className='youTubewrapper'>
        <h1>Latest videos</h1>
        <div className='row col-12 justify-content-center'>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>1</h3></div>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>2</h3></div>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>3</h3></div>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>4</h3></div>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>5</h3></div>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>6</h3></div>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>7</h3></div>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>8</h3></div>
          <div className='shadowBorder col-12 col-md-4 col-lg-3'><h3>9</h3></div>

        </div>
      </section>

    </>
  )
}

export default YT
