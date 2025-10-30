const db = require("../database/database.js");

function getEmployeeWithSkills() {
  return db
    .prepare(
      `SELECT e.first_name, e.last_name, s.name AS skill
        FROM employees e
        INNER JOIN employee_skills es ON e.id = es.employee_id
        INNER JOIN skills s ON es.skill_id = s.id
        `
    )
    .all();
}

module.exports = getEmployeeWithSkills;
