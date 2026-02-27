import React, { useState, useRef, useEffect } from 'react'
import { Container } from '../../../../components/Layout'
import candeur from '../../../../assets/candeur.jpg'
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { FaChartLine, FaHeart, FaRupeeSign, FaRegHeart } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight, FiChevronUp, FiVolume2, FiVolumeX, FiRotateCw } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';
import { premiumreelVideos } from '../../../../db/index';
import devkunj from '../../../../assets/reels/Realestate/devkunj.mp4'
import siri from '../../../../assets/Siri.gif'


// CSS styles for arrow and configuration containers
const styles = `
  .arrow-container {
    z-index: 20;
  }
  .configuration-container {
    overflow: hidden;
  }
  .fre__outerwrap {
    background-color: #3980db;
    padding: 5px 5px 5px;
    font-size: 8px;
    font-weight: 700;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    margin-left: 2px;
    margin-right: 1px;
    position: relative;
    overflow: hidden;
  }
  .fre__outerwrap .fre__innerwrap {
    width: 115%;
    position: absolute;
    height: 100%;
    top: 0;
    left: -2px;
    transform: skew(150deg);
    background: linear-gradient(to right,transparent 40%,#00acf7 10%,transparent 50%);
    background-size: 200% 200%;
    background-repeat: no-repeat;
    animation-name: fre__backplay;
    animation-duration: 3s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    content: '';
    z-index: 1;
  }
  @keyframes fre__backplay {
    0%,100% {
      background-position: 100% 100%;
    }
    50% {
      background-position: 0 0;
    }
  }
`;

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentReel, setCurrentReel] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const [footerHovered, setFooterHovered] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);

  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
    if (!isPlaying && videoRef.current) {
      videoRef.current.play();
    } else if (isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMuteUnmute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleNextReel = () => {
    setIsPlaying(false);
    setCurrentReel((prev) => (prev + 1) % premiumreelVideos.length);
  };

  const handlePrevReel = () => {
    setIsPlaying(false);
    setCurrentReel((prev) => (prev - 1 + premiumreelVideos.length) % premiumreelVideos.length);
  };

  const current = premiumreelVideos[currentReel];
  const isFirst = currentReel === 0;

  useEffect(() => {
    setProgress(0);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentReel]);

  useEffect(() => {
    if (!isPlaying) return;
    if (currentReel === 0) {
      // Animate progress for thumbnail (simulate 5s duration)
      let start = Date.now();
      const duration = 5000;
      const animate = () => {
        if (!isPlaying || currentReel !== 0) return;
        const elapsed = Date.now() - start;
        setProgress(Math.min((elapsed / duration) * 100, 100));
        if (elapsed < duration) {
          requestAnimationFrame(animate);
        } else {
          setIsPlaying(false);
          setProgress(100);
          handleNextReel();
        }
      };
      animate();
      return () => { };
    } else {
      // For video reels, progress is handled by timeupdate event
    }
  }, [isPlaying, currentReel]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(100);
    handleNextReel();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'ArrowLeft') {
        handlePrevReel();
      } else if (e.code === 'ArrowRight') {
        handleNextReel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (currentReel === 5) {
      setShowHighlights(true);
    } else {
      setShowHighlights(false);
    }
  }, [currentReel]);

  return (
    <div className='relative bg-green-900 lg:min-h-screen overflow-hidden'>
      <style>{styles}</style>
      {/* Backdrops */}
      <div
        className="absolute rounded-full opacity-70"
        style={{
          height: '300px',
          width: '360px',
          right: '0px',
          top: '-120px',
          filter: 'blur(88px)',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'hsl(158deg 80% 65%)',
          transform: 'rotate(180deg)',
        }}
      />
      <div
        className="absolute rounded-full opacity-70"
        style={{
          height: '300px',
          width: '360px',
          bottom: '-120px',
          left: '0px',
          filter: 'blur(88px)',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'hsl(158deg 80% 65%)',
        }}
      />
      <div
        className="absolute rounded-full opacity-70"
        style={{
          height: '300px',
          width: '360px',
          bottom: '-120px',
          right: '0px',
          filter: 'blur(88px)',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'hsl(158deg 80% 65%)',
        }}
      />

      <Container className="relative z-10">
        <div className="flex w-full flex-col lg:flex-row ">
          <div className="lg:w-1/2 flex flex-col justify-center ">
            <div className='mt-10 lg:absolute lg:top-[5%]'>
              {/* <img src={candeur} alt="" className='lg:h-30 lg:w-80 object-cover' /> */}
              <div className='text-white text-5xl py-1 font-bold'>Devkunj 80</div>
              <div className='text-white py-2'>
                <span className='border-r border-white pr-2 mr-2'>3 BHK Apartment </span>
                <span>₹ 1.21 - 1.57 Cr</span>
              </div>
              <div className="NLProjectInfoStyle__locationInfo section_header_semiBold flex flex-col lg:flex-row gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-white text-lg" />
                  <span className="max-w-full truncate text-white">Vaishnodevi Circle, Ahmedabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegClock className="text-white text-lg" />
                  <span className="max-w-full truncate text-white">Completion in Dec, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdVerified className="text-white text-lg" />
                  <span className="text-white">RERA</span>
                </div>
              </div>
              {/* New Launch Widget */}
              <div className='flex gap-8'>
                <div className="relative mt-2 lg:max-w-sm NLBenefitsStyle__newLaunchWidget lg:mt-6">
                  {/* Black header on top */}
                  <div className="NLBenefitsStyle__newLaunchHead flex items-center z-10 bg-black px-4 lg:pl-11 lg:pr-5 py-2 rounded-full overflow-hidden mb-0 relative" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Icon + shimmer */}
                    <div className="flex items-center">
                      <div className="relative w-6 h-6 mr-3">
                        <img src={"https://static.99acres.com/universalxid/img/NLBlackAnim.gif"} alt="New Launch" className="w-6 h-6 rounded-full object-cover" />
                      </div>
                      <div className="NLBenefitsStyle__NLHeadingAnim">
                        <span className="list_header_bold text-lg font-bold text-white"><em>NEW LAUNCH</em></span>
                        <span className="body_med text-gray-200 ml-2">Project</span>
                      </div>
                    </div>
                    <a href="#" className="caption_strong_medium_semi text-blue-400 hover:underline text-sm font-semibold ml-auto"><span>Learn more</span></a>
                  </div>

                  {/* Blue widget below, overlapping header */}
                  <div className="bg-black/20 rounded-xl shadow-lg w-full p-4 -mt-6" style={{ zIndex: 1, position: 'relative' }}>
                    <div className="flex justify-between lg:gap-4 NLBenefitsStyle__newLaunchBenifits pt-4">
                      <div className="flex flex-col items-center" style={{ width: 'auto' }}>
                        <div className="NLBenefitsStyle__iconWrapNLB flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mb-1">
                          <FaChartLine className="text-green-700 text-xl" />
                        </div>
                        <div className="caption_strong_medium_semi text-xs text-white text-center">High price appreciation</div>
                      </div>
                      <div className="flex flex-col items-center" style={{ width: 'auto' }}>
                        <div className="NLBenefitsStyle__iconWrapNLB flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full mb-1">
                          <FaHeart className="text-yellow-500 text-xl" />
                        </div>
                        <div className="caption_strong_medium_semi text-xs text-white text-center">Units of choice</div>
                      </div>
                      <div className="flex flex-col items-center" style={{ width: 153 }}>
                        <div className="NLBenefitsStyle__iconWrapNLB flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mb-1">
                          <FaRupeeSign className="text-blue-700 text-xl" />
                        </div>
                        <div className="caption_strong_medium_semi text-xs text-white text-center">Easy Payment plans</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-4 mt-6 relative group">
                  <img
                    src={siri}
                    alt="AI Agent"
                    className="w-20 h-auto"
                  />
                  <div className="absolute inset-0 flex pt-20 justify-center text-white text-lg font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    AI Agent
                  </div>
                </div>
              </div>

              <div className='py-10'>
                <div className="NLCallToActionsStyle__buttonContainer flex flex-col lg:flex-row gap-3 mt-4">
                  {/* View Number Button */}
                  <button className="w-full buttons__primaryRegular buttons__semi bg-white hover:bg-white/90 cursor-pointer text-black font-semibold rounded-lg px-6 py-2 text-sm shadow transition-all">
                    <span>View Number</span>
                  </button>
                  {/* Brochure Button */}
                  <div className='flex flex-row justify-between items-center gap-4'>
                    {/* Brochure Button (flex-grow) */}
                    <div className="flex-1">
                      <a
                        href="https://drive.google.com/file/d/1XPw5haY73CG9ywdRRBC3d-pzlOfbFRp1/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-full buttons__secondaryRegular buttons__semi bg-transparent cursor-pointer text-white border-white font-semibold rounded-lg px-6 py-2 text-sm shadow flex items-center justify-center gap-2 border transition-all">
                          <FiDownload className="w-5 h-5 text-white" />
                          <span>Brochure</span>
                        </button>
                      </a>
                    </div>

                    {/* Shortlist Button (fixed width) */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={toggleLike}
                        className="buttons__secondaryRegular w-fit buttons__semi bg-transparent cursor-pointer text-white font-semibold rounded-lg px-4 py-2 text-sm shadow flex items-center gap-2 border border-white transition-all"
                      >
                        {liked ? (
                          <FaHeart className="w-5 h-5 text-red-500 transition-colors" />
                        ) : (
                          <FaRegHeart className="w-5 h-5 text-white transition-colors" />
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="NLStyle__storiesTopWrap lg:max-w-[335px] mx-auto my-8">
              <div
                className="NNStoriesStyle__boxShadowStories pageComponent relative mx-auto sm:w-[500px] lg:w-[333px] h-[90vh] lg:h-[592px]"
              >
                {/* Left Arrow */}
                <div
                  className="
      absolute top-1/2 -translate-y-1/2
      left-2 
      lg:-left-10 
      z-20 cursor-pointer flex items-center justify-center
    "
                  onClick={handlePrevReel}
                >
                  <div className="bg-[#373737] rounded-[10px] w-8 h-8 flex items-center justify-center hover:border hover:border-[rgba(255,255,255,0.5)]">
                    <FiChevronLeft className="text-white text-xl" />
                  </div>
                </div>

                {/* CLIPPING WRAPPER */}
                <div className="reel-clip-wrapper w-[100%] lg:w-[333px] lg:h-[592px]" style={{ overflow: 'hidden', position: 'relative' }}
                  onMouseEnter={() => setFooterHovered(true)}
                  onMouseLeave={() => setFooterHovered(false)}
                >
                  {/* Story Hover/Play */}
                  <div className="NNStoriesStyle__storyHoverWrap group">
                    {/* Play/Pause Button: show on every reel, only on hover */}
                    {footerHovered && (
                      <div
                        id="playPause"
                        className="NNStoriesStyle__storyPlayPauseClick NNStoriesStyle__hoverItem false pageComponent block opacity-100 absolute cursor-pointer"
                        style={{
                          top: 24,
                          left: 16,
                          margin: 'auto',
                          width: 32,
                          height: 32,
                          zIndex: 20,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(0,0,0,0.5)',
                          borderRadius: '50%',
                        }}
                        onClick={handlePlayPause}
                      >
                        <div className="NNStoriesStyle__controlBtnWrap">
                          <span className="iconS_xid_20 icon_playSAB text-white text-2xl">
                            {isPlaying ? (
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="4" height="12" rx="1" fill="white" /><rect x="11" y="3" width="4" height="12" rx="1" fill="white" /></svg>
                            ) : (
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3L15 9L5 15V3Z" fill="white" /></svg>
                            )}
                          </span>
                        </div>
                      </div>
                    )}
                    <div id="videoContainer" className="NNVideoPlayerStyle__deskStoriesContainer pageComponent">
                      <div className="NNVideoPlayerStyle__videoPlayerWrapper pageComponent">
                        <div className="pageComponent NNVideoPlayerStyle__storyCoverImageWrap relative" data-label="STORY_COVER_IMAGE">
                          {/* Progress bar absolutely on top of video */}
                          <div className="NNVideoPlayerStyle__progressBarWrap flex gap-1 mb-2 absolute top-0 left-0 right-0 z-10 p-2">
                            {premiumreelVideos.map((_, i) => (
                              <div key={i} className="NNVideoPlayerStyle__progressBar bg-white/30 rounded-full h-[2px] flex-1">
                                <div
                                  className="NNVideoPlayerStyle__progress bg-white rounded-full h-[2px]"
                                  style={{ maxWidth: i === currentReel ? `${progress}%` : '0%' }}
                                ></div>
                              </div>
                            ))}
                          </div>
                          {/* Show thumbnail only for first reel (index 0), always as image */}
                          <video
                            ref={videoRef}
                            src={current.videoUrl}
                            className="rounded-lg w-full h-full object-cover"
                            autoPlay
                            muted={isMuted}
                            onEnded={handleEnded}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onTimeUpdate={currentReel !== 0 ? handleTimeUpdate : undefined}
                            onClick={handlePlayPause}
                          />

                          {currentReel === 5 && (
                            <div
                              className={`absolute left-0 top-0 w-full h-full flex items-center justify-center transition-transform duration-700 ease-out pointer-events-none
                                ${showHighlights ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                              style={{ zIndex: 10 }}
                            >
                              <div className="bg-black/90 rounded-2xl shadow-2xl p-4 flex flex-col items-center pointer-events-auto max-w-md w-[90%] border border-white">
                                <h2 className="text-white text-2xl font-bold mb-4">Key Highlights</h2>
                                <ul className="text-white text-left mb-6 space-y-2 text-sm w-full max-w-xs">
                                  <li>• Tallest residential towers in miyapur offering breathtaking...</li>
                                  <li>• Massive 40,307 sq. ft. clubhouse spread over seven levels, p...</li>
                                  <li>• 75% open space ensuring a green and spacious environment for...</li>
                                  <li>• Boom barrier security with RFID access ensuring seamless and...</li>
                                  <li>• Terrace swimming pool offering a unique and luxurious experi...</li>
                                </ul>
                                <button
                                  className="bg-transparent border-1 border-white cursor-pointer w-full text-white font-bold py-2 px-6 rounded-sm shadow transition pointer-events-auto flex items-center justify-center gap-2"
                                  onClick={() => { setCurrentReel(0); setIsPlaying(true); }}
                                >
                                  <FiRotateCw className="inline-block h-4 w-4 text-lg transform -scale-x-100" />
                                  Watch Again
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Mute/Unmute only for video (not thumbnail) */}
                    {footerHovered && (
                      <div
                        id="muteUnmute"
                        className="NNStoriesStyle__storyMuteUnmuteClick NNStoriesStyle__hoverItem false pageComponent block opacity-100 absolute cursor-pointer"
                        style={{
                          top: 24,
                          right: 16,
                          margin: 'auto',
                          width: 32,
                          height: 32,
                          zIndex: 20,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(0,0,0,0.5)',
                          borderRadius: '50%',
                        }}
                        onClick={handleMuteUnmute}
                      >
                        <div className="NNStoriesStyle__controlBtnWrap">
                          <span className="iconS_xid_20 icon_muteSAB text-white text-2xl">
                            {isMuted ? <FiVolumeX /> : <FiVolume2 />}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Footer Title */}
                  {isFirst ? (
                    <div
                      className="NLFooterStyle__sfHeader NLFooterStyle__sfDefaultHeader flex items-center rounded-2xl bg-black/50"
                      style={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '85%',
                        zIndex: 10,
                        padding: '0.5rem 1.25rem',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <span className="font-bold text-white text-left">NEW LAUNCH</span>
                    </div>
                  ) : null}
                  {/* Configuration Footer for Second Reel (expand on hover) */}
                  {currentReel === 1 && (
                    <div
                      className="NLFooterStyle__sfWrapper text-white configuration-container max-w-sm mt-6"
                      style={{
                        overflow: 'hidden',
                        width: 301,
                        transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                        maxHeight: 400,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        bottom: -100,
                        borderRadius: 20,
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(22.5px)',
                        background: 'transparent',
                        pointerEvents: 'auto',
                        transform: footerHovered ? 'translateY(-120px)' : 'translateY(0)',
                        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)',
                        zIndex: 5,
                      }}
                    >
                      {/* Black header on top (identical to new launch) */}
                      <div className="NLBenefitsStyle__newLaunchHead flex items-center z-10 bg-black pl-11 pr-5 py-2 rounded-full overflow-hidden mb-0 relative" style={{ position: 'relative', zIndex: 2 }}>
                        {/* Icon + shimmer */}
                        <div className="flex items-center">
                          <div className="NLBenefitsStyle__NLHeadingAnim flex items-center gap-2">
                            <span className="list_header_bold text-lg font-bold text-white">Configurations</span>
                            {!footerHovered && (
                              <FiChevronUp className="ml-2 text-white text-lg transition-opacity duration-300" />
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Blue widget below, overlapping header (identical to new launch) */}
                      <div className="bg-black/20 rounded-xl shadow-lg w-full p-4 -mt-6" style={{ zIndex: 1, position: 'relative' }}>
                        <div className="flex flex-col gap-4 NLBenefitsStyle__newLaunchBenifits pt-4">
                          <div className="flex flex-col">

                            <div className="caption_strong_medium_semi text-xs text-white text-left">{premiumreelVideos[1]?.configLabel || '3 BHK Apartment'}</div>
                          </div>
                          <div className="flex flex-col">

                            <div className="caption_strong_medium_semi text-xs text-white text-left">{premiumreelVideos[1]?.configArea || '2430 sq.ft.'}</div>
                          </div>
                          <div className="flex flex-col">

                            <div className="caption_strong_medium_semi text-xs text-white text-left">{premiumreelVideos[1]?.configPrice || '1.21 - 1.57 Cr'} <span className="body_small ml-1">+ Charges</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentReel === 2 ? (
                    <div
                      className="NLFooterStyle__sfHeader NLFooterStyle__sfDefaultHeader flex items-center rounded-2xl bg-black/50"
                      style={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '85%',
                        zIndex: 10,
                        padding: '0.5rem 1.25rem',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <span className="font-bold text-white text-left">Devkunj 80</span>
                    </div>
                  ) : null}

                  {currentReel === 4 ? (
                    <div
                      className="NLFooterStyle__sfHeader NLFooterStyle__sfDefaultHeader flex items-center rounded-2xl bg-black/50"
                      style={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '85%',
                        zIndex: 10,
                        padding: '0.5rem 1.25rem',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <span className="font-bold text-white text-left">Key Highlights</span>
                    </div>
                  ) : null}
                  {currentReel === 3 ? (
                    <div
                      className="NLFooterStyle__sfHeader NLFooterStyle__sfDefaultHeader flex items-center rounded-2xl bg-black/50"
                      style={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '85%',
                        zIndex: 10,
                        padding: '0.5rem 1.25rem',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <span className="font-bold text-white text-left">Possession</span>
                    </div>
                  ) : null}
                </div>

                {/* Right Arrow */}
                <div
                  className="
      absolute top-1/2 -translate-y-1/2
      right-2 
      lg:-right-10 
      z-20 cursor-pointer flex items-center justify-center
    "
                  onClick={handleNextReel}
                >
                  <div className="bg-[#373737] rounded-[10px] w-8 h-8 flex items-center justify-center hover:border hover:border-[rgba(255,255,255,0.5)]">
                    <FiChevronRight className="text-white text-xl" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection;
