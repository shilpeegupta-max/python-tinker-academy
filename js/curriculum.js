// Python Tinker Academy - 15 Day Curriculum Data

const CURRICULUM = [
  {
    day: 1,
    title: "Fake Virus Prank / Rickroll Simulator",
    focus: "print(), input(), Strings & Concatenation",
    category: "Week 1: Core Logic & Turtle Graphics",
    icon: "💻",
    summary: "Build a funny terminal prank that pretends to breach a device before revealing a joke or Rickroll link!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Talking to your computer with print() and input()",
      explanation: "Think of `print()` like your computer talking through a megaphone. `input()` is like holding up a microphone to listen to the user!",
      syntaxSnippet: `# Printing text to the screen
print("SYSTEM WARNING: Unidentified user detected!")

# Asking a question and storing the response
user_name = input("Enter your secret agent code name: ")

# Joining text together (String Concatenation)
print("Welcome aboard, Agent " + user_name + "!")`,
      keyTakeaways: [
        "Use print(...) with double quotes to show text on screen.",
        "input(...) pauses the program and waits for the player to type something.",
        "Use '+' to stick strings together like LEGO bricks!"
      ],
      quickQuiz: {
        question: "What does input('What is your name? ') do?",
        options: [
          "It prints 'What is your name?' and immediately closes the program.",
          "It prints the question, waits for the user to type an answer, and returns it.",
          "It forces the user to pick from a list of names."
        ],
        correctIndex: 1,
        explanation: "Correct! input() shows the prompt and waits until the user hits Enter!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: System Diagnostics Prank",
      explanation: "Let's build a script that asks for the user's name and device model, pretends to run a security scan, and prints a funny message.",
      code: `# Step 1: Welcome message
print("====================================")
print("  DEFCON 5 SECURITY SCANNER v1.0")
print("====================================")

# Step 2: Get user info
target_name = input("Enter device owner name: ")
device_type = input("Enter device model (e.g., iPhone / PC / Chromebook): ")

# Step 3: Fake system log
print("\\n[!] Initializing deep scan on " + target_name + "'s " + device_type + "...")
print("[!] Accessing camera feed... SUCCESS!")
print("[!] Download secret browser history... 100%")

# Step 4: The Punchline
print("\\n>>> RESULT: You have been hacked by... THE COOKIE MONSTER! 🍪")
print("To unlock your device, hand over 3 chocolate chip cookies immediately!")`,
      steps: [
        { line: 1, title: "Banner Header", desc: "Use print() to draw visual dividers made of '=' characters." },
        { line: 6, title: "Gathering User Input", desc: "Save inputs into target_name and device_type variables." },
        { line: 10, title: "Fake Log Simulation", desc: "Combine static text with user variables using '+'." },
        { line: 15, title: "The Funny Reveal", desc: "End with ASCII art or funny demands!" }
      ]
    },
    tinkerPlayground: {
      goal: "Customize the Rickroll / Prank Simulator with dramatic ASCII art and custom demands!",
      starterCode: `# DAY 1 TINKER LAB: Fake Virus / Rickroll Prank

print("----------------------------------------")
print("⚠️ CRITICAL ERROR: VIRUS DETECTED ⚠️")
print("----------------------------------------")

victim = input("Who is using this computer? ")
favorite_food = input("What is your favorite snack? ")

print("\\n[1/3] Encrypting files for user: " + victim)
print("[2/3] Downloading all " + favorite_food + " recipes...")
print("[3/3] Sending self-destruct signal in 3... 2... 1...")

print("\\n🎉 JUST KIDDING! " + victim + ", you survived!")
print("Here is your secret victory song: https://www.youtube.com/watch?dQw4w9WgXcQ")
`,
      solutionCode: `# DAY 1 SOLUTION
print("----------------------------------------")
print("⚡ ULTIMATE PRANK SYSTEM v2.0 ⚡")
print("----------------------------------------")

victim = input("Enter target suspect name: ")
pet_name = input("Enter name of your favorite pet/stuffed animal: ")
snack = input("What food gives you super powers? ")

print("\\n[!] Scanning " + victim + "'s computer...")
print("[!] Found secret stash of " + snack + "!")
print("[!] Warning: " + pet_name + " has taken control of the keyboard!")

print("\\n  |\\\\---/| ")
print("  | o_o  |  MEOW! Pay 500 " + snack + "s to unlock!")
print("   \\\\_^_/   ")
print("\\nPranked successfully! 🚀")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: The Dramatic Delay",
          task: "Add '...' or extra dots between status logs to make it look like a real loading screen!",
          hint: "Just edit the strings inside print() to include extra dots or spaces!"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Custom ASCII Art",
          task: "Add a robot or alien cat using print() ASCII art at the end of the prank!",
          hint: "Example: print('  (o_o)  ') or print('  <|>  ')"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Extra Variable Demand",
          task: "Ask for a 3rd question (e.g., favorite video game) and use it in the virus ransom message!",
          hint: "Create a new variable like game = input(...) and add '+' game to print()."
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Forgot quotes around string literals: print(Hello) causes a NameError.",
        "Missing spaces when concatenating: 'Hello'+'World' produces 'HelloWorld' instead of 'Hello World'."
      ],
      tinkerQuestions: [
        "What happens if you type a number into input()? Is it treated as text or a math number?",
        "Can you print a multi-line message using triple quotes ''' ... '''?"
      ]
    }
  },
  {
    day: 2,
    title: "Superhero Superpower Stat Generator",
    focus: "Variables, Type Casting (int, float), Math Operators",
    category: "Week 1: Core Logic & Turtle Graphics",
    icon: "🦸‍♂️",
    summary: "Calculate custom superhero stats like Taco Armor, Running Speed in MPH, and Combat Power!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Math in Python & Converting Text to Numbers",
      explanation: "`input()` ALWAYS gives you text (a string). If you want to multiply or add numbers, you must turn it into an integer using `int()`!",
      syntaxSnippet: `# Turning string input into an integer
age = int(input("How old are you? "))

# Doing math in Python
age_in_days = age * 365
dog_years = age * 7

# Displaying math results (converting back to string or using commas)
print("You are approximately", age_in_days, "days old!")`,
      keyTakeaways: [
        "Math operators: + (add), - (subtract), * (multiply), / (divide).",
        "int('10') turns string '10' into number 10.",
        "In print(), commas separate items and automatically add spaces!"
      ],
      quickQuiz: {
        question: "If user enters '5' into x = input(), what is x * 2 in Python?",
        options: [
          "10",
          "'55' (the string repeated twice)",
          "Error"
        ],
        correctIndex: 1,
        explanation: "Correct! String '5' multiplied by 2 doubles the text into '55'. Use int(input()) to get 10!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Hero Power Level Calculator",
      explanation: "Calculate a superhero's combat stats based on their age, lucky number, and height.",
      code: `# Superhero Stat Calculator
print("=== ⚡ SUPERHERO STAT MATRIX ⚡ ===")
hero_name = input("What is your superhero name? ")
age = int(input("Enter your age: "))
lucky_num = int(input("Enter your lucky number (1-100): "))

# Math calculations
speed_mph = age * 4.5
taco_armor = lucky_num * 12
combat_power = (age * 10) + (lucky_num * 25)

print("\\n------------------------------------")
print("HERO DOSSIER FOR: " + hero_name)
print("------------------------------------")
print("🏃 Speed:", speed_mph, "MPH")
print("🌮 Taco Shield Durability:", taco_armor, "HP")
print("💥 Total Combat Rating:", combat_power, "OVERALL")`,
      steps: [
        { line: 4, title: "Casting to Integer", desc: "Wrap input() in int(...) so Python treats it as a number." },
        { line: 8, title: "Math Formulae", desc: "Multiply and add values to compute custom RPG stats." },
        { line: 15, title: "Clean Output", desc: "Print formatted stats with emoji icons!" }
      ]
    },
    tinkerPlayground: {
      goal: "Customize your hero stats! Add stats for Dog Power, Pizza Power, or Jump Height in Meters.",
      starterCode: `# DAY 2 TINKER LAB: Superhero Stat Generator

hero = input("Enter Hero Name: ")
height_cm = float(input("Enter your height in cm: "))
fav_snack_count = int(input("How many snacks can you eat in 1 minute? "))

# CALCULATIONS
laser_power = fav_snack_count * 50
flight_altitude = height_cm * 10
stamina = (fav_snack_count * 15) + 100

print("\\n=== STAT CARD FOR " + hero + " ===")
print("⚡ Laser Eye Power:", laser_power, "Gigawatts")
print("✈️ Max Flight Altitude:", flight_altitude, "Feet")
print("🔋 Stamina Level:", stamina, "%")
`,
      solutionCode: `# DAY 2 SOLUTION
hero = input("Hero Name: ")
height_cm = float(input("Height (cm): "))
snacks = int(input("Snacks per minute: "))

# New Custom Formula
laser = snacks * 75
speed = height_cm / 2
stealth = 100 - (snacks * 5)

print("\\n⚡ " + hero.upper() + " STAT MATRIX ⚡")
print("🔴 Laser Beam Level:", laser)
print("⚡ Speed Factor:", speed, "m/s")
print("🥷 Stealth Rating:", stealth, "/ 100")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: The Dog-Year Converter",
          task: "Ask for their age and print their age in Dog Years (age * 7) and Cat Years (age * 6)!",
          hint: "dog_years = age * 7"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Taco Armor Booster",
          task: "Add a multiplier so if their lucky number is over 50, Taco Armor gets multiplied by 2!",
          hint: "Try typing: armor = armor * 2"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Age in Seconds",
          task: "Calculate how many seconds old the hero is! (age * 365 * 24 * 60 * 60)",
          hint: "seconds = age * 31536000"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "TypeError when adding int and str directly: 'Power: ' + 100 throws an error. Use print('Power:', 100) or str(100)."
      ],
      tinkerQuestions: [
        "What happens if you enter a decimal like 14.5 into int()? (It throws ValueError! Use float() instead)."
      ]
    }
  },
  {
    day: 3,
    title: "Haunted House Escape",
    focus: "Conditionals (if, elif, else), Comparison Operators (==, !=, >, <)",
    category: "Week 1: Core Logic & Turtle Graphics",
    icon: "🏰",
    summary: "Build a Choose-Your-Own-Adventure game with branching storylines based on player decisions!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Making Decisions with if, elif, and else",
      explanation: "Conditionals are like fork in the road in a video game. IF you choose left door, path A happens. ELIF you choose right door, path B happens. ELSE, something unexpected happens!",
      syntaxSnippet: `# Making choices in Python
choice = input("Do you open the RED door or BLUE door? ").lower()

if choice == "red":
    print("🔥 A friendly dragon gives you a golden key!")
elif choice == "blue":
    print("🌊 Water floods the room! You swim to safety.")
else:
    print("❓ You stood still for too long and a ghost scared you away!")`,
      keyTakeaways: [
        "Use '==' to check if two things are EQUAL (not a single '=' which assigns variables!).",
        "Indent code under if/elif/else with 4 spaces (Tab key).",
        ".lower() turns input into lowercase so 'RED' and 'red' both work!"
      ],
      quickQuiz: {
        question: "What is the difference between '=' and '==' in Python?",
        options: [
          "'=' compares two values, '==' sets a variable.",
          "'=' sets a variable value, '==' compares if two values are equal.",
          "They are identical and can be used interchangeably."
        ],
        correctIndex: 1,
        explanation: "Bingo! '=' stores data in a variable box. '==' asks a question: 'Are these equal?'"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: The Spooky Basement Adventure",
      explanation: "Code a 2-level branching mystery game with traps, treasures, and multiple game endings.",
      code: `# Spooky Mansion Escape
print("🏚️ WELCOME TO SPIDERWEB MANION 🏚️")
print("You stand in a dimly lit hallway. You see a LEFT door and a RIGHT door.")

door = input("Which door do you open? (left/right): ").lower()

if door == "left":
    print("\\nYou enter the library. A glowing book rests on a pedestal.")
    action = input("Do you READ the book or RUN away? (read/run): ").lower()
    
    if action == "read":
        print("✨ The book teaches you a magic spell! YOU ESCAPED THE MANSION! 🏆")
    else:
        print("🦇 Bats swarm out of the chimney! Game Over.")

elif door == "right":
    print("\\nYou enter the kitchen. A skeleton is chef cooking pizza!")
    food = input("Do you EAT pizza or FIGHT skeleton? (eat/fight): ").lower()
    
    if food == "eat":
        print("🍕 Delicious! The skeleton becomes your best friend. YOU WIN! 🎉")
        print("Your final friendship rank: Skeleton Master!")
    else:
        print("💀 The skeleton throws a spatula at you! Game Over.")

else:
    print("🤔 You fell through a trapdoor into a pit of slime!")`,
      steps: [
        { line: 7, title: "First Choice Branch", desc: "Check if door equals 'left' or 'right'." },
        { line: 10, title: "Nested Conditionals", desc: "Inside an if block, put another if/else for the second choice!" },
        { line: 24, title: "Fallback Catch-All", desc: "Use 'else:' to handle invalid or unexpected inputs." }
      ]
    },
    tinkerPlayground: {
      goal: "Add 2 new rooms, a hidden secret room, or a key inventory item to win the game!",
      starterCode: `# DAY 3 TINKER LAB: Choose Your Own Adventure

print("🚀 GALACTIC ALIEN SPACESHIP ESCAPE 🚀")
choice1 = input("Do you head to the BRIDGE or the ENGINE ROOM? (bridge/engine): ").lower()

if choice1 == "bridge":
    print(" You see the Alien Captain sitting in the command chair!")
    choice2 = input("Do you SALUTE or STEAL the spaceship key? (salute/steal): ").lower()
    if choice2 == "salute":
        print("👽 The Captain honors your politeness and flies you home safely!")
    else:
        print("🚨 Alarm sounds! You got thrown in space jail!")

elif choice1 == "engine":
    print("🔥 The engine core is overheating!")
    print("You press the red emergency button and eject in an escape pod!")

else:
    print("❌ Invalid command! The spaceship warp drive engaged without you!")
`,
      solutionCode: `# DAY 3 SOLUTION WITH SECRET CODE
print("🏰 CASTLE DRAGON ESCAPE 🏰")
choice1 = input("Go to TOWER, DUNGEON, or SECRET PASSAGE? ").lower()

if choice1 == "tower":
    print("🏰 You find a magic broomstick!")
    print("You fly out the window! YOU WIN!")

elif choice1 == "dungeon":
    print("🐉 A sleeping dragon wakes up...")
    item = input("Do you offer a SHIELD or A BURGER? ").lower()
    if item == "burger":
        print("🍔 Dragon loves burgers! You are now dragon friends!")
    else:
        print("🔥 The shield melts! Game Over.")

elif choice1 == "secret passage":
    print("💎 You found the hidden treasure vault! UNLIMITED GOLD!")

else:
    print("🦇 You got lost in the foggy courtyard.")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add a 3rd Path",
          task: "Add an 'elif choice1 == \"dungeon\":' option with its own sub-choice!",
          hint: "Follow the exact pattern of the bridge and engine blocks."
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Secret Easter Egg Code",
          task: "If player types 'godmode' for choice1, print '👑 UNLIMITED POWER! You teleported to safety!'",
          hint: "Add 'elif choice1 == \"godmode\":' before the else block!"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Case-Insensitive Inputs",
          task: "Make sure typing 'BRIDGE', 'Bridge', or 'bridge' all work smoothly using .lower()!",
          hint: "Make sure you write choice1 = input(...).lower()"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "IndentationError: Mixing tabs and spaces, or forgetting to indent lines inside if statements.",
        "Using '=' instead of '==': 'if door = left:' will throw a SyntaxError!"
      ],
      tinkerQuestions: [
        "How can you check two conditions at once using 'and' or 'or'? (e.g., if has_key == True and door == 'red':)"
      ]
    }
  },
  {
    day: 4,
    title: "Sarcastic Magic 8-Ball & Dice Roller",
    focus: "import random, random.choice(), random.randint()",
    category: "Week 1: Core Logic & Turtle Graphics",
    icon: "🔮",
    summary: "Generate random outcomes and trigger blunt, sarcastic, or hilarious automated responses!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Adding Unpredictability with Python's random Library",
      explanation: "In Python, libraries are like extra toolkits. The `random` module gives you dice, coin flips, and shuffled decks!",
      syntaxSnippet: `import random

# Pick a random item from a list
answers = ["Yes, obviously!", "Not in a million years.", "Ask someone who cares."]
prediction = random.choice(answers)

# Roll a random number between 1 and 6 (like a 6-sided die)
dice_roll = random.randint(1, 6)

print("Dice roll result:", dice_roll)
print("Magic 8-Ball says:", prediction)`,
      keyTakeaways: [
        "Always put 'import random' at the top of your script.",
        "random.choice(my_list) picks a random element from a list.",
        "random.randint(min, max) returns a random integer between min and max inclusive."
      ],
      quickQuiz: {
        question: "What values can random.randint(1, 3) return?",
        options: [
          "Only 1 or 2",
          "1, 2, or 3",
          "Any number between 1.0 and 3.0 with decimals"
        ],
        correctIndex: 1,
        explanation: "Correct! randint(a, b) includes both endpoints 1 and 3!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Sarcastic Fortune Teller",
      explanation: "Build a Magic 8-Ball that pauses for dramatic effect, rolls a fortune die, and gives cheeky answers.",
      code: `import random
import time

print("🎱 WELCOME TO THE SARCASTIC MAGIC 8-BALL 🎱")
question = input("Ask a yes/no question about your future: ")

print("\\n🔮 Consulting cosmic forces...")
time.sleep(1)  # Pause for 1 second for dramatic effect
print("✨ Shaking the mystic sphere...")
time.sleep(1)

responses = [
    "Not even in an alternate universe.",
    "My sources say... absolutely NOT.",
    "Ask again after you clean your room.",
    "Signs point to YES! (Just kidding, no).",
    "100% Guaranteed YES! 🎉",
    "Outlook hazy... go eat a snack and try later."
]

# Pick a random answer
result = random.choice(responses)
luck_score = random.randint(1, 100)

print("\\n🔮 ANSWER:", result)
print("📊 Today's Luck Stat:", luck_score, "/ 100")`,
      steps: [
        { line: 1, title: "Importing Modules", desc: "Load 'random' for chance and 'time' for dramatic delays." },
        { line: 11, title: "Response List", desc: "Store funny answers inside a Python list using square brackets []." },
        { line: 20, title: "Random Selection", desc: "Use random.choice() and random.randint() to deliver random fortunes." }
      ]
    },
    tinkerPlayground: {
      goal: "Add your own hilarious responses, a D20 RPG dice roller, or sound effect text!",
      starterCode: `# DAY 4 TINKER LAB: Sarcastic 8-Ball & RPG Dice Roller

import random

print("🎲 EPIC RPG DICE & FORTUNE GENERATOR 🎲")
mode = input("Choose mode: (1) Sarcastic 8-Ball  or  (2) Roll D20 Dice: ")

if mode == "1":
    q = input("Ask your burning question: ")
    fortunes = [
        "Signs point to yes!",
        "Don't count on it, chief.",
        "Error 404: Fortune not found.",
        "Yes, but it will cost you 10 gold coins!"
    ]
    print("🎱 Result:", random.choice(fortunes))

elif mode == "2":
    d20 = random.randint(1, 20)
    print("🎲 You rolled a D20:", d20)
    if d20 == 20:
        print("💥 CRITICAL HIT! You defeated the dragon!")
    elif d20 == 1:
        print("💀 CRITICAL FAIL! You tripped over a pebble!")

else:
    print("❌ Invalid selection!")
`,
      solutionCode: `# DAY 4 SOLUTION
import random
import time

print("🔮 ULTIMATE FORTUNE & BATTLE ROLLER 🔮")
pet = input("What is your pet's name? ")

outcomes = [
    pet + " will steal your socks today!",
    "You will find $100 in an old jacket!",
    "Your next pizza will be 200% extra cheesy!",
    "An alien will challenge you to a dance-off!"
]

print("\\n⚡ Calculating timeline...")
time.sleep(1)
print("✨ PREDICTION:", random.choice(outcomes))
print("🎲 Bonus Luck Roll:", random.randint(50, 999))`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add 3 Sarcastic Answers",
          task: "Expand the fortunes list with 3 new hilarious or meme answers!",
          hint: "Remember to separate string items in lists with commas!"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Dramatic Countdown",
          task: "Use time.sleep(1) to count down 3... 2... 1... before revealing the answer!",
          hint: "print('3...'); time.sleep(1); print('2...'); time.sleep(1)"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Coin Flip Feature",
          task: "Add a '3' mode for flipping a coin (Heads or Tails) using random.choice(['HEADS', 'TAILS'])!",
          hint: "elif mode == '3': print(random.choice(['HEADS', 'TAILS']))"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "IndexError when passing an empty list to random.choice([]). Make sure list has items!",
        "Forgetting 'import random' causes NameError: name 'random' is not defined."
      ],
      tinkerQuestions: [
        "What happens if you run random.randint(1, 1)? (It always returns 1!)."
      ]
    }
  },
  {
    day: 5,
    title: "Secret Code Breaker (Bomb Defusal / Vault)",
    focus: "while Loops, Game State, Attempt Counter, Break",
    category: "Week 1: Core Logic & Turtle Graphics",
    icon: "💣",
    summary: "Build a bomb-defusal / vault-cracking scenario where player gets 7 attempts to guess a secret number!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Repeating Code with while Loops",
      explanation: "A `while` loop keeps running code over and over again AS LONG AS a condition is true. It's the engine behind every video game loop!",
      syntaxSnippet: `# Repeating until condition changes
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    guess = input("Enter password: ")
    if guess == "secret123":
        print("🔓 Vault Unlocked!")
        break # Exit loop immediately!
    else:
        attempts = attempts + 1
        print("❌ Wrong! Attempts left:", max_attempts - attempts)

if attempts == max_attempts:
    print("🚨 LOCKDOWN ACTIVATED!")`,
      keyTakeaways: [
        "while condition: loops continuously until condition turns False.",
        "break stops the loop immediately when triggered.",
        "Always make sure something inside the loop changes (like attempts + 1) so it doesn't loop forever!"
      ],
      quickQuiz: {
        question: "What happens if a while loop condition NEVER becomes False?",
        options: [
          "Python automatically stops it after 10 seconds.",
          "It creates an 'Infinite Loop' and runs forever until stopped!",
          "It skips the loop code completely."
        ],
        correctIndex: 1,
        explanation: "Spot on! That's why we always update variables inside while loops!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Vault Code Breaker",
      explanation: "Create a vault-cracking game where Python picks a secret number from 1 to 100, giving Higher/Lower hints.",
      code: `import random

print("🔐 SECRET VAULT CODE BREAKER v1.0 🔐")
print("Guess the 2-digit vault combination (1-100) before security locks you out!")

secret_code = random.randint(1, 100)
attempts_left = 7
won = False

while attempts_left > 0:
    print("\\n------------------------------------")
    print("⏳ Attempts remaining:", attempts_left)
    guess = int(input("Enter code guess: "))
    
    if guess == secret_code:
        print("🎉 BINGO! Vault door unlocked! You found 1,000,000 GOLD COINS! 💰")
        won = True
        break
    elif guess < secret_code:
        print("📈 TOO LOW! The secret combination is HIGHER.")
    else:
        print("📉 TOO HIGH! The secret combination is LOWER.")
        
    attempts_left = attempts_left - 1

if not won:
    print("\\n🚨 BOMB DETONATED! Security Lockdown! The secret code was:", secret_code)`,
      steps: [
        { line: 6, title: "Secret Number Setup", desc: "Generate secret number with randint(1, 100)." },
        { line: 10, title: "The Game Loop", desc: "Loop while attempts_left > 0." },
        { line: 15, title: "Higher / Lower Logic", desc: "Give hints using if/elif comparisons." },
        { line: 24, title: "Win/Loss Outcome", desc: "Check if won flag is True or False after loop ends." }
      ]
    },
    tinkerPlayground: {
      goal: "Customize the game state! Add difficulty settings (Easy=10 tries, Hard=3 tries) or cheat codes!",
      starterCode: `# DAY 5 TINKER LAB: Vault Breaker

import random

secret = random.randint(1, 50)
tries = 5

print("🕵️ SPY AGENCY PASSCODE BREAKER 🕵️")
print("Guess number between 1 and 50!")

while tries > 0:
    guess = int(input("Passcode attempt: "))
    
    if guess == secret:
        print("🔓 ACCESS GRANTED, AGENT!")
        break
    elif guess < secret:
        print("⬆️ HIGHER!")
    else:
        print("⬇️ LOWER!")
        
    tries = tries - 1
    print("Tries left:", tries)

if tries == 0:
    print("💥 ALARM SOUNDED! Code was:", secret)
`,
      solutionCode: `# DAY 5 SOLUTION WITH CHEAT CODE
import random

secret = random.randint(1, 100)
tries = 6

print("💣 CYBER BOMB DEFUSAL 💣")

while tries > 0:
    guess_raw = input("Enter wire code (1-100 or 'cheat'): ")
    
    if guess_raw == "cheat":
        print("🤫 [SYSTEM CHEAT]: The code is", secret)
        continue
        
    guess = int(guess_raw)
    if guess == secret:
        print("✂️ BOMB DEFUSED! You saved the city! 🎆")
        break
    elif guess < secret:
        print("🔥 HOTTER! Secret is higher!")
    else:
        print("🧊 COLDER! Secret is lower!")
        
    tries -= 1

if tries == 0:
    print("💥 BOOM! The bomb exploded!")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Custom Difficulty Selector",
          task: "Ask player at start: Easy (10 tries), Medium (6 tries), or Hard (3 tries)!",
          hint: "Set tries = 10 if diff == 'easy'"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Secret 'Cheat' Keyword",
          task: "If player types 'cheat', show them the secret number without losing an attempt!",
          hint: "Check if input string == 'cheat' before converting to int()."
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Score Tracker",
          task: "Calculate score based on remaining tries: score = tries_left * 100!",
          hint: "Print score right after the player wins!"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Infinite loop if attempts counter isn't reduced inside loop.",
        "ValueError when converting non-numeric text like 'abc' to int()."
      ],
      tinkerQuestions: [
        "What is the difference between 'break' (exit loop completely) and 'continue' (skip to next turn)?"
      ]
    }
  },
  {
    day: 6,
    title: "Neon Cyber-Spiral",
    focus: "Visuals with Python turtle, Pen Movement, Colors & Angles",
    category: "Week 1: Core Logic & Turtle Graphics",
    icon: "🐢",
    summary: "Control an on-screen pen to draw expanding optical illusions and neon geometric spirals!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Drawing Graphics with Python Turtle",
      explanation: "Imagine a robotic turtle holding a paintbrush on your screen canvas. You give it simple instructions like move forward, turn left, and change color!",
      syntaxSnippet: `import turtle

# Create screen and turtle pen
t = turtle.Turtle()
t.speed(0) # Fast drawing speed
t.pencolor("cyan")

# Move turtle
t.forward(100) # Move forward 100 pixels
t.left(90)     # Turn left 90 degrees
t.forward(100)`,
      keyTakeaways: [
        "forward(pixels) and backward(pixels) move the pen.",
        "left(degrees) and right(degrees) rotate the pen head.",
        "pencolor('red') and bgcolor('black') set colors!"
      ],
      quickQuiz: {
        question: "What angle turn draws a perfect square corner?",
        options: [
          "45 degrees",
          "90 degrees",
          "180 degrees"
        ],
        correctIndex: 1,
        explanation: "Correct! A 90-degree turn creates a perpendicular right angle!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Expanding Rainbow Star Spiral",
      explanation: "Use loops and turtle commands to generate a mesmerizing rainbow spiral illusion.",
      code: `import turtle

# Setup dark cyber canvas
win = turtle.Screen()
win.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
t.width(2)

colors = ["cyan", "magenta", "yellow", "lime", "purple", "orange"]

# Drawing loop
for i in range(120):
    t.pencolor(colors[i % 6]) # Cycle through colors
    t.forward(i * 3)          # Step size gets bigger each loop
    t.left(59)               # Angle slightly off 60 for spiral effect

print("✨ Neon Cyber Spiral Complete!")`,
      steps: [
        { line: 5, title: "Black Background", desc: "Set dark background using win.bgcolor('black')." },
        { line: 11, title: "Color Array", desc: "Store list of vibrant neon color names." },
        { line: 15, title: "Modulus Math %", desc: "i % 6 cycles numbers 0,1,2,3,4,5 repeatedly through colors." },
        { line: 17, title: "Spiral Angle", desc: "Turning 59 degrees instead of 60 causes lines to twist into a spiral!" }
      ]
    },
    tinkerPlayground: {
      goal: "Modify pen width, angle degrees (try 89, 91, 121), and color list to create unique digital art!",
      starterCode: `# DAY 6 TINKER LAB: Turtle Cyber-Spiral

import turtle

t = turtle.Turtle()
t.speed(0)
turtle.bgcolor("#0f172a") # Deep obsidian blue

colors = ["#38bdf8", "#f43f5e", "#a855f7", "#34d399"]

for x in range(100):
    t.pencolor(colors[x % 4])
    t.forward(x * 2)
    t.left(91) # Try changing 91 to 89, 121, or 144!
    t.width(x / 25)
`,
      solutionCode: `# DAY 6 SOLUTION
import turtle

t = turtle.Turtle()
t.speed(0)
turtle.bgcolor("black")

colors = ["red", "lime", "cyan", "gold"]

for x in range(150):
    t.pencolor(colors[x % 4])
    t.forward(x * 2.5)
    t.left(144) # Creates a 5-pointed star spiral!
    t.width(2)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: The Star Spiral Angle",
          task: "Change turn angle to 144 degrees to turn the spiral into glowing concentric stars!",
          hint: "Replace left(91) with left(144)."
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Thicker Pen Strokes",
          task: "Set t.width(4) or make pen width grow bigger as x increases!",
          hint: "t.width(x / 10)"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Circle Illusion",
          task: "Replace t.forward(x * 2) with t.circle(x) to draw colorful overlapping circles!",
          hint: "t.circle(x)"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Turtle window freezing: ensure speed(0) is used for instant rendering.",
        "Using unrecognized color names like 'blurple'. Use standard hex codes like '#8b5cf6' or common color names."
      ],
      tinkerQuestions: [
        "What formula calculates regular polygon angles? (360 / number of sides!)."
      ]
    }
  },
  {
    day: 7,
    title: "Retro Space Invader / Pixel Alien",
    focus: "for Loops with Turtle, Nested Loops, Grid Coordinates & Stamps",
    category: "Week 1: Core Logic & Turtle Graphics",
    icon: "👾",
    summary: "Automate geometric patterns and draw a 1980s arcade alien sprite on a grid using colored turtle stamps!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Counted for Loops & Stamp Art Grid",
      explanation: "Instead of moving line by line, turtle can 'stamp' shapes (squares, circles) directly onto coordinates. A nested `for` loop draws entire 2D grids!",
      syntaxSnippet: `import turtle

t = turtle.Turtle()
t.shape("square")
t.penup() # Don't draw trailing lines

# Draw a row of 5 stamps
for x in range(5):
    t.goto(x * 30, 0)
    t.stamp()`,
      keyTakeaways: [
        "range(count) runs a loop exactly count times.",
        "t.penup() prevents drawing lines when moving between positions.",
        "t.stamp() prints the turtle shape onto the canvas!"
      ],
      quickQuiz: {
        question: "What does range(5) produce in Python?",
        options: [
          "Numbers 1, 2, 3, 4, 5",
          "Numbers 0, 1, 2, 3, 4",
          "A random set of 5 numbers"
        ],
        correctIndex: 1,
        explanation: "Correct! range(5) starts at index 0 and produces 5 numbers: 0 to 4!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: 8-Bit Pixel Alien Sprite",
      explanation: "Use 2D grid matrix data and nested loops to draw an 8-bit Space Invader alien.",
      code: `import turtle

win = turtle.Screen()
win.bgcolor("black")

t = turtle.Turtle()
t.shape("square")
t.shapesize(1.5) # Make square pixels bigger
t.penup()
t.speed(0)
t.color("#00ff66") # Matrix neon green

# 8x8 Pixel Alien Grid Map (1 = Green pixel, 0 = Empty)
alien_grid = [
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 0, 0, 0]
]

# Draw Grid
start_x = -100
start_y = 100
pixel_size = 30

for row_idx, row in enumerate(alien_grid):
    for col_idx, pixel in enumerate(row):
        if pixel == 1:
            x_pos = start_x + (col_idx * pixel_size)
            y_pos = start_y - (row_idx * pixel_size)
            t.goto(x_pos, y_pos)
            t.stamp()

print("👾 Pixel Alien Sprite Generated!")`,
      steps: [
        { line: 12, title: "Pixel Grid Matrix", desc: "Design a 2D array where 1 represents pixel blocks and 0 represents blank space." },
        { line: 28, title: "Nested Enumerate Loops", desc: "Loop through every row and column position in the sprite map." },
        { line: 33, title: "Grid Coordinate Math", desc: "Calculate exact (x, y) canvas coordinates for each pixel." }
      ]
    },
    tinkerPlayground: {
      goal: "Edit the 1s and 0s in alien_grid to design your own custom Creeper face, Pac-Man, or Heart sprite!",
      starterCode: `# DAY 7 TINKER LAB: Pixel Art Stamp Builder

import turtle

t = turtle.Turtle()
t.shape("square")
t.penup()
t.speed(0)
t.color("cyan")
turtle.bgcolor("#020617")

# Change the 1s to alter the pixel design!
heart_map = [
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0]
]

