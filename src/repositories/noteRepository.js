const Note = require("../models/NoteModel");

class NoteRepository {
    async getAllNotes(){
        return await Note.find();
    }

    async getNoteById(id){
        return await Note.findById(id);
    }

    async createNote(title, content, tag){
        const newNote = new Note(title, content, tag)
        return await  newNote.save();
    }

    async updateNote(id, {title, content, tag}){
        return Note.findByIdAndUpdate(id,{title, content, tag})
    }

    async delete(id){
        return Note.findByIdAndDelete(id)
    }
}

module.exports = new NoteRepository();