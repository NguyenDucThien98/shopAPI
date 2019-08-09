module.exports = (sequelize, DataTypes) => {
    return sequelize.define('phone', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.TEXT,
        memory: DataTypes.INTEGER,
        color: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DOUBLE,
        img: DataTypes.TEXT,
        manufacturer_id: DataTypes.INTEGER
    }, { freezeTableName: true })
}