// Import required dependencies
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import fs from "fs";
import path from "path";

export async function GET(request) {
  // Get request headers
  const headersList = await headers();
  const referer = headersList.get("referer") || "";
  const requestedFrom = headersList.get("x-requested-from") || "";

  // Define allowed origin for security (defaults to localhost in development)
  const allowedOrigin =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  //   Security check: Verify request is coming from authorized origin
  //   Prevents unauthorized direct access to the CV file
  if (
    !referer?.startsWith(allowedOrigin) ||
    !requestedFrom?.startsWith(allowedOrigin)
  ) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  try {
    // Construct the file path to the CV PDF
    const filePath = path.join(
      process.cwd(),
      "private",
      "files",
      "Lawrence_Moriango_rCV.pdf"
    );
    // Read the PDF file into a buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Return the PDF file with appropriate headers
    // - Sets content type as PDF
    // - Prevents caching to ensure latest version is always served
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "no-store, must-revalidate",
        Pragma: "no-cache",
      },
    });
  } catch (error) {
    // Handle any errors that occur during file reading
    console.error("Error serving CV:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
