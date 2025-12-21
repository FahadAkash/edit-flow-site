# GIF Converter using System FFmpeg (Chocolatey)
$ffmpegExe = "C:\ProgramData\chocolatey\bin\ffmpeg.exe"
$projectRoot = $PSScriptRoot
$publicDir = Join-Path $projectRoot "public"
$gifsDir = Join-Path $publicDir "gifs"

Write-Host "============================"
Write-Host "  Video to GIF Converter"
Write-Host "============================"

# Check FFmpeg
if (Test-Path $ffmpegExe) {
    Write-Host "✓ FFmpeg found: $ffmpegExe" -ForegroundColor Green
}
elseif (Get-Command ffmpeg -ErrorAction SilentlyContinue) {
    $ffmpegExe = "ffmpeg"
    Write-Host "✓ FFmpeg found in PATH" -ForegroundColor Green
}
else {
    Write-Host "✗ FFmpeg not found!" -ForegroundColor Red
    exit 1
}

# Create folders
@("brand_shorts", "shorts", "long_videos", "carousel_shorts") | ForEach-Object {
    $path = Join-Path $gifsDir $_
    if (!(Test-Path $path)) { New-Item -ItemType Directory -Path $path -Force | Out-Null }
}

function Convert($in, $out, $dur, $w, $fps) {
    if (Test-Path $out) { return }
    $fullIn = Join-Path $projectRoot "public$in"
    if (!(Test-Path $fullIn)) { Write-Host "Not found: $fullIn"; return }
    
    Write-Host "Converting: $(Split-Path $fullIn -Leaf)" -ForegroundColor Cyan
    $pal = "$env:TEMP\pal_$(Get-Random).png"
    
    try {
        & $ffmpegExe -y -i "$fullIn" -t $dur -vf "fps=$fps,scale=${w}:-1:flags=lanczos,palettegen" "$pal" 2>&1 | Out-Null
        & $ffmpegExe -y -i "$fullIn" -i "$pal" -t $dur -filter_complex "fps=$fps,scale=${w}:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5" -loop 0 "$out" 2>&1 | Out-Null
        if (Test-Path $pal) { Remove-Item $pal -Force }
        Write-Host "Success!" -ForegroundColor Green
    }
    catch {
        Write-Host "Error: $_" -ForegroundColor Red
    }
}

# Hero Section - Column 1
Convert "\videos\compreess_short_column1\Neutonic_Ad_1.mp4" "$gifsDir\brand_shorts\neutonic_brand.gif" 7 360 12
Convert "\videos\compreess_short_column1\DANGER_COFFEE_MINERALS_VID_APR_9X16_V1.mp4" "$gifsDir\brand_shorts\danger_coffee_brand.gif" 7 360 12
Convert "\videos\compreess_short_column1\ATTN_Labs_Air.mp4" "$gifsDir\brand_shorts\koh_brand.gif" 7 360 12

# Hero Section - Column 2
Convert "\videos\compressed_shorts\9-16_Coursera-business-analyst_15sec.mp4" "$gifsDir\shorts\coursera_short.gif" 8 360 12
Convert "\videos\compressed_shorts\short_02_Transfer_Kingdom_20k.mp4" "$gifsDir\shorts\transfer_kingdom_short.gif" 8 360 12
Convert "\videos\compressed_shorts\short_04_DMVAUL_21k.mp4" "$gifsDir\shorts\dmvaul_short.gif" 8 360 12
Convert "\videos\compressed_shorts\short_05_Spine_Surgeon_1.07M.mp4" "$gifsDir\shorts\spine_surgeon_short.gif" 8 360 12
Convert "\videos\compressed_shorts\short_06_Microsoft_Tech_Giant.mp4" "$gifsDir\shorts\microsoft_short.gif" 8 360 12
Convert "\videos\compressed_shorts\short_07_Acer_Gaming.mp4" "$gifsDir\shorts\acer_short.gif" 8 360 12
Convert "\videos\compressed_shorts\short_10_MANNA_Health_Vitality.mp4" "$gifsDir\shorts\manna_short.gif" 8 360 12

# Hero Section - Column 3
Convert "\videos\compressed_long_videos\01_Suhit_Amin_30K_Followers.mp4" "$gifsDir\long_videos\suhit_amin.gif" 8 640 15
Convert "\videos\compressed_long_videos\dr_antoniowebbmd_new.mp4" "$gifsDir\long_videos\dr_ant_webb.gif" 8 640 15
Convert "\videos\compressed_long_videos\03_Lifestyle_Video_Premium_30K.mp4" "$gifsDir\long_videos\lukas_schanderl.gif" 8 640 15
Convert "\videos\compressed_long_videos\04_Total_Tech_90K.mp4" "$gifsDir\long_videos\total_tech.gif" 8 640 15
Convert "\videos\compressed_long_videos\05_ALEX_YOUNG_84k.mp4" "$gifsDir\long_videos\alex_young.gif" 8 640 15

# Reels Carousel Section (16 videos from /video/)
Write-Host "`nConverting Carousel Videos..." -ForegroundColor Yellow
$carouselVideos = @(
    "Aliyah hook 5.mp4", "Compton ALV1.mp4", "Dr Lockhart S 01.mp4", "Elijah Kanoho 9 16.mp4",
    "Finished Track Video.mp4", "Formula 1 Principle.mp4", "Getking ALV.mp4", "Law firm owners 2.mp4",
    "Life Style Vlog Style video.mp4", "Mastering Devin Style.mp4", "Nano Tech.mp4", "Proven System Finale.mp4",
    "Real estate.mp4", "Thrive Revival Walmart.mp4", "testimonial lockhart.mp4", "videoplayback_2.mp4"
)

foreach ($vid in $carouselVideos) {
    $outName = ($vid -replace " ", "_").ToLower() -replace "\.mp4$", ".gif"
    Convert "\video\$vid" "$gifsDir\carousel_shorts\$outName" 7 320 12
}

Write-Host "DONE!" -ForegroundColor Yellow
