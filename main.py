import os
import sys
from pathlib import Path
from datetime import datetime, timedelta
from collections import defaultdict

# Safe locations to clean (expandable paths)
SAFE_CLEAN_LOCATIONS = {
    'temp': [
        r'C:\Windows\Temp',
        r'C:\Temp',
        os.path.join(os.environ.get('TEMP', ''), ''),
        os.path.join(os.environ.get('TMP', ''), ''),
        os.path.join(os.environ.get('LOCALAPPDATA', ''), 'Temp'),
    ],
    'downloads': [
        os.path.join(os.environ.get('USERPROFILE', ''), 'Downloads'),
    ],
    'recycle_bin': [
        r'C:\$Recycle.Bin',
    ],
    'browser_cache': [
        os.path.join(os.environ.get('LOCALAPPDATA', ''), 'Google', 'Chrome', 'User Data', 'Default', 'Cache'),
        os.path.join(os.environ.get('LOCALAPPDATA', ''), 'Microsoft', 'Edge', 'User Data', 'Default', 'Cache'),
        os.path.join(os.environ.get('LOCALAPPDATA', ''), 'Mozilla', 'Firefox', 'Profiles'),
    ],
    'windows_update': [
        r'C:\Windows\SoftwareDistribution\Download',
        r'C:\Windows\Logs',
    ],
    'user_temp': [
        os.path.join(os.environ.get('USERPROFILE', ''), 'AppData', 'Local', 'Temp'),
        os.path.join(os.environ.get('USERPROFILE', ''), 'AppData', 'Local', 'Microsoft', 'Windows', 'INetCache'),
    ],
    'thumbnail_cache': [
        os.path.join(os.environ.get('LOCALAPPDATA', ''), 'Microsoft', 'Windows', 'Explorer'),
    ],
}

# CRITICAL: Never touch these directories
PROTECTED_DIRECTORIES = [
    r'C:\Windows\System32',
    r'C:\Windows\SysWOW64',
    r'C:\Windows\WinSxS',
    r'C:\Windows\Boot',
    r'C:\Windows\System',
    r'C:\Program Files',
    r'C:\Program Files (x86)',
    r'C:\ProgramData',
    r'C:\Users\Default',
    r'C:\Users\Public',
    r'C:\Recovery',
    r'C:\$Windows.~BT',
    r'C:\$Windows.~WS',
    r'C:\System Volume Information',
    r'C:\PerfLogs',
]

# File extensions safe to delete (temp, cache, logs)
SAFE_EXTENSIONS = [
    '.tmp', '.temp', '.log', '.bak', '.old', '.cache', 
    '.dmp', '.chk', '.gid', '.~*', '.bkp'
]

# File patterns that are safe to delete
SAFE_PATTERNS = [
    'temp', 'tmp', 'cache', 'cached', 'backup', 'old',
    'thumbs.db', 'desktop.ini', '.ds_store'
]

def format_size(bytes):
    """Convert bytes to human readable format"""
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if bytes < 1024.0:
            return f"{bytes:.2f} {unit}"
        bytes /= 1024.0

def get_size(path):
    """Get file size safely"""
    try:
        return os.path.getsize(path)
    except:
        return 0

def get_folder_size(folder_path):
    """Calculate total size of a folder"""
    total = 0
    try:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                try:
                    total += get_size(os.path.join(root, file))
                except:
                    continue
    except:
        pass
    return total

def is_protected_path(path):
    """Check if path is in protected directories"""
    path_lower = path.lower()
    for protected in PROTECTED_DIRECTORIES:
        if path_lower.startswith(protected.lower()):
            return True
    return False

def is_safe_file(filepath, min_age_days=7):
    """Determine if file is safe to delete"""
    try:
        if is_protected_path(filepath):
            return False, "Protected system path"
        
        filename = os.path.basename(filepath).lower()
        ext = os.path.splitext(filename)[1].lower()
        
        # Check extension
        if ext in SAFE_EXTENSIONS:
            mtime = os.path.getmtime(filepath)
            age_days = (datetime.now() - datetime.fromtimestamp(mtime)).days
            if age_days >= min_age_days:
                return True, f"Safe extension ({ext}), {age_days} days old"
        
        # Check filename patterns
        for pattern in SAFE_PATTERNS:
            if pattern in filename:
                return True, f"Safe pattern ({pattern})"
        
        return False, "Not in safe categories"
    except:
        return False, "Error checking file"

