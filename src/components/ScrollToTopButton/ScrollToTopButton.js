import React, { useRef } from 'react';

function ScrollToTopButton() {
  const scrollToTopRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button ref={scrollToTopRef} className='scroll-to-top-button' onClick={handleScrollToTop}>
      Scroll To Top
    </button>
  );
}

export default ScrollToTopButton;
