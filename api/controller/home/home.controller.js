const service = require('./home.service');
module.exports = {
    getManufacturer: async (req, res) => {
        try {
            const result = await service.getListManufacturer();
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    },
    getManufacturerByID: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await service.getListManufacturerByID(id);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    },
    getHomePage: async (req, res) => {
        try {
            const result = {
                manufacturer: await service.getListManufacturer(),
                phone: await service.getListProduct()
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json('Error');
        }
    },
    getListProduct: async (req, res) => {
        try {
            const result = await service.getListProduct();
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    },
    getListProductByID: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await service.getListProductByID(id);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    },
    getListProductByManufacturer: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await service.getListProductByManufacturer(id);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    },
    createProduct: async (req, res) => {
        try {
            const result = await service.createProduct(req.query);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    },
    createManufacturer: async (req, res) => {
        try {
            const result = await service.createManufacturer(req.query);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    },
    updateManufacturer: async (req, res) => {
        try {
            const result = await service.updateManufacturer(req.query);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    },
    updateProduct: async (req, res) => {
        try {
            const result = await service.updateProduct(req.query);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json('Error');
        }
    }
}
