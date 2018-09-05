import React from 'react';

import YouTube from 'react-youtube';

class YoutubeTile extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()

  }

  render() {
    const opts = {
      height: '400',
      width: '700',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
const {videoId} = this.props
    return (
      <YouTube
        videoId="8Vec0CE98Ww"
        opts={opts}
        onReady={this.videoOnReady}
        apikey='AIzaSyCmrn81JtWSe-ENQuviFU1pS2iQu94zdsQ'
      />
    )
  }
}
export default YoutubeTile