size = 25
for r_idx, row in enumerate(heart_map):
    for c_idx, val in enumerate(row):
        if val == 1:
            t.goto(-80 + c_idx * size, 80 - r_idx * size)
            t.stamp()
`,
      solutionCode: `# DAY 7 SOLUTION: DUAL-COLOR SPRITE
import turtle

t = turtle.Turtle()
t.shape("square")
t.penup()
t.speed(0)
turtle.bgcolor("black")

# 1 = Pink, 2 = Gold
sprite = [
    [0, 1, 1, 0],
    [1, 2, 2, 1],
    [1, 2, 2, 1],
    [0, 1, 1, 0]
]

for r, row in enumerate(sprite):
    for c, val in enumerate(row):
        if val == 1:
            t.color("magenta")
            t.goto(-50 + c * 30, 50 - r * 30)
            t.stamp()
        elif val == 2:
            t.color("gold")
            t.goto(-50 + c * 30, 50 - r * 30)
            t.stamp()`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Design a Creeper Face",
          task: "Modify the 1s and 0s array to draw a Minecraft Creeper face!",
          hint: "Put 0s for the eye sockets and mouth!"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Dual Color Pixels",
          task: "Introduce number 2 into the grid map for a second pixel color (e.g. 1=Green, 2=Yellow)!",
          hint: "elif val == 2: t.color('yellow')"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Alien Army",
          task: "Duplicate the drawing loop to spawn a 2nd alien right next to the 1st one!",
          hint: "Offset start_x by +250 pixels!"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Inconsistent row lengths in grid array can cause offset pixels. Ensure every row has same length!"
      ],
      tinkerQuestions: [
        "How do retro video games (like NES/GameBoy) store sprite graphics? (In small binary 2D arrays just like this!)."
      ]
    }
  },
  {
    day: 8,
    title: "Battle Royale Loot Drop Picker",
    focus: "Lists ([]), Indexing, append(), remove(), len()",
    category: "Week 2: Data Structures, Functions & Capstone",
    icon: "🧰",
    summary: "Generate random weapon crates, manage a 5-slot backpack inventory, and drop or swap weapons!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Managing Inventory with Python Lists",
      explanation: "A list is like a digital backpack. You can look up items by index position, add new items with .append(), and remove trash items with .remove()!",
      syntaxSnippet: `# Creating a list
