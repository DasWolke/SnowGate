let wrapRequest = async (snowtransfer, resource, method, res, ...args) => {
    try {
        let result = await snowtransfer[resource][method](...args);
        return res.status(200).json(result);
    } catch (e) {
        let status = e.response ? e.response.status : 500;
        let response = {
            status,
            error: e.toString()
        };
        if (e.response) {
            Object.assign(response, e.response.data);
        }
        return res.status(status).json(response);
    }
};

module.exports = {wrapRequest};