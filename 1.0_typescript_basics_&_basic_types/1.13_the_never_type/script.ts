// The "never" type in TypeScript:
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error has ocurred', 500);
