import Services from "../models/service.js";

export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await Services.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export const deleteUser = async (req,res,next)=>{
  try {
    await Services.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUser = async (req,res,next)=>{
  try {
    const user = await Services.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
// export const getUsers = async (req,res,next)=>{
//   try {
//     const users = await Services.find();
//     res.status(200).json(users);
//   } catch (err) {
//     next(err);
//   }
// }

export const getUsers = (async (req, res) => {
  

  const keyword = req.query.keyword
    ? {
      speciality: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

    
  
  const users= await Services.find({ ...keyword })

  res.json(users)
})
