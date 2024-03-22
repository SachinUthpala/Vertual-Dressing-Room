import Cloth from './../Models/Cloth.Model.js';

export const test = (req,res) => {
    res.json({massage : "Router working"});
}

//add cloth

export const addCloth = async (req , res) => {
    const {
        clothName,
        clothBrand,
        clothType,
        clothPrice,
        clothAvailability,
        clothImage
    } = req.body

    console.log(clothName , clothBrand );

    const newCloth = new Cloth({
        clothName,
        clothBrand,
        clothType,
        clothPrice,
        clothAvailability,
        clothImage
    });

    try {
        await newCloth.save()

        res.json({
            massage : "Cloth Added Sucessfull"
        })
    } catch (error) {
        console.log(error)
    }
}

//display all cloths
export const displayAll = async ( req , res) => {
    Cloth.find().then((cloths) => {
        res.json(cloths)
    }).catch((err) => {
        console.log(err);
    })
}

//disply one cloth

export const oneCloth = async( req ,res) => {
    const id = req.params.id;

    Cloth.findById(id).then(cloth => {
        if(!cloth){
            return res.status(404).json({error : 'cloth not found'});

        }

        res.json(cloth);
    }).catch(err => {
        console,log(err)
    })
}

