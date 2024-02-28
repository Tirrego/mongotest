import mongoose from 'mongoose';

let isConnected = false;

const initMongoose = async () => {
  if (isConnected) {
    return mongoose.connection;
    
  }

  await mongoose.connect(process.env.MONGOURL);
  isConnected = true;

  return mongoose.connection;
}

export default initMongoose;