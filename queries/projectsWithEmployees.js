const db = require("../database/database.js")

// function getProjectsWithEmployees() {
//     return db.prepare
//     (
//         `
//             SELECT projects.project_name, projects.deadline, employees.first_name, employees.last_name
//             FROM projects
//             INNER JOIN employees ON projects.employee_id = employees.id
//         `
//     ).all()
// }

function getProjectsWithEmployees() {
    return db.prepare
    (
        `
            SELECT p.project_name, p.deadline, e.first_name, e.last_name
            FROM projects p
            INNER JOIN employees e 
            ON p.employee_id = e.id
        `
    ).all()
}

module.exports = getProjectsWithEmployees

