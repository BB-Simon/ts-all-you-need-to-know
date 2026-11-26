import { users } from "@/services/user.service.js";

const count = users.length;
console.log(users);
console.log(`There are ${count + 5} users in the system.`);
