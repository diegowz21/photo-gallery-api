"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    await (0, mongoose_1.connect)('mongodb+srv://admin:Hellol4nd@democluster.gnkx1.mongodb.net/galleryapp?retryWrites=true&w=majority', {});
    console.log('Database is connected');
}
exports.startConnection = startConnection;
