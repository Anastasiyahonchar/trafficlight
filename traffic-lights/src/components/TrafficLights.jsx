import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Light from "./Light";
import StatsBar from "./StatsBar";
import { useTrafficLights } from "../context/TrafficLightsProvider";
import "../index.css";

const TrafficLights = () => {
  const { orientation } = useParams();
  const { lights, activeLightId, handleLightClick } = useTrafficLights();

  if (lights.length === 0) return <p>Loading...</p>;

  return (
    <motion.div
      className={`traffic-page-container ${orientation}`}
      key={orientation}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`traffic-lights-container ${orientation}`}>
        {lights.map((light) => (
          <Light
            key={light.id}
            tlColor={light.color}
            isActive={light.id === activeLightId}
            onClick={() => handleLightClick(light.id)}
          />
        ))}
      </div>
      <StatsBar clickCounts={lights} />
    </motion.div>
  );
};

export default TrafficLights;
