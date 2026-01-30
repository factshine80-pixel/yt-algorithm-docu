import {Composition, AbsoluteFill} from 'remotion';

export const MainVideo = () => {
  return <AbsoluteFill style={{backgroundColor: 'black'}} />;
};

export const RemotionRoot = () => {
  return (
    <Composition
      id="MainVideo"
      component={MainVideo}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
