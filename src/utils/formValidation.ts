interface InputStatus {
    name?: string;
    message?: string;
    email?: string;
  };

function checkStatus(inputStatus: InputStatus) {
    return (
        checkName(inputStatus.name) &&
        checkEmail(inputStatus.email) &&
        checkMessage(inputStatus.message)
    );
}

function checkName(name?: string) {
    if (name) {
        return true;
    } else {
        throw new Error("name is missing mate!");
    }
}

function checkEmail(email?: string) {
    if (email) {
        return true;
    } else {
        throw new Error("email is missing mate, thats a must!");
    }
}

function checkMessage(message?: string) {
    if (message) {
        return true;
    } else {
        throw new Error("What's up, Doc? What do you need?");
    }
}

export default checkStatus