module.exports = (sequelize, DataTypes) => {
    return sequelize.define('manufacturer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.TEXT
    }, { freezeTableName: true })
}