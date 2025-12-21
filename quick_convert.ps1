# Quick GIF Converter - Uses system FFmpeg
$ffmpeg = "C:\Program Files\SteelSeries\GG\apps\moments\ffmpeg.exe"

if (!(Test-Path $ffmpeg)) {
    Write-Host "FFmpeg not found at: $ffmpeg" -ForegroundColor Red
    Write-Host "Please close and reopen PowerShell, then run: .\convert_videos_to_gifs.ps1" -ForegroundColor Yellow
    exit 1
}

Write-Host "Using FFmpeg from: $ffmpeg" -ForegroundColor Green
Write-Host ""

$publicDir = "f:\gihtub\edit_flow_portfollio\edit-flow-site\public"
$gifsDir = "$publicDir\gifs"

# Create directories
@("$gifsDir\brand_shorts", "$gifsDir\shorts", "$gifsDir\long_videos") | ForEach-Object {
    if (!(Test-Path $_)) {
        New-Item -ItemType Directory -Path $_ -Force | Out-Null
        Write-Host "Created: $_" -ForegroundColor Green
    }
}

function Convert-ToGif {
    param($input, $output, $dur, $width, $fps)
    
    if (Test-Path $output) {
        Write-Host "  [SKIP] $(Split-Path $output -Leaf)" -ForegroundColor Yellow
        return
    }
    
    if (!(Test-Path $input)) {
        Write-Host "  [ERROR] Not found: $input" -ForegroundColor Red
        return
    }
    
    Write-Host "  [CONVERTING] $(Split-Path $input -Leaf)..." -ForegroundColor Cyan
    
    $palette = "$env:TEMP\pal_$(Get-Random).png"
    
    try {
        & $ffmpeg -y -i $input -t $dur -vf "fps=$fps,scale=${width}:-1:flags=lanczos,palettegen" $palette 2>&1 | Out-Null
        & $ffmpeg -y -i $input -i $palette -t $dur -filter_complex "fps=$fps,scale=${width}:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5" -loop 0 $output 2>&1 | Out-Null
        Remove-Item $palette -Force -ErrorAction SilentlyContinue
        
        $sizeKB = [math]::Round((Get-Item $output).Length / 1KB, 2)
        Write-Host "  [SUCCESS] ${sizeKB} KB" -ForegroundColor Green
    }
    catch {
        Write-Host "  [FAILED] $_" -ForegroundColor Red
    }
}

Write-Host "`n=== Column 1: Brand Shorts ===" -ForegroundColor Magenta
Convert-ToGif "$publicDir\videos\compreess_short_column1\Neutonic_Ad_1.mp4" "$gifsDir\brand_shorts\neutonic_brand.gif" 7 360 12
Convert-ToGif "$publicDir\videos\compreess_short_column1\DANGER_COFFEE_MINERALS_VID_APR_9X16_V1.mp4" "$gifsDir\brand_shorts\danger_coffee_brand.gif" 7 360 12
Convert-ToGif "$publicDir\videos\compreess_short_column1\ATTN_Labs_Air.mp4" "$gifsDir\brand_shorts\koh_brand.gif" 7 360 12

Write-Host "`n=== Column 2: Shorts ===" -ForegroundColor Magenta
Convert-ToGif "$publicDir\videos\compressed_shorts\9-16_Coursera-business-analyst_15sec.mp4" "$gifsDir\shorts\coursera_short.gif" 8 360 12
Convert-ToGif "$publicDir\videos\compressed_shorts\short_02_Transfer_Kingdom_20k.mp4" "$gifsDir\shorts\transfer_kingdom_short.gif" 8 360 12
Convert-ToGif "$publicDir\videos\compressed_shorts\short_04_DMVAUL_21k.mp4" "$gifsDir\shorts\dmvaul_short.gif" 8 360 12
Convert-ToGif "$publicDir\videos\compressed_shorts\short_05_Spine_Surgeon_1.07M.mp4" "$gifsDir\shorts\spine_surgeon_short.gif" 8 360 12
Convert-ToGif "$publicDir\videos\compressed_shorts\short_06_Microsoft_Tech_Giant.mp4" "$gifsDir\shorts\microsoft_short.gif" 8 360 12
Convert-ToGif "$publicDir\videos\compressed_shorts\short_07_Acer_Gaming.mp4" "$gifsDir\shorts\acer_short.gif" 8 360 12
Convert-ToGif "$publicDir\videos\compressed_shorts\short_10_MANNA_Health_Vitality.mp4" "$gifsDir\shorts\manna_short.gif" 8 360 12

Write-Host "`n=== Column 3: Long Videos ===" -ForegroundColor Magenta
Convert-ToGif "$publicDir\videos\compressed_long_videos\01_Suhit_Amin_30K_Followers.mp4" "$gifsDir\long_videos\suhit_amin.gif" 8 640 15
Convert-ToGif "$publicDir\videos\compressed_long_videos\dr_antoniowebbmd_new.mp4" "$gifsDir\long_videos\dr_antonio_webb.gif" 8 640 15
Convert-ToGif "$publicDir\videos\compressed_long_videos\03_Lifestyle_Video_Premium_30K.mp4" "$gifsDir\long_videos\lukas_schanderl.gif" 8 640 15
Convert-ToGif "$publicDir\videos\compressed_long_videos\04_Total_Tech_90K.mp4" "$gifsDir\long_videos\total_tech.gif" 8 640 15
Convert-ToGif "$publicDir\videos\compressed_long_videos\05_ALEX_YOUNG_84k.mp4" "$gifsDir\long_videos\alex_young.gif" 8 640 15

Write-Host "`n=== COMPLETE ===" -ForegroundColor Green
Write-Host "GIFs created in public/gifs/" -ForegroundColor Cyan
Write-Host "Now update HeroSection.tsx to use the GIF paths!" -ForegroundColor Yellow
