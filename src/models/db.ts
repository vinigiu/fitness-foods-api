require('dotenv').config();
import * as mongoose from 'mongoose';

export let dbStatus: string;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const db = mongoose.connection;
    
    db.on('error', () => {
      dbStatus = 'Conexão inoperante'
    });
    db.once('open', () => {
      dbStatus = 'Conexão operando'
    });

    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;