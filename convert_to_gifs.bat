@echo off
setlocal enabledelayedexpansion

echo ====================================
echo Video to GIF Converter
echo ====================================
echo.

:: Check for FFmpeg
where ffmpeg >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] FFmpeg not found!
    echo Please install FFmpeg first:
    echo   Option 1: winget install ffmpeg
    echo   Option 2: Download from https://ffmpeg.org
    pause
    exit /b 1
)

echo [OK] FFmpeg found
echo.

:: Create directories
set "BASE_DIR=%~dp0public\gifs"
mkdir "%BASE_DIR%\brand_shorts" 2>nul
mkdir "%BASE_DIR%\shorts" 2>nul
mkdir "%BASE_DIR%\long_videos" 2>nul

echo Created GIF directories
echo.

:: Column 1: Brand Shorts (3 videos, 7 seconds, 360px wide)
echo === Converting Column 1: Brand Shorts ===
call :convert_gif "public\videos\compreess_short_column1\Neutonic_Ad_1.mp4" "public\gifs\brand_shorts\neutonic_brand.gif" 7 360 12
call :convert_gif "public\videos\compreess_short_column1\DANGER_COFFEE_MINERALS_VID_APR_9X16_V1.mp4" "public\gifs\brand_shorts\danger_coffee_brand.gif" 7 360 12
call :convert_gif "public\videos\compreess_short_column1\ATTN_Labs_Air.mp4" "public\gifs\brand_shorts\koh_brand.gif" 7 360 12
echo.

:: Column 2: Shorts (7 videos, 8 seconds, 360px wide)
echo === Converting Column 2: Shorts ===
call :convert_gif "public\videos\compressed_shorts\9-16_Coursera-business-analyst_15sec.mp4" "public\gifs\shorts\coursera_short.gif" 8 360 12
call :convert_gif "public\videos\compressed_shorts\short_02_Transfer_Kingdom_20k.mp4" "public\gifs\shorts\transfer_kingdom_short.gif" 8 360 12
call :convert_gif "public\videos\compressed_shorts\short_04_DMVAUL_21k.mp4" "public\gifs\shorts\dmvaul_short.gif" 8 360 12
call :convert_gif "public\videos\compressed_shorts\short_05_Spine_Surgeon_1.07M.mp4" "public\gifs\shorts\spine_surgeon_short.gif" 8 360 12
call :convert_gif "public\videos\compressed_shorts\short_06_Microsoft_Tech_Giant.mp4" "public\gifs\shorts\microsoft_short.gif" 8 360 12
call :convert_gif "public\videos\compressed_shorts\short_07_Acer_Gaming.mp4" "public\gifs\shorts\acer_short.gif" 8 360 12
call :convert_gif "public\videos\compressed_shorts\short_10_MANNA_Health_Vitality.mp4" "public\gifs\shorts\manna_short.gif" 8 360 12
echo.

:: Column 3: Long Videos (5 videos, 8 seconds, 640px wide)
echo === Converting Column 3: Long Videos ===
call :convert_gif "public\videos\compressed_long_videos\01_Suhit_Amin_30K_Followers.mp4" "public\gifs\long_videos\suhit_amin.gif" 8 640 15
call :convert_gif "public\videos\compressed_long_videos\dr_antoniowebbmd_new.mp4" "public\gifs\long_videos\dr_antonio_webb.gif" 8 640 15
call :convert_gif "public\videos\compressed_long_videos\03_Lifestyle_Video_Premium_30K.mp4" "public\gifs\long_videos\lukas_schanderl.gif" 8 640 15
call :convert_gif "public\videos\compressed_long_videos\04_Total_Tech_90K.mp4" "public\gifs\long_videos\total_tech.gif" 8 640 15
call :convert_gif "public\videos\compressed_long_videos\05_ALEX_YOUNG_84k.mp4" "public\gifs\long_videos\alex_young.gif" 8 640 15
echo.

echo ====================================
echo All conversions complete!
echo ====================================
echo GIFs saved to:
echo   - public\gifs\brand_shorts
echo   - public\gifs\shorts
echo   - public\gifs\long_videos
echo.
pause
exit /b 0

:convert_gif
set "input=%~1"
set "output=%~2"
set "duration=%~3"
set "width=%~4"
set "fps=%~5"

if exist "%output%" (
    echo [SKIP] %output% already exists
    exit /b 0
)

if not exist "%input%" (
    echo [ERROR] Source not found: %input%
    exit /b 1
)

echo [CONVERTING] %input%

:: Generate palette
set "palette=%TEMP%\palette_%RANDOM%.png"
ffmpeg -y -i "%input%" -t %duration% -vf "fps=%fps%,scale=%width%:-1:flags=lanczos,palettegen" "%palette%" >nul 2>&1

:: Create GIF with palette
ffmpeg -y -i "%input%" -i "%palette%" -t %duration% -filter_complex "fps=%fps%,scale=%width%:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5" -loop 0 "%output%" >nul 2>&1

:: Clean up
del "%palette%" >nul 2>&1

if exist "%output%" (
    for %%F in ("%output%") do set "size=%%~zF"
    set /a "sizeKB=!size! / 1024"
    echo [SUCCESS] Created: !sizeKB! KB
) else (
    echo [ERROR] Failed to create GIF
)

exit /b 0
