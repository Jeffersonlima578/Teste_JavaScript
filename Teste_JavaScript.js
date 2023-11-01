const courses = {
  "espanhol": {
    "iniciante": {
      "manha": [{ "id": 1 }, { "id": 2 }],
      "noite": [{ "id": 3 }, { "id": 4 }]
    },
    "avancado": {
      "manha": [{ "id": 5 }, { "id": 6 }]
    }
  },
  "ingles": {
    "avancado": {
      "manha": [{ "id": 11 }, { "id": 21 }]
    }
  }
};

function search(courses, filters) {
  const results = [];

  if (filters.length === 0) {
    
    for (let course in courses) {
      for (let level in courses[course]) {
        for (let shift in courses[course][level]) {
          results.push(...courses[course][level][shift]);
        }
      }
    }
  } else if (filters.length === 1) {
    
    const course = filters[0];
    if (courses[course]) {
      for (let level in courses[course]) {
        for (let shift in courses[course][level]) {
          results.push(...courses[course][level][shift]);
        }
      }
    }
  } else if (filters.length === 2) {
    
    const course = filters[0];
    const level = filters[1];
    if (courses[course] && courses[course][level]) {
      for (let shift in courses[course][level]) {
        results.push(...courses[course][level][shift]);
      }
    }
  } else if (filters.length === 3) {
    
    const course = filters[0];
    const level = filters[1];
    const shift = filters[2];
    if (courses[course] && courses[course][level] && courses[course][level][shift].length > 0) {
      results.push(...courses[course][level][shift]);
    }
  }

  return results;
}


console.log(search(courses, []));
// [{ id:1 },{ id:2 },{ id:3 },{ id:4 },{ id:5 },{ id:6 }, { id:11 }, { id:21 }]

// Cenário onde passa apenas curso, retorna todos os objetos daquele curso
console.log(search(courses, ['espanhol']));
// [{ id:1 },{ id:2 },{ id:3 },{ id:4 },{ id:5 },{ id:6 }]

// Cenário onde passa curso + nível, retorna todos os objetos daquele curso + nivel
console.log(search(courses, ['espanhol', 'iniciante']));
// [{ id:1 },{ id:2 },{ id:3 },{ id:4 }]

// Cenário onde passa curso + nível + turno, retorna todos os objetos daquele curso + nivel + turno
console.log(search(courses, ['espanhol', 'iniciante', 'manha']));
// [{ id:1 },{ id:2 }]

