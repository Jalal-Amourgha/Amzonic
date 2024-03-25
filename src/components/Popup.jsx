import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/AppContext";

const Popup = () => {
  const { showPopup, setShowPopup } = useGlobalContext();

  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let countdownInterval;

    if (showPopup) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => {
          const newCountdown = prevCountdown - 0.01;
          return newCountdown > 0 ? newCountdown : 0;
        });
      }, 10);
    }
    return () => {
      clearInterval(countdownInterval);
    };
  }, [showPopup]);

  useEffect(() => {
    if (countdown === 0) {
      setShowPopup(false);
      setCountdown(3);
    }
  }, [countdown]);

  return (
    <div className="popup  border-[3px] border-main-color">
      <h1 className="text-2xl font-medium">
        Your Product has been successfully added
      </h1>
      <div className="countdownBar">
        <div
          className="w-full h-full rounded-lg bg-main-color"
          style={{ width: `${(countdown / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Popup;
