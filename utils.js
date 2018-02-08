const wrapRequest = async (snowtransfer, resource, method, res, ...args) => {
  try {
    const result = await snowtransfer[resource][method](...args)
    return res.status(200).json(result)
  } catch (e) {
    const status = e.response ? e.response.status : 500
    const response = {
      status,
      error: e.toString()
    }
    if (e.response) {
      Object.assign(response, e.response.data)
    }
    return res.status(status).json(response)
  }
}

module.exports = {wrapRequest}
