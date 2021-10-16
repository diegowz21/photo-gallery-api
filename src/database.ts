import { connect } from 'mongoose';

export async function startConnection() {
    await connect('mongodb+srv://admin:Hellol4nd@democluster.gnkx1.mongodb.net/galleryapp?retryWrites=true&w=majority', {
    });
    console.log('Database is connected');
}

  