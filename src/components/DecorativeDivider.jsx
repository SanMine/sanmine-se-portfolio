import React from 'react';

// All styles are now self-contained here. No Tailwind CSS classes are needed for the divider.
const DividerStyles = () => (
  <style>{`
    /* Animation for the lines to "draw" themselves outwards */
    @keyframes drawLine {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }

    /* Animation for the central flourish to fade in after the lines */
    @keyframes flourishFadeIn {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      50% { /* Starts after the lines are mostly drawn */
        opacity: 0;
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    .divider-container {
      display: flex;
      align-items: center;
      justify-content: center;
      /* * TO ADJUST THE SPACING: 
       * Change the '4rem' value below.
       * For less space, try '2rem'. For more space, try '6rem'.
       */
      margin: 2rem 0;
    }

    .divider-line-wrapper {
      width: 100%;
      max-width: 20rem; /* 320px */
      height: 1px;
    }

    .divider-line {
      width: 100%;
      height: 100%;
      animation: drawLine 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    .divider-line-left {
      background-image: linear-gradient(to left, #94a3b8, #cbd5e1, transparent);
      transform-origin: right; /* Animation originates from the center */
    }
    
    .divider-line-right {
      background-image: linear-gradient(to right, #94a3b8, #cbd5e1, transparent);
      transform-origin: left; /* Animation originates from the center */
    }

    .divider-flourish {
      flex-shrink: 0;
      margin-left: 1rem;
      margin-right: 1rem;
      color: #334152; /* text-slate-700 */
      animation: flourishFadeIn 1.5s ease-out forwards;
    }

    .divider-svg {
      width: 6rem; /* 96px */
      height: auto;
    }

    /* Responsive adjustments for smaller screens */
    @media (min-width: 768px) {
      .divider-container {
        /* * TO ADJUST SPACING ON LARGER SCREENS: 
         * Change the '5rem' value below.
         */
        margin: 1rem 0;
      }
    }
  `}</style>
);

/**
 * To use this component in your React project:
 * 1. Save this file as 'DecorativeDivider.jsx' in your components folder.
 * 2. In the file where you want to use it, import it: 
 * import DecorativeDivider from './path/to/DecorativeDivider';
 * 3. Place the <DecorativeDivider /> component in your JSX.
 */
export default function DecorativeDivider() {
  return (
    <>
      <DividerStyles />
      <div className="divider-container" aria-hidden="true">
        {/* Left Gradient Line */}
        <div className="divider-line-wrapper">
            <div className="divider-line divider-line-left"></div>
        </div>
        
        {/* Central Ornate SVG Flourish */}
        <div className="divider-flourish">
          <svg className="divider-svg" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.75" 
              strokeLinecap="round"
              d="M2 10 Q 10 0, 20 10 T 38 10 M 98 10 Q 90 0, 80 10 T 62 10 M 50 10 m -10 0 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0"
            />
          </svg>
        </div>
        
        {/* Right Gradient Line */}
        <div className="divider-line-wrapper">
          <div className="divider-line divider-line-right"></div>
        </div>
      </div>
    </>
  );
};

