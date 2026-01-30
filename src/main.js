import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const MainVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
        fontFamily: 'Arial'
      }}
    >
      {frame < 100 && 'YouTube Algorithm'}
      {frame >= 100 && frame < 200 && 'Videos ko kaise push karta hai?'}
      {frame >= 200 && 'Watch Time, CTR, Retention'}
    </AbsoluteFill>
  );
};
