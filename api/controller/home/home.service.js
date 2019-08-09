const listModel = require('../../db/db.manager').listModels;
const manufacturer = listModel.manufacturer.resource;
const phone = listModel.phone.resource;

module.exports = {
    getListManufacturer: () => {
        return manufacturer.findAll({
            raw: true,
            attributes: ['id', 'name']
        });
    },
    getListManufacturerByID: (xid) => {
        return manufacturer.findAll({
            raw: true,
            attributes: ['id', 'name'],
            where: { id: xid }
        });
    },
    getListProduct: () => {
        return phone.findAll();
    },
    getListProductByID: (xid) => {
        return phone.findAll({
            raw: true,
            where: { id: xid }
        });
    },
    getListProductByManufacturer: (xid) => {
        return phone.findAll({
            raw: true,
            where: { manufacturer_id: xid }
        });
    },
    createProduct: (params) => {
        return phone.create({
            name: params.name,
            memory: params.memory,
            color: params.color,
            quantity: params.quantity,
            price: params.price,
            img: params.img,
            manufacturer_id: params.manufacturer_id
        });
    },
    createManufacturer: (params) => {
        return manufacturer.create({
            name: params.name
        });
    },
    updateProduct: (params) => {
        return phone.update(
            {
                name: params.name,
                memory: params.memory,
                color: params.color,
                quantity: params.quantity,
                price: params.price,
                img: params.img,
                manufacturer_id: params.manufacturer_id
            },
            {
                where: {
                    id: params.id
                }
            }
        );
    },
    updateManufacturer: (params) => {
        return manufacturer.update(
            {
                name: params.name,
            },
            {
                where: {
                    id: params.id
                }
            }
        );
    }
}

