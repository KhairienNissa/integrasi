// import necessary model here
const {category, product, categoryProduct} = require("../../models");

exports.getCategories = async (req, res) => {
  try {
    const data = await category.findAll({
        include : {
            model: product,
            as: "products",
            throught: {
              model: categoryProduct,
              as: "bridge",
              exclude:  ["createdAt", "updatedAt"],
            },
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
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

exports.addCategory = async (req, res) => {
  try {
      const data = req.body

      await category.create(data)

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


exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await category.findOne({
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

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await category.update(req.body, {
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

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await category.destroy({
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
