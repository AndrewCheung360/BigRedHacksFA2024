import { redirect } from "next/navigation";

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}


export function calculateDurationInMinutes(start: Date, end: Date): number {
  // Calculate the difference in milliseconds
  const diffInMilliseconds = end.getTime() - start.getTime();

  // Convert milliseconds to minutes
  const durationInMinutes = diffInMilliseconds / (1000 * 60);

  return durationInMinutes;
}