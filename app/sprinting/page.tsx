import { DataTable } from "../../components/DataTable";
import { Columns } from "../../components/Columns";
async function getWeekTraining() {
  const response = await fetch('https://next-js-14-deploy-ov4nfd3vq-florian-van-der-dussens-projects.vercel.app/api/WeekTraining', { method: 'GET' });

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
      <main className="lg:flex  lg:min-w-screen lg:min-h-screen lg:flex-col items-center justify-between lg:p-12 px-3 ">
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
