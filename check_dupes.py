
import re

with open(r'f:\gihtub\edit-flow-site\src\components\SocialProof.tsx', 'r') as f:
    content = f.read()

# Extract the array content
match = re.search(r'const allScreenshots = \[(.*?)\];', content, re.DOTALL)
if match:
    array_content = match.group(1)
    # detailed parsing to handle quotes and filenames
    # split by comma, strip quotes and whitespace
    items = [item.strip().strip('"').strip("'") for item in array_content.split(',') if item.strip()]
    
    seen = set()
    duplicates = []
    for item in items:
        if item in seen:
            duplicates.append(item)
        seen.add(item)
    
    if duplicates:
        print(f"Found {len(duplicates)} duplicates:")
        for d in duplicates:
            print(d)
    else:
        print("No duplicate filenames found in the code array.")
        print(f"Total items: {len(items)}")
else:
    print("Could not find allScreenshots array.")
