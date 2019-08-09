const con = require('./connection').con;
const seq = require('./connection').Sequelize;
const path = require('path');
const fs = require('fs');
listModels = {};


/** import all model to connection and listModels  */
function getAllListModels() {
    const dbModelFolderPath = path.join(__dirname, '/../models');
    fs.readdirSync(dbModelFolderPath).forEach((filename) => {
        const model = {};
        model.name = filename.replace(/\.[^/.]+$/, '');
        model.path = path.join(dbModelFolderPath, filename);
        model.resource = con.import(model.path);
        listModels[model.name] = model;
    });
}
getAllListModels();

/**Create table */
function initTables() {
    /** Excute  */
    con.sync({ force: true })
        .then(() => {
            relation();
            console.log('DB created')
        })
        .then(() => {
            const manufacturer = listModels.manufacturer.resource;
            manufacturer.bulkCreate([
                { name: 'Apple' },
                { name: 'Samsung' },
                { name: 'Xiaomi' }
            ]);
            console.log("added 3 default manufacturer");
        })
        .then(() => {
            const phone = listModels.phone.resource;
            phone.bulkCreate([
                { name: 'Iphone 5', memory: 16, color: 'white', quantity: 15, price: 120, img: 'https://static.toiimg.com/photo/54058229/Apple-iPhone-5-16GB.jpg', manufacturer_id: 1 },
                { name: 'Samsung s10', memory: 16, color: 'white', quantity: 15, price: 250, img: 'https://cdn.tgdd.vn/Products/Images/42/161554/samsung-galaxy-s10-white-400x400.jpg', manufacturer_id: 2 },
                { name: 'Iphone 5', memory: 32, color: 'white', quantity: 30, price: 200, img: 'https://static.toiimg.com/photo/54058229/Apple-iPhone-5-16GB.jpg', manufacturer_id: 1 },
                { name: 'xiaomi redmi note 7', memory: 32, color: 'white', quantity: 30, price: 200, img: 'https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/E1/A5/caeaadb8-2888-4a23-9d49-1441d856d3c7.jpg', manufacturer_id: 3 }
            ]);
            console.log("added 4 default phone");
        })
        .catch((err) => console.log("ERROR " + err));
}

/** Relation */
function relation() {
    const phone = listModels.phone.resource;
    const manufacturer = listModels.manufacturer.resource;
    manufacturer.hasMany(phone, {
        foreignKey: 'manufacturer_id'
    });
}

initTables();

module.exports.listModels = listModels;

