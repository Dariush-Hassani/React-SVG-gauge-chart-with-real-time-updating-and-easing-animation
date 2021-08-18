import "./styles.css";
import React, { useRef, useEffect } from "react";
import GaugeChart from "./GaugeChart";

export default function App() {
  const gaugeRef = useRef(null);
  useEffect(() => {
    let timer;
    let randomUpdate = () => {
      gaugeRef.current.updateData(220);
      setTimeout(() => {
        gaugeRef.current.updateData(20);
      }, 3000);
      setTimeout(() => {
        gaugeRef.current.updateData(180);
      }, 6000);
      setTimeout(() => {
        gaugeRef.current.updateData(50);
      }, 9000);
      setTimeout(() => {
        gaugeRef.current.updateData(10);
      }, 12000);
    };
    randomUpdate();
    timer = setInterval(() => {
      randomUpdate();
    }, 13000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ width: "370px", height: "370px" }}>
        <GaugeChart ref={gaugeRef} id="gauge-1" max="250" min="0" />
      </div>
    </div>
  );
}
