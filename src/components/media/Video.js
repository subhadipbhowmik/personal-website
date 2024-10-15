// components/Video.js
import React from 'react';

const Video = ({ src, width = '600', height = 'auto', controls = true }) => {
  return (
    <video width={width} height={height} controls={controls}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
