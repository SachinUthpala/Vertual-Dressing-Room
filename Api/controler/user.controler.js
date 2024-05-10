import User from '../models/user.model.js';
import { errorHandler } from './../utils/error.js';


export const test = (req , res) => {

    res.json({message : "Router is working"});
}

export const updateUser = async (req , res , next) => {

    console.log(req.user);


    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to update this user'));
    }
    if (req.body.password) {
        if (req.body.password.length < 6) {
          return next(errorHandler(400, 'Password must be at least 6 characters'));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    if (req.body.username) {
        if (req.body.username.length < 7 || req.body.username.length > 20) {
          return next(
            errorHandler(400, 'Username must be between 7 and 20 characters')
          );
        }
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.userId,
          {
            $set: {
              username: req.body.username,
              email: req.body.email,
              profilePicture: req.body.profilePicture,
              password: req.body.password,
            },
          },
          { new: true }
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
      } catch (error) {
        next(error);
      }
}

export const deleteUser = async ( req , res , next) =>{
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this user'));
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json('User has been deleted');
  } catch (error) { 
    next(error);
  }
}

export const signOut = (req, res , next) => {
  try {
    res
      .clearCookie('access_token')
      .status(200)
      .json('User has been signed out');
  } catch (error) {
    next(error);
  }
}



export const signout = (req, res, next) => {
  try {
    res
      .clearCookie('access_token')
      .status(200)
      .json('User has been signed out');
  } catch (error) {
    next(error);
  }
};


export const getAllUsers = async (req , res , next) => {
  const users = await User.find();
  res.json(users);

}



export const deleteGest = async (req, res, next) => {
  try {
    console.log("delete api start");
    console.log(req.params.userId);
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json({ message: 'User has been deleted' });
  } catch (error) {
    // If there's an error, pass it to the error handling middleware
    next(error);
  }
};