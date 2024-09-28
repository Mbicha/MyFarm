class AppError{
    constructor(code, message){
        this.code = code,
        this.message = message
    }

    getCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }

    setMessage(newMessage){
        this.message = newMessage;
    }

    setCode(newCode){
        this.code = newCode
    }
}

export default AppError;
