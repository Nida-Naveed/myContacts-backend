const express= require("express");
const { getContacts, createContact,getContact ,updateContact, deleteContact } = require("../controllers/contactController");
const router = express.Router();

router.route('/').get(getContacts).post(createContact);

//requests with id
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

//export the server module here :
module.exports = router;