def scan_drive_overview():
    """Quick overview of C drive usage"""
    print("\n" + "="*80)
    print("C: DRIVE OVERVIEW")
    print("="*80)
    
    try:
        import shutil
        stat = shutil.disk_usage('C:\\')
        
        total_gb = stat.total / (1024**3)
        used_gb = stat.used / (1024**3)
        free_gb = stat.free / (1024**3)
        used_percent = (stat.used / stat.total) * 100
        
        print(f"\nTotal Space: {total_gb:.2f} GB")
        print(f"Used Space:  {used_gb:.2f} GB ({used_percent:.1f}%)")
        print(f"Free Space:  {free_gb:.2f} GB")
        
        # Visual bar
        bar_length = 50
        filled = int(bar_length * used_percent / 100)
        bar = '█' * filled + '░' * (bar_length - filled)
        print(f"\n[{bar}] {used_percent:.1f}%")
        
    except Exception as e:
        print(f"\nCould not retrieve drive info: {e}")

def analyze_subfolder_breakdown(folder_path, depth=1):
    """Analyze subfolders within a given folder"""
    subfolder_sizes = {}
    
    print(f"\nAnalyzing subfolders in {folder_path}...")
    
    try:
        items = os.listdir(folder_path)
        total_items = len(items)
        
        for idx, item in enumerate(items, 1):
            item_path = os.path.join(folder_path, item)
            if os.path.isdir(item_path):
                print(f"Scanning ({idx}/{total_items}): {item[:40]}...", end='\r')
                size = get_folder_size(item_path)
                subfolder_sizes[item_path] = size
    except Exception as e:
        print(f"\nError scanning folder: {e}")
    
    return subfolder_sizes

def show_folder_breakdown(folder_path, folder_name):
    """Show detailed breakdown of a specific folder"""
    print("\n" + "="*80)
    print(f"BREAKDOWN: {folder_name}")
    print("="*80)
    
    # Get subfolders
    subfolder_sizes = analyze_subfolder_breakdown(folder_path)
    
    if not subfolder_sizes:
        print("\nNo accessible subfolders found or permission denied.")
        return
    
    # Sort by size
    sorted_folders = sorted(subfolder_sizes.items(), key=lambda x: x[1], reverse=True)
    
    # Show top folders
    print(f"\nTop subfolders by size:\n")
    for idx, (path, size) in enumerate(sorted_folders[:20], 1):
        folder_name_only = os.path.basename(path)
        print(f"{idx:2}. {format_size(size):>12} - {folder_name_only}")
    
    if len(sorted_folders) > 20:
        remaining_size = sum(s for _, s in sorted_folders[20:])
        print(f"\n    {format_size(remaining_size):>12} - ... and {len(sorted_folders)-20} more folders")
    
    # Find large files in this folder (not recursive, just top level)
    print(f"\n" + "-"*80)
    print("Large files in this folder (top level only):\n")
    
    large_files = []
    try:
        for item in os.listdir(folder_path):
            item_path = os.path.join(folder_path, item)
            if os.path.isfile(item_path):
                size = get_size(item_path)
                if size > 100 * 1024 * 1024:  # > 100MB
                    large_files.append((item_path, size))
    except:
        pass
    
    if large_files:
        large_files.sort(key=lambda x: x[1], reverse=True)
        for filepath, size in large_files[:10]:
            filename = os.path.basename(filepath)
            print(f"   {format_size(size):>12} - {filename}")
    else:
        print("   No large files (>100MB) found at top level")
    
    # Option to drill deeper
    print("\n" + "="*80)
    print("Options:")
    print("1. Drill into a specific subfolder")
    print("2. Search for large files recursively (>500MB)")
    print("3. Return to main menu")
    
    choice = input("\nChoice (1-3): ").strip()
    
    if choice == "1":
        folder_num = input("Enter folder number to explore: ").strip()
        try:
            idx = int(folder_num) - 1
            if 0 <= idx < len(sorted_folders):
                next_path, _ = sorted_folders[idx]
                next_name = os.path.basename(next_path)
                show_folder_breakdown(next_path, next_name)
        except:
            print("Invalid selection")
    
    elif choice == "2":
        print(f"\nSearching for files >500MB in {folder_path}...")
        print("This may take a few minutes...\n")
        
        large_files_recursive = []
        try:
            for root, dirs, files in os.walk(folder_path):
                for file in files:
                    try:
                        filepath = os.path.join(root, file)
                        size = get_size(filepath)
                        if size > 500 * 1024 * 1024:  # > 500MB
                            large_files_recursive.append((filepath, size))
                    except:
                        continue
        except:
            pass
        
        if large_files_recursive:
            large_files_recursive.sort(key=lambda x: x[1], reverse=True)
            print(f"Found {len(large_files_recursive)} files >500MB:\n")
            
            for idx, (filepath, size) in enumerate(large_files_recursive[:30], 1):
                rel_path = os.path.relpath(filepath, folder_path)
                print(f"{idx}. {format_size(size):>12} - {rel_path}")
            
            if len(large_files_recursive) > 30:
                print(f"\n... and {len(large_files_recursive)-30} more files")
        else:
            print("No files >500MB found")
        
        input("\nPress Enter to continue...")

