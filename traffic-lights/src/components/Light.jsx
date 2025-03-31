import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../index.css";

const Light = ({ tlColor = "red", isActive, onClick, isBlinking }) => {
  const [blink, setBlink] = useState(isBlinking);

  useEffect(() => {
    if (isActive) {
      setBlink(true); 
    } else {
      setBlink(false); 
    }
  }, [isActive]);

  return (
    <motion.div
      className={`light ${tlColor}`}
      onClick={onClick}
      animate={blink ? { opacity: [0.5, 1, 0.5, 1, 1] } : { opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 1, repeat: blink ? 2 : 0 }}
    ></motion.div>
  );
};

Light.propTypes = {
  tlColor: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  isBlinking: PropTypes.bool,  
};

export default Light;
