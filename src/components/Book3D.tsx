"use client";

export default function Book3D() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="book-container">
        <div className="book">
          {/* Book Cover */}
          <div className="book-cover">
            <div className="book-cover-content">
              <div className="book-title-area">
                <div className="book-logo">
                  <div className="text-4xl font-black tracking-tight">
                    <span className="text-white">ANGLE</span>
                    <span className="text-accent">LOCK</span>
                  </div>
                </div>
                <h3 className="book-title">
                  MARKET
                  <br />
                  OPPORTUNITY
                  <br />
                  REPORT
                </h3>
                <div className="book-year">2025</div>
                <div className="book-subtitle">
                  Investment Analysis &amp; Strategic Overview
                </div>
              </div>
              <div className="book-accent-line" />
            </div>
          </div>

          {/* Book Spine */}
          <div className="book-spine">
            <span className="spine-text">ANGLELOCK • MARKET OPPORTUNITY REPORT • 2025</span>
          </div>

          {/* Book Back */}
          <div className="book-back" />

          {/* Book Pages */}
          <div className="book-pages">
            <div className="page" />
            <div className="page" />
            <div className="page" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .book-container {
          perspective: 2000px;
          transform-style: preserve-3d;
          position: relative;
        }

        .book-container::before {
          content: '';
          position: absolute;
          width: 280px;
          height: 380px;
          background: radial-gradient(
            ellipse at center,
            rgba(59, 130, 246, 0.4) 0%,
            rgba(59, 130, 246, 0.2) 40%,
            transparent 70%
          );
          transform: rotateY(-25deg) rotateX(5deg) translateZ(-50px);
          transform-style: preserve-3d;
          transition: opacity 0.4s ease, transform 0.8s ease;
          opacity: 0.5;
          filter: blur(20px);
          pointer-events: none;
        }

        .book-container:hover::before {
          opacity: 1;
          transform: rotateY(-15deg) rotateX(2deg) translateZ(-50px) scale(1.3);
          filter: blur(30px);
        }

        .book {
          width: 280px;
          height: 380px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateY(-25deg) rotateX(5deg);
          transition: transform 0.8s ease;
          animation: float 6s ease-in-out infinite;
        }

        .book-container:hover .book {
          transform: rotateY(-15deg) rotateX(2deg) scale(1.05);
          animation-play-state: paused;
        }

        @keyframes float {
          0%, 100% {
            transform: rotateY(-25deg) rotateX(5deg) translateY(0px);
          }
          50% {
            transform: rotateY(-25deg) rotateX(5deg) translateY(-10px);
          }
        }

        /* Book Cover */
        .book-cover {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
          border-radius: 4px 8px 8px 4px;
          transform: translateZ(30px);
          box-shadow:
            0 0 20px rgba(59, 130, 246, 0.3),
            inset 0 0 60px rgba(0, 0, 0, 0.2),
            inset 0 0 2px rgba(255, 255, 255, 0.3);
          overflow: hidden;
        }

        .book-cover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.2) 100%
          );
        }

        .book-cover-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px 24px;
          z-index: 1;
        }

        .book-title-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .book-logo {
          text-align: center;
          padding-bottom: 12px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
        }

        .book-title {
          font-size: 28px;
          font-weight: 900;
          color: white;
          line-height: 1.1;
          text-align: center;
          letter-spacing: 0.05em;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .book-year {
          text-align: center;
          font-size: 48px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .book-subtitle {
          text-align: center;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          line-height: 1.4;
        }

        .book-accent-line {
          height: 3px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
        }

        /* Book Spine */
        .book-spine {
          position: absolute;
          width: 60px;
          height: 100%;
          background: linear-gradient(to right, #1e3a8a 0%, #2563eb 50%, #1e3a8a 100%);
          left: 0;
          transform: rotateY(-90deg) translateX(-30px);
          transform-origin: left;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 0 0 30px rgba(0, 0, 0, 0.4),
            inset 2px 0 0 rgba(255, 255, 255, 0.1);
        }

        .spine-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.9);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        /* Book Back */
        .book-back {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          transform: translateZ(-30px) rotateY(180deg);
          border-radius: 8px 4px 4px 8px;
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.3);
        }

        /* Book Pages */
        .book-pages {
          position: absolute;
          width: calc(100% - 8px);
          height: calc(100% - 8px);
          top: 4px;
          left: 4px;
        }

        .page {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #f5f5f5 0%, #ffffff 50%, #f0f0f0 100%);
          border-radius: 0 4px 4px 0;
        }

        .page:nth-child(1) {
          transform: translateZ(28px);
        }

        .page:nth-child(2) {
          transform: translateZ(26px);
        }

        .page:nth-child(3) {
          transform: translateZ(24px);
        }

        /* Right edge shadow to show pages */
        .book-cover::after {
          content: '';
          position: absolute;
          right: 0;
          top: 5%;
          width: 6px;
          height: 90%;
          background: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 0.1) 2px,
            transparent 2px,
            transparent 4px
          );
          transform: translateX(2px);
        }
      `}</style>
    </div>
  );
}
