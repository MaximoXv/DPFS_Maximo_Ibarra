let multer = require("multer");
let path = require("path")

const storageProd = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "public", "images"))
    },
    filename: function (req, file, cb) {
      const filename = "prod-"+ Date.now()+ path.extname(file.originalname)

      cb(null, filename)
    }
  })

  const storageUser = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "public", "images", "users"))
    },
    filename: function (req, file, cb) {
      const filename = "user-"+ Date.now()+ path.extname(file.originalname)

      cb(null, filename)
    }
  })
  
  const uploadProd = multer({ storage: storageProd })
  const uploadUser = multer({ storage: storageUser })

  module.exports = {
    uploadProd,
    uploadUser
}