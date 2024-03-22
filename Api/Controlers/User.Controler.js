import User from "../Models/User.Model.js";

export const test = (req , res) => {
    res.json({massage : "Router working"});
}

//select all users
export const allUsers = async (req , res) => {
    User.find().then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err)
    })
}


//get one user

export const oneUser = async (req, res) => {
    const id = req.params.id;

    User.findById(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.json(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        });
};

//update user details

export const updateUser = async (req , res) => {
    const id = req.params.id;

    console.log(id)

    const {
        userName ,
        userMail ,
        userType ,
        profileImg 
    } = req.body

    console.log(userName , userMail,   userType );

    const updateUser = {
        userName ,
        userMail ,
        userType ,
        profileImg 
    }

    console.log(updateUser)

    const update = await User.findByIdAndUpdate(id , updateUser).then(() => {
        res.json('user updated');
    }).catch((err) => {
        console.log(err)
    })
}

//delete user
export const deleteUser = async ( req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id).then(() => {
        res.json('User Deleted');
    }).catch((err) => {
        console.log(err)
    })
}