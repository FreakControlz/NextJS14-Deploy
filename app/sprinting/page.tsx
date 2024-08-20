import { DataTable } from "../../components/DataTable";
import { Columns } from "../../components/Columns";
async function getWeekTraining() {
  const response = await fetch('http://localhost:3000/api/WeekTraining', { method: 'GET' });

  // Check if the response is okay (status code 200-299)
  if (!response.ok) {
    throw new Error(`Failed to fetch week training data: ${response.statusText}`);
  }

  // Parse the JSON data
  const data = await response.json();

  // Return the rows array from the result or null if empty
  return data.result?.rows || [];
}

export default async function Sprinting() {
  try {
    const weekTraining = await getWeekTraining();

    // Handle the case where the rows array is empty
    if (weekTraining.length === 0) {
      return (
        <main>
          <h1>Sprinting</h1>
          <p>No training data available for this week.</p>
        </main>
      );
    }
    // Return the training data starts here:
  return (
    <>
      <main className="flex  min-w-screen min-h-screen flex-col items-center justify-between p-12">
        <DataTable columns={Columns} data={weekTraining} />
     </main>
    </>
  );
} catch (error) {
  console.error('Error fetching week training:', error);

  return (
    <main>
      <h1>Sprinting</h1>
      <p>Failed to load training data.</p>
    </main>
  );

  
}

}
