import { WEB3FORMS_ACCESS_KEY } from "./data";

export type SubmitResult = { success: boolean; message: string };

export async function submitToWeb3Forms(fields: Record<string, string>): Promise<SubmitResult> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    });
    const data = await res.json();
    return { success: Boolean(data.success), message: data.message ?? "" };
  } catch {
    return { success: false, message: "Network error. Please check your connection and try again." };
  }
}
