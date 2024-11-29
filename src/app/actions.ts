"use server";

import { google } from "googleapis";
import { get } from "@vercel/edge-config";

export const saveContactForm = async (data: {
  email: string;
  name: string;
  message: string;
}) => {
  const rowValues = [[data.name, data.email, data.message]];
  const range = "machinlabs";

  try {
    const googleApplicationCredentials = (await get(
      "google_application_credentials"
    )) as {
      type: string;
      project_id: string;
      private_key_id: string;
      private_key: string;
      client_email: string;
      client_id: string;
      auth_uri: string;
      token_uri: string;
      auth_provider_x509_cert_url: string;
      client_x509_cert_url: string;
      universe_domain: string;
    };

    const auth = await google.auth.getClient({
      credentials: googleApplicationCredentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: range,
      valueInputOption: "RAW",
      requestBody: { values: rowValues },
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
