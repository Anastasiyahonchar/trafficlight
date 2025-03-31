import PropTypes from "prop-types";
import "../index.css";

const StatsBar = ({ clickCounts }) => {
  if (!clickCounts || clickCounts.length === 0) return <p>Loading stats...</p>;

  return (
    <div className="stats-bar">
      <div className="click-counts">
        <h3>Click counts:</h3>
        {clickCounts.map((light) => (
          <p key={light.id} className={`${light.color}-text`}>
            {light.description}: {light.clickcount}
          </p>
        ))}
      </div>
    </div>
  );
};

StatsBar.propTypes = {
  clickCounts: PropTypes.array.isRequired,
};

export default StatsBar;
