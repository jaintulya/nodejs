const express = require("express");
const app = express();
app.use(express.json());


const students = [
    {
        id: 1,
        name: "Aarav Sharma",
        branch: "CSE",
        semester: 8,
        cgpa: 9.3
    },
    {
        id: 2,
        name: "Ishita Verma",
        branch: "IT",
        semester: 7,
        cgpa: 8.9
    },
    {
        id: 3,
        name: "Rohan Kulkarni",
        branch: "ECE",
        semester: 6,
        cgpa: 8.4
    },
    {
        id: 4,
        name: "Meera Iyer",
        branch: "CSE",
        semester: 8,
        cgpa: 9.1
    },
    {
        id: 5,
        name: "Kunal Deshmukh",
        branch: "IT",
        semester: 5,
        cgpa: 7.8
    },
    {
        id: 6,
        name: "Ananya Reddy",
        branch: "CSE",
        semester: 6,
        cgpa: 8.7
    },
    {
        id: 7,
        name: "Vikram Patil",
        branch: "ECE",
        semester: 7,
        cgpa: 8.2
    },
    {
        id: 8,
        name: "Priyanka Nair",
        branch: "AI",
        semester: 4,
        cgpa: 8.8
    },
    {
        id: 9,
        name: "Harsh Mehta",
        branch: "Data Science",
        semester: 5,
        cgpa: 8.0
    },
    {
        id: 10,
        name: "Neha Gupta",
        branch: "CSE",
        semester: 6,
        cgpa: 7.9
    }
];

app.get("/", (req, res) => {
    res.send("Express server is running");
});


app.get("/students", (req, res) => {
    res.status(200).json(students)
})




app.get("/students/topper", (req, res) => {
    if (students.length === 0) {
        return res.status(404).json({ message: "No Students found" });
    }

    let topperStudent = students[0];

    for (let i = 0; i < students.length; i++) {
        if (students[i].cgpa > topperStudent) {
            topperStudent = students[i].cgpa
        }
    }
    res.status(200).json(topperStudent);
})




app.get("/students/average", (req, res) => {
    if (students.length === 0) {
        return res.status(404).json({ message: "No Students found" });
    }

    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].cgpa;
    }

    let average = sum / students.length

    res.status(200).json({ averageCGPA: average });
})




app.get("/students/count", (req, res) => {
   let count = 0;

   for(let i=0;i<students.length;i++){
    count++;
   }

    res.status(200).json({ totalStudents: count });
})



app.get("/students/:id", (req, res) => {
   const id = parseInt(req.params.id);
   let foundStudent = null;

   for(let i=0;i<students.length;i++){
    if(students[i].id === id){
        foundStudent = students[i];
        break;
    }
   }

   if(!foundStudent){
      return res.status(404).json({ message: "Student not found" });
   }
    res.status(200).json(foundStudent);
})



app.get("/students/branch/:branchName", (req, res) => {
   const branchName = req.params.branchName.toLowerCase();
   let result = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].branch.toLowerCase() === branchName) {
      result.push(students[i]);
    }
  }

  res.status(200).json(result);
})


app.listen(3000, () => {
    console.log("Server started on port 3000");
});