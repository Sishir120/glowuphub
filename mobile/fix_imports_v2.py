import os
import re

lib_dir = r'c:\Users\sishi\OneDrive\Documents\python\glowuphub\mobile\lib'

def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    initial = content
    
    # Remove const if it affects Lucide
    # Case 1: const Icon(Lucide.X) -> Icon(Lucide.X)
    content = content.replace('const Icon(Lucide.', 'Icon(Lucide.')
    # Case 2: const [ ... Lucide.X ... ] -> [ ... Lucide.X ... ]
    # This is harder with regex, let's do a more general approach
    # If a line has Lucide. and const, remove const
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if 'Lucide.' in line and 'const ' in line:
            line = line.replace('const ', '')
        new_lines.append(line)
    content = '\n'.join(new_lines)
    
    # Fix imports
    # Remove all variations of flutter_lucide imports first
    content = re.sub(r"import\s+['\"]package:flutter_lucide/.*\.dart['\"]\s*;?", "", content)
    
    # Add the correct one if needed
    if 'Lucide.' in content:
        content = "import 'package:flutter_lucide/flutter_lucide.dart';\n" + content
    
    # Clean up double newlines at start
    content = content.lstrip()
    
    if content != initial:
        print(f"Fixed: {path}")
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

for root, dirs, files in os.walk(lib_dir):
    for file in files:
        if file.endswith('.dart'):
            process_file(os.path.join(root, file))
