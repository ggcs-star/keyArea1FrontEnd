import React, { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { reelVideos, infiniteVideos } from "../../../db/index";
import { useParams, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import CloseButton from "./CloseButton";
import FilterModal from "./FilterModal";
import ShareModal from "./ShareModal";
import VolumeOff from "./VolumeOff";
import VolumeOn from "./VolumeOn";
import LikeModal from "./LikeModal";
import CommentModal from "./CommentModal";
import logo from '../../../assets/logo.png'


const ReelVideos = () => {
  const { linkId } = useParams();
  const navigate = useNavigate();
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLooping, setIsLooping] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFilterModalClosing, setIsFilterModalClosing] = useState(false);
  const [isShareModalClosing, setIsShareModalClosing] = useState(false);
  const videoRefs = useRef([]);
  const progressBarRef = useRef(null);

  const handleReelNavigation = (newIndex) => {
    // Calculate the new index with looping
    let nextIndex = newIndex;

    if (isLooping) {
      if (nextIndex >= infiniteVideos.length) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = infiniteVideos.length - 1;
      }
    } else {
      // If not looping, clamp the index to valid range
      nextIndex = Math.max(0, Math.min(nextIndex, infiniteVideos.length - 1));
    }

    // Update the current index
    setCurrentReelIndex(nextIndex);
    setIsPlaying(true);
    setIsTransitioning(true);
    setIsLoading(true);

    // Update URL with the exact linkId of the current reel
    const currentReel = infiniteVideos[nextIndex];
    if (currentReel && currentReel.linkId) {
      navigate(`/reels/${currentReel.linkId}`, { replace: true });
    }
  };

  // Set initial reel index based on URL parameter
  useEffect(() => {
    if (linkId) {
      // First try to find exact match with the full linkId (including suffix)
      let index = infiniteVideos.findIndex(reel => reel.linkId === linkId);

      if (index === -1) {
        // If not found, try to find the base linkId (without the duplicate suffix)
        const baseLinkId = linkId.split('-')[0];

        // Find the first occurrence of the base ID
        index = infiniteVideos.findIndex(reel => {
          const reelBaseId = reel.linkId.split('-')[0];
          return reelBaseId === baseLinkId;
        });
      }

      if (index !== -1) {
        // Reset all states when navigating to a new reel
        setCurrentReelIndex(index);
        setIsPlaying(true);
        setIsTransitioning(true);
        setIsLoading(true);

        // Pause all videos
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pause();
          }
        });

        // Play the current video
        const currentVideo = videoRefs.current[index];
        if (currentVideo) {
          currentVideo.play().catch(error => {
            console.log("Autoplay prevented:", error);
          });
        }
      } else {
        // If no match found, redirect to the first reel
        navigate(`/reels/${infiniteVideos[0].linkId}`, { replace: true });
      }
    }
  }, [linkId, navigate]);

  // Handle video playback when reel changes
  useEffect(() => {
    const currentVideo = videoRefs.current[currentReelIndex];
    if (currentVideo) {
      // Pause all other videos
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentReelIndex) {
          video.pause();
        }
      });

      // Play current video
      if (isPlaying) {
        currentVideo.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, [currentReelIndex, isPlaying]);

  const togglePlay = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);

    const currentVideo = videoRefs.current[currentReelIndex];
    if (currentVideo) {
      if (newIsPlaying) {
        currentVideo.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      } else {
        currentVideo.pause();
      }
    }
  };

  const slug = reelVideos.productDetails?.name?.toLowerCase().replace(/\s+/g, "-");

  // Update keyboard navigation
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (showFilterModal) return; // Prevent navigation when modal is open
      switch (e.code) {
        case 'ArrowUp':
          if (currentReelIndex > 0) {
            handleReelNavigation(currentReelIndex - 1);
          }
          break;
        case 'ArrowDown':
          if (currentReelIndex < reelVideos.length - 1) {
            handleReelNavigation(currentReelIndex + 1);
          }
          break;
        case 'Space':
          e.preventDefault(); // Prevent page scroll
          const currentVideo = videoRefs.current[currentReelIndex];
          if (currentVideo) {
            if (currentVideo.paused) {
              currentVideo.play().catch(error => {
                console.log("Autoplay prevented:", error);
              });
              setIsPlaying(true);
            } else {
              currentVideo.pause();
              setIsPlaying(false);
            }
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentReelIndex, reelVideos.length, showFilterModal]);

  // Configure swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (showFilterModal) return;
      handleReelNavigation(currentReelIndex + 1);
    },
    onSwipedDown: () => {
      if (showFilterModal) return;
      handleReelNavigation(currentReelIndex - 1);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
    swipeDuration: 500,
    touchEventOptions: { passive: false },
  });

  useEffect(() => {
    // Pause all videos except current one
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentReelIndex) {
          if (isPlaying) {
            video.play().catch((e) => console.log("Autoplay prevented", e));
          } else {
            video.pause();
          }
        } else {
          video.pause();
        }
      }
    });
  }, [currentReelIndex, isPlaying]);

  const handleTimeUpdate = (e) => {
    const video = e.target;
    const progress = (video.currentTime / video.duration) * 100;
    setVideoProgress(progress);
  };

  const handleLikeClick = () => {
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const handleFilterClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowFilterModal(true);
    setIsFilterModalClosing(false);
  };

  const closeFilterModal = () => {
    setIsFilterModalClosing(true);
    setTimeout(() => {
      setShowFilterModal(false);
      setIsFilterModalClosing(false);
    }, 300);
  };

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newIsMuted = !isMuted;
    setIsMuted(newIsMuted);
    if (videoRefs.current[currentReelIndex]) {
      videoRefs.current[currentReelIndex].muted = newIsMuted;
    }
  };

  const handleCommentClick = (e) => {
    setShowCommentModal(true);
  };

  const closeCommentModal = () => {
    setShowCommentModal(false);
  };

  const handleShareClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowShareModal(true);
    setIsShareModalClosing(false);
  };

  const closeShareModal = () => {
    setIsShareModalClosing(true);
    setTimeout(() => {
      setShowShareModal(false);
      setIsShareModalClosing(false);
    }, 300);
  };

  const handleProgressBarMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    handleProgressBarMove(e);
  };

  const handleProgressBarMove = (e) => {
    if (!isDragging || !progressBarRef.current) return;

    const video = videoRefs.current[currentReelIndex];
    if (!video) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = percentage * video.duration;
    setVideoProgress(percentage * 100);
  };

  const handleProgressBarMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleProgressBarMove);
      window.addEventListener('mouseup', handleProgressBarMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleProgressBarMove);
      window.removeEventListener('mouseup', handleProgressBarMouseUp);
    };
  }, [isDragging, currentReelIndex]);

  // Function to determine if a video should be loaded
  const shouldLoadVideo = (index) => {
    // Load current video, next video, and previous video
    return index === currentReelIndex ||
      index === currentReelIndex + 1 ||
      index === currentReelIndex - 1;
  };

  // Function to handle video loading
  const handleVideoLoad = (index) => {
    setLoadedVideos(prev => new Set([...prev, index]));
  };

  // Function to handle video play
  const handleVideoPlay = (index) => {
    if (index === currentReelIndex) {
      setIsLoading(false);
      setIsTransitioning(false);
    }
  };

  // Update loaded videos when current index changes
  useEffect(() => {
    setIsTransitioning(true);
    const newLoadedVideos = new Set([
      currentReelIndex,
      currentReelIndex + 1,
      currentReelIndex - 1
    ].filter(index => index >= 0 && index < infiniteVideos.length));
    setLoadedVideos(newLoadedVideos);
  }, [currentReelIndex]);

  // Add this new function to handle video end
  const handleVideoEnd = () => {
    // Play the next video in sequence
    handleReelNavigation(currentReelIndex + 1);
  };



  return (
    <div className="relative bg-black overflow-hidden select-none">
      <div
        className="relative w-full sm:w-[400px] overflow-hidden bg-black mx-auto h-[calc(100dvh)] sm:h-[calc(100dvh-4rem)] sm:my-8"
        {...swipeHandlers}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowFilterModal(false);
          }
        }}
        onWheel={e => { if (showFilterModal) { e.stopPropagation(); e.preventDefault(); return; } }}
      >
        {infiniteVideos.map((reel, index) => {
          // Calculate the position for looping
          let position = "translate-y-full"; // Default position (below)

          if (index === currentReelIndex) {
            position = "translate-y-0"; // Current video
          } else if (index < currentReelIndex) {
            position = "-translate-y-full"; // Above
          } else if (index > currentReelIndex) {
            position = "translate-y-full"; // Below
          }

          return (
            <div
              key={reel.linkId}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out group hover:bg-white/20 ${position}`}
              onClick={togglePlay}
            >
              <div className="relative">
                {isLoading && index === currentReelIndex && !isTransitioning && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
                    <div className="flex flex-col items-center gap-4">
                      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary"></div>
                      <p className="text-white text-lg font-medium">Loading video...</p>
                    </div>
                  </div>
                )}
                {shouldLoadVideo(index) && (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={reel.videoUrl}
                    loop={true}
                    muted={isMuted}
                    playsInline
                    loading="lazy"
                    preload={index === currentReelIndex ? "auto" : "metadata"}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedData={() => handleVideoLoad(index)}
                    onPlay={() => handleVideoPlay(index)}
                    onEnded={handleVideoEnd}
                    className={`h-screen lg:h-full w-full object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-100' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      togglePlay();
                    }}
                  >
                    <source src={reel.videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>

              {/* Play/Pause Overlay */}
              <div
                className="absolute inset-0 z-10 flex items-center justify-center fade-in-15 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                {!isPlaying && (
                  <>
                    <div className="absolute z-30 size-[5.25rem] rounded-full bg-[rgba(255,255,255,0.09)] px-2 py-0.5 text-transparent backdrop-blur-[0.3rem]">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                      </svg>
                    </div>
                    <div className="absolute z-40 size-[3.71rem] rounded-full bg-[rgba(255,255,255,0.10)] px-2 py-0.5 text-transparent backdrop-blur-md">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                      </svg>
                    </div>
                    <div className="absolute z-50 text-[1.96rem] text-white">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z"></path>
                      </svg>
                    </div>
                  </>
                )}
              </div>

              {/* Progress Bar */}
              <div
                ref={progressBarRef}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 z-20 cursor-pointer"
                onClick={(e) => {
                  if (!progressBarRef.current) return;
                  const rect = progressBarRef.current.getBoundingClientRect();
                  const percentage = (e.clientX - rect.left) / rect.width;
                  const video = videoRefs.current[currentReelIndex];
                  if (video) {
                    video.currentTime = percentage * video.duration;
                    setVideoProgress(percentage * 100);
                  }
                }}
                onMouseDown={handleProgressBarMouseDown}
              >
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>

              {/* Overlay UI */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-30 pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-white"></div>
                    <img
                      src={logo}
                      alt={reel.title}
                      className="relative w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{reel.company}</div>
                    <div className="text-sm font-bold">{reel.title}</div>
                  </div>
                </div>
                <div className="pointer-events-auto">
                  <p
                    className="mb-4 text-sm pr-8 cursor-pointer transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDescriptionExpanded(!isDescriptionExpanded);
                    }}
                  >
                    {isDescriptionExpanded
                      ? <>{reel.shortDescription} <span className="text-primary">Read Less</span></>
                      : <>{reel.shortDescription.split(' ').slice(0, 10).join(' ')}... <span className="text-primary">Read More</span></>}
                  </p>
                </div>
                {/* <div className="flex gap-2 pointer-events-auto">
                  {infiniteVideos[currentReelIndex]?.productDetails?.name && (
                    <button
                      className="cursor-pointer flex-1 rounded border border-primary px-4 py-2 text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const currentReel = infiniteVideos[currentReelIndex];
                        const slug = currentReel.productDetails.name.toLowerCase().replace(/\s+/g, "-");
                        navigate(`/details/${slug}`);
                      }}
                    >
                      View Details
                    </button>
                  )}


                  <button
                    className="cursor-pointer flex-1 rounded bg-primary px-4 py-2 text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.href = '/contact';
                    }}
                  >
                    Order Now
                  </button>
                </div> */}
              </div>

              {/* Volume and Filter Controls */}
              <div className="absolute top-3 right-5 z-40 md:right-3 pointer-events-auto">
                <div className="flex flex-col items-center gap-6">
                  <button
                    className=""
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeOff /> : <VolumeOn />}
                  </button>
                </div>
                <button
                  type="button"
                  className="mt-2 text-primary lg:text-white lg:group-hover:bg-primary/40 flex cursor-pointer flex-col items-center justify-center rounded-full p-2 group-hover:duration-700"
                  onClick={handleFilterClick}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="size-8 "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 9.5C6.93191 9.5 7.71496 10.1374 7.93699 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7455 13.8231 11.9496 13.5899 11.9919L13.5 12L7.93673 12.001C7.71435 12.8631 6.93155 13.5 6 13.5C5.06845 13.5 4.28565 12.8631 4.06327 12.001L2.5 12C2.22386 12 2 11.7761 2 11.5C2 11.2545 2.17688 11.0504 2.41012 11.0081L2.5 11H4.06301C4.28504 10.1374 5.06809 9.5 6 9.5ZM6 10.5C5.44772 10.5 5 10.9477 5 11.5C5 12.0523 5.44772 12.5 6 12.5C6.55228 12.5 7 12.0523 7 11.5C7 10.9477 6.55228 10.5 6 10.5ZM10 2.5C10.9319 2.5 11.715 3.13738 11.937 3.99998L13.5 4C13.7761 4 14 4.22386 14 4.5C14 4.74546 13.8231 4.94961 13.5899 4.99194L13.5 5L11.9367 5.00102C11.7144 5.86312 10.9316 6.5 10 6.5C9.06845 6.5 8.28565 5.86312 8.06327 5.00102L2.5 5C2.22386 5 2 4.77614 2 4.5C2 4.25454 2.17688 4.05039 2.41012 4.00806L2.5 4L8.06301 3.99998C8.28504 3.13738 9.06809 2.5 10 2.5ZM10 3.5C9.44772 3.5 9 3.94772 9 4.5C9 5.05228 9.44772 5.5 10 5.5C10.5523 5.5 11 5.05228 11 4.5C11 3.94772 10.5523 3.5 10 3.5Z"></path>
                  </svg>
                </button>
              </div>

              {/* Right side actions */}
              <div className="absolute right-4 bottom-[70px] flex flex-col items-center gap-4 text-white z-40 pointer-events-auto">
                {/* <button
                  className="cursor-pointer flex flex-col items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleLikeClick();
                  }}
                >
                  <HeartIcon />
                  <span>{reel.likes}</span>
                </button>
                <button
                  className="cursor-pointer flex flex-col items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCommentClick();
                  }}
                >
                  <CommentIcon />
                  <span>{reel.comments}</span>
                </button> */}
                <button
                  className="cursor-pointer flex flex-col items-center"
                  onClick={handleShareClick}
                >
                  <ShareIcon />
                </button>
              </div>
            </div>
          );
        })}

        {/* Login Modal */}
        {showLoginModal && <LikeModal onClose={closeModal} />}

        {/* Comment Modal */}
        {showCommentModal && <CommentModal onClose={closeCommentModal} />}

        {/* Filter Modal */}
        {showFilterModal && (
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed inset-0 z-[9999] ${isFilterModalClosing ? 'animate-slideDown' : 'animate-slideUp'}`}
            style={{ transform: isFilterModalClosing ? 'translateY(100%)' : 'translateY(0)' }}
          >
            <div className="absolute bottom-0 left-0 right-0">
              <FilterModal onClose={closeFilterModal} currentReelIndex={currentReelIndex} />
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed inset-0 z-[9999] ${isShareModalClosing ? 'animate-slideDown' : 'animate-slideUp'}`}
            style={{ transform: isShareModalClosing ? 'translateY(100%)' : 'translateY(0)' }}
          >
            <div className="absolute bottom-0 left-0 right-0">
              <ShareModal onClose={closeShareModal} currentReel={reelVideos[currentReelIndex]} />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="fixed right-12 top-[48%] z-50 mr-2 hidden flex-col md:flex">
        <button onClick={() => handleReelNavigation(currentReelIndex - 1)} className="cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="absolute text-red-500 bottom-0 mb-4 !rotate-180 duration-1000"
            height="50"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0 229.232 0 0 229.232 0 512zm961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448 200.976-448 448-448 449.009 200.976 449.009 448zM479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008 194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z"></path>
          </svg>
        </button>
        <button onClick={() => handleReelNavigation(currentReelIndex + 1)} className="cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="absolute text-red-500 top-0 cursor-pointer"
            height="50"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0 229.232 0 0 229.232 0 512zm961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448 200.976-448 448-448 449.009 200.976 449.009 448zM479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008 194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Example icon components
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const CommentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
  </svg>
);

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary lg:text-white">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);

export default ReelVideos;