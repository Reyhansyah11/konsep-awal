import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TopProject = sequelize.define('TopProject', {
    project_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    url_project: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default TopProject