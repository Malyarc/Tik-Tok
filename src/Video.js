import React, { useRef, useState } from "react";
import './Video.css';
import VideoFooter from "./VideoFooter"


function Video() {
  const [playing, setPlay] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlay(false)
    } else {
      videoRef.current.play();
      setPlay(true)
    }
  }

  return (
    <div className="video">
      <video
              className="video_player"
              loop
              ref={videoRef}
              onClick={onVideoPress}
              src="https://v16m.tiktokcdn.com/bb3ec2981273b6a83f03cc1cf2975e9f/5f2b7fae/video/tos/useast2a/tos-useast2a-ve-0068c004/8dbf03d2c4ac4637a0f0db382b361626/?a=1233&br=2614&bt=1307&cr=0&cs=0&dr=0&ds=3&er=&l=20200804035734010189072034030300EE&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2hlNHZucnQ5dDMzNjczM0ApaGk4ZjQ8aDs6N2g5NDhnOWc0MGdgMi4uMmNfLS0vMTZzc2FgYGBfNTA0L2FjNTQ0MV86Yw%3D%3D&vl=&vr="></video>
      <VideoFooter />
      {/* <VideoSideBar /> */}
    </div>
  )
}

export default Video;