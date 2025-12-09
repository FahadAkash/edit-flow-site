import yt_dlp
import requests
from bs4 import BeautifulSoup
import json
import re

# ----------------------------------------------------------
# YOUTUBE SCRAPER
# ----------------------------------------------------------
def scrape_youtube(url):
    ydl_opts = {
        "quiet": True,
        "extract_flat": True,
        "skip_download": True
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            data = ydl.extract_info(url, download=False)

        channel_name = data.get("title")
        subs = data.get("channel_follower_count")
        shorts_link = None

        # detect shorts
        if "entries" in data:
            for item in data["entries"]:
                if item and "shorts" in item.get("url", "").lower():
                    shorts_link = f"https://www.youtube.com/shorts/{item['id']}"
                    break

        return {
            "source": "youtube",
            "channel name": channel_name,
            "total followers": subs,
            "short video link": shorts_link
        }

    except Exception as e:
        return {
            "source": "youtube",
            "channel name": url,
            "total followers": None,
            "short video link": None,
            "error": str(e)
        }


# ----------------------------------------------------------
# INSTAGRAM SCRAPER
# ----------------------------------------------------------
def scrape_instagram(url):
    try:
        headers = {
            "User-Agent": "Mozilla/5.0"
        }
        req = requests.get(url, headers=headers)
        soup = BeautifulSoup(req.text, "html.parser")

        # Extract shared data JSON
        scripts = soup.find_all("script", type="application/ld+json")

        followers = None
        profile_name = None

        for s in scripts:
            data = json.loads(s.text)
            if "name" in data:
                profile_name = data["name"]
            if "interactionStatistic" in data:
                followers = data["interactionStatistic"]["userInteractionCount"]

        return {
            "source": "instagram",
            "profile name": profile_name,
            "total followers": followers,
            "profile url": url
        }

    except Exception as e:
        return {
            "source": "instagram",
            "profile name": url,
            "total followers": None,
            "error": str(e)
        }


# ----------------------------------------------------------
# WEBSITE METADATA SCRAPER
# ----------------------------------------------------------
def scrape_website(url):
    try:
        req = requests.get(url, timeout=10)
        soup = BeautifulSoup(req.text, "html.parser")

        title = soup.title.string if soup.title else None
        desc = None

        d = soup.find("meta", attrs={"name": "description"})
        if d:
            desc = d.get("content")

        return {
            "source": "website",
            "site": url,
            "title": title,
            "description": desc
        }

    except Exception as e:
        return {
            "source": "website",
            "site": url,
            "title": None,
            "description": None,
            "error": str(e)
        }


# ----------------------------------------------------------
# INPUT LISTS
# ----------------------------------------------------------
youtube_channels = [
    "https://www.youtube.com/@AlexanderFYoung",
    "https://www.youtube.com/@TotalTech_",
    "https://www.youtube.com/@suhitamin",
    "https://www.youtube.com/@antoniowebbmd",
    "https://www.youtube.com/@10kmiles",
    "https://www.youtube.com/@TwoMinutePapers",
    "https://www.youtube.com/@LoganBurchett",
    "https://www.youtube.com/@ProjectGaiaTravel",
    "https://www.youtube.com/medicalsecrets",
    "https://www.youtube.com/@AlfieMarsh"
]

instagram_profiles = [
    "https://www.instagram.com/mellanda_reese/",
    "https://www.instagram.com/the_studio_alexander/",
    "https://www.instagram.com/amytangerine/",
    "https://www.instagram.com/theascensioncoach/",
    "https://www.instagram.com/realdirkthejager/",
    "https://www.instagram.com/an_imperfectly_perfect_life/",
    "https://www.instagram.com/cawanosizemore/"
]

websites = [
    "https://mannavitality.com/",
    "https://kreaturesofhabit.com/",
    "https://www.hypex.au/",
    "https://attnlabs.com/"
]

# ----------------------------------------------------------
# RUN SCRAPERS
# ----------------------------------------------------------
final_data = []

col = 1

for y in youtube_channels:
    d = scrape_youtube(y)
    d["column"] = col
    final_data.append(d)
    col += 1

for insta in instagram_profiles:
    d = scrape_instagram(insta)
    d["column"] = col
    final_data.append(d)
    col += 1

for w in websites:
    d = scrape_website(w)
    d["column"] = col
    final_data.append(d)
    col += 1

# ----------------------------------------------------------
# OUTPUT JSON
# ----------------------------------------------------------
print(json.dumps(final_data, indent=2))
