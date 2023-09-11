import ErrorType from "../../Utils/ErrorTypes.js";

async function create(params){
    const error = false;
    if(error) throw { type: ErrorType.UNPROCESSABLE, message: `Some message` };

    return null;
}

async function find(id) {
    const error = false;
    
    if(error) throw { type: ErrorType.UNPROCESSABLE, message: `Some message` };
    return null;
}

const SomethingService = {create,find}

export default SomethingService;