backpack = ["Plasma Pistol", "Health Potion", "Shield Bubble"]

# Accessing items (Python starts counting at 0!)
print("Equipped Weapon:", backpack[0])

# Adding a new drop
backpack.append("Legendary Sniper")

# Dropping an item
backpack.remove("Health Potion")

print("Backpack size:", len(backpack))`,
      keyTakeaways: [
        "Lists use square brackets [] with items separated by commas.",
        "List indices start at 0! Index 0 is the 1st item.",
        ".append(item) adds to end, .remove(item) deletes from list, len(list) gets count."
      ],
      quickQuiz: {
        question: "If items = ['Sword', 'Shield', 'Bow'], what is items[1]?",
        options: [
          "'Sword'",
          "'Shield'",
          "'Bow'"
        ],
        correctIndex: 1,
        explanation: "Correct! Index 0 is 'Sword', Index 1 is 'Shield'!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Fortnite Crate Opener & Inventory",
      explanation: "Open loot crates, equip weapons, and manage inventory limits.",
      code: `import random

# Initial player inventory
inventory = ["Wooden Axe", "Bandages"]
max_capacity = 4

# Available loot table
loot_pool = [
    "🔥 Mythic Fire Sword",
    "⚡ Laser Rifle",
    "🛡️ Slurp Juice",
    "💎 Diamond Shield",
    "🚀 Rocket Launcher",
    "💣 Boogie Bomb"
]

