
exports.analyse = async (req, res) => {
  const upfile = req.file
  res.json({
    name: upfile.originalname,
    type: upfile.mimetype,
    size: upfile.size,
  })
}