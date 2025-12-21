# Update HeroSection to use GIFs
# Run this after auto_convert_to_gifs.ps1 completes

Write-Host "Updating HeroSection.tsx to use GIFs..." -ForegroundColor Cyan

$heroFile = Join-Path $PSScriptRoot "src\components\HeroSection.tsx"

if (!(Test-Path $heroFile)) {
    Write-Host "Error: HeroSection.tsx not found!" -ForegroundColor Red
    exit 1
}

$content = Get-Content $heroFile -Raw

# Update Column 1 comment and paths
$content = $content -replace '// Column 1 Data: Brand Shorts \(Vertical 9:16\) - USING MP4 until GIFs are ready', '// Column 1 Data: Brand Shorts (Vertical 9:16) - Using GIFs for instant playback!'
$content = $content -replace '/videos/compreess_short_column1/Neutonic_Ad_1\.mp4', '/gifs/brand_shorts/neutonic_brand.gif'
$content = $content -replace '/videos/compreess_short_column1/DANGER_COFFEE_MINERALS_VID_APR_9X16_V1\.mp4', '/gifs/brand_shorts/danger_coffee_brand.gif'
$content = $content -replace '/videos/compreess_short_column1/ATTN_Labs_Air\.mp4', '/gifs/brand_shorts/koh_brand.gif'

# Update Column 2 comment and paths
$content = $content -replace '// Column 2 Data: Reels/Shorts \(Vertical 9:16\) - USING MP4 until GIFs are ready', '// Column 2 Data: Reels/Shorts (Vertical 9:16) - Using GIFs!'
$content = $content -replace '/videos/compressed_shorts/9-16_Coursera-business-analyst_15sec\.mp4', '/gifs/shorts/coursera_short.gif'
$content = $content -replace '/videos/compressed_shorts/short_02_Transfer_Kingdom_20k\.mp4', '/gifs/shorts/transfer_kingdom_short.gif'
$content = $content -replace '/videos/compressed_shorts/short_04_DMVAUL_21k\.mp4', '/gifs/shorts/dmvaul_short.gif'
$content = $content -replace '/videos/compressed_shorts/short_05_Spine_Surgeon_1\.07M\.mp4', '/gifs/shorts/spine_surgeon_short.gif'
$content = $content -replace '/videos/compressed_shorts/short_06_Microsoft_Tech_Giant\.mp4', '/gifs/shorts/microsoft_short.gif'
$content = $content -replace '/videos/compressed_shorts/short_07_Acer_Gaming\.mp4', '/gifs/shorts/acer_short.gif'
$content = $content -replace '/videos/compressed_shorts/short_10_MANNA_Health_Vitality\.mp4', '/gifs/shorts/manna_short.gif'

# Update Column 3 comment and paths
$content = $content -replace '// Column 3 Data: Long Videos \(Landscape 16:9\) - USING MP4 until GIFs are ready', '// Column 3 Data: Long Videos (Landscape 16:9) - Using GIFs!'
$content = $content -replace '/videos/compressed_long_videos/01_Suhit_Amin_30K_Followers\.mp4', '/gifs/long_videos/suhit_amin.gif'
$content = $content -replace '/videos/compressed_long_videos/dr_antoniowebbmd_new\.mp4', '/gifs/long_videos/dr_antonio_webb.gif'
$content = $content -replace '/videos/compressed_long_videos/03_Lifestyle_Video_Premium_30K\.mp4', '/gifs/long_videos/lukas_schanderl.gif'
$content = $content -replace '/videos/compressed_long_videos/04_Total_Tech_90K\.mp4', '/gifs/long_videos/total_tech.gif'
$content = $content -replace '/videos/compressed_long_videos/05_ALEX_YOUNG_84k\.mp4', '/gifs/long_videos/alex_young.gif'

# Save the updated file
Set-Content -Path $heroFile -Value $content -NoNewline

Write-Host "✓ HeroSection.tsx updated successfully!" -ForegroundColor Green
Write-Host "`nAll 15 videos are now replaced with GIFs!" -ForegroundColor Yellow
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "  1. Refresh your browser (Ctrl+Shift+R)" -ForegroundColor White
Write-Host "  2. Enjoy instant GIF playback with zero buffering!" -ForegroundColor White
Write-Host ""
