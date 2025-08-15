import styles from "../style";
import { arrowUp } from "../assets";
import { callToAction } from "../constants";
import React from "react";

const LetsConnect = () => {
  const getStripeAnimation = () => `
  .stripe-anim {
    position: relative;
    overflow: hidden;
  }
  .stripe-anim::before {
    content: '';
    position: absolute;
    bottom: -50%;
    width: 150%;
    height: 20px;
    background: linear-gradient(135deg, #fff 10%, transparent 100%);
    transform: rotate(30deg);
    transition: bottom 1.5s;
    z-index: 2;
  }
  .stripe-anim:hover::before {
    bottom: 200%;
  }
`;

  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = getStripeAnimation();
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-transform duration-300 hover:scale-110 `}
      onClick={() => window.open(callToAction)}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full stripe-anim`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Let's</span>
          </p>
          <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] " />
        </div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Connect</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
