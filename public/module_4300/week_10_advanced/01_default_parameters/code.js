// The old way

function activityLog(name, activity) {
  console.log(`${name} loves ${activity}`);
}

activityLog('Martin', 'Baseball');


// Default parameters

function logActivity(name = 'Princess Zelda', activity = 'Archery') {
  console.log(`${name} loves ${activity}`);
}

logActivity();
logActivity('Martin');

// These values, can also be objects

let defaultPerson = {
  name: {
    first: 'Princess',
    last: 'Zelda'
  },
  activity: 'Archery'
}

function objectlog(person = defaultPerson) {
  console.log(`${person.name.first} ${person.name.last} loves ${person.activity}`);
}

objectlog()