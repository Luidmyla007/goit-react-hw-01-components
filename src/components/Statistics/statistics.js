import PropTypes from 'prop-types';
import css from "./statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (
     <section className={css.statisticBox}>
       {title && <h2>{title}</h2>}      
        <ul>
         {stats.map(stat => {
           return (<li style={{backgroundColor: getRandomHexColor()}} key={stat.id}>
                     <span>{stat.label}</span>
                     <span>{stat.percentage}%</span>
                    </li>
                    );
                })}
        </ul>
     </section>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,  
    })
    ).isRequired
};



