// Intersection types:
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
}

// Intersection type example:
type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
  name: 'Mario',
  privileges: ['create-server'],
  startDate: new Date(),
}