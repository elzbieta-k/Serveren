const db = require("../database/database");

function getSkillsByEmployeeId(employeeId) {
  return db
    .prepare(
      `
        SELECT s.name as skill
        FROM employee_skills es
        INNER JOIN skills s
        ON es.skill_id = s.id
        WHERE es.employee_id = ?
        `
    )
    .all(employeeId);
}

module.exports = getSkillsByEmployeeId;
