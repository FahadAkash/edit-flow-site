import os
import sys
from pathlib import Path
from datetime import datetime, timedelta
from collections import defaultdict

# Safe-to-delete categories with folder patterns
SAFE_PATTERNS = {
    'temp': ['temp', 'tmp', 'cache', 'cached'],
    'logs': ['logs', 'log'],
    'backups': ['backup', 'bak', 'old'],
    'installers': ['installer', 'setup', 'download'],
    'browser_cache': ['webcache', 'browsercache', 'chromecache', 'firefoxcache']
}

SAFE_EXTENSIONS = ['.tmp', '.log', '.bak', '.old', '.dmp', '.temp', '.cache']

CRITICAL_FOLDERS = [
    'microsoft', 'windows', 'system', 'sys', 'registry',
    'roaming\\microsoft\\windows', 'local\\microsoft\\windows'
]

def get_size(path):
    """Get file size in bytes"""
    try:
        return os.path.getsize(path)
    except:
        return 0

def format_size(bytes):
    """Convert bytes to human readable format"""
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if bytes < 1024.0:
            return f"{bytes:.2f} {unit}"
        bytes /= 1024.0

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

def analyze_folder_structure(directory, depth=2):
    """Analyze folder structure and sizes"""
    folder_sizes = {}
    
    print(f"Analyzing folder structure (depth {depth})...")
    
    def scan_recursive(path, current_depth):
        if current_depth > depth:
            return
        
        try:
            for item in os.listdir(path):
                item_path = os.path.join(path, item)
                if os.path.isdir(item_path):
                    size = get_folder_size(item_path)
                    folder_sizes[item_path] = size
                    scan_recursive(item_path, current_depth + 1)
        except:
            pass
    
    scan_recursive(directory, 1)
    return folder_sizes

def find_large_items(directory, min_size_gb=1):
    """Find all files and folders larger than min_size_gb"""
    min_size = min_size_gb * 1024 * 1024 * 1024
    large_files = []
    large_folders = {}
    app_breakdown = defaultdict(lambda: {'size': 0, 'files': []})
    
    print(f"Scanning for items >= {min_size_gb}GB...")
    print("This may take several minutes...\n")
    
    try:
        for root, dirs, files in os.walk(directory):
            # Check current folder size
            folder_size = get_folder_size(root)
            if folder_size >= min_size:
                large_folders[root] = folder_size
            
            # Extract app name from path
            rel_path = os.path.relpath(root, directory)
            app_name = rel_path.split(os.sep)[0] if os.sep in rel_path else rel_path
            
            for file in files:
                try:
                    filepath = os.path.join(root, file)
                    size = get_size(filepath)
                    
                    if size >= min_size:
                        large_files.append((filepath, size))
                    
                    # Track per-app statistics
                    if size > 10 * 1024 * 1024:  # Track files > 10MB
                        app_breakdown[app_name]['size'] += size
                        app_breakdown[app_name]['files'].append((filepath, size))
                except:
                    continue
    except Exception as e:
        print(f"Error during scan: {e}")
    
    return large_files, large_folders, app_breakdown

def show_folder_tree(folder_sizes, base_path, min_size_mb=100):
    """Display folder tree with sizes"""
    min_size = min_size_mb * 1024 * 1024
    
    # Filter and sort
    filtered = {k: v for k, v in folder_sizes.items() if v >= min_size}
    sorted_folders = sorted(filtered.items(), key=lambda x: x[1], reverse=True)
    
    print(f"\n{'='*80}")
    print(f"FOLDER SIZE ANALYSIS (>{min_size_mb}MB)")
    print(f"{'='*80}\n")
    
    for folder, size in sorted_folders[:30]:  # Top 30
        rel_path = os.path.relpath(folder, base_path)
        depth = rel_path.count(os.sep)
        indent = "  " * depth
        print(f"{indent}📁 {format_size(size):>12} - {rel_path}")

def show_app_breakdown(app_breakdown, min_size_gb=0.5):
    """Show space usage by application"""
    min_size = min_size_gb * 1024 * 1024 * 1024
    
    # Filter and sort
    filtered = {k: v for k, v in app_breakdown.items() if v['size'] >= min_size}
    sorted_apps = sorted(filtered.items(), key=lambda x: x[1]['size'], reverse=True)
    
    print(f"\n{'='*80}")
    print(f"SPACE USAGE BY APPLICATION (>{min_size_gb}GB)")
    print(f"{'='*80}\n")
    
    for app_name, data in sorted_apps[:20]:  # Top 20
        file_count = len(data['files'])
        avg_size = data['size'] / file_count if file_count > 0 else 0
        
        print(f"📦 {app_name}")
        print(f"   Total: {format_size(data['size'])} | Files: {file_count} | Avg: {format_size(avg_size)}")
        
        # Show top 3 largest files in this app
        top_files = sorted(data['files'], key=lambda x: x[1], reverse=True)[:3]
        for filepath, size in top_files:
            filename = os.path.basename(filepath)
            print(f"      └─ {format_size(size):>10} - {filename}")
        print()