print("📦 FORTNITE LOOT CRATE SIMULATOR 📦")
print("Starting Inventory:", inventory)

# Open 3 Crate Drops
for crate_num in range(1, 4):
    print("\\n--- Opening Supply Drop #" + str(crate_num) + " ---")
    dropped_item = random.choice(loot_pool)
    print("✨ You found:", dropped_item)
    
    if len(inventory) < max_capacity:
        inventory.append(dropped_item)
        print("✅ Added to inventory!")
    else:
        print("⚠️ Backpack FULL (" + str(max_capacity) + "/" + str(max_capacity) + ")!")
        action = input("Drop oldest item (" + inventory[0] + ") to equip? (yes/no): ").lower()
        if action == "yes":
            removed = inventory.pop(0)
            inventory.append(dropped_item)
            print("Dropped:", removed)
            print("Equipped:", dropped_item)

print("\\n🎒 FINAL LOADOUT (" + str(len(inventory)) + " items):")
for idx, item in enumerate(inventory, 1):
    print(str(idx) + ".", item)`,
      steps: [
        { line: 4, title: "Inventory List", desc: "Store items inside backpack array." },
        { line: 17, title: "Checking Capacity", desc: "Use len(inventory) < max_capacity to check if space remains." },
        { line: 24, title: "Swapping Items", desc: "inventory.pop(0) removes the oldest item at index 0." }
      ]
    },
    tinkerPlayground: {
      goal: "Add rarity tiers (Common, Rare, Legendary) or increase backpack capacity!",
      starterCode: `# DAY 8 TINKER LAB: Battle Royale Loot Drop

