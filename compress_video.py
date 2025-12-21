from moviepy.editor import VideoFileClip
import os

# Define input and output paths
input_path = "public/videos/compressed_shorts/9-16 Coursera-busniess-analyst.mp4"
output_path = "public/videos/compressed_shorts/9-16_Coursera-business-analyst_15sec.mp4"

# Check if input file exists
if not os.path.exists(input_path):
    print(f"Input file not found: {input_path}")
    exit(1)

# Load the video
print("Loading video...")
clip = VideoFileClip(input_path)

# Crop to 15 seconds
print("Cropping to 15 seconds...")
cropped_clip = clip.subclip(0, 15)

# Write the result with compression
print("Compressing and saving video...")
cropped_clip.write_videofile(
    output_path,
    codec='libx264',
    audio_codec='aac',
    temp_audiofile='temp-audio.m4a',
    remove_temp=True,
    bitrate="500k"  # Lower bitrate for compression
)

print(f"Video processed successfully! Saved to: {output_path}")