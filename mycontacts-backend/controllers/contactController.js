//@desc Get all contacts
//@route GET /api/contacts
//@access public
//acces is set to 'private' when authenticating

const getContacts =(req,res)=>{
    res.status(200).json({message: "Get all contacts."});
}
//@desc Create New contact
//@route POST /api/contacts
//@access public
//acces is set to 'private' when authenticating

//body parser to use it else it shows "undefined" : use :"app.use(express.json());"

const createContact =(req,res)=>{
    console.log("the req body is", req.body);
    const {name, email,phone} =req.body;
    //error handling
    if(!name || !email || !phone){
        //status 400 is bad request
        return res.status(400).json({message: "Please enter all fields."});
    }
    res.status(201).json({message: "Create contact."});
}

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
//acces is set to 'private' when authenticating

const getContact =(req,res)=>{
    res.status(201).json({message: `Get a contact for ${req.params.id}.`});
}

//@desc Update a contact
//@route PUT /api/contacts/:id4
//@access public
//acces is set to 'private' when authenticating

const updateContact =(req,res)=>{
    res.status(201).json({message: "Update contact."});
}
const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`  });
}
module.exports = {getContacts, createContact, updateContact, getContact , deleteContact};