import random

inventory = ["Common Pistol"]
loot = ["Rare Shotgun", "Epic Sniper", "Medkit", "Chug Jug", "Grappler"]

print("🎮 BATTLE ROYALE LOOT MANAGER 🎮")

while True:
    print("\\nCurrent Loadout:", inventory)
    cmd = input("Action: (1) Open Crate  (2) Drop Item  (3) Quit: ")
    
    if cmd == "1":
        found = random.choice(loot)
        print("🎁 Found:", found)
        if len(inventory) < 5:
            inventory.append(found)
        else:
            print("Backpack FULL!")
            
    elif cmd == "2":
        if len(inventory) > 0:
            drop_name = input("Enter exact name to drop: ")
            if drop_name in inventory:
                inventory.remove(drop_name)
                print("🗑️ Dropped", drop_name)
            else:
                print("Item not in inventory!")
                
    elif cmd == "3":
        print("👋 Exiting match!")
        break
`,
      solutionCode: `# DAY 8 SOLUTION WITH SORTING
import random

inventory = ["Pistol"]
legendary_loot = ["⚡ Mjoinir Hammer", "🐲 Dragon Cannon", "👑 Gold Crown"]

print("🎒 RPG INVENTORY SYSTEM 🎒")
inventory.append(random.choice(legendary_loot))
inventory.sort() # Sorts inventory alphabetically!

