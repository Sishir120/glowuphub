export const runtime = "edge";

export async function GET() {
    // Replace with actual direct APK link or bucket URL if available.
    // For now, redirect to the download page which has manual instructions.
    return Response.redirect("https://github.com/Sishir120/glowuphub/releases/latest", 302);
}
