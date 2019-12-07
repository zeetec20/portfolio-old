String.prototype.format = function() {
    let defaultString = this;
    for (let index in arguments) {
        defaultString = defaultString.replace("{" + index + "}", arguments[index])
    }
    return defaultString
}