print("Sorted Inventory:", inventory)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Increase Backpack Limit",
          task: "Expand backpack size from 5 items to 8 items!",
          hint: "Change len(inventory) < 5 to len(inventory) < 8"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Alphabetical Sorting",
          task: "Add a new option 'Sort' that sorts player inventory alphabetically using inventory.sort()!",
          hint: "inventory.sort()"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Clear All Items",
          task: "Add a 'Nuke Inventory' command that empties the entire list using inventory.clear()!",
          hint: "inventory.clear()"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "ValueError: list.remove(x): x not in list. Always check 'if x in my_list:' before removing!"
      ],
      tinkerQuestions: [
        "What is the difference between pop(0) and remove('Pistol')? (pop uses index position, remove uses item value!)."
      ]
    }
  },
  {
    day: 9,
    title: "Pokémon / Boss Battle Combat Simulator",
    focus: "Custom Functions (def, parameters, return values)",
    category: "Week 2: Data Structures, Functions & Capstone",
    icon: "⚔️",
    summary: "Write reusable functions for attack(), heal(), and take_damage() to run a 1v1 battle against a boss monster!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Writing Reusable Functions with def",
      explanation: "A function is like a spell or macro shortcut in a game. You write the recipe once with `def`, and then call it whenever you need it!",
      syntaxSnippet: `# Defining a function with parameters and return
def calculate_damage(attacker_power, target_armor):
    raw_damage = attacker_power * 2
    final_damage = raw_damage - target_armor
    return max(1, final_damage) # At least 1 damage

# Calling the function
hit1 = calculate_damage(50, 10)
print("Damage dealt:", hit1)`,
      keyTakeaways: [
        "def function_name(parameters): creates a new custom action.",
        "Parameters pass input data into the function.",
        "return sends calculated result data back to the rest of your program!"
      ],
      quickQuiz: {
        question: "What keyword sends a value back from a function?",
        options: [
          "send",
          "return",
          "output"
        ],
        correctIndex: 1,
        explanation: "Correct! return passes the computed answer back to the line that called the function!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Boss Battle Encounter",
      explanation: "Build modular combat functions and simulate a turn-based fight against Cyber Dragon.",
      code: `import random

# --- GAME FUNCTIONS ---
def deal_attack(attacker, min_dmg, max_dmg):
    damage = random.randint(min_dmg, max_dmg)
    print("⚔️ " + attacker + " strikes for " + str(damage) + " damage!")
    return damage

def cast_heal(player_name, current_hp):
    heal_amount = random.randint(15, 30)
    new_hp = current_hp + heal_amount
    print("💚 " + player_name + " casts Heal Spell and recovers +" + str(heal_amount) + " HP!")
    return new_hp

# --- MAIN BATTLE LOOP ---
player_hp = 100
boss_hp = 120

print("🐉 BOSS BATTLE: PIKACHU vs CYBER DRAGON 🐉")

while player_hp > 0 and boss_hp > 0:
    print("\\n------------------------------------")
    print("⚡ Player HP:", player_hp, " | 🐉 Boss HP:", boss_hp)
    choice = input("Turn Action: (1) Thunderbolt Attack  (2) Heal: ")
    
    if choice == "1":
        dmg = deal_attack("Pikachu", 15, 35)
        boss_hp -= dmg
    elif choice == "2":
        player_hp = cast_heal("Pikachu", player_hp)
        
    # Boss Counter-Attack
    if boss_hp > 0:
        boss_dmg = deal_attack("Cyber Dragon", 10, 25)
        player_hp -= boss_dmg

# Outcome
if player_hp > 0:
    print("\\n🏆 VICTORY! You slain the Cyber Dragon!")
else:
    print("\\n💀 DEFEAT! Pikachu fainted in battle...")`,
      steps: [
        { line: 4, title: "Attack Function", desc: "Accepts attacker name, min damage, and max damage parameters." },
        { line: 9, title: "Heal Function", desc: "Calculates new HP and returns updated value." },
        { line: 20, title: "Battle State Loop", desc: "Runs battle while both combatants have HP > 0." }
      ]
    },
    tinkerPlayground: {
      goal: "Add a Special Move function (def ultimate_attack()), critical hits, or mana point restrictions!",
      starterCode: `# DAY 9 TINKER LAB: Combat Simulator

import random

def calc_crit_damage(base_dmg):
    # 20% chance for 2x critical hit
    if random.randint(1, 5) == 1:
        print("💥 CRITICAL HIT! 2X DAMAGE!")
        return base_dmg * 2
    return base_dmg

player_hp = 80
monster_hp = 80

print("⚔️ MINI ARENA FINGER FIGHT ⚔️")
while player_hp > 0 and monster_hp > 0:
    input("Press Enter to swing sword!")
    dmg = calc_crit_damage(random.randint(10, 20))
    monster_hp -= dmg
    print("Monster HP remaining:", monster_hp)
    
    if monster_hp > 0:
        m_dmg = random.randint(5, 15)
        player_hp -= m_dmg
        print("Monster hit you back for", m_dmg, "HP! Player HP:", player_hp)

print("Game Over!")
`,
      solutionCode: `# DAY 9 SOLUTION WITH MANA
import random

def ultimate_beam(mana):
    if mana >= 50:
        print("🌟 ULTIMATE BEAM UNLEASHED! 100 DMG!")
        return 100, mana - 50
    else:
        print("❌ Not enough Mana!")
        return 0, mana

dmg, new_mana = ultimate_beam(60)
print("Damage:", dmg, "Remaining Mana:", new_mana)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Ultimate Fireball Function",
          task: "Create def fireball() that deals 50-80 damage but can only be used ONCE per fight!",
          hint: "Use a boolean variable allow_ultimate = True"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Shield / Block Function",
          task: "Create def block() that reduces the next incoming monster damage by 50%!",
          hint: "return damage / 2"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Victory Level Up",
          task: "If player wins, call a new function level_up() that boosts max HP by +20!",
          hint: "def level_up(hp): return hp + 20"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Variable scope confusion: variables inside a function stay inside unless returned!",
        "Forgetting parenthesises when calling functions: my_func vs my_func()."
      ],
      tinkerQuestions: [
        "Why are functions useful when building large video games with 100s of monsters?"
      ]
    }
  },
  {
    day: 10,
    title: "Secret Agent Spy Decoder & Cipher",
    focus: "Dictionaries ({key: value}), Lookups, Cipher Scrambler",
    category: "Week 2: Data Structures, Functions & Capstone",
    icon: "🕵️‍♀️",
    summary: "Scramble top secret agent messages into cipher codes using key-value dictionary maps!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Storing Key-Value Pairs with Dictionaries",
      explanation: "A dictionary stores information like a real-world dictionary or game cheat sheet: you look up a KEY (like 'a') and get its VALUE (like '7').",
      syntaxSnippet: `# Creating a dictionary
player_stats = {
    "name": "Shadow Ninja",
    "level": 15,
    "health": 250,
    "has_keycard": True
}

# Looking up a value
print("Player Name:", player_stats["name"])

# Updating a value
player_stats["health"] = 300

# Adding a new key
player_stats["weapon"] = "Katana"`,
      keyTakeaways: [
        "Dictionaries use curly braces {} with key: value pairs.",
        "Look up data instantly using dict[key_name].",
        "Keys must be unique (like usernames or letter lookups!)."
      ],
      quickQuiz: {
        question: "How do you access the value of 'gold' in vault = {'gold': 500, 'gems': 3}?",
        options: [
          "vault[0]",
          "vault['gold']",
          "vault.gold"
        ],
        correctIndex: 1,
        explanation: "Correct! You pass the key name inside square brackets: vault['gold']!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Secret Agent Spy Decoder",
      explanation: "Build an encryption/decryption machine that scrambles secret spy text using a custom substitution dictionary.",
      code: `# Secret Spy Cipher Engine
secret_cipher = {
    'a': '4', 'b': '8', 'e': '3', 'g': '6',
    'i': '1', 'o': '0', 's': '5', 't': '7'
}

print("🕵️ SECRET AGENT CIPHER ENCRYPTS v1.0 🕵️")
original_msg = input("Enter top-secret message to encode: ").lower()

encoded_msg = ""

# Loop through every character in message
for char in original_msg:
    if char in secret_cipher:
        encoded_msg += secret_cipher[char] # Replace with cipher code
    else:
        encoded_msg += char # Keep punctuation/spaces as-is

print("\\n------------------------------------")
print("🔒 ENCRYPTED MESSAGE OUTPUT:")
print(encoded_msg)
print("------------------------------------")
print("Agent Directive: Transmit to HQ immediately!")`,
      steps: [
        { line: 2, title: "Cipher Dictionary", desc: "Map normal letters to secret numbers/symbols." },
        { line: 12, title: "Character Iteration", desc: "Loop through each letter of the input string." },
        { line: 13, title: "Dictionary Lookup", desc: "Check if char in secret_cipher dictionary to perform substitution." }
      ]
    },
    tinkerPlayground: {
      goal: "Build an RPG Inventory Dictionary tracking item quantities (e.g. {'health_potion': 3, 'gold': 150})!",
      starterCode: `# DAY 10 TINKER LAB: RPG Inventory System Dictionary

inventory = {
    "gold_coins": 250,
    "health_potions": 3,
    "magic_scrolls": 1,
    "relics": 0
}

print("🎒 RPG PLAYER VAULT 🎒")
for item, qty in inventory.items():
    print("• " + item + ": " + str(qty))

print("\\n[!] You found a chest containing 50 gold and 2 health potions!")
inventory["gold_coins"] += 50
inventory["health_potions"] += 2

print("\\n✨ UPDATED INVENTORY:")
print("Gold Coins:", inventory["gold_coins"])
print("Health Potions:", inventory["health_potions"])
`,
      solutionCode: `# DAY 10 SOLUTION: DECODER DIRECTION
decode_dict = {'4': 'a', '8': 'b', '3': 'e', '0': 'o', '7': 't'}
code = "m337 m3 47 7h3 8453"

decoded = ""
for char in code:
    if char in decode_dict:
        decoded += decode_dict[char]
    else:
        decoded += char

print("Decoded Secret:", decoded)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Full Alphabet Cipher",
          task: "Add 5 more letter mappings to the secret_cipher dictionary!",
          hint: "e.g. 'z': '9', 'l': '!' "
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Reverse Decoder Tool",
          task: "Create a reverse dictionary to DECODE scrambled text back into English!",
          hint: "Map numbers back to letters: {'4': 'a', '3': 'e'}"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Item Buying Mechanic",
          task: "In the RPG inventory, create a buy_potion() action that costs 20 gold and adds +1 potion!",
          hint: "inventory['gold_coins'] -= 20; inventory['health_potions'] += 1"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "KeyError when looking up a key that doesn't exist in dictionary. Use dict.get(key, default) or 'if key in dict:'!"
      ],
      tinkerQuestions: [
        "Why are dictionaries faster for lookups than searching through a 10,000 item list?"
      ]
    }
  },
  {
    day: 11,
    title: "Capstone Blueprint: ASCII Game Engine Setup",
    focus: "Game Architecture, Modular Design & Capstone Skeleton",
    category: "Week 2: Data Structures, Functions & Capstone",
    icon: "🏛️",
    summary: "Select your Capstone Project (Text RPG, Turtle Derby, or Quiz Engine) and write the architecture skeleton!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Structuring a Full Game Engine",
      explanation: "Every major video game relies on 3 core pillars: Initialization (Setup), Main Game Loop (State & Controls), and Game Over / Victory Conditions.",
      syntaxSnippet: `# Architecture of a Game Engine
def show_main_menu():
    print("=== CYBER RETRO ARCADE ===")
    print("1. Start Game")
    print("2. High Scores")
    print("3. Quit")

def game_loop():
    running = True
    while running:
        # 1. Get Input -> 2. Update State -> 3. Render Screen
        action = input("> ")
        if action == "quit":
            running = False`,
      keyTakeaways: [
        "Break large games into clean functions (show_menu(), play_turn(), check_win()).",
        "Keep game state variables organized at the top.",
        "A game loop orchestrates user choices, rules, and screen rendering!"
      ],
      quickQuiz: {
        question: "What are the 3 repeating steps inside a video game loop?",
        options: [
          "Download, Install, Delete",
          "Read Input, Update State, Render Screen/Text",
          "Compile, Test, Publish"
        ],
        correctIndex: 1,
        explanation: "Bingo! Input -> Logic Update -> Render is the rhythm of every game engine!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Capstone Skeleton Architecture",
      explanation: "Build a clean, modular game menu with difficulty selection and state tracking.",
      code: `import random

# Game State
player_name = ""
difficulty = "Medium"
game_running = True

def print_ascii_banner():
    print("  /\\\\_/\\\\  CYBER CAT ADVENTURE v1.0")
    print(" ( o.o )  ===========================")
    print("  > ^ <   [S]tart  |  [D]ifficulty  |  [Q]uit")

def set_difficulty():
    global difficulty
    print("\\nSelect Difficulty: (1) Easy  (2) Medium  (3) HARDCORE")
    choice = input("Choice: ")
    if choice == "1":
        difficulty = "Easy"
    elif choice == "3":
        difficulty = "HARDCORE"
    else:
        difficulty = "Medium"
    print("Difficulty updated to:", difficulty)

# Main Engine Loop
print_ascii_banner()
player_name = input("Enter Hero Name: ")

while game_running:
    print("\\n=== MAIN MENU | Player: " + player_name + " | Diff: " + difficulty + " ===")
    cmd = input("Command (start/diff/quit): ").lower()
    
    if cmd == "start" or cmd == "s":
        print("\\n🚀 LAUNCHING GAME CORE MECHANICS...")
        # Capstone core mechanics will plug in here on Day 12!
        break
    elif cmd == "diff" or cmd == "d":
        set_difficulty()
    elif cmd == "quit" or cmd == "q":
        print("Goodbye!")
        game_running = False`,
      steps: [
        { line: 8, title: "ASCII Banner", desc: "Draw high-impact starting artwork." },
        { line: 13, title: "Modular Settings", desc: "Encapsulate difficulty settings into a function." },
        { line: 25, title: "Engine Switcher", desc: "Main loop routing user commands smoothly." }
      ]
    },
    tinkerPlayground: {
      goal: "Choose your Capstone Project idea and build your custom ASCII start menu banner!",
      starterCode: `# DAY 11 TINKER LAB: Capstone Project Planning

print("========================================")
print(" 🎮 SELECT YOUR CAPSTONE PROJECT IDEA 🎮")
print("========================================")
print("1. ⚔️ TEXT RPG DUNGEON CRAWLER")
print("2. 🐢 TURTLE DERBY RACING CHAMPIONSHIP")
print("3. 🧠 CYBER TRIVIA & QUIZ ENGINE")

capstone_choice = input("Enter choice (1-3): ")

print("\\n[!] Initializing project template...")
# Write your custom ASCII Art header for your project below!
`,
      solutionCode: `# DAY 11 SOLUTION
print(" 🏁 TURTLE DERBY CHAMPIONSHIP 🏁")
print("  ______")
print(" /|_||_\\\\\`.__")
print("(   _    _ _\\\\")
print("=\`-(_)--(_)-' ")
print("Ready to race!")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Custom ASCII Logo",
          task: "Design a 4-line ASCII art logo for your chosen Capstone project!",
          hint: "Use print(' ... ') with backslashes escaped like \\\\"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Sound Effects Option",
          task: "Add a toggle function for sound_effects = True / False in options!",
          hint: "def toggle_sound(): global sound_on; sound_on = not sound_on"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: High Score Placeholder",
          task: "Create a list high_scores = [1000, 750, 500] and print it in a High Scores menu!",
          hint: "for score in high_scores: print(score)"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Overcomplicating the initial plan. Encourage keeping Day 11 focused on a solid skeleton!"
      ],
      tinkerQuestions: [
        "Which Capstone idea excites you most: RPG Dungeon, Turtle Derby, or Cyber Quiz?"
      ]
    }
  },
  {
    day: 12,
    title: "Capstone Build: Core Mechanics",
    focus: "State Tracking, Game Loop Conditions, Controls & Physics",
    category: "Week 2: Data Structures, Functions & Capstone",
    icon: "⚙️",
    summary: "Code the main game mechanics: dungeon room movement, randomized racing physics, or quiz scoring!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Coding Primary Game Mechanics",
      explanation: "Today we build the beating heart of your project: room navigation, dice/race physics, or scoring logic!",
      syntaxSnippet: `# Room Navigation Engine
rooms = {
    "hallway": {"north": "armory", "east": "kitchen"},
    "armory": {"south": "hallway"},
    "kitchen": {"west": "hallway"}
}

current_room = "hallway"
move = input("Go direction (north/east/south/west): ")

if move in rooms[current_room]:
    current_room = rooms[current_room][move]
    print("You entered:", current_room)`,
      keyTakeaways: [
        "Connect game state variables directly to player choices.",
        "Use dictionaries to model rooms/maps or lists to model race tracks.",
        "Check win/loss conditions on every turn iteration!"
      ],
      quickQuiz: {
        question: "How do you know when a game loop should end?",
        options: [
          "When player HP hits 0 or target win score is reached.",
          "After exactly 5 seconds.",
          "When Python runs out of memory."
        ],
        correctIndex: 0,
        explanation: "Correct! Win or loss state checks determine when the main loop breaks!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Dungeon Navigation & Turtle Race Engine",
      explanation: "Build room navigation mechanics and monster encounter checks.",
      code: `import random

# Capstone Core Mechanic: Dungeon Crawl Engine
player = {"hp": 100, "gold": 0, "room": "Entrance"}

dungeon_map = {
    "Entrance": {"desc": "A dark stone hallway with mossy walls.", "forward": "Guard Room"},
    "Armory": {"desc": "Racks of rusty swords line the walls.", "forward": "Treasure Vault"},
    "Guard Room": {"desc": "An angry Goblin guards the passage!", "forward": "Treasure Vault"},
    "Treasure Vault": {"desc": "A glowing golden chest sits in the center!", "forward": "WIN"}
}

print("🏰 CYBER DUNGEON CORE LOOP LAUNCHED 🏰")

while player["hp"] > 0 and player["room"] != "WIN":
    curr = player["room"]
    print("\\n====================================")
    print("📍 Location:", curr)
    print("📜 " + dungeon_map[curr]["desc"])
    
    if curr == "Guard Room":
        print("⚔️ A Goblin attacks!")
        dmg = random.randint(15, 30)
        player["hp"] -= dmg
        print("You took " + str(dmg) + " damage! HP left: " + str(player["hp"]))
        if player["hp"] <= 0:
            break

    action = input("Command (forward/search): ").lower()
    if action == "forward":
        player["room"] = dungeon_map[curr]["forward"]
    elif action == "search":
        found_gold = random.randint(10, 50)
        player["gold"] += found_gold
        print("💰 Found " + str(found_gold) + " gold coins! Total: " + str(player["gold"]))

if player["room"] == "WIN":
    print("\\n🎉 CONGRATULATIONS! You cleared the dungeon with " + str(player["gold"]) + " Gold!")
else:
    print("\\n💀 GAME OVER! You were defeated in the dungeon...")`,
      steps: [
        { line: 6, title: "Dungeon Map Dictionary", desc: "Structure room connections and descriptions." },
        { line: 15, title: "Main Mechanics Loop", desc: "Process location, events, user action, and state changes." },
        { line: 33, title: "Victory / Defeat Evaluation", desc: "Trigger win/loss endings based on state." }
      ]
    },
    tinkerPlayground: {
      goal: "Implement room movement, race movement, or question loops for your specific Capstone project!",
      starterCode: `# DAY 12 TINKER LAB: Turtle Derby Race Mechanics

import turtle
import random

# Create two racing turtles!
t1 = turtle.Turtle()
t1.color("cyan")
t1.shape("turtle")
t1.penup()
t1.goto(-200, 30)

t2 = turtle.Turtle()
t2.color("magenta")
t2.shape("turtle")
t2.penup()
t2.goto(-200, -30)

# Race Loop Mechanics
while t1.xcor() < 180 and t2.xcor() < 180:
    t1.forward(random.randint(1, 10))
    t2.forward(random.randint(1, 10))

if t1.xcor() >= 180:
    print("🏆 Cyan Turtle Wins!")
else:
    print("🏆 Magenta Turtle Wins!")
`,
      solutionCode: `# DAY 12 SOLUTION WITH BETTING
bet = input("Bet on CYAN or MAGENTA: ").lower()
# Winner check matches bet string!`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add a 3rd Turtle Racer",
          task: "Add a 3rd yellow turtle racer named 't3' to the Derby!",
          hint: "t3 = turtle.Turtle(); t3.color('yellow'); t3.goto(-200, -80)"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Speed Boost Trap",
          task: "If a turtle lands on x > 0, give it a 2X speed boost forward(20)!",
          hint: "if t1.xcor() > 0: t1.forward(20)"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Finish Line Visual",
          task: "Draw a vertical checkered finish line at x = 180 using turtle line commands!",
          hint: "Use t.goto(180, 100); t.pendown(); t.goto(180, -100)"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "State variables not updating: double check variable names inside loops!"
      ],
      tinkerQuestions: [
        "Is your primary mechanic working smoothly without errors?"
      ]
    }
  },
  {
    day: 13,
    title: "Capstone Polish: Colors, Easter Eggs & Defensive Inputs",
    focus: "Defensive Coding (Input Validation), ANSI Colors, Cheat Codes",
    category: "Week 2: Data Structures, Functions & Capstone",
    icon: "🎨",
    summary: "Add colorized terminal text (ANSI codes), hidden cheat codes ('godmode'), and handle invalid user inputs gracefully!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Polishing Games & Defensive Coding",
      explanation: "A polished game never crashes when a user types nonsense. It validates inputs, uses bright colors, and hides fun easter eggs!",
      syntaxSnippet: `# ANSI Terminal Colors
RED = "\\u001b[91m"
GREEN = "\\u001b[92m"
CYAN = "\\u001b[96m"
RESET = "\\u001b[0m"

print(RED + "⚠️ WARNING: Low Health!" + RESET)
print(GREEN + "💚 Health Restored!" + RESET)

# Defensive Input Loop
while True:
    choice = input("Pick 1 or 2: ")
    if choice in ["1", "2"]:
        break
    print("❌ Invalid entry! Please type 1 or 2.")`,
      keyTakeaways: [
        "ANSI escape codes like '\\u001b[92m' add terminal color flair.",
        "Defensive coding checks inputs before doing math to prevent crashes.",
        "Easter eggs reward curious players who try secret commands!"
      ],
      quickQuiz: {
        question: "Why should you use an input validation while loop?",
        options: [
          "To force the computer to run faster.",
          "To stop the program from crashing when a user types an invalid command.",
          "To automatically convert strings into images."
        ],
        correctIndex: 1,
        explanation: "Correct! Defensive validation keeps your game running smoothly no matter what the player types!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Adding Polish & Cheat Codes",
      explanation: "Add ANSI color styling, custom easter egg keywords, and input guards to your Capstone.",
      code: `# ANSI Color System
CYAN = "\\u001b[96m"
GREEN = "\\u001b[92m"
YELLOW = "\\u001b[93m"
MAGENTA = "\\u001b[95m"
RESET = "\\u001b[0m"

# Safe Input Validator Function
def get_valid_input(prompt, valid_options):
    while True:
        user_val = input(prompt).strip().lower()
        if user_val in valid_options or user_val == "godmode":
            return user_val
        print(MAGENTA + "❌ Invalid command! Choose from: " + str(valid_options) + RESET)

# Example Gameplay Usage
print(CYAN + "=== 🌟 CAPSTONE POLISH SYSTEM 🌟 ===" + RESET)
player_hp = 100

cmd = get_valid_input("Select move (attack/heal): ", ["attack", "heal"])

if cmd == "godmode":
    print(YELLOW + "👑 CHEAT ACTIVATED: GODMODE UNLOCKED! Infinite Health!" + RESET)
    player_hp = 9999
elif cmd == "attack":
    print(GREEN + "⚔️ You struck with razor precision!" + RESET)
elif cmd == "heal":
    print(GREEN + "💚 Restored to full health!" + RESET)

print("Current HP:", player_hp)`,
      steps: [
        { line: 2, title: "Color Tokens", desc: "Define ANSI code constants for terminal styling." },
        { line: 9, title: "Input Guard", desc: "Function repeatedly prompts until valid choice or cheat code is entered." },
        { line: 19, title: "Easter Egg Logic", desc: "Intercept 'godmode' cheat keyword to grant secret powers!" }
      ]
    },
    tinkerPlayground: {
      goal: "Pimp your project! Add ANSI colors, sound effect text, and 2 secret easter egg cheat codes!",
      starterCode: `# DAY 13 TINKER LAB: Polish & Easter Eggs

# Colors
RED = "\\u001b[91m"
GREEN = "\\u001b[92m"
GOLD = "\\u001b[93m"
RESET = "\\u001b[0m"

print(GOLD + "✨ POLISHING YOUR CAPSTONE GAME ✨" + RESET)

# Add your cheat codes below!
secret_code = input("Enter standard command or cheat code: ").lower()

if secret_code == "noclip":
    print(GREEN + "👻 You can now walk through walls!" + RESET)
elif secret_code == "moneybag":
    print(GOLD + "💰 +1,000,000 GOLD ADDED TO INVENTORY!" + RESET)
else:
    print("Normal action executed.")
`,
      solutionCode: `# DAY 13 SOLUTION
print("\\u001b[96m" + "🚀 RETRO GAME READY!" + "\\u001b[0m")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add a 'matrix' Color Theme",
          task: "Make all game text neon green on black background!",
          hint: "Use \\u001b[92m at start of script!"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Easter Egg Cheat 'speedrun'",
          task: "If player types 'speedrun', skip straight to the final boss or finish line!",
          hint: "Set position/location directly to final room!"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Sound Effect Text",
          task: "Add cool sound effect strings like *KABOOM!* or *SWOOSH!* in yellow color!",
          hint: "print(GOLD + '*KABOOM!*' + RESET)"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Forgetting to append RESET code after color string, turning entire terminal green!"
      ],
      tinkerQuestions: [
        "What secret cheat codes did you hide in your game?"
      ]
    }
  },
  {
    day: 14,
    title: "Arcade Cabinet Packaging & Showcase",
    focus: "Code Cleanup, Modular Integration & Mini-Arcade Launcher",
    category: "Week 2: Data Structures, Functions & Capstone",
    icon: "🎰",
    summary: "Combine your top favorite mini-games into a single launchable 'Retro Mini-Arcade' script!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Building a Multi-Game Mini-Arcade Cabinet",
      explanation: "Professional game developers bundle multiple games into arcade collections. You can combine your past projects into 1 master script!",
      syntaxSnippet: `# Multi-Game Arcade Launcher
def play_fake_virus():
    print("Running Fake Virus Prank...")

def play_vault_breaker():
    print("Running Vault Breaker Game...")

while True:
    print("=== 🎰 RETRO MINI-ARCADE 🎰 ===")
    print("1. Fake Virus Prank")
    print("2. Vault Breaker")
    print("3. Exit")
    choice = input("Select Game: ")
    if choice == "1":
        play_fake_virus()
    elif choice == "2":
        play_vault_breaker()
    elif choice == "3":
        break`,
      keyTakeaways: [
        "Wrap each project in a clean function def play_game_name().",
        "Build a main arcade menu loop with numerical selection.",
        "Add comments (#) to document your code so friends and family can read it easily!"
      ],
      quickQuiz: {
        question: "What is the benefit of wrapping whole mini-games inside functions?",
        options: [
          "It makes the file size 100 times smaller.",
          "It allows you to run any mini-game on command without code overlapping!",
          "It automatically publishes your game to Steam."
        ],
        correctIndex: 1,
        explanation: "Correct! Functions keep game logic modular and isolated!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: The Master Arcade Launcher",
      explanation: "Combine Fake Virus, Vault Breaker, and Sarcastic 8-Ball into a master launcher.",
      code: `import random
import time

# --- GAME 1: FAKE VIRUS ---
def game_fake_virus():
    print("\\n[!] LAUNCHING VIRUS PRANK...")
    name = input("Enter target name: ")
    print("Hacking " + name + "'s phone... 100% Complete!")
    print("😄 Just a prank!")

# --- GAME 2: VAULT BREAKER ---
def game_vault_breaker():
    print("\\n[!] LAUNCHING VAULT BREAKER...")
    secret = random.randint(1, 20)
    guess = int(input("Guess secret number (1-20): "))
    if guess == secret:
        print("🔓 UNLOCKED!")
    else:
        print("🔒 LOCKED! Code was:", secret)

# --- MASTER ARCADE MENU ---
while True:
    print("\\n====================================")
    print(" 🕹️ 13-YEAR-OLD RETRO MINI-ARCADE 🕹️")
    print("====================================")
    print("1. 💻 Fake Virus Prank")
    print("2. 🔐 Vault Breaker")
    print("3. 🏆 Launch Capstone Project")
    print("4. 🚪 Exit Arcade")
    
    choice = input("Select game (1-4): ")
    
    if choice == "1":
        game_fake_virus()
    elif choice == "2":
        game_vault_breaker()
    elif choice == "3":
        print("🚀 Running Capstone Game Engine!")
    elif choice == "4":
        print("👋 Thanks for playing! Powering down Arcade Cabinet...")
        break`,
      steps: [
        { line: 5, title: "Modular Game 1", desc: "Encapsulate Virus Prank inside game_fake_virus()." },
        { line: 12, title: "Modular Game 2", desc: "Encapsulate Vault Breaker inside game_vault_breaker()." },
        { line: 20, title: "Arcade Cabinet Loop", desc: "Master menu connecting all completed projects." }
      ]
    },
    tinkerPlayground: {
      goal: "Bundle your 3 favorite games from the past 14 days into your own personalized Arcade Suite!",
      starterCode: `# DAY 14 TINKER LAB: Retro Arcade Packaging

def my_game_1():
    print("🎮 Game 1 Running!")

def my_game_2():
    print("🎮 Game 2 Running!")

print("🎰 MY PERSONAL PYTHON ARCADE CABINET 🎰")
my_game_1()
`,
      solutionCode: `# DAY 14 SOLUTION
print("Arcade Suite Ready!")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add Win Counter",
          task: "Track total wins across all arcade mini-games in a total_wins counter!",
          hint: "total_wins += 1 inside each game win condition"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Add Credits Screen",
          task: "Add menu option (5) Credits that prints your name as Lead Developer!",
          hint: "print('Lead Programmer: [Your Name]')"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Random Game Selector",
          task: "Add option 'R' for Random Game that picks a game for you using random.choice()!",
          hint: "random.choice([game_1, game_2])()"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Variable name collisions across different functions. Keeping code inside functions prevents bugs!"
      ],
      tinkerQuestions: [
        "Ready to demo your Arcade Cabinet to family and friends?"
      ]
    }
  },
  {
    day: 15,
    title: "Graduation Showcase, Custom Modding & Certificate",
    focus: "Demo Day, Code Explanation, Modding Sandbox & Graduation Certificate",
    category: "Week 3: Showcase & Certificate",
    icon: "🎓",
    summary: "Demo your project to family and friends, earn your Official Python Coder Certificate, and unlock the open modding sandbox!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Showcase Your Skills & Official Graduation!",
      explanation: "Congratulations! You have mastered Python core logic, loops, turtle graphics, data structures, and functions in just 15 days!",
      syntaxSnippet: `# YOU ARE NOW A CERTIFIED PYTHON CODER!
coder = {
    "status": "GRADUATED 🎓",
    "python_level": "LEVEL 15 MASTER",
    "skills": ["Variables", "Loops", "Turtle Art", "Lists", "Dicts", "Functions", "Game Engines"]
}

print("🎉 CONGRATULATIONS " + coder["status"] + "!")`,
      keyTakeaways: [
        "Explaining code to someone else is the ultimate test of mastery.",
        "You now possess the foundational skills to build games, scripts, and software!",
        "Print your official Certificate of Completion below!"
      ],
      quickQuiz: {
        question: "What is the best way to keep improving your coding skills?",
        options: [
          "Never code again.",
          "Keep building fun projects, breaking rules, and tinkering!",
          "Memorize every dictionary word."
        ],
        correctIndex: 1,
        explanation: "Bingo! 'Tinker, don't lecture' is a superpower for life!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Graduation Showcase & Modding Sandbox",
      explanation: "Run the final graduation celebration script and unlock full creative freedom.",
      code: `print("==========================================")
print(" 🎓 OFFICIAL PYTHON TINKER ACADEMY 🎓")
print("        GRADUATION CEREMONY v1.0")
print("==========================================")

student_name = input("Enter Graduate Name: ")

print("\\n✨ Presenting official Python Certification for: " + student_name.upper())
print("🏆 Badges Unlocked: 15/15")
print("🔥 Projects Mastered: Rickroll Prank, Vault Breaker, Turtle Alien, Combat Sim, Capstone Arcade")

print("\\n🌟 YOU ARE OFFICIALLY A PYTHON CODER! KEEP TINKERING! 🚀")`,
      steps: [
        { line: 6, title: "Certification Output", desc: "Display graduate name and honors." },
        { line: 8, title: "Badge Summary", desc: "Review all 15 completed milestones." }
      ]
    },
    tinkerPlayground: {
      goal: "Open Creative Sandbox! Build anything you desire using all Python tools you have learned!",
      starterCode: `# DAY 15 FREE MODDING SANDBOX 🚀
# You have unlocked full creative freedom!
# Build a new game, graphics art, or combine all tools!

import random
import turtle

print("🎉 WELCOME TO THE OPEN CREATIVE SANDBOX!")
print("Type your custom Python code here and run it live!")
`,
      solutionCode: `# DAY 15 SOLUTION
print("🎓 CERTIFICATE OF MASTERY GENERATED!")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Generate Graduation Certificate",
          task: "Click the 'Generate Certificate' button on screen to view and print your certificate!",
          hint: "Fill in your name!"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Demo to Family",
          task: "Run your favorite day's project and explain how your favorite function works!",
          hint: "Show off the sound effects and cheat codes!"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Infinite Sandbox",
          task: "Write a brand new script combining Turtle graphics and a random fortune generator!",
          hint: "Combine turtle and random modules!"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Celebrate this huge milestone! 15 days of hands-on coding is an incredible achievement."
      ],
      tinkerQuestions: [
        "What was your favorite project to build across all 15 days?"
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CURRICULUM;
}

window.CURRICULUM = CURRICULUM;
