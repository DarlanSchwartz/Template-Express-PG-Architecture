import httpStatus from "http-status";

async function create(req, res) {
    return res.sendStatus(httpStatus.OK);
}

async function remove(req, res) {
    return res.sendStatus(httpStatus.OK);
}

async function update(req, res) {
    return res.sendStatus(httpStatus.OK);
}

async function patch(req, res) {
    return res.sendStatus(httpStatus.OK);
}

async function get(req, res) {
    return res.sendStatus(httpStatus.OK);
}

const SomethingController = {
    create,remove,update,patch,get
}

export default SomethingController;