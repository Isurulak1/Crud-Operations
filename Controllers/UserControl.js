const User = require('../Model/UserModel');

const getAllUsers = async (req, res) => {
    let users;

    try{
        users = await User.find();
    }
    catch(err){
        console.log(err);
        
    }
    if(!users){
        res.status(404).json({message:"No Users found"});
    }

    //display

    return res.status(200).json({users});
};

// ===data insert part=====
const addUsers = async (req, res, next) => {

    const{ name, gmail, age, address} = req.body;

    let users;

    try{
        users = new User({
            name,
            gmail,
            age,
            address
        });
        await users.save();
    }catch (err) {
        console.log(err);
        return res.status(404).json({ message: "Failed to add user" });
    }

    // not insert users
    if(!users){
        return res.status(404).json({ message: "Unable to add user" });
    }
    return res.status(200).json({ users });


};

//Get by Id

const getById = async (req,res, next) => {
    const id = req.params.id;
    let user;

    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!user){
        return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ user });

}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;