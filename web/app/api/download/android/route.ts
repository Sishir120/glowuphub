export const runtime = "edge";

export async function GET() {
    // Redirect to the staged APK file in the public/downloads folder
    return Response.redirect("https://glowuphub.com/downloads/glowuphub.apk", 302);
}
