import mongoose from 'mongoose';



async function connect() {
    try {
        await mongoose.connect('mongodb+srv://chauquyen1233:A0YvOBn5y3FwBVCE@cluster0.kb6mf.mongodb.net/wien_lam_database?retryWrites=true&w=majority')
        console.log('connect successfuly!!!')
    } catch (error) {
        console.log('connect failure', error)
    }


}
export default connect;
