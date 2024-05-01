export const test = (req , res) => {
    res.json({message : "Router is working"});
}

export const updateUser = async (req , res , next) => {

    console.log(req.user);
}