def is_safe_to_delete(filepath, min_age_days=30):
    """Determine if a file is safe to auto-delete"""
    try:
        filepath_lower = filepath.lower()
        
        for critical in CRITICAL_FOLDERS:
            if critical in filepath_lower:
                return False, "Critical system folder"
        
        path_parts = filepath_lower.split(os.sep)
        for category, patterns in SAFE_PATTERNS.items():
            for pattern in patterns:
                if any(pattern in part for part in path_parts):
                    return True, f"Safe folder: {category}"
        
        ext = os.path.splitext(filepath)[1].lower()
        if ext in SAFE_EXTENSIONS:
            mtime = os.path.getmtime(filepath)
            file_age = datetime.now() - datetime.fromtimestamp(mtime)
            if file_age.days >= min_age_days:
                return True, f"Safe extension ({ext}), {file_age.days} days old"
            else:
                return False, f"File too recent ({file_age.days} days)"
        
        return False, "Does not match safe patterns"
    except:
        return False, "Error checking file"

def manual_mode(directory):
    """Manual exploration and deletion mode"""
    print("\n" + "="*80)
    print("MANUAL MODE - Find Root Causes")
    print("="*80)
    
    # Get threshold
    try:
        threshold_gb = float(input("\nMinimum size to analyze (GB, default 1): ").strip() or "1")
    except:
        threshold_gb = 1.0
    
    print("\nAnalyzing... This will take a few minutes.\n")
    
    # Perform analysis
    large_files, large_folders, app_breakdown = find_large_items(directory, threshold_gb)
    folder_sizes = analyze_folder_structure(directory, depth=3)
    
    while True:
        print("\n" + "="*80)
        print("ANALYSIS MENU")
        print("="*80)
        print("1. Show largest folders (tree view)")
        print("2. Show space usage by application")
        print("3. Show largest files (1GB+)")
        print("4. Deep dive into specific folder")
        print("5. Delete files manually")
        print("6. Export analysis report")
        print("7. Back to main menu")
        
        choice = input("\nChoice (1-7): ").strip()
        
        if choice == "1":
            show_folder_tree(folder_sizes, directory)
        
        elif choice == "2":
            show_app_breakdown(app_breakdown)
        
        elif choice == "3":
            if large_files:
                large_files.sort(key=lambda x: x[1], reverse=True)
                print(f"\n{'='*80}")
                print(f"LARGEST FILES ({len(large_files)} files >= {threshold_gb}GB)")
                print(f"{'='*80}\n")
                for i, (filepath, size) in enumerate(large_files[:30], 1):
                    print(f"{i}. {format_size(size):>12} - {filepath}")
            else:
                print(f"\nNo files >= {threshold_gb}GB found.")
        
        elif choice == "4":
            folder = input("\nEnter folder path to analyze: ").strip()
            if os.path.exists(folder):
                sub_sizes = analyze_folder_structure(folder, depth=2)
                show_folder_tree(sub_sizes, folder, min_size_mb=50)
            else:
                print("Folder not found.")
        
        elif choice == "5":
            if not large_files:
                print("\nNo large files found to delete.")
                continue
            
            print("\n" + "="*80)
            print("MANUAL FILE DELETION")
            print("="*80)
            for i, (filepath, size) in enumerate(large_files[:50], 1):
                is_safe, reason = is_safe_to_delete(filepath)
                safety = "✓ SAFE" if is_safe else "⚠ CHECK"
                print(f"{i}. {format_size(size):>12} [{safety}] - {filepath}")
                print(f"    Reason: {reason}")
            
            selection = input("\nEnter numbers to delete (e.g., 1,3,5 or 1-10) or 'q': ").strip()
            
            if selection.lower() == 'q':
                continue
            
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
                continue
            
            total_size = sum(large_files[i][1] for i in to_delete if 0 <= i < len(large_files))
            print(f"\nAbout to delete {len(to_delete)} files ({format_size(total_size)})")
            confirm = input("Type 'YES' to confirm: ").strip()
            
            if confirm == "YES":
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
                # Refresh the list
                large_files = [f for i, f in enumerate(large_files) if i not in to_delete or os.path.exists(f[0])]
            else:
                print("Cancelled.")
        
        elif choice == "6":
            filename = f"appdata_analysis_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
            with open(filename, 'w', encoding='utf-8') as f:
                f.write("APPDATA ANALYSIS REPORT\n")
                f.write("=" * 80 + "\n\n")
                
                f.write("LARGEST FOLDERS:\n")
                f.write("-" * 80 + "\n")
                sorted_folders = sorted(folder_sizes.items(), key=lambda x: x[1], reverse=True)
                for folder, size in sorted_folders[:50]:
                    f.write(f"{format_size(size):>12} - {folder}\n")
                
                f.write("\n\nSPACE BY APPLICATION:\n")
                f.write("-" * 80 + "\n")
                sorted_apps = sorted(app_breakdown.items(), key=lambda x: x[1]['size'], reverse=True)
                for app, data in sorted_apps[:30]:
                    f.write(f"{format_size(data['size']):>12} - {app} ({len(data['files'])} files)\n")
                
                f.write("\n\nLARGEST FILES:\n")
                f.write("-" * 80 + "\n")
                for filepath, size in large_files[:100]:
                    f.write(f"{format_size(size):>12} - {filepath}\n")
            
            print(f"\n✓ Report exported to: {filename}")
        
        elif choice == "7":
            break

