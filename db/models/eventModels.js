import { Sequelize } from "sequelize";
import { db } from "../db.js";

// ==blue print ==//
// Tech name
// Start date (year,month, date, hour, min, seconds)
// End date (year, month, date, hour ,min, seconds)
// allDay (default false)
// Event title
// Event desc


const Event = db.define('event', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate : {
        type: Sequelize.DATE,
        allowNull: false
    },
    allDay : {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },

})

export default Event