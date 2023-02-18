import PropTypes from 'prop-types';
import { BsAlarm } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";

export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
    return (
    <div>
        <img src={image} alt={name} width="240" />
        <h2>{name}</h2>

        <div>
            <div>
                <BsAlarm/>
                {time} min
            </div>
            <div>
                <AiOutlinePieChart/>
                {servings} servings
            </div>
            <div>
                <BsBarChartLine/>
                {calories} calories
            </div>
        </div>

        <div>
            <h3>Difficulty</h3>
            <div>
                <span>Easy</span>
                <span>Medium</span>
                <span>Hard</span>
            </div>
        </div>
    </div>
    );
};

Recipe.propTypes = {
    item: PropTypes.shape({
            // id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            servings: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            // difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    }).isRequired,
}