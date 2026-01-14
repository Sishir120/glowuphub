import os
import re

lib_dir = r'c:\Users\sishi\OneDrive\Documents\python\glowuphub\mobile\lib'

def to_snake(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-0])([A-Z])', r'\1_\2', s1).lower()

def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    initial = content
    
    # 1. Standardize to LucideIcons
    # Replace Lucide. with LucideIcons.
    content = content.replace('Lucide.', 'LucideIcons.')
    
    # 2. Convert CamelCase to snake_case for LucideIcons getters
    def replace_icon(match):
        icon_name = match.group(1)
        return f'LucideIcons.{to_snake(icon_name)}'
    
    content = re.sub(r'LucideIcons\.(\w+)', replace_icon, content)
    
    # 3. Remove const if it affects LucideIcons
    content = content.replace('const Icon(LucideIcons.', 'Icon(LucideIcons.')
    
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if 'LucideIcons.' in line and 'const ' in line:
            line = line.replace('const ', '')
        new_lines.append(line)
    content = '\n'.join(new_lines)
    
    # 4. Fix imports
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
