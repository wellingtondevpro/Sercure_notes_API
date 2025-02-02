const noteRepository = require('../repositories/noteRepository');


class NoteService {

    async getAllNotes(){
        return await noteRepository.getAllNotes();
    }

    async getNotesById(id){
        return await noteRepository.getNoteById()
    }

    async createNote(noteData){
        const newNote = noteRepository.createNote(noteData)
    }

    async updateNote(id, {title, content, tag}) {
        return await noteRepository.updateNote(id, {title, content, tag})
    }
}