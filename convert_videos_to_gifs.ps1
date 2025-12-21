# Video to GIF Converter Script for Hero Section
# This script converts all Hero Section videos to optimized 7-8 second GIF clips

$ErrorActionPreference = "Stop"

# Check if FFmpeg is installed
try {
    $ffmpegVersion = ffmpeg -version 2>&1 | Select-Object -First 1
    Write-Host "FFmpeg found: $ffmpegVersion" -ForegroundColor Green
}
catch {
    Write-Host "FFmpeg not found. Please install FFmpeg first:" -ForegroundColor Red
    Write-Host "  1. Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "  2. Or use: winget install ffmpeg" -ForegroundColor Yellow
    exit 1
}

# Define base paths
$publicDir = "f:\gihtub\edit_flow_portfollio\edit-flow-site\public"
$gifsDir = "$publicDir\gifs"

# Create GIF directories
$gifFolders = @(
    "$gifsDir\brand_shorts",
    "$gifsDir\shorts",
    "$gifsDir\long_videos"
)

foreach ($folder in $gifFolders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "Created: $folder" -ForegroundColor Green
    }
}

# Column 1: Brand Shorts
$brandShorts = @(
    @{src = "$publicDir\videos\compreess_short_column1\Neutonic_Ad_1.mp4"; name = "neutonic_brand" },
    @{src = "$publicDir\videos\compreess_short_column1\DANGER_COFFEE_MINERALS_VID_APR_9X16_V1.mp4"; name = "danger_coffee_brand" },
    @{src = "$publicDir\videos\compreess_short_column1\ATTN_Labs_Air.mp4"; name = "koh_brand" }
)

# Column 2: Shorts
$shorts = @(
    @{src = "$publicDir\videos\compressed_shorts\9-16_Coursera-business-analyst_15sec.mp4"; name = "coursera_short" },
    @{src = "$publicDir\videos\compressed_shorts\short_02_Transfer_Kingdom_20k.mp4"; name = "transfer_kingdom_short" },
    @{src = "$publicDir\videos\compressed_shorts\short_04_DMVAUL_21k.mp4"; name = "dmvaul_short" },
    @{src = "$publicDir\videos\compressed_shorts\short_05_Spine_Surgeon_1.07M.mp4"; name = "spine_surgeon_short" },
    @{src = "$publicDir\videos\compressed_shorts\short_06_Microsoft_Tech_Giant.mp4"; name = "microsoft_short" },
    @{src = "$publicDir\videos\compressed_shorts\short_07_Acer_Gaming.mp4"; name = "acer_short" },
    @{src = "$publicDir\videos\compressed_shorts\short_10_MANNA_Health_Vitality.mp4"; name = "manna_short" }
)

# Column 3: Long Videos
$longVideos = @(
    @{src = "$publicDir\videos\compressed_long_videos\01_Suhit_Amin_30K_Followers.mp4"; name = "suhit_amin" },
    @{src = "$publicDir\videos\compressed_long_videos\dr_antoniowebbmd_new.mp4"; name = "dr_antonio_webb" },
    @{src = "$publicDir\videos\compressed_long_videos\03_Lifestyle_Video_Premium_30K.mp4"; name = "lukas_schanderl" },
    @{src = "$publicDir\videos\compressed_long_videos\04_Total_Tech_90K.mp4"; name = "total_tech" },
    @{src = "$publicDir\videos\compressed_long_videos\05_ALEX_YOUNG_84k.mp4"; name = "alex_young" }
)

function Convert-VideoToGif {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Duration = 8,
        [int]$Width = 480,
        [int]$FPS = 15
    )

    if (!(Test-Path $InputPath)) {
        Write-Host "  Source not found: $InputPath" -ForegroundColor Red
        return $false
    }

    if (Test-Path $OutputPath) {
        Write-Host "  Already exists, skipping: $(Split-Path $OutputPath -Leaf)" -ForegroundColor Yellow
        return $true
    }

    Write-Host "  Converting: $(Split-Path $InputPath -Leaf)" -ForegroundColor Cyan
    
    $tempPalette = "$env:TEMP\palette_$(Get-Random).png"
    
    try {
        ffmpeg -y -i "$InputPath" -t $Duration -vf "fps=$FPS,scale=${Width}:-1:flags=lanczos,palettegen" "$tempPalette" 2>&1 | Out-Null
        ffmpeg -y -i "$InputPath" -i "$tempPalette" -t $Duration -filter_complex "fps=$FPS,scale=${Width}:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5" -loop 0 "$OutputPath" 2>&1 | Out-Null
        Remove-Item $tempPalette -Force -ErrorAction SilentlyContinue
        
        $sizeKB = [math]::Round((Get-Item $OutputPath).Length / 1KB, 2)
        Write-Host "  Success! Size: ${sizeKB}KB" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "  Failed: $_" -ForegroundColor Red
        return $false
    }
}

Write-Host "`n=== Converting Column 1: Brand Shorts ===" -ForegroundColor Magenta
foreach ($video in $brandShorts) {
    $output = "$gifsDir\brand_shorts\$($video.name).gif"
    Convert-VideoToGif -InputPath $video.src -OutputPath $output -Duration 7 -Width 360 -FPS 12
}

Write-Host "`n=== Converting Column 2: Shorts ===" -ForegroundColor Magenta
foreach ($video in $shorts) {
    $output = "$gifsDir\shorts\$($video.name).gif"
    Convert-VideoToGif -InputPath $video.src -OutputPath $output -Duration 8 -Width 360 -FPS 12
}

Write-Host "`n=== Converting Column 3: Long Videos ===" -ForegroundColor Magenta
foreach ($video in $longVideos) {
    $output = "$gifsDir\long_videos\$($video.name).gif"
    Convert-VideoToGif -InputPath $video.src -OutputPath $output -Duration 8 -Width 640 -FPS 15
}

Write-Host "`nAll conversions complete!" -ForegroundColor Green
Write-Host "`nGIFs created in:" -ForegroundColor Cyan
Write-Host "  $gifsDir\brand_shorts" -ForegroundColor White
Write-Host "  $gifsDir\shorts" -ForegroundColor White
Write-Host "  $gifsDir\long_videos" -ForegroundColor White
