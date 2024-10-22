import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Gallery = sequelize.define('Gallery', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qoute: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    portfolio_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default Gallery;