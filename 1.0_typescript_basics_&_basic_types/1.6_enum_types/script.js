// Enum Types in TypeScript:
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var user = {
    name: 'Scott',
    password: '...',
    role: Role.ADMIN
};
if (user.role === Role.ADMIN) {
    console.log("The user ".concat(user.name, " is a admin"));
}
