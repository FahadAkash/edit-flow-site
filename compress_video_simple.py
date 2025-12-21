import imageio.v2 as imageio
import numpy as np
import os

# Define input and output paths
input_path = "public/videos/compressed_shorts/9-16 Coursera-busniess-analyst.mp4"
output_path = "public/videos/compressed_shorts/9-16_Coursera-business-analyst_15sec.mp4"

# Check if input file exists
if not os.path.exists(input_path):
    print(f"Input file not found: {input_path}")
    exit(1)

print("Processing video...")

# Read the video
reader = imageio.get_reader(input_path)

# Get video metadata
fps = reader.get_meta_data()['fps']
print(f"Original video FPS: {fps}")

# Calculate number of frames for 15 seconds
frames_needed = int(15 * fps)
print(f"Frames needed for 15 seconds: {frames_needed}")

# Create writer for output video
writer = imageio.get_writer(output_path, fps=fps)

# Process frames
frame_count = 0
for frame in reader:
    if frame_count >= frames_needed:
        break
    
    # Write frame to output video
    writer.append_data(frame)
    frame_count += 1
    
    if frame_count % 30 == 0:  # Progress indicator
        print(f"Processed {frame_count} frames...")

# Close readers and writers
reader.close()
writer.close()

print(f"Video processed successfully! Saved {frame_count} frames to: {output_path}")