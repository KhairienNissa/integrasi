// import necessary model here
const {categoryProduct, category, product} = require("../../models");

exports.getBridges = async (req, res) => {
  try {
    const data = await categoryProduct.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addBridge = async (req, res) => {
  try {
      const data = req.body

      await categoryProduct.create(data)

      res.send({
          status: 'success...',
          data
      })
  } catch (error) {
      console.log(error)
      res.send({
          status: 'failed',
          message: 'Server Error'
      })
  }
}


exports.getBridge = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await categoryProduct.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        user: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateBridge = async (req, res) => {
  try {
    const { id } = req.params;

    await categoryproduct.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Update product id: ${id} finished`,
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteBridge = async (req, res) => {
  try {
    const { id } = req.params;

    await categoryProduct.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Delete product id: ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