def analyze_major_folders():
    """Analyze major folders on C drive"""
    major_folders = {
        'Windows': r'C:\Windows',
        'Program Files': r'C:\Program Files',
        'Program Files (x86)': r'C:\Program Files (x86)',
        'Users': r'C:\Users',
        'ProgramData': r'C:\ProgramData',
    }
    
    print("\n" + "="*80)
    print("MAJOR FOLDER SIZES")
    print("="*80 + "\n")
    
    results = []
    for name, path in major_folders.items():
        if os.path.exists(path):
            print(f"Scanning {name}...", end='\r')
            size = get_folder_size(path)
            results.append((name, size, path))
    
    results.sort(key=lambda x: x[1], reverse=True)
    
    for idx, (name, size, path) in enumerate(results, 1):
        print(f"{idx}. 📁 {format_size(size):>12} - {name} ({path})")
    
    # Interactive drill-down
    print("\n" + "="*80)
    print("Enter folder number to see detailed breakdown, or 'q' to skip")
    choice = input("Choice: ").strip()
    
    if choice.lower() != 'q':
        try:
            idx = int(choice) - 1
            if 0 <= idx < len(results):
                name, size, path = results[idx]
                show_folder_breakdown(path, name)
        except:
            print("Invalid selection")
    
    return results

def scan_user_folders():
    """Scan user-specific folders for large files"""
    user_profile = os.environ.get('USERPROFILE', '')
    
    scan_locations = {
        'Downloads': os.path.join(user_profile, 'Downloads'),
        'Desktop': os.path.join(user_profile, 'Desktop'),
        'Documents': os.path.join(user_profile, 'Documents'),
        'Videos': os.path.join(user_profile, 'Videos'),
        'Pictures': os.path.join(user_profile, 'Pictures'),
        'Music': os.path.join(user_profile, 'Music'),
    }
    
    print("\n" + "="*80)
    print("USER FOLDER ANALYSIS")
    print("="*80 + "\n")
    
    results = []
    for name, path in scan_locations.items():
        if os.path.exists(path):
            print(f"Scanning {name}...", end='\r')
            size = get_folder_size(path)
            
            # Count files
            file_count = 0
            large_files = []
            try:
                for root, dirs, files in os.walk(path):
                    file_count += len(files)
                    for file in files:
                        fpath = os.path.join(root, file)
                        fsize = get_size(fpath)
                        if fsize > 100 * 1024 * 1024:  # > 100MB
                            large_files.append((fpath, fsize))
            except:
                pass
            
            results.append((name, size, file_count, large_files, path))
    
    results.sort(key=lambda x: x[1], reverse=True)
    
    for name, size, count, large_files, path in results:
        print(f"📂 {format_size(size):>12} - {name} ({count} files)")
        if large_files[:3]:
            for fpath, fsize in sorted(large_files, key=lambda x: x[1], reverse=True)[:3]:
                fname = os.path.basename(fpath)
                print(f"      └─ {format_size(fsize):>10} - {fname}")
    
    return results

