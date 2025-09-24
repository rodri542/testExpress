class professsorsController {
    constructor() {}

    consult(req, res) {
        res.json({ msg: 'professors consult'});
    }

    consultById(req, res) {
        res.json({ msg: 'professor consult by id'});
    }


    create(req, res) {
        res.json({ msg: 'professor created'});
    }

    update(req, res) {
        res.json({ msg: 'professor updated'});
    }

    delete(req, res) {
        res.json({ msg: 'professor deleted'});
    }
}
export const professorController = new professsorsController();