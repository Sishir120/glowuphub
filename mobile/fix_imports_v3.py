import os
import re

lib_dir = r'c:\Users\sishi\OneDrive\Documents\python\glowuphub\mobile\lib'

def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    initial = content
    
    # Standardize to LucideIcons
    content = content.replace('Lucide.', 'LucideIcons.')
    
    # Remove const if it affects LucideIcons
    content = content.replace('const Icon(LucideIcons.', 'Icon(LucideIcons.')
    
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if 'LucideIcons.' in line and 'const ' in line:
            line = line.replace('const ', '')
        new_lines.append(line)
    content = '\n'.join(new_lines)
    
    # Fix imports
    content = re.sub(r"import\s+['\"]package:flutter_lucide/.*\.dart['\"]\s*;?", "", content)
    if 'LucideIcons.' in content:
        content = "import 'package:flutter_lucide/flutter_lucide.dart';\n" + content
    
    content = content.lstrip()
    
    if content != initial:
        print(f"Fixed: {path}")
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

for root, dirs, files in os.walk(lib_dir):
    for file in files:
        if file.endswith('.dart'):
            process_file(os.path.join(root, file))