def find_cleanable_files(min_age_days=7):
    """Find all safe-to-delete files across C drive"""
    cleanable = []
    
    print("\n" + "="*80)
    print("SCANNING FOR CLEANABLE FILES")
    print("="*80 + "\n")
    
    # Scan safe locations
    for category, paths in SAFE_CLEAN_LOCATIONS.items():
        print(f"Scanning {category}...")
        for path in paths:
            if path and os.path.exists(path):
                try:
                    for root, dirs, files in os.walk(path):
                        for file in files:
                            try:
                                filepath = os.path.join(root, file)
                                size = get_size(filepath)
                                
                                if size > 1024 * 1024:  # > 1MB
                                    is_safe, reason = is_safe_file(filepath, min_age_days)
                                    if is_safe:
                                        cleanable.append((filepath, size, category, reason))
                            except:
                                continue
                except:
                    continue
    
    return cleanable

def find_large_files_system(min_size_gb=1):
    """Find large files across C drive (excluding protected areas)"""
    min_size = min_size_gb * 1024 * 1024 * 1024
    large_files = []
    
    print("\n" + "="*80)
    print(f"SCANNING FOR FILES >= {min_size_gb}GB")
    print("="*80)
    print("\nThis may take 5-10 minutes for full C: drive scan...")
    print("Scanning in progress...\n")
    
    scan_roots = ['C:\\']
    
    for root_path in scan_roots:
        try:
            for root, dirs, files in os.walk(root_path):
                # Skip protected directories
                if is_protected_path(root):
                    dirs[:] = []  # Don't recurse
                    continue
                
                # Skip system folders in root
                dirs[:] = [d for d in dirs if d not in ['Windows', 'Program Files', 'Program Files (x86)', 
                                                          'ProgramData', '$Recycle.Bin', 'System Volume Information']]
                
                for file in files:
                    try:
                        filepath = os.path.join(root, file)
                        size = get_size(filepath)
                        
                        if size >= min_size:
                            large_files.append((filepath, size))
                            print(f"Found: {format_size(size):>12} - {filepath}")
                    except:
                        continue
        except:
            continue
    
    return large_files

def clean_temp_files():
    """Clean temporary files automatically"""
    print("\n" + "="*80)
    print("CLEANING TEMPORARY FILES")
    print("="*80 + "\n")
    
    cleaned = find_cleanable_files(min_age_days=7)
    
    if not cleaned:
        print("No cleanable files found.")
        return
    
    cleaned.sort(key=lambda x: x[1], reverse=True)
    total_size = sum(f[1] for f in cleaned)
    
    # Group by category
    by_category = defaultdict(list)
    for filepath, size, category, reason in cleaned:
        by_category[category].append((filepath, size, reason))
    
    print("Found cleanable files:\n")
    for category, files in by_category.items():
        cat_size = sum(f[1] for f in files)
        print(f"📁 {category.upper()}: {len(files)} files ({format_size(cat_size)})")
        for filepath, size, reason in files[:3]:
            print(f"   └─ {format_size(size):>10} - {os.path.basename(filepath)}")
        if len(files) > 3:
            print(f"   └─ ... and {len(files)-3} more")
        print()
    
    print(f"Total: {len(cleaned)} files, {format_size(total_size)}")
    print("\n" + "="*80)
    
    confirm = input(f"Clean all {len(cleaned)} temporary files? (yes/no): ").strip().lower()
    
    if confirm == 'yes':
        deleted = 0
        failed = 0
        freed = 0
        
        for filepath, size, category, reason in cleaned:
            try:
                os.remove(filepath)
                deleted += 1
                freed += size
            except:
                failed += 1
        
        print(f"\n✓ Deleted: {deleted} files")
        print(f"✗ Failed: {failed} files")
        print(f"💾 Space freed: {format_size(freed)}")
    else:
        print("Cancelled.")