def auto_mode(directory):
    """Automatic safe-file deletion mode"""
    print("\n" + "="*80)
    print("AUTO MODE - Smart Safe Deletion")
    print("="*80)
    
    try:
        min_size = int(input("\nMinimum file size in MB (default 50): ").strip() or "50")
    except:
        min_size = 50
    
    try:
        min_age = int(input("Minimum file age in days (default 30): ").strip() or "30")
    except:
        min_age = 30
    
    # Scan for safe files
    min_size_bytes = min_size * 1024 * 1024
    safe_files = []
    
    print("\nScanning for safe-to-delete files...\n")
    
    try:
        for root, dirs, files in os.walk(directory):
            dirs[:] = [d for d in dirs if not any(c in os.path.join(root, d).lower() for c in CRITICAL_FOLDERS)]
            
            for file in files:
                try:
                    filepath = os.path.join(root, file)
                    size = get_size(filepath)
                    
                    if size >= min_size_bytes:
                        is_safe, reason = is_safe_to_delete(filepath, min_age)
                        if is_safe:
                            safe_files.append((filepath, size, reason))
                except:
                    continue
    except Exception as e:
        print(f"Error: {e}")
    
    if not safe_files:
        print("No safe-to-delete files found.")
        return
    
    safe_files.sort(key=lambda x: x[1], reverse=True)
    total_size = sum(f[1] for f in safe_files)
    
    print(f"✓ Found {len(safe_files)} safe files ({format_size(total_size)})\n")
    
    for filepath, size, reason in safe_files[:20]:
        print(f"  {format_size(size):>12} - {reason}")
        print(f"               {filepath}")
    
    if len(safe_files) > 20:
        print(f"\n  ... and {len(safe_files) - 20} more files")
    
    print("\n" + "="*80)
    confirm = input(f"Delete all {len(safe_files)} files? Type 'DELETE': ").strip()
    
    if confirm == "DELETE":
        deleted = 0
        freed = 0
        for filepath, size, reason in safe_files:
            try:
                os.remove(filepath)
                deleted += 1
                freed += size
                print(f"✓ {filepath}")
            except Exception as e:
                print(f"✗ {filepath} - {e}")
        
        print(f"\n✓ Deleted {deleted} files, freed {format_size(freed)}")
    else:
        print("Cancelled.")

def main():
    print("=" * 80)
    print("ADVANCED APPDATA ANALYZER & CLEANER")
    print("=" * 80)
    
    appdata = os.environ.get('APPDATA')
    localappdata = os.environ.get('LOCALAPPDATA')
    
    if not appdata:
        print("Error: Could not find AppData")
        sys.exit(1)
    
    print("\nSelect AppData location:")
    print(f"1. Roaming ({appdata})")
    print(f"2. Local ({localappdata})")
    print("3. Both")
    
    loc_choice = input("\nChoice (1-3, default 3): ").strip() or "3"
    
    if loc_choice == "1":
        directory = appdata
    elif loc_choice == "2":
        directory = localappdata
    else:
        # For "both", we'll use Local as it's usually larger
        directory = localappdata
        print(f"\nUsing: {directory}")
    
    while True:
        print("\n" + "="*80)
        print("MAIN MENU")
        print("="*80)
        print("1. AUTO MODE - Smart safe deletion")
        print("2. MANUAL MODE - Deep analysis & custom deletion")
        print("3. Quick folder size overview")
        print("4. Exit")
        
        choice = input("\nChoice (1-4): ").strip()
        
        if choice == "1":
            auto_mode(directory)
        elif choice == "2":
            manual_mode(directory)
        elif choice == "3":
            folder_sizes = analyze_folder_structure(directory, depth=2)
            show_folder_tree(folder_sizes, directory, min_size_mb=500)
        elif choice == "4":
            print("\nGoodbye!")
            break
        else:
            print("Invalid choice.")

if __name__ == "__main__":
    main()