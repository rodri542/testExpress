class studentsControllers {
    constructor() {}

    consult(req, res) {
        res.json({ msg: 'students consult'});
    }

    consultById(req, res) {
        const { id } = req.params;
        res.json({ msg: `students consult by id: ${id}`});
    }


    create(req, res) {
        res.json({ msg: 'students created'});
    }

    update(req, res) {
        res.json({ msg: 'students updated'});
    }

    delete(req, res) {
        res.json({ msg: 'students deleted'});
    }
}
export const studentsController = new studentsControllers();