def deep_analysis():
    """Comprehensive C drive analysis"""
    print("\n" + "="*80)
    print("DEEP DRIVE ANALYSIS")
    print("="*80)
    
    print("\n1. Analyzing drive overview...")
    scan_drive_overview()
    
    print("\n2. Analyzing major system folders...")
    major = analyze_major_folders()
    
    print("\n3. Analyzing user folders...")
    user = scan_user_folders()
    
    print("\n" + "="*80)
    print("ANALYSIS COMPLETE")
    print("="*80)
    
    input("\nPress Enter to continue...")

def manual_large_file_finder():
    """Find and delete large files manually"""
    print("\n" + "="*80)
    print("LARGE FILE FINDER")
    print("="*80)
    
    try:
        threshold = float(input("\nMinimum file size in GB (default 1): ").strip() or "1")
    except:
        threshold = 1.0
    
    large_files = find_large_files_system(threshold)
    
    if not large_files:
        print(f"\nNo files >= {threshold}GB found.")
        return
    
    large_files.sort(key=lambda x: x[1], reverse=True)
    
    print(f"\n{'='*80}")
    print(f"FOUND {len(large_files)} LARGE FILES")
    print(f"{'='*80}\n")
    
    for i, (filepath, size) in enumerate(large_files, 1):
        print(f"{i}. {format_size(size):>12} - {filepath}")
    
    print("\n" + "="*80)
    print("Enter file numbers to delete (e.g., 1,3,5 or 1-5)")
    print("Or 'q' to return")
    
    selection = input("\nYour choice: ").strip()
    
    if selection.lower() == 'q':
        return
    
    to_delete = []
    try:
        for part in selection.split(','):
            if '-' in part:
                start, end = map(int, part.split('-'))
                to_delete.extend(range(start-1, end))
            else:
                to_delete.append(int(part)-1)
    except:
        print("Invalid selection.")
        return
    
    total_size = sum(large_files[i][1] for i in to_delete if 0 <= i < len(large_files))
    print(f"\nAbout to delete {len(to_delete)} files ({format_size(total_size)})")
    confirm = input("Type 'DELETE' to confirm: ").strip()
    
    if confirm == 'DELETE':
        deleted = 0
        freed = 0
        for i in to_delete:
            if 0 <= i < len(large_files):
                filepath, size = large_files[i]
                try:
                    os.remove(filepath)
                    print(f"✓ Deleted: {filepath}")
                    deleted += 1
                    freed += size
                except Exception as e:
                    print(f"✗ Failed: {filepath} - {e}")
        
        print(f"\n✓ Deleted {deleted} files, freed {format_size(freed)}")
    else:
        print("Cancelled.")

def main():
    # Check admin rights
    try:
        is_admin = os.getuid() == 0
    except AttributeError:
        import ctypes
        is_admin = ctypes.windll.shell32.IsUserAnAdmin() != 0
    
    print("="*80)
    print("FULL C: DRIVE SMART CLEANER")
    print("="*80)
    
    if not is_admin:
        print("\n⚠ WARNING: Not running as Administrator")
        print("Some files may not be accessible without admin rights.")
        print("Right-click and 'Run as Administrator' for full access.\n")
    
    while True:
        print("\n" + "="*80)
        print("MAIN MENU")
        print("="*80)
        print("1. Quick Clean - Auto-remove temp files")
        print("2. Deep Analysis - See what's using space")
        print("3. Find Large Files (1GB+) - Manual delete")
        print("4. Drive Overview - Quick stats")
        print("5. User Folders Analysis")
        print("6. Exit")
        
        choice = input("\nChoice (1-6): ").strip()
        
        if choice == "1":
            clean_temp_files()
        elif choice == "2":
            deep_analysis()
        elif choice == "3":
            manual_large_file_finder()
        elif choice == "4":
            scan_drive_overview()
            input("\nPress Enter to continue...")
        elif choice == "5":
            scan_user_folders()
            input("\nPress Enter to continue...")
        elif choice == "6":
            print("\nGoodbye!")
            break
        else:
            print("Invalid choice.")

if __name__ == "__main__":
    main()