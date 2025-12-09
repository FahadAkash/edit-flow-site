import os
from pathlib import Path
import time

try:
    from pytubefix import YouTube
except ImportError:
    print("Installing pytubefix...")
    os.system("pip install pytubefix")
    from pytubefix import YouTube

def download_video(url, output_path="downloads"):
    """
    Download a YouTube video to the specified folder.
    
    Args:
        url (str): YouTube video URL
        output_path (str): Folder path where video will be saved
    
    Returns:
        bool: True if successful, False otherwise
    """
    try:
        # Create output directory if it doesn't exist
        Path(output_path).mkdir(parents=True, exist_ok=True)
        
        print(f"\nFetching video info from: {url}")
        yt = YouTube(url)
        
        # Display video information
        print(f"Title: {yt.title}")
        print(f"Duration: {yt.length} seconds")
        
        # Get the highest resolution stream
        stream = yt.streams.get_highest_resolution()
        
        print(f"Downloading: {stream.resolution} - {stream.mime_type}")
        
        # Download the video
        stream.download(output_path=output_path)
        
        print(f"✓ Download completed: {yt.title}")
        return True
        
    except Exception as e:
        print(f"✗ Error downloading {url}: {str(e)}")
        return False

def download_multiple_videos(urls, output_path="downloads"):
    """
    Download multiple YouTube videos from a list of URLs.
    
    Args:
        urls (list): List of YouTube video URLs
        output_path (str): Folder path where videos will be saved
    """
    total = len(urls)
    successful = 0
    failed = 0
    
    print(f"Starting download of {total} videos...")
    print(f"Output folder: {os.path.abspath(output_path)}")
    print("=" * 60)
    
    for i, url in enumerate(urls, 1):
        print(f"\n[{i}/{total}] Processing video...")
        
        if download_video(url, output_path):
            successful += 1
        else:
            failed += 1
        
        # Small delay to avoid rate limiting
        if i < total:
            time.sleep(2)
    
    print("\n" + "=" * 60)
    print(f"Download Summary:")
    print(f"  Total videos: {total}")
    print(f"  Successful: {successful}")
    print(f"  Failed: {failed}")
    print(f"\nAll videos saved to: {os.path.abspath(output_path)}")

if __name__ == "__main__":
    # Your list of YouTube URLs
    video_urls = [
        "https://youtu.be/84bPjnTG6hg",
        "https://youtube.com/shorts/I4DfnXOWu6E",
        "https://youtube.com/shorts/dRfEYs-SFPE",
        "https://youtube.com/shorts/CSw91MyV5Ig"
    ]
    
    # Remove duplicate URL (705h0CtyRSc appears twice)
    video_urls = list(dict.fromkeys(video_urls))
    
    # Specify output folder
    output_folder = "youtube_downloads"
    
    # Start downloading
    download_multiple_videos(video_urls, output_folder)