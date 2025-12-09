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
        "https://youtube.com/shorts/znnEzV2Qg3k?feature=share",
        "https://youtube.com/shorts/P607YNcJB_Y?feature=share",
        "https://youtube.com/shorts/UC_ZDK12twU?feature=share",
        "https://youtube.com/shorts/E3GvLiB8jJc?feature=share",
        "https://www.youtube.com/watch?v=l2fqM7kAloU&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=35&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=9laQbHLnczY&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=1&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=agsjS22hjlU&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=2&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=hxwegX1x6uk&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=3&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=fVg5M5sCFws&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=4&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=T-opIb5aC7Q&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=5&pp=gAQBiAQB",
        "https://youtu.be/n31V5HG5dgI?list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW",
        "https://www.youtube.com/watch?v=MTqdQoZdNRo&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=14&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=4t0golxJb8A&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=19&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=705h0CtyRSc&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=28&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=91O4UvjuKr8&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=30&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=QoRRyLNo4-s&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=32&pp=gAQBiAQB",
        "https://www.youtube.com/watch?v=_PrR7VWPTas&list=PLugQ8yL8yep9Ao2QvnOLq6bn68H0dXPIW&index=34&pp=gAQBiAQB",
    ]
    
    # Remove duplicate URL (705h0CtyRSc appears twice)
    video_urls = list(dict.fromkeys(video_urls))
    
    # Specify output folder
    output_folder = "youtube_downloads"
    
    # Start downloading
    download_multiple_videos(video_urls, output_folder)