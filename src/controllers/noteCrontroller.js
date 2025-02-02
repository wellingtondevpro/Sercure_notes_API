const noteService = require('../services/NoteService');
const noteRepository = require("./noteCrontroller");


exports.getNote = async (req, res) => {
    const {id} = req.params;
    try{
        const note = await noteService.findById(id)
        res.send(note);
    }catch (error){
        res.status(500).send({error: error});
    }
}

exports.getAllNotes = async (req, res) => {
    try{
        const notes = await noteRepository.getAllNotes();
        res.send(notes);
    }catch (error){
        res.status(500).send({error: error});
    }
}

exports.createNote = async (req, res) => {
    const {title, content, tag} = req.body;

    try{
        const note = await noteRepository.createNote(title, content, tag);
    }catch (error){
        res.status(500).send({error: error});
    }
}


exports.updateNote = async (req, res) => {
    const {title, content, tag} = req.body
    const {id} = noteService
    try{
        const note = await noteService.updateNote(id, content, tag)
        res.status(200).json(note)
    }catch (error){
        res.status(500).send({})
    }
}
