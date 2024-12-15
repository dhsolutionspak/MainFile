import dynamic from 'next/dynamic';

// Only import the YouTubeBackground component on the client side
const YouTubeBackground = dynamic(() => Promise.resolve(YTBackground), { ssr: false });

const YTBackground = () => (
  <div className="youtube-background-wrapper">
    <iframe
      src="https://www.youtube.com/embed/_r7DhgigrQU?si=1ooCJY7zJfm663sj"
      title="YouTube Video Background"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="youtube-video"
    />
    <style jsx>{`
      .youtube-background-wrapper {
        position: fixed; /* Stay fixed as background */
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        z-index: -1;
      }
      .youtube-video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
    `}</style>
  </div>
);

export default YouTubeBackground;
