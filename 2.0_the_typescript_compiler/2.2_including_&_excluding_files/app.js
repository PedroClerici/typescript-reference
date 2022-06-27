"use strict";
// The "never" type in TypeScript:
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error has ocurred', 500);
