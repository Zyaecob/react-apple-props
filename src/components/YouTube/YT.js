import React, { useEffect, useState } from "react";
import "./Yt.css";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&channelType=any&maxResults=10&order=date&key=AIzaSyD6if0p6yNyMNwVKHTH81mkIMkVC7FnDi8

function YT() {
  const [youTubeVideos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&channelType=any&maxResults=10&order=date&key=AIzaSyBqwr6Z3buat3FnQIenB2wRK8YqOcEAPaU"
    )
      .then((res) => res.json())
      .then((data) => {
        const youTubeVideosData = data.items;
        setVideos(youTubeVideosData);
      });
  }, []);
  console.log(youTubeVideos);

  return (
    <>
      <section className="youTubeSection allVideosWraper">
        <div className="container">
          <div className="row youTubeVideosWrapper">
            <div className="title-wraper col-12">
              <br />
              <h1>Latest videos</h1>
              <br />
            </div>
            {youTubeVideos.map((singleVideo) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div className=" col-sm-12 col-md-6 col-md-4">
                  <div className="singleVideoWraper shadowBorder">
                    <div className="Thumbnail">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          style={{ width: "100%" }}
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt={singleVideo.snippet.title}
                        />
                      </a>
                    </div>

                    <div className="infoWraper">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <div className="Title">{singleVideo.snippet.title}</div>
                      </a>
                      <div className="Description">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>

          {/* <div className="container-fluid">
            <div className="row youTubeVideosWrapper">
              <div className=" col-sm-12 col-md-6">
                <div className="singleVideoWraper shadowBorder">
                  <h3>1</h3>
                </div>
              </div>
              <div className=" col-sm-12 col-md-6">
                <div className="singleVideoWraper shadowBorder">
                  <h3>2</h3>
                </div>
              </div>
            </div>
           end of logic 
          </div> */}
        </div>
      </section>
    </>
  );
}

export default YT;
