const express = require("express");
const router = express.Router();
const getEmployeeWithSkills = require("../queries/employeesWithSkills");
const getSkillsByEmployeeId = require("../queries/skillsByEmployeeId")

router.get("/", (req, res) => {
  const data = getEmployeeWithSkills();
  res.json(data);
});

router.get("/:id", (req, res) => {
  const employeeId = req.params.id
  const data = getSkillsByEmployeeId(employeeId)
  res.json(data)
})


module.exports = router;