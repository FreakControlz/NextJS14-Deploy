// import { sql } from '@vercel/postgres';
// import moment from 'moment';

// export async function getWeekTraining() {
//   let weeknumber = moment().week();

//   try {
//     const result = await sql`SELECT * FROM trainingsprint WHERE weeknummer = ${weeknumber}`;
//     return result; // Return the rows directly
//   } catch (error) {
//     console.error("Error fetching week training data:", error);
//     return []; // Handle error by returning null or an empty array
//   }
// }