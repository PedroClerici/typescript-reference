// Optional Chaining:
const fetchedUserData = {
  id: 'u1',
  name: 'Scott',
  // job: { title:'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);