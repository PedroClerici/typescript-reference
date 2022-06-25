// Enum Types in TypeScript:

enum Role { ADMIN, READ_ONLY, AUTHOR };

const user = {
  name: 'Scott',
  password: '...',
  role: Role.ADMIN,
};

if (user.role === Role.ADMIN) {
  console.log(`The user ${user.name} is a admin.`);
}