// app/api/pyq/route.js
import { google } from 'googleapis';

export async function GET(req) {
  try {
    // Authenticate with Google Sheets API
    const auth = await google.auth.getClient({
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS, // Path to your credentials
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.SHEET_ID1; // Your Google Sheet ID
    const range = 'Sheet1!A:F'; // Adjust based on your sheet structure

    // Fetch data from Google Sheets
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // Process the data
    const notes = response.data.values.slice(1).map((row) => ({
      id: row[0],          // Assuming the ID is in the first column
      department: row[1],  // Department in the second column
      semester: row[2],    // Semester in the third column
      subject: row[3],     // Subject in the fourth column
      note: row[4],        // Note in the fifth column
      link: row[5],        // Link in the sixth column
    }));

    return new Response(JSON.stringify(notes), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}