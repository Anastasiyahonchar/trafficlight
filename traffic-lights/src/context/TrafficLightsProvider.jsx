import { createContext, useContext, useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const TrafficLightsContext = createContext();

export const TrafficLightsProvider = ({ children }) => {
  const [lights, setLights] = useState([]);
  const [activeLightId, setActiveLightId] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setLights(data);
        const activeLight = data.find((light) => light.isActive);
        if (activeLight) {
          setActiveLightId(activeLight.id);
        }
      })
      .catch((error) => console.error("Error fetching lights:", error));
  }, []);

  const handleLightClick = (id) => {
    const updatedLights = lights.map((light) => ({
      ...light,
      isActive: light.id === id, 
      clickcount: light.id === id ? light.clickcount + 1 : light.clickcount,
    }));
  
    setLights(updatedLights);
    setActiveLightId(id);
  
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(updatedLights), 
    }).catch((error) => console.error("Error updating lights:", error));
  };  

  return (
    <TrafficLightsContext.Provider value={{ lights, activeLightId, handleLightClick }}>
      {children}
    </TrafficLightsContext.Provider>
  );
};

export const useTrafficLights = () => useContext(TrafficLightsContext);
