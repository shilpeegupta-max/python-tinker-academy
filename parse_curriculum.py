import re, json, html

with open('/home/shilpeegupta/PythonTinkerAcademy/js/curriculum.js', 'r') as f:
    raw_js = f.read()

# We can evaluate JS by calling Python's js lexer or using string replacements
# Let's inspect each day object block in raw_js:
day_blocks = re.findall(r'{\s*day:\s*(\d+),.*?(?=\n  },\n  {|\n  }\n\];)', raw_js, re.DOTALL)
print(f"Found {len(day_blocks)} raw day blocks in curriculum.js")

# Let's write a python parser for a JS dict string
def parse_js_dict(block):
    # Convert JS object key: val into Python dict key: val
    # 1. Replace key names
    block = re.sub(r'(\b[a-zA-Z0-9_]+\b)\s*:', r'"\1":', block)
    # 2. Fix JS single-quoted or multi-line backtick strings
    # For backtick strings: `...` -> """..."""
    # Replace backtick strings with double quoted JSON strings
    def repl_backticks(m):
        content = m.group(1)
        # escape double quotes and newlines
        content = content.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')
        return f'"{content}"'
    
    block = re.sub(r'`(.*?)`', repl_backticks, block, flags=re.DOTALL)
    
    # 3. Handle single quoted strings
    def repl_single_quotes(m):
        content = m.group(1)
        content = content.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')
        return f'"{content}"'
    
    # Remove single line comments
    block = re.sub(r'//.*?\n', '\n', block)
    # Remove trailing commas
    block = re.sub(r',\s*([\}\]])', r'\1', block)
    
    return json.loads("{" + block + "}")

# Let's test parsing Day 1 block
try:
    # Match full day objects
    day_matches = re.finditer(r'{\s*day:\s*\d+,.*?\n  }(?=\n  ,|\n\];)', raw_js, re.DOTALL)
    parsed_days = []
    for m in day_matches:
        d_str = m.group(0)
        # Parse using AST or json
        # Replace JS key names without quotes
        d_json = re.sub(r'(\b[a-zA-Z0-9_]+\b)\s*:', r'"\1":', d_str)
        # Replace template backticks with json string
        d_json = re.sub(r'`(.*?)`', lambda x: json.dumps(x.group(1)), d_json, flags=re.DOTALL)
        # Replace single quoted strings
        d_json = re.sub(r"'((?:[^'\\]|\\.)*)'", lambda x: json.dumps(x.group(1)), d_json, flags=re.DOTALL)
        # Remove single line comments
        d_json = re.sub(r'//.*?\n', '\n', d_json)
        # Remove trailing commas
        d_json = re.sub(r',\s*([\}\]])', r'\1', d_json)
        
        day_obj = json.loads(d_json)
        parsed_days.append(day_obj)
    
    print(f"Successfully parsed all {len(parsed_days)} days into Python dicts!")
except Exception as e:
    print("Error parsing day:", e)
