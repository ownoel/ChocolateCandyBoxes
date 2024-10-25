/** @format */
import ChocolateCard from "./ChocolateCard.js";
import chocolates from "./chocolateData.js";

const ChocolateList = () => {
    return (
        <div className="chocolates_container">
            {chocolates.map((chocolate, index) => (
                <ChocolateCard key={index} chocolate = {chocolate} />
            ))}
        </div>
    );
};

export default ChocolateList;