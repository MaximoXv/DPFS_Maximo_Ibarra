let multer = require("multer");
let path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/images"))
    },
    filename: function (req, file, cb) {
      const filename = "prod-"+ Date.now()+ path.extname(file.originalname)

      cb(null, filename)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload