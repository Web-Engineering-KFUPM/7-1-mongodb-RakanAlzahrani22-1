import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb+srv://RAKAN:RAK_22KFUPM_2004@cluster0.mrhezwr.mongodb.net/TestDB"
  );
  console.log("Connected to MongoDB");
  await mongoose.disconnect();
  console.log("Disconnected");
} catch (error) {
  console.error(error);
}import mongoose from "mongoose";

// establish connection
await mongoose.connect(
  "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.mrhezwr.mongodb.net/TestDB"
);
console.log("Connected to MongoDB");

// define schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String
});

const Student = mongoose.model("Student", studentSchema);

// create document
async function createStudents() {
  await Student.insertMany([
    { name: "Ali", age: 21, major: "CS" },
    { name: "Sara", age: 23, major: "SE" }
  ]);
  console.log("✅ Inserted");
}

// read document
async function readStudents() {
  const all = await Student.find();
  console.log(all);
}

// update document
async function updateStudent() {
  await Student.updateOne({ name: "Ali" }, { age: 22 });
  console.log("✅ Updated Ali");
}

// delete document
async function deleteStudent() {
  await Student.deleteOne({ name: "Sara" });
  console.log("✅ Deleted Sara");
}

// run in order
await createStudents();
await readStudents();
await updateStudent();
await deleteStudent();

await mongoose.disconnect();
console.log("Disconnected");