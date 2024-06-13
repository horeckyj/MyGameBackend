export const CreateError = (status, message) => {
    const err = new Error();
    err.statur = status;
    err.message = message;
    return err;
}