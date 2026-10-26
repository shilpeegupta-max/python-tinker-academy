/**
 * Python Tinker Academy - 15-Day Curriculum Matrix
 * Master Curriculum Data Structure
 */

const CURRICULUM = [
  {
    day: 1,
    title: "Fake Virus Prank / Rickroll Simulator",
    focus: "print(), input(), Strings & Concatenation",
    category: "Week 1: Core Logic & Terminal Games",
    icon: "🎪",
    summary: "Build a funny automated story generator or system diagnostic prank by asking for inputs and combining text!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Talking to the Computer with print() and input()",
      explanation: "Think of `print()` as the computer's voice box and `input()` as its ears. Variables are like labeled storage boxes that hold text speech!",
      syntaxSnippet: `# Printing text to terminal
print("Initializing Security System...")

# Gathering user input into a variable box
target_name = input("Enter victim name: ")

# Joining text together with +
print("Warning: " + target_name + "'s device has been hacked! 🚨")`,
      keyTakeaways: [
        "print('text') displays words on the computer screen.",
        "input('prompt') pauses execution and waits for user typing.",
        "Save user responses inside a variable (e.g., name = input(...)).",
        "Use + to join strings together (Concatenation)!"
      ],
      quickQuiz: {
        question: "What does the code `user_pet = input('Pet name: ')` do?",
        options: [
          "Prints the pet's name on screen 5 times",
          "Asks the user for input and saves their response into user_pet",
          "Deletes the pet's name from memory"
        ],
        correctIndex: 1,
        explanation: "Correct! `input()` asks the user a question and stores their answer inside the variable name on the left!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: System Diagnostics Prank",
      explanation: "Step-by-step guide to building a funny fake system scanner terminal prank.",
      code: `print("========================================")
print(" 🛡️ SYSTEM SECURITY SCANNER v4.2 🛡️")
print("========================================")

target_name = input("Enter target user name: ")
device_type = input("Enter device name (e.g. iPhone, Laptop): ")

print("\n[!] Connecting to " + target_name + "'s " + device_type + "...")
print("[!] Scanning files... 10%... 50%... 99%...")
print("⚠️ WARNING: 42 Viruses Found on " + target_name + "'s " + device_type + "!")

secret_code = input("\nEnter override password to clear viruses: ")
print("Access Denied! Pranked! 🤪 You've been hacked by Python!")`,
      steps: [
        { line: 1, title: "Banner Header", desc: "Use print() to draw visual dividers made of '=' characters." },
        { line: 5, title: "Gathering User Input", desc: "Save inputs into target_name and device_type variables." },
        { line: 8, title: "Fake Log Simulation", desc: "Combine static text with user variables using '+'." },
        { line: 12, title: "The Funny Reveal", desc: "End with ASCII art or funny demands!" }
      ]
    },
    tinkerPlayground: {
      goal: "Customize the prank messages, add 2 new input questions (e.g. favorite food, favorite game), or build a hilarious Mad Libs story!",
      starterCode: `# DAY 1 TINKER LAB: Mad Libs & Terminal Prank
# Modify the questions and output story below!

player_name = input("Enter your hero name: ")
favorite_snack = input("Enter your favorite snack: ")
superpower = input("Enter a ridiculous superpower: ")

print("\n--- THE LEGEND OF " + player_name.upper() + " ---")
print(player_name + " entered the dungeon armed with a single " + favorite_snack + ".")
print("Suddenly, a dragon appeared! " + player_name + " activated " + superpower + "!")
print("The dragon ate the " + favorite_snack + " and ran away happily! 🐉")
`,
      solutionCode: `# DAY 1 SOLUTION
player_name = input("Hero name: ")
pet_type = input("Animal type: ")
pet_name = input("Pet name: ")

print("\n=== " + player_name + "'s PET ADVENTURE ===")
print(player_name + " rides into battle on a giant " + pet_type + " named " + pet_name + "!")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: The Dramatic Delay",
          task: "Add 3 extra print() statements simulating a fake downloading bar!",
          hint: "print('[||||||||||] 100% Complete!')"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Custom ASCII Art",
          task: "Print a skull ☠️ or robot 🤖 ASCII art face using multiple print() statements!",
          hint: "print('  (o_O)  ')\nprint('  <| |>  ')"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Extra Variable Demand",
          task: "Ask the user for their 'favorite game' and include it in the final prank message!",
          hint: "game = input('Favorite game: ')"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Forgetting quotes around strings: print(Hello) causes NameError. Ensure quotes like print('Hello').",
        "Space missing when joining strings with +: 'Hello'+name prints 'Hellobob'. Use 'Hello ' + name!"
      ],
      tinkerQuestions: [
        "What happens if you type a number into input()? Does Python know it's a number or text? (It's still text until converted!)."
      ]
    }
  },
  {
    day: 2,
    title: "Superhero Superpower Stat Generator",
    focus: "Variables, Data Types (int, float, str) & Math Operators (+, -, *, /)",
    category: "Week 1: Core Logic & Terminal Games",
    icon: "🧮",
    summary: "Convert text inputs into numbers to calculate your exact age in seconds, power levels, and bill splits!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Converting Strings to Numbers with int() and float()",
      explanation: "By default, `input()` always returns text (String). To do math calculations, we must wrap it in `int()` for whole numbers or `float()` for decimals!",
      syntaxSnippet: `# Text string (cannot do math)
age_str = "13"

# Converting to integer number
age_num = int(age_str)

# Doing math
age_in_days = age_num * 365
print("Age in days:", age_in_days)`,
      keyTakeaways: [
        "str = Text words ('13' is text, not a number).",
        "int() = Whole numbers (13, 100, -5).",
        "float() = Decimal numbers (13.5, 3.14).",
        "Use *, /, +, - for math calculations."
      ],
      quickQuiz: {
        question: "What is the result of '10' + '10' in Python?",
        options: [
          "20",
          "'1010'",
          "Error"
        ],
        correctIndex: 1,
        explanation: "Correct! Since both are text strings, '+' glues them together into '1010'! Use int('10') + int('10') to get 20!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Hero Power Level Calculator",
      explanation: "Convert user inputs into integers and compute total hero combat power stats.",
      code: `print("========================================")
print(" ⚡ SUPERHERO POWER CALCULATOR ⚡")
print("========================================")

hero_name = input("Enter Superhero Name: ")
raw_strength = input("Base Strength (1-100): ")
raw_agility = input("Base Agility (1-100): ")

# Convert text input into integer numbers
strength = int(raw_strength)
agility = int(raw_agility)

# Math Calculations
power_score = (strength * 12) + (agility * 8)
age_years = int(input("Hero Age in Years: "))
age_seconds = age_years * 365 * 24 * 60 * 60

print("\n--- STATS FOR " + hero_name.upper() + " ---")
print("💪 Strength Bonus:", strength * 12)
print("⚡ Agility Bonus:", agility * 8)
print("🔥 TOTAL POWER SCORE:", power_score)
print("⏳ Alive for approx:", age_seconds, "seconds!")`,
      steps: [
        { line: 4, title: "Casting to Integer", desc: "Wrap input() in int(...) so Python treats it as a number." },
        { line: 8, title: "Math Formulae", desc: "Multiply and add values to compute custom RPG stats." },
        { line: 15, title: "Clean Output", desc: "Print formatted stats with emoji icons!" }
      ]
    },
    tinkerPlayground: {
      goal: "Build an Age in Seconds converter or Tip Calculator that splits a restaurant bill between friends!",
      starterCode: `# DAY 2 TINKER LAB: Age in Seconds & Tip Calculator

print("💸 RESTAURANT BILL & TIP SPLITTER 💸")

bill_total = float(input("Enter total bill ($): "))
tip_percent = float(input("Enter tip percentage (e.g. 15, 20): "))
num_people = int(input("How many people sharing the bill? "))

# Calculate total with tip
tip_amount = bill_total * (tip_percent / 100)
final_total = bill_total + tip_amount
share_per_person = final_total / num_people

print("\nTotal Tip: $" + str(tip_amount))
print("Grand Total: $" + str(final_total))
print("Each person pays: $" + str(share_per_person))
`,
      solutionCode: `# DAY 2 SOLUTION
bill = float(input("Bill: "))
people = int(input("People: "))
print("Per person:", bill / people)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: The Dog-Year Converter",
          task: "Ask the user for their dog's age in human years and multiply by 7 to print dog years!",
          hint: "dog_years = human_years * 7"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Taco Armor Booster",
          task: "Add a taco_count variable. Multiply tacos by +15 shield points and add to power_score!",
          hint: "shield = tacos * 15"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Age in Seconds",
          task: "Ask user's age in years and calculate exact age in hours! (years * 365 * 24)",
          hint: "hours = years * 365 * 24"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "ValueError: invalid literal for int() with base 10: 'hello'. Happens when typing non-numbers into int().",
        "TypeError: can only concatenate str (not 'int') to str when using '+' in print. Convert number with str(num) or pass comma separated in print(text, num)."
      ],
      tinkerQuestions: [
        "Why do we use float() for dollar amounts instead of int()? (Because dollars have decimal cents!)."
      ]
    }
  },
  {
    day: 3,
    title: "Choose-Your-Own-Adventure Game",
    focus: "Conditionals (if, elif, else), Comparison Operators (==, !=, >, <)",
    category: "Week 1: Core Logic & Terminal Games",
    icon: "🗺️",
    summary: "Create a branching text RPG with multiple storylines and secret endings based on player choices!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Making Decisions with if, elif, and else",
      explanation: "Think of `if` statements as crossroads in a game. Depending on the player's choice, Python follows a different branch of code!",
      syntaxSnippet: `door = input("Choose door (left/right): ")

if door == "left":
    print(" You entered a room full of treasure! 💰")
elif door == "right":
    print(" A sleeping dragon wakes up! 🐉")
else:
    print(" You walked into a wall! 🧱")`,
      keyTakeaways: [
        "== checks if two values are equal.",
        "if condition: runs code if condition is True.",
        "elif condition: checks a second option if first was False.",
        "else: catches any other remaining inputs!"
      ],
      quickQuiz: {
        question: "What is the difference between = and == in Python?",
        options: [
          "= is for assignment (saving into a variable); == is for comparing equality",
          "They are exactly identical",
          "== assigns a variable, = compares equality"
        ],
        correctIndex: 0,
        explanation: "Bingo! Single '=' assigns a value into a variable (`hp = 100`). Double '==' compares two values (`if hp == 0:`)."
      }
    },
    liveCode: {
      title: "Guided Walkthrough: The Spooky Basement Adventure",
      explanation: "Build a branching story game with nested decisions and multiple outcomes.",
      code: `print("========================================")
print(" 🏰 ESCAPE FROM CYBER CASTLE 🏰")
print("========================================")

print("You wake up inside a glowing neon dungeon. Two paths lie ahead.")
choice1 = input("Do you go 'left' into the Server Room or 'right' into the Vault? ").lower()

if choice1 == "left":
    print("\n🖥️ You enter the Server Room. An AI Guardian blocks the exit.")
    action = input("Do you 'fight' the AI or 'hack' the terminal? ").lower()
    if action == "hack":
        print("🎉 SUCCESS! You bypassed security and escaped to freedom!")
    else:
        print("💥 DEFEAT! The AI zapped your health points!")

elif choice1 == "right":
    print("\n💰 You enter the Vault. A golden chest rests in the center.")
    chest = input("Do you 'open' the chest or 'ignore' it? ").lower()
    if chest == "open":
        print("👑 VICTORY! You found the Legendary Python Crown!")
    else:
        print("🕸️ You waited so long you turned into a skeleton. Game Over!")

else:
    print("❌ Invalid command! You fell into a trapdoor!")`,
      steps: [
        { line: 7, title: "First Choice Branch", desc: "Check if door equals 'left' or 'right'." },
        { line: 10, title: "Nested Conditionals", desc: "Inside an if block, put another if/else for the second choice!" },
        { line: 24, title: "Fallback Catch-All", desc: "Use 'else:' to handle invalid or unexpected inputs." }
      ]
    },
    tinkerPlayground: {
      goal: "Add a 3rd path choice (e.g. 'up' ladder), add inventory items, or convert text inputs to .lower() for case-insensitivity!",
      starterCode: `# DAY 3 TINKER LAB: Haunted Mansion Escape

print("🧟 HAUNTED MANSION ESCAPE 🧟")
player_name = input("Enter adventurer name: ")

print("Welcome " + player_name + ". You stand before 3 doors: (1) Red  (2) Blue  (3) Green")
door = input("Which door number do you open? ")

if door == "1" or door == "red":
    print("🔥 Lava pit! You melted!")
elif door == "2" or door == "blue":
    print("💎 Ice room! You grabbed a Diamond Key!")
elif door == "3" or door == "green":
    print("🧟 Zombie army! You ran away safely!")
else:
    print("You stood still for too long! A ghost caught you!")
`,
      solutionCode: `# DAY 3 SOLUTION
choice = input("Door 1 or 2? ")
if choice == "1":
    print("You won!")
else:
    print("Game Over!")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add a 3rd Path",
          task: "Add an 'elif choice1 == 'up':' path for climbing a secret ladder!",
          hint: "elif choice1 == 'up':"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Secret Easter Egg Code",
          task: "If player enters secret code 'xyzzy', grant infinite health and instant victory!",
          hint: "if choice1 == 'xyzzy': print('CHEAT UNLOCKED!')"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Case-Insensitive Inputs",
          task: "Use .lower() on all input() statements so 'LEFT', 'Left', and 'left' all work!",
          hint: "choice = input('...').lower()"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "IndentationError: expected an indented block. Python relies on tab spacing (4 spaces) under if/elif/else lines!",
        "Capitalization mismatch: 'Left' != 'left'. Always use .lower() on user inputs!"
      ],
      tinkerQuestions: [
        "How can you check multiple conditions at once? (Using 'and' / 'or' operators!)."
      ]
    }
  },
  {
    day: 4,
    title: "Sarcastic Magic 8-Ball & Dice Roller",
    focus: "The random Library (randint, choice) & Module Imports",
    category: "Week 1: Core Logic & Terminal Games",
    icon: "🎱",
    summary: "Harness randomness to predict the future, roll dice for tabletop RPGs, or flip coins!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Generating Randomness with import random",
      explanation: "Python comes with built-in toolkits called 'libraries'. The `random` module allows us to roll dice or pick random items from a list!",
      syntaxSnippet: `import random

# Roll a 6-sided die (number between 1 and 6)
dice_roll = random.randint(1, 6)

# Pick a random response from a list
answers = ["Yes", "No", "Maybe", "Ask again later"]
fortune = random.choice(answers)

print("Dice:", dice_roll)
print("Fortune:", fortune)`,
      keyTakeaways: [
        "import random loads Python's built-in random library.",
        "random.randint(min, max) generates a random whole number.",
        "random.choice(list_name) picks a random element from a list."
      ],
      quickQuiz: {
        question: "What does random.randint(1, 20) generate?",
        options: [
          "A random decimal number between 1 and 20",
          "A random integer between 1 and 20 inclusive",
          "Always the number 1"
        ],
        correctIndex: 1,
        explanation: "Correct! random.randint(1, 20) generates a random whole number between 1 and 20 (perfect for D&D D20 dice rolls!)."
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Sarcastic Fortune Teller",
      explanation: "Build a funny Magic 8-Ball that delivers sarcastic predictions and simulates RPG dice rolls.",
      code: `import random
import time

print("========================================")
print(" 🎱 SARCASTIC MAGIC 8-BALL 🎱")
print("========================================")

# List of sarcastic fortunes
fortunes = [
    "Outlook good... for someone else, not you! 🤣",
    "My sources say NO. Absolutely not.",
    "Concentrate and ask again when I care.",
    "Yes! ...Just kidding, definitely no.",
    "100% Yes! Congratulations! 🎉",
    "Ask your pet cat instead."
]

question = input("Ask the Oracle a yes/no question: ")
print("Shaking 8-Ball... 🔮")
time.sleep(1) # Pause for 1 second dramatic effect

selected_fortune = random.choice(fortunes)
print("\n✨ ORACLE SAYS:", selected_fortune)

# Bonus D20 Dice Roll
print("\n🎲 BONUS D20 DICE ROLL:")
d20 = random.randint(1, 20)
print("You rolled a:", d20)
if d20 == 20:
    print("🔥 CRITICAL HIT 20!")
elif d20 == 1:
    print("💀 CRITICAL FAIL 1!")`,
      steps: [
        { line: 1, title: "Importing Modules", desc: "Load 'random' for chance and 'time' for dramatic delays." },
        { line: 11, title: "Response List", desc: "Store funny answers inside a Python list using square brackets []." },
        { line: 20, title: "Random Selection", desc: "Use random.choice() and random.randint() to deliver random fortunes." }
      ]
    },
    tinkerPlayground: {
      goal: "Add 5 new sarcastic fortunes, create a Coin Flipper (Heads / Tails), or build a D&D D100 Loot Roller!",
      starterCode: `# DAY 4 TINKER LAB: RPG Dice Roller & Coin Flip

import random

print("🎲 RPG MULTI-DICE ROLLER 🎲")
print("1. Roll D6 (Standard Die)")
print("2. Roll D20 (D&D Stat Die)")
print("3. Flip Coin (Heads/Tails)")

choice = input("Choice (1-3): ")

if choice == "1":
    print("🎲 D6 Result:", random.randint(1, 6))
elif choice == "2":
    print("🎲 D20 Result:", random.randint(1, 20))
elif choice == "3":
    coin = random.choice(["🪙 HEADS", "🪙 TAILS"])
    print("Coin Flip:", coin)
`,
      solutionCode: `# DAY 4 SOLUTION
import random
print("Loot tier:", random.choice(["Common", "Rare", "LEGENDARY!"]))`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add 3 Sarcastic Answers",
          task: "Expand the fortunes list with 3 new funny predictions!",
          hint: "fortunes.append('New answer!')"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Dramatic Countdown",
          task: "Add time.sleep(1) countdown prints: '3... 2... 1...' before revealing the roll!",
          hint: "import time\nprint('3...'); time.sleep(1)"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Coin Flip Feature",
          task: "Create a function or menu option that flips a coin 5 times in a row!",
          hint: "for i in range(5): print(random.choice(['Heads', 'Tails']))"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "NameError: name 'random' is not defined. Remember to include `import random` at top of file!",
        "IndexError: list index out of range. Happens if trying to pick from an empty list []."
      ],
      tinkerQuestions: [
        "How do video games like Fortnite or Pokémon use random numbers? (For loot crate drops, critical hits, and spawn locations!)."
      ]
    }
  },
  {
    day: 5,
    title: "Guess the Number & Vault Breaker",
    focus: "while Loops, Loop Control (break) & Game State Tracking",
    category: "Week 1: Core Logic & Terminal Games",
    icon: "🔢",
    summary: "Build a game where the computer picks a secret number and gives 'Too High / Too Low' hints!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Repeating Actions while a Condition is True",
      explanation: "A `while` loop keeps running code over and over until a condition becomes False, or until you execute a `break` command!",
      syntaxSnippet: `secret = 7
attempts = 0

while True:
    guess = int(input("Guess the secret number (1-10): "))
    attempts += 1
    
    if guess == secret:
        print("🎉 Correct in", attempts, "attempts!")
        break # Exit the loop immediately!
    elif guess < secret:
        print("📈 Too Low!")
    else:
        print("📉 Too High!")`,
      keyTakeaways: [
        "while condition: keeps repeating code as long as condition is True.",
        "break stops and exits the loop immediately.",
        "attempts += 1 increments a counter by +1 each loop turn."
      ],
      quickQuiz: {
        question: "What happens if a while loop condition is always True and has no break statement?",
        options: [
          "The program completes instantly",
          "An Infinite Loop occurs (the program runs forever until stopped!)",
          "Python automatically fixes it"
        ],
        correctIndex: 1,
        explanation: "Correct! Without a break or False condition, a `while True:` loop creates an Infinite Loop! Always ensure a break path exists!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Vault Code Breaker",
      explanation: "Build a high-stakes vault break-in game with limited guess attempts and hint feedback.",
      code: `import random

print("========================================")
print(" 🔐 CYBER VAULT CODE BREAKER 🔐")
print("========================================")

secret_code = random.randint(1, 100)
attempts_left = 7
won = False

print("The vault is locked! Guess the secret code between 1 and 100.")
print("You have " + str(attempts_left) + " attempts before alarm triggers! 🚨\n")

while attempts_left > 0:
    print("Remaining Attempts:", attempts_left)
    guess = int(input("Enter passcode guess: "))
    
    if guess == secret_code:
        print("🔓 ACCESS GRANTED! Vault opened successfully!")
        won = True
        break
    elif guess < secret_code:
        print("📈 HINT: Secret code is HIGHER!")
    else:
        print("📉 HINT: Secret code is LOWER!")
        
    attempts_left -= 1

if not won:
    print("\n🚨 ALARM TRIGGERED! Out of attempts! Secret code was:", secret_code)`,
      steps: [
        { line: 6, title: "Secret Number Setup", desc: "Generate secret number with randint(1, 100)." },
        { line: 10, title: "The Game Loop", desc: "Loop while attempts_left > 0." },
        { line: 15, title: "Higher / Lower Logic", desc: "Give hints using if/elif comparisons." },
        { line: 24, title: "Win/Loss Outcome", desc: "Check if won flag is True or False after loop ends." }
      ]
    },
    tinkerPlayground: {
      goal: "Add difficulty modes (Easy: 10 attempts, Hard: 3 attempts), score multipliers, or a secret 'cheat' keyword!",
      starterCode: `# DAY 5 TINKER LAB: Guess the Number Customizer

import random

secret = random.randint(1, 50)
score = 100

print("🎮 GUESS THE NUMBER (1-50) 🎮")

while score > 0:
    guess = int(input("Enter guess: "))
    if guess == secret:
        print("🎉 YOU WIN! Final Score:", score)
        break
    else:
        score -= 10
        if guess < secret:
            print("Higher! (-10 pts)")
        else:
            print("Lower! (-10 pts)")

if score <= 0:
    print("Game Over! Out of points! Code was:", secret)
`,
      solutionCode: `# DAY 5 SOLUTION
import random
s = random.randint(1, 10)
while int(input("Guess: ")) != s: print("Wrong!")
print("Correct!")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Custom Difficulty Selector",
          task: "Allow player to choose (1) Easy (1-20) or (2) Hard (1-500) at start!",
          hint: "if diff == '2': secret = random.randint(1, 500)"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Secret 'Cheat' Keyword",
          task: "If player enters number 999, print the secret answer without losing an attempt!",
          hint: "if guess == 999: print('Cheat:', secret_code)"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Score Tracker",
          task: "Start with 1000 points and subtract 100 points for each incorrect guess!",
          hint: "score -= 100"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Infinite loops: if code freezes, check if attempts counter is decreasing or break statement is reachable.",
        "String vs Integer comparison: `if '7' == 7` evaluates to False! Always cast input to `int(input(...))`!"
      ],
      tinkerQuestions: [
        "What is the best strategy to guess a number between 1 and 100 in under 7 tries? (Binary search: always guess halfway!)."
      ]
    }
  },
  {
    day: 6,
    title: "Countdown Timer & Rocket Blast-Off",
    focus: "for Loops, range() & ASCII Art Repeater",
    category: "Week 1: Core Logic & Terminal Games",
    icon: "🚀",
    summary: "Master repeating actions with counted for loops to build a blast-off rocket timer and ASCII art patterns!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Counted Repeating with for Loops and range()",
      explanation: "While `while` loops repeat until something changes, `for` loops repeat code an exact number of times using `range()`!",
      syntaxSnippet: `# Loop 5 times (0, 1, 2, 3, 4)
for i in range(5):
    print("Loop turn:", i)

# Countdown from 10 down to 1
for i in range(10, 0, -1):
    print("Countdown:", i)
print("🚀 BLAST OFF!")`,
      keyTakeaways: [
        "range(count) runs a loop count times (0 to count-1).",
        "range(start, stop, step) counts with custom start, stop, and increment.",
        "use for loops whenever you know in advance how many times to repeat!"
      ],
      quickQuiz: {
        question: "What numbers does range(1, 5) generate?",
        options: [
          "1, 2, 3, 4, 5",
          "1, 2, 3, 4",
          "0, 1, 2, 3, 4, 5"
        ],
        correctIndex: 1,
        explanation: "Correct! range(start, stop) includes start but stops BEFORE stop, so range(1, 5) produces 1, 2, 3, 4!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Rocket Blast-Off Timer & Art Repeater",
      explanation: "Build a countdown blast-off timer with time delays and repeated ASCII rocket patterns.",
      code: `import time

print("========================================")
print(" 🚀 NASA ROCKET LAUNCH SIMULATOR 🚀")
print("========================================")

countdown_start = 10

print("Final Systems Check Complete!")
print("Initiating Countdown Sequence...\n")

# Countdown loop using range(start, stop, step)
for count in range(countdown_start, 0, -1):
    print("⏱️ T-minus " + str(count) + " seconds...")
    time.sleep(0.5) # Half-second pause

print("\n🔥 IGNITION! 🚀 BLAST OFF TO MARS!")

# Draw Rocket Flame Trail with for loop
for height in range(1, 6):
    print(" " * (6 - height) + "🔥" * (height * 2))

print("========================================")
print(" Mission Control: Rocket in Orbit!")`,
      steps: [
        { line: 12, title: "Countdown Loop", desc: "range(10, 0, -1) steps backwards down to 1." },
        { line: 13, title: "Time Delay", desc: "time.sleep(0.5) pauses execution between counts." },
        { line: 18, title: "ASCII Flame Trail", desc: "Multiply strings ('🔥' * count) inside for loop to create expanding flame pyramid!" }
      ]
    },
    tinkerPlayground: {
      goal: "Change countdown speed, design your own repeated ASCII art pattern, or build a multiplication table generator!",
      starterCode: `# DAY 6 TINKER LAB: ASCII Pattern Generator

print("🎨 REPEATED ASCII PATTERN GENERATOR 🎨")

symbol = input("Enter symbol/emoji to repeat: ")
rows = int(input("How many rows? "))

print("\n--- GENERATING PATTERN ---")
for r in range(1, rows + 1):
    print(symbol * r)
`,
      solutionCode: `# DAY 6 SOLUTION
for i in range(1, 6):
    print("⭐" * i)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: The Fast Blast-Off",
          task: "Change countdown start to 20 and time.sleep to 0.2 seconds!",
          hint: "range(20, 0, -1)"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Multiplication Table",
          task: "Write a for loop that prints the 7 times table (7 * 1, 7 * 2 ... up to 7 * 10)!",
          hint: "for i in range(1, 11): print('7 x', i, '=', 7 * i)"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Inverted Pyramid",
          task: "Make the pattern draw upside down starting wide and shrinking to 1 symbol!",
          hint: "for r in range(rows, 0, -1): print(symbol * r)"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Forgetting range stop boundary is exclusive: range(1, 10) only goes up to 9, not 10!",
        "Forgetting third parameter for step down: range(10, 0) does nothing unless you specify step -1 as range(10, 0, -1)!"
      ],
      tinkerQuestions: [
        "When should you use a for loop vs a while loop? (Use for loops when you know exact repeat counts; use while loops when waiting for user input!)."
      ]
    }
  },
  {
    day: 7,
    title: "RPG Quest Backpack & Inventory",
    focus: "Python Lists ([]), Indexing, append(), pop(), remove(), len()",
    category: "Week 1: Core Logic & Terminal Games",
    icon: "🎒",
    summary: "Manage an adventurer's backpack inventory where players can collect, inspect, drop, and swap items!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Managing Collections with Python Lists",
      explanation: "A list is like a digital backpack. You can store multiple items in order, look up items by index position, add items with .append(), and remove trash with .pop()!",
      syntaxSnippet: `# Creating an inventory list
backpack = ["Plasma Pistol", "Health Potion", "Shield Bubble"]

# Accessing items (Python starts counting at index 0!)
print("Equipped Weapon:", backpack[0])

# Adding a new drop
backpack.append("Legendary Sniper")

# Removing an item by index position
backpack.pop(1)

print("Backpack size:", len(backpack))`,
      keyTakeaways: [
        "Lists use square brackets [] with items separated by commas.",
        "List indices start at 0! Index 0 is the 1st item.",
        ".append(item) adds to end, .pop(index) removes by position, len(list) gets count."
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
      title: "Guided Walkthrough: RPG Backpack & Loot Crate Sim",
      explanation: "Open loot crates, equip weapons, and manage inventory capacity limits.",
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

print("========================================")
print(" 🎒 RPG ADVENTURER BACKPACK MANAGER 🎒")
print("========================================")
print("Starting Inventory:", inventory)

# Open 3 Supply Drops
for crate_num in range(1, 4):
    print("\n--- Opening Supply Crate #" + str(crate_num) + " ---")
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

print("\n🎒 FINAL LOADOUT (" + str(len(inventory)) + " items):")
for idx, item in enumerate(inventory, 1):
    print(str(idx) + ".", item)`,
      steps: [
        { line: 4, title: "Inventory List", desc: "Store items inside backpack array." },
        { line: 22, title: "Checking Capacity", desc: "Use len(inventory) < max_capacity to check if space remains." },
        { line: 29, title: "Swapping Items", desc: "inventory.pop(0) removes the oldest item at index 0." }
      ]
    },
    tinkerPlayground: {
      goal: "Expand backpack size, add an item sorting feature, or allow players to type item names to drop!",
      starterCode: `# DAY 7 TINKER LAB: Battle Royale Loot Drop

import random

inventory = ["Common Pistol"]
loot = ["Rare Shotgun", "Epic Sniper", "Medkit", "Chug Jug", "Grappler"]

print("🎮 BATTLE ROYALE LOOT MANAGER 🎮")

while True:
    print("\nCurrent Loadout:", inventory)
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
      solutionCode: `# DAY 7 SOLUTION
inv = ["Axe"]
inv.append("Sword")
inv.sort()
print(inv)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Increase Backpack Limit",
          task: "Expand backpack capacity from 5 items to 8 items!",
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
          task: "Add a 'Nuke Inventory' command that empties the list using inventory.clear()!",
          hint: "inventory.clear()"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "ValueError: list.remove(x): x not in list. Always check 'if x in my_list:' before calling .remove()!",
        "IndexError: list index out of range. Happens when accessing index >= len(list)."
      ],
      tinkerQuestions: [
        "What is the difference between pop(0) and remove('Pistol')? (pop uses index position; remove searches by value!)."
      ]
    }
  },
  {
    day: 8,
    title: "Custom Power-Up Calculator & Boss Battle",
    focus: "Custom Functions (def, parameters, return values)",
    category: "Week 2: Data Structures, Functions & Turtle Graphics",
    icon: "⚡",
    summary: "Write reusable custom functions for attack(), heal(), and calculate_damage() to run a turn-based boss battle!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Writing Reusable Functions with def and return",
      explanation: "A function is like a spell macro or shortcut key in a video game. You define the recipe once with `def`, and then invoke it whenever you need it!",
      syntaxSnippet: `# Defining a function with parameters and return value
def calculate_damage(attacker_power, target_armor):
    raw_damage = attacker_power * 2
    final_damage = raw_damage - target_armor
    return max(1, final_damage) # At least 1 damage

# Invoking the function
hit_score = calculate_damage(50, 10)
print("Damage dealt:", hit_score)`,
      keyTakeaways: [
        "def function_name(parameters): creates a new custom action.",
        "Parameters pass input values into the function box.",
        "return passes calculated result data back to your main code!"
      ],
      quickQuiz: {
        question: "What keyword sends a value back from a function?",
        options: [
          "send",
          "return",
          "output"
        ],
        correctIndex: 1,
        explanation: "Correct! `return` passes the calculated answer back to the line that invoked the function!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Boss Battle Encounter",
      explanation: "Build modular combat functions and simulate a 1v1 battle against Cyber Dragon.",
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

print("========================================")
print(" 🐉 BOSS BATTLE: PIKACHU vs CYBER DRAGON 🐉")
print("========================================")

while player_hp > 0 and boss_hp > 0:
    print("\n------------------------------------")
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
    print("\n🏆 VICTORY! You slayed the Cyber Dragon!")
else:
    print("\n💀 DEFEAT! Pikachu fainted in battle...")`,
      steps: [
        { line: 4, title: "Attack Function", desc: "Accepts attacker name, min damage, and max damage parameters." },
        { line: 9, title: "Heal Function", desc: "Calculates new HP and returns updated value." },
        { line: 20, title: "Battle State Loop", desc: "Runs battle while both combatants have HP > 0." }
      ]
    },
    tinkerPlayground: {
      goal: "Add a Special Ultimate Attack function (def ultimate_attack()), critical hit multipliers, or mana restrictions!",
      starterCode: `# DAY 8 TINKER LAB: Combat Simulator & Critical Hits

import random

def calc_crit_damage(base_dmg):
    # 20% chance for 2x critical hit
    if random.randint(1, 5) == 1:
        print("💥 CRITICAL HIT! 2X DAMAGE!")
        return base_dmg * 2
    return base_dmg

player_hp = 80
monster_hp = 80

print("⚔️ MINI ARENA FIGHT ⚔️")
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
      solutionCode: `# DAY 8 SOLUTION
def double_dmg(power):
    return power * 2
print(double_dmg(25))`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Ultimate Fireball Function",
          task: "Create def fireball() that deals 50-80 damage but can only be used ONCE per fight!",
          hint: "Use boolean flag allow_ultimate = True"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Shield / Block Function",
          task: "Create def block() that reduces next incoming monster damage by 50%!",
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
        "Variable scope confusion: variables defined inside a function stay local unless returned!",
        "Forgetting parentheses when calling a function: typing `my_func` instead of `my_func()`."
      ],
      tinkerQuestions: [
        "Why are functions vital when building large software with thousands of lines of code?"
      ]
    }
  },
  {
    day: 9,
    title: "Pokedex & Monster Stat Lookup",
    focus: "Dictionaries ({key: value}), Lookups & Nested Data",
    category: "Week 2: Data Structures, Functions & Turtle Graphics",
    icon: "📖",
    summary: "Store and query character stats, elemental weaknesses, and special moves like a real database!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Storing Key-Value Pairs with Dictionaries",
      explanation: "A dictionary stores data like a real-world dictionary or game database: you look up a KEY (like 'Pikachu') and instantly get its VALUE (like stats or type)!",
      syntaxSnippet: `# Creating a dictionary
player_stats = {
    "name": "Shadow Ninja",
    "level": 15,
    "health": 250,
    "has_keycard": True
}

# Looking up a value by key name
print("Player Name:", player_stats["name"])

# Updating a value
player_stats["health"] = 300

# Adding a new key-value pair
player_stats["weapon"] = "Katana"`,
      keyTakeaways: [
        "Dictionaries use curly braces {} with key: value pairs.",
        "Look up data instantly using dict[key_name].",
        "Keys must be unique strings (like character names or usernames!)."
      ],
      quickQuiz: {
        question: "How do you access 'gold' in vault = {'gold': 500, 'gems': 3}?",
        options: [
          "vault[0]",
          "vault['gold']",
          "vault.gold"
        ],
        correctIndex: 1,
        explanation: "Correct! Pass the key name inside square brackets: `vault['gold']`!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Pokedex Monster Database",
      explanation: "Build a database of Pokémon monsters with stat queries and battle readiness checks.",
      code: `print("========================================")
print(" 📖 POKEDEX & MONSTER STAT DATABASE 📖")
print("========================================")

# Dictionary database of monsters
pokedex = {
    "Pikachu": {"type": "⚡ Electric", "hp": 100, "attack": 55, "move": "Thunderbolt"},
    "Charizard": {"type": "🔥 Fire/Flying", "hp": 180, "attack": 84, "move": "Flamethrower"},
    "Blastoise": {"type": "💧 Water", "hp": 175, "attack": 83, "move": "Hydro Pump"},
    "Gengar": {"type": "👻 Ghost/Poison", "hp": 120, "attack": 65, "move": "Shadow Ball"}
}

print("Available Entry Keys:", list(pokedex.keys()))

query = input("\nEnter monster name to lookup: ").strip().capitalize()

if query in pokedex:
    stats = pokedex[query]
    print("\n✨ FOUND ENTRY FOR " + query.upper() + ":")
    print("Type:", stats["type"])
    print("HP:", stats["hp"])
    print("Attack Power:", stats["attack"])
    print("Signature Move:", stats["move"])
else:
    print("\n❌ Error: Monster '" + query + "' not found in database!")`,
      steps: [
        { line: 5, title: "Nested Dictionary", desc: "Each monster key points to a sub-dictionary of stats." },
        { line: 15, title: "Checking Keys", desc: "Use 'if query in pokedex:' to check if key exists before looking up." },
        { line: 18, title: "Accessing Sub-Keys", desc: "stats['type'] extracts the specific property value." }
      ]
    },
    tinkerPlayground: {
      goal: "Add 2 new monsters to the dictionary, allow users to register a new monster, or heal a monster's HP!",
      starterCode: `# DAY 9 TINKER LAB: RPG Character Database

character_db = {
    "Knight": {"hp": 150, "weapon": "Iron Sword"},
    "Wizard": {"hp": 80, "weapon": "Magic Staff"},
    "Rogue": {"hp": 100, "weapon": "Dual Daggers"}
}

print("🎮 RPG CHARACTER LOOKUP 🎮")
role = input("Choose class (Knight/Wizard/Rogue): ").capitalize()

if role in character_db:
    print("Class Info:", character_db[role])
else:
    print("Class not found!")
`,
      solutionCode: `# DAY 9 SOLUTION
db = {"Pikachu": 100}
db["Pikachu"] += 20
print(db)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add a New Monster",
          task: "Add 'Bulbasaur' with Grass type and 120 HP to the pokedex dictionary!",
          hint: "pokedex['Bulbasaur'] = {'type': 'Grass', 'hp': 120}"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Level Up Stat Boost",
          task: "Write code that increases query monster's HP by +20 points!",
          hint: "pokedex[query]['hp'] += 20"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Register Custom Entry",
          task: "Allow the user to type a new monster name and stats to save into pokedex!",
          hint: "pokedex[new_name] = {...}"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "KeyError: 'Pikachu'. Trying to look up a key that doesn't exist in dictionary. Always check `if key in dict:` first!",
        "Forgetting quotes around keys in dictionary definitions: `{name: 'Bob'}` causes NameError. Use `{'name': 'Bob'}`!"
      ],
      tinkerQuestions: [
        "Why are dictionaries faster for lookups than searching through a 10,000 item list?"
      ]
    }
  },
  {
    day: 10,
    title: "Secret Cyber Code Generator",
    focus: "String Methods (.upper(), .replace(), slicing, .split())",
    category: "Week 2: Data Structures, Functions & Turtle Graphics",
    icon: "🔐",
    summary: "Encrypt secret messages with ciphers, reverse text, and transform string capitalization!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Manipulating Strings with Built-in Methods",
      explanation: "Python strings have powerful built-in tools. You can convert text capitalization, replace characters, and reverse strings using slicing `[::-1]`!",
      syntaxSnippet: `text = "Agent 007"

# Uppercase & Lowercase
print(text.upper()) # "AGENT 007"
print(text.lower()) # "agent 007"

# Replacing letters
scrambled = text.replace("e", "3").replace("t", "7")

# Reversing text with slicing [::-1]
reversed_text = text[::-1]
print("Reversed:", reversed_text)`,
      keyTakeaways: [
        ".upper() / .lower() changes string capitalization.",
        ".replace(old, new) swaps characters throughout text.",
        "text[::-1] reverses text strings backwards instantly!"
      ],
      quickQuiz: {
        question: "What does 'python'[::-1] return?",
        options: [
          "'nohtyp'",
          "'PYTHON'",
          "Error"
        ],
        correctIndex: 0,
        explanation: "Correct! String slice step -1 `[::-1]` reads characters backwards from end to start, giving 'nohtyp'!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Secret Agent Spy Scrambler",
      explanation: "Build a top-secret cipher machine that scrambles, reverses, and decodes agent text.",
      code: `print("========================================")
print(" 🕵️ SECRET AGENT CIPHER MACHINE 🕵️")
print("========================================")

message = input("Enter top secret message to encrypt: ")

# Step 1: Convert to Upper Case
upper_msg = message.upper()

# Step 2: Substitution Cipher (l33tspeak swap)
cipher_msg = upper_msg.replace("A", "4").replace("E", "3").replace("I", "1").replace("O", "0").replace("S", "5")

# Step 3: Reverse String
scrambled_code = cipher_msg[::-1]

print("\n🔐 ENCRYPTION COMPLETE:")
print("Original:", message)
print("Formatted:", upper_msg)
print("Scrambled Cipher:", scrambled_code)

# Decryption Simulation
print("\n🔓 DECRYPTING CODE...")
unreversed = scrambled_code[::-1]
decoded = unreversed.replace("4", "A").replace("3", "E").replace("1", "I").replace("0", "O").replace("5", "S")
print("Decoded Secret Message:", decoded)`,
      steps: [
        { line: 7, title: "Capitalization", desc: "Standardize text using .upper()." },
        { line: 10, title: "Character Swap", desc: "Chain .replace() calls to convert letters into numbers." },
        { line: 13, title: "Reverse Slicing", desc: "Reverse text order using string slice [::-1]." }
      ]
    },
    tinkerPlayground: {
      goal: "Add custom character substitution rules, build a Pig Latin converter, or create a Matrix text rain banner!",
      starterCode: `# DAY 10 TINKER LAB: Matrix Text Scrambler

text = input("Enter text to Matrix-scramble: ")

# Replace spaces with ⚡ and letters with symbols
matrix_text = text.replace(" ", "⚡").replace("a", "@").replace("e", "€")

print("\n🟢 MATRIX STREAM:")
print("Original:", text)
print("Matrix Code:", matrix_text)
print("Reversed Code:", matrix_text[::-1])
`,
      solutionCode: `# DAY 10 SOLUTION
msg = "hello"
print(msg.upper()[::-1])`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Custom Character Swap",
          task: "Add 2 new replacements: swap 'T' with '7' and 'B' with '8'!",
          hint: ".replace('T', '7').replace('B', '8')"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Word Counter",
          task: "Use .split() to split text into words and print total word count using len()!",
          hint: "words = text.split(); print(len(words))"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Palindrome Checker",
          task: "Check if user's word is spelled same backwards (e.g. 'racecar')!",
          hint: "if word == word[::-1]: print('PALINDROME!')"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Strings are immutable: `text.replace(...)` returns a NEW string! You must save result: `text = text.replace(...)`.",
        "Index error on slicing: slice syntax uses `[start:stop:step]`."
      ],
      tinkerQuestions: [
        "How do real encryption ciphers (like HTTPS or AES) protect internet passwords?"
      ]
    }
  },
  {
    day: 11,
    title: "Geometric Shape Generator & Turtle Intro",
    focus: "Turtle Graphics Intro (forward, left, right, pencolor, circle)",
    category: "Week 2: Data Structures, Functions & Turtle Graphics",
    icon: "🎨",
    summary: "Control a visual drawing robot to create squares, stars, and colorful geometric shapes on canvas!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Visual Coding with Python Turtle",
      explanation: "Python `turtle` is an on-screen robot pen. You command the turtle to move `forward()`, turn `left()` or `right()`, and change pen colors!",
      syntaxSnippet: `import turtle

t = turtle.Turtle()
t.color("cyan")
t.width(3)

# Draw a Square
for i in range(4):
    t.forward(100)
    t.left(90) # 90 degree turn for square corners`,
      keyTakeaways: [
        "t.forward(pixels) moves the pen forward.",
        "t.left(degrees) / t.right(degrees) turns the pen.",
        "t.pencolor(color) sets line stroke color.",
        "t.circle(radius) draws circles automatically!"
      ],
      quickQuiz: {
        question: "What turn angle is required to draw a regular 3-sided Triangle?",
        options: [
          "90 degrees",
          "120 degrees (360 / 3 sides)",
          "180 degrees"
        ],
        correctIndex: 1,
        explanation: "Correct! The formula for exterior angles of any regular polygon is 360 / number_of_sides! For a triangle: 360 / 3 = 120 degrees!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Geometric Shape Builder",
      explanation: "Draw a multi-colored star, square, and circle pattern on black background.",
      code: `import turtle

win = turtle.Screen()
win.bgcolor("black")

t = turtle.Turtle()
t.speed(0) # Fast drawing speed
t.width(3)

# Draw Neon Cyan Square
t.pencolor("#38bdf8") # Cyan
for i in range(4):
    t.forward(120)
    t.left(90)

# Move to new position
t.penup()
t.goto(-150, 50)
t.pendown()

# Draw Neon Gold 5-Pointed Star
t.pencolor("#facc15") # Gold
for i in range(5):
    t.forward(100)
    t.left(144) # 144 degrees creates star points!

# Move to new position
t.penup()
t.goto(150, -50)
t.pendown()

# Draw Neon Pink Circle
t.pencolor("#f43f5e") # Pink
t.circle(50)

print("🎨 Geometric Shapes Rendered!")`,
      steps: [
        { line: 3, title: "Background Color", desc: "Set dark canvas background using win.bgcolor('black')." },
        { line: 9, title: "Square Loop", desc: "Loop 4 times with 90 degree turns." },
        { line: 20, title: "Star Formula", desc: "Turning 144 degrees creates 5-pointed star geometry!" }
      ]
    },
    tinkerPlayground: {
      goal: "Draw a Hexagon (6 sides, 60 deg turns), change line thickness, or create your own custom geometric logo!",
      starterCode: `# DAY 11 TINKER LAB: Polygon & Star Generator

import turtle

win = turtle.Screen()
win.bgcolor("#020617")

t = turtle.Turtle()
t.speed(0)
t.width(4)
t.color("lime")

# Change sides to 6 for Hexagon, 8 for Octagon!
sides = 6
angle = 360 / sides

for i in range(sides):
    t.forward(80)
    t.left(angle)
`,
      solutionCode: `# DAY 11 SOLUTION
import turtle
t = turtle.Turtle()
for i in range(4): t.forward(100); t.left(90)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Draw an Octagon",
          task: "Change sides variable to 8 to draw a stop-sign Octagon!",
          hint: "sides = 8"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Colorful Edges",
          task: "Cycle pen color between 'red', 'yellow', 'cyan', 'magenta' on each side!",
          hint: "colors = ['red', 'yellow', 'cyan', 'magenta']"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Concentric Circles",
          task: "Write a for loop that draws 5 concentric circles with growing radius (20, 40, 60, 80, 100)!",
          hint: "for r in range(20, 120, 20): t.circle(r)"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Turtle drawing outside visible canvas: use `t.penup()` before `t.goto(x, y)` to move pen without leaving trail lines!",
        "Turtle window freezing: ensure `t.speed(0)` is used for instant rendering."
      ],
      tinkerQuestions: [
        "What formula calculates regular polygon angles? (360 / number of sides!)."
      ]
    }
  },
  {
    day: 12,
    title: "Rainbow Spirograph & Retro Pixel Stamps",
    focus: "Turtle Loops, Dynamic Color Lists & Grid Stamps",
    category: "Week 2: Data Structures, Functions & Turtle Graphics",
    icon: "🌀",
    summary: "Combine loops and color lists to draw hypnotic multi-colored mandalas and 8-bit pixel art grid sprites!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Creating Hypnotic Visual Art with Turtle Loops",
      explanation: "By repeatedly drawing shapes and turning slightly on each turn (like 59° instead of 60°), turtle creates expanding optical spirals and pixel grids!",
      syntaxSnippet: `import turtle

t = turtle.Turtle()
t.speed(0)
colors = ["red", "cyan", "lime", "gold"]

# Drawing a 100-step spiral
for x in range(100):
    t.pencolor(colors[x % 4]) # Cycle through colors
    t.forward(x * 2)
    t.left(59) # Slight twist creates spiral!`,
      keyTakeaways: [
        "x % len(colors) cycles numbers repeatedly through color list.",
        "Slight angle offsets (59° or 91°) twist shapes into optical spirals.",
        "t.stamp() prints turtle shapes directly onto coordinates!"
      ],
      quickQuiz: {
        question: "What does the modulus math operator % do in `x % 4`?",
        options: [
          "Calculates percentage",
          "Returns the remainder of division, cycling numbers 0, 1, 2, 3 repeatedly",
          "Multiplies x by 4"
        ],
        correctIndex: 1,
        explanation: "Correct! Modulus % calculates the division remainder. As x grows, `x % 4` cycles 0, 1, 2, 3, 0, 1, 2, 3... perfect for cycling colors!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Expanding Rainbow Star Spiral",
      explanation: "Build an expanding rainbow star spiral with cycling neon colors.",
      code: `import turtle

win = turtle.Screen()
win.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
turtle.delay(0)

colors = ["#38bdf8", "#8b5cf6", "#f43f5e", "#4ade80", "#facc15"]

for x in range(120):
    t.pencolor(colors[x % 5])
    t.forward(x * 2.5)
    t.left(144) # 144deg creates 5-pointed star spiral!
    t.width(x / 30)

print("🌀 Rainbow Spirograph Rendered!")`,
      steps: [
        { line: 4, title: "Speed 0", desc: "Set speed(0) for fast rendering." },
        { line: 11, title: "Color Modulus %", desc: "x % 5 cycles numbers 0 to 4 repeatedly through color list." },
        { line: 13, title: "Star Twist Angle", desc: "144 degree turns create expanding star spiral geometry." }
      ]
    },
    tinkerPlayground: {
      goal: "Change turn angle to 91 (square spiral) or 121 (triangle spiral), or build an 8-bit Pixel Art Stamp Sprite!",
      starterCode: `# DAY 12 TINKER LAB: Pixel Art Grid Stamp Builder

import turtle

win = turtle.Screen()
win.bgcolor("#0f172a")

t = turtle.Turtle()
t.shape("square")
t.penup()
t.speed(0)
t.color("#4ade80")

# 2D Grid Map (1 = Green pixel stamp, 0 = empty)
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
      solutionCode: `# DAY 12 SOLUTION
import turtle
t = turtle.Turtle()
for x in range(50): t.forward(x*3); t.left(91)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: The Star Spiral Angle",
          task: "Change turn angle in liveCode to 91 degrees for a square spiral!",
          hint: "Replace left(144) with left(91)"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Thicker Pen Strokes",
          task: "Make pen stroke width grow thicker as x increases!",
          hint: "t.width(x / 10)"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Dual Color Pixel Sprite",
          task: "Add number 2 to grid map for gold pixels! (`elif val == 2: t.color('gold')`)",
          hint: "elif val == 2: t.color('gold'); t.stamp()"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Turtle window freezing: ensure speed(0) is used for instant rendering.",
        "Using unrecognized color names like 'blurple'. Use standard hex codes like '#8b5cf6' or common color names."
      ],
      tinkerQuestions: [
        "How do retro video games (like NES/GameBoy) store sprite graphics? (In small binary 2D arrays just like this!)."
      ]
    }
  },
  {
    day: 13,
    title: "Bouncing Ball Physics Sim & Screen Saver",
    focus: "Turtle Physics, Coordinates (xcor, ycor) & Screen Bouncing",
    category: "Week 2: Data Structures, Functions & Turtle Graphics",
    icon: "⚽",
    summary: "Simulate gravity, wall bounces, and motion physics for a mini Pong or arcade bouncing ball game!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Simulating Physics and Coordinates with Turtle",
      explanation: "Every element on screen has (x, y) coordinates. By updating position each frame (`x += dx`), objects move! Bouncing happens when reversing velocity (`dx = -dx`) at wall edges!",
      syntaxSnippet: `import turtle

ball = turtle.Turtle()
ball.shape("circle")

# Motion velocity variables
dx = 3 # Movement speed along x-axis
dy = 3 # Movement speed along y-axis

# Animation step
ball.setx(ball.xcor() + dx)
ball.sety(ball.ycor() + dy)

# Bounce off right wall (x > 200)
if ball.xcor() > 200:
    dx = -dx # Reverse direction!`,
      keyTakeaways: [
        "ball.xcor() / ball.ycor() gets current position.",
        "ball.setx(new_x) / ball.sety(new_y) moves ball to new coordinates.",
        "Velocity variables dx, dy control speed and direction.",
        "Reversing sign (dx = -dx) creates wall bouncing physics!"
      ],
      quickQuiz: {
        question: "If dx = 5 and a ball hits the right wall edge, what reverses its horizontal motion?",
        options: [
          "dx = 0",
          "dx = -dx (changes dx from 5 to -5)",
          "dx = dx + 5"
        ],
        correctIndex: 1,
        explanation: "Correct! Negating velocity (`dx = -dx`) reverses direction, making positive rightward movement turn into negative leftward movement!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Retro Bouncing DVD Screen Saver",
      explanation: "Build a classic bouncing logo simulation that changes colors whenever it hits a screen edge.",
      code: `import turtle
import random

win = turtle.Screen()
win.bgcolor("black")

ball = turtle.Turtle()
ball.shape("circle")
ball.color("#38bdf8") # Neon Cyan
ball.penup()
ball.speed(0)

# Velocity vector speeds
dx = 3
dy = 2.5

colors = ["#38bdf8", "#8b5cf6", "#f43f5e", "#4ade80", "#facc15"]

print("⚽ BOUNCING BALL PHYSICS ACTIVE ⚽")

# Animation loop for 150 frames
for frame in range(150):
    # Update position
    new_x = ball.xcor() + dx
    new_y = ball.ycor() + dy
    ball.goto(new_x, new_y)
    
    # Right Wall Bounce
    if ball.xcor() > 200 or ball.xcor() < -200:
        dx = -dx
        ball.color(random.choice(colors))
        
    # Top/Bottom Wall Bounce
    if ball.ycor() > 150 or ball.ycor() < -150:
        dy = -dy
        ball.color(random.choice(colors))

print("✅ Physics Animation Complete!")`,
      steps: [
        { line: 12, title: "Velocity Variables", desc: "dx and dy store pixels moved per frame." },
        { line: 20, title: "Position Update", desc: "goto(new_x, new_y) updates ball position each step." },
        { line: 24, title: "Boundary Checking", desc: "Check if xcor() exceeds border limits (200, -200) and negate velocity." }
      ]
    },
    tinkerPlayground: {
      goal: "Add a 2nd bouncing ball, add gravity (`dy -= 0.2`), or build a Pong paddle controlled by keyboard!",
      starterCode: `# DAY 13 TINKER LAB: Gravity Bouncing Ball

import turtle

win = turtle.Screen()
win.bgcolor("#020617")

ball = turtle.Turtle()
ball.shape("circle")
ball.color("gold")
ball.penup()
ball.speed(0)
ball.goto(0, 100)

dy = 0 # Vertical speed
gravity = -0.3 # Gravity pulling down

for frame in range(120):
    dy += gravity # Gravity pulls down
    ball.sety(ball.ycor() + dy)
    
    # Ground Bounce
    if ball.ycor() < -120:
        ball.sety(-120)
        dy = -dy * 0.85 # Bounce up with slight energy loss!
`,
      solutionCode: `# DAY 13 SOLUTION
import turtle
b = turtle.Turtle()
b.shape("circle")
dx = 4
for i in range(50):
    b.setx(b.xcor() + dx)
    if b.xcor() > 100: dx = -dx`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Double the Speed",
          task: "Set dx = 6 and dy = 5 for a hyper-fast super bounce!",
          hint: "dx = 6; dy = 5"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Add Trail Stamp",
          task: "Leave a trailing stamp behind the ball as it moves!",
          hint: "ball.stamp()"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Energy Friction Loss",
          task: "In gravity sim, multiply dy by 0.80 on ground bounce so bounces shrink realistically!",
          hint: "dy = -dy * 0.80"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Ball getting stuck in wall: ensure you reset ball position slightly inside boundary when bouncing (`ball.setx(200)`).",
        "Infinite loops during animation: use counted frame loops for web environment compatibility."
      ],
      tinkerQuestions: [
        "How do real physics engines (like Unity or Unreal Engine) calculate velocity and gravity?"
      ]
    }
  },
  {
    day: 14,
    title: "The Great Bug Hunt & Logic Doctor",
    focus: "Refactoring & Debugging (SyntaxErrors, NameErrors, IndentationErrors, Logic Errors)",
    category: "Week 2: Data Structures, Functions & Turtle Graphics",
    icon: "🐛",
    summary: "Become a code detective! Find and fix 5 hidden bugs in broken mini-games to restore them!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Mastering the Art of Python Debugging",
      explanation: "Errors aren't failures — they are clues! Python tracebacks tell you the exact line number and error type (`SyntaxError`, `NameError`, `TypeError`, `IndentationError`).",
      syntaxSnippet: `# Common Error 1: SyntaxError (Missing colon or quotes)
# Broken: if x == 5
# Fixed:  if x == 5:

# Common Error 2: NameError (Misspelled variable)
# Broken: player_hp = 100; print(player_health)
# Fixed:  player_hp = 100; print(player_hp)

# Common Error 3: TypeError (Mixing string and number)
# Broken: print("Score: " + 100)
# Fixed:  print("Score: " + str(100))`,
      keyTakeaways: [
        "SyntaxError: Missing colon, quote, or parenthesis.",
        "NameError: Misspelled variable or function name.",
        "TypeError: Mixing incompatible data types (e.g. string + int).",
        "LogicError: Code runs without error, but gives wrong result!"
      ],
      quickQuiz: {
        question: "What error occurs if you forget a colon ':' at the end of an if line?",
        options: [
          "TypeError",
          "SyntaxError",
          "ValueError"
        ],
        correctIndex: 1,
        explanation: "Correct! Forgetting required Python punctuation like colons ':' or quotes causes a `SyntaxError`!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Broken Arcade Mini-Game Debug",
      explanation: "Inspect a broken script with 3 intentional bugs and fix them step-by-step.",
      code: `# BROKEN SCRIPT: Fix 3 bugs below!

import random

player_hp = 100
monster_hp = 50

print("========================================")
print(" 🐛 BUG HUNT: REPAIR THE GAME ENGINE 🐛")
print("========================================")

# BUG 1 FIX: Convert input to integer!
player_choice = input("Enter attack power (10-30): ")
attack_power = int(player_choice)

# BUG 2 FIX: Correct variable spelling!
monster_hp -= attack_power
print("Hit monster for " + str(attack_power) + " damage!")

# BUG 3 FIX: Add missing colon on if statement!
if monster_hp <= 0:
    print("🏆 VICTORY! Monster defeated!")
else:
    print("Monster HP remaining:", monster_hp)`,
      steps: [
        { line: 14, title: "Bug 1 (TypeError)", desc: "Cast input to int() so subtraction works." },
        { line: 17, title: "Bug 2 (NameError)", desc: "Fix variable spelling from monster_health to monster_hp." },
        { line: 21, title: "Bug 3 (SyntaxError)", desc: "Add missing colon ':' after if condition." }
      ]
    },
    tinkerPlayground: {
      goal: "Find and fix 3 hidden bugs in the Tinker Challenge snippet below to make the game fully playable!",
      starterCode: `# DAY 14 TINKER LAB: The Bug Hunter Hospital
# THIS SCRIPT CONTAINS 3 BUGS! CAN YOU FIX THEM ALL?

import random

inventory = ["Health Potion", "Mana Crystal"]
score = "100" # BUG 1: Should be integer number 100!

print("🎒 INVENTORY BUG HUNT 🎒")

# BUG 2: Indentation error on print line below!
for item in inventory:
print("Item in backpack:", item)

# BUG 3: Typo in variable name 'inventry'!
inventory.append("Gold Coin")
print("Total items:", len(inventory))
`,
      solutionCode: `# DAY 14 SOLUTION
inventory = ["Potion"]
for item in inventory:
    print("Item:", item)`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Fix Bug 1 (Data Type)",
          task: "Change score = '100' string to integer number 100!",
          hint: "score = 100"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: Fix Bug 2 (Indentation)",
          task: "Indent the print line under the for loop with 4 spaces!",
          hint: "for item in inventory:\n    print(...)"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Fix Bug 3 (Spelling)",
          task: "Fix spelling of inventory variable so .append works!",
          hint: "inventory.append('Gold Coin')"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Panic when seeing red error tracebacks: read the last line of the traceback first — it tells you the exact line number and error!",
        "Logic errors where code runs without crashing but gives wrong results: use print() debugging to inspect variable values."
      ],
      tinkerQuestions: [
        "Why is debugging considered one of the most valuable skills for professional software engineers?"
      ]
    }
  },
  {
    day: 15,
    title: "Neon Retro Arcade Capstone Project",
    focus: "Full Project Synthesis (Loops, Lists, Functions, Dictionaries & Visuals)",
    category: "Week 2: Data Structures, Functions & Turtle Graphics",
    icon: "🚀",
    summary: "Build your dream Python mini-game from scratch using loops, lists, functions, dictionaries & graphics!",
    timeBreakdown: { conceptMinutes: 10, liveCodeMinutes: 15, tinkerMinutes: 20 },
    concept: {
      headline: "Bringing It All Together: The Capstone Game Engine",
      explanation: "You have mastered all 14 core building blocks of Python! Now combine variables, loops, lists, functions, dictionaries, and graphics into a complete Capstone Game!",
      syntaxSnippet: `# Capstone Architecture Template
player_data = {"name": "Hero", "score": 0, "inventory": []}

def game_menu():
    print("=== CAPSTONE ARCADE ===")
    print("1. Start Quest")
    print("2. View Stats")
    print("3. Quit")

# Main Engine Loop
while True:
    game_menu()
    choice = input("> ")
    if choice == "3": break`,
      keyTakeaways: [
        "Modular Design: Break big projects into small functions.",
        "State Management: Store player health, score, and inventory in dictionaries/lists.",
        "Polished UX: Add ASCII banners, emoji icons, and clear prompts!"
      ],
      quickQuiz: {
        question: "What is the key to building a large complex programming project?",
        options: [
          "Write 1000 lines of code at once without testing",
          "Break the project into small modular functions and test each step!",
          "Memorize every command"
        ],
        correctIndex: 1,
        explanation: "Correct! Professional engineers build complex systems step-by-step: design functions, test them individually, and plug them together!"
      }
    },
    liveCode: {
      title: "Guided Walkthrough: Capstone Arcade Engine",
      explanation: "Build a complete playable Capstone mini-game engine with state tracking and multiple game modes.",
      code: `import random

# Game State Data
player = {
    "name": "",
    "hp": 100,
    "score": 0,
    "inventory": ["Health Potion"]
}

def print_banner():
    print("========================================")
    print(" 🎮 NEON RETRO CAPSTONE ARCADE v1.0 🎮")
    print("========================================")

def explore_dungeon():
    print("\n🌲 Exploring the Cyber Forest...")
    events = ["Found Gold Chest! 💰", "Encountered Goblin! 👾", "Discovered Secret Shrine! ✨"]
    found = random.choice(events)
    print("Event:", found)
    
    if "Gold" in found:
        player["score"] += 50
        player["inventory"].append("Gold Key")
    elif "Goblin" in found:
        player["hp"] -= 20
        print("Took 20 damage! HP remaining:", player["hp"])
    elif "Shrine" in found:
        player["hp"] = min(100, player["hp"] + 30)
        print("Restored +30 HP!")

# --- MAIN CAPSTONE ENGINE ---
print_banner()
player["name"] = input("Enter Hero Name: ")

while player["hp"] > 0:
    print("\n--- HERO: " + player["name"] + " | HP: " + str(player["hp"]) + " | Score: " + str(player["score"]) + " ---")
    print("Inventory:", player["inventory"])
    cmd = input("Action: (1) Explore  (2) Heal  (3) Quit: ")
    
    if cmd == "1":
        explore_dungeon()
    elif cmd == "2":
        if "Health Potion" in player["inventory"]:
            player["inventory"].remove("Health Potion")
            player["hp"] = 100
            print("💚 Used Health Potion! HP fully restored!")
        else:
            print("❌ No Health Potions left!")
    elif cmd == "3":
        print("👋 Thanks for playing!")
        break

print("\n🏆 GAME OVER! Final Score:", player["score"])`,
      steps: [
        { line: 4, title: "State Management", desc: "Store hero HP, score, and inventory inside dictionary." },
        { line: 14, title: "Modular Events", desc: "Encapsulate game encounters inside clean functions." },
        { line: 29, title: "Game Engine Loop", desc: "Run main game loop while player HP > 0." }
      ]
    },
    tinkerPlayground: {
      goal: "Customize your Capstone project! Add new items, write a Boss Battle encounter, or build a Turtle Derby Racing championship!",
      starterCode: `# DAY 15 TINKER LAB: Capstone Customizer

# Choose your Capstone path:
# 1. Expand the Dungeon Crawler above with a Boss fight!
# 2. Build a Turtle Derby Racing Championship!
# 3. Create a Cyber Trivia & Quiz Engine!

print("🚀 CAPSTONE PROJECT CUSTOM LAB 🚀")
print("Congratulations on completing 15 Days of Python Tinker Academy!")
print("Customize your code and share your game with family & friends!")
`,
      solutionCode: `# DAY 15 SOLUTION
print("🏆 GRADUATED FROM PYTHON TINKER ACADEMY!")`,
      breakChallenges: [
        {
          id: "b1",
          title: "🔥 Challenge 1: Add Boss Battle",
          task: "Add a Boss fight encounter when player score reaches 100 points!",
          hint: "if player['score'] >= 100: boss_fight()"
        },
        {
          id: "b2",
          title: "💥 Challenge 2: High Score Saver",
          task: "Store high score in a list and display top score on game over!",
          hint: "high_scores.append(player['score'])"
        },
        {
          id: "b3",
          title: "⚡ Challenge 3: Victory Trophy Screen",
          task: "Print a giant ASCII trophy when player completes the quest!",
          hint: "print('  🏆 VICTORY CHAMPION! 🏆  ')"
        }
      ]
    },
    mentorNotes: {
      commonStumblingBlocks: [
        "Trying to do too much at once: encourage students to add 1 small feature at a time and test immediately!",
        "Code organization: keep state variables at top, functions in middle, main loop at bottom."
      ],
      tinkerQuestions: [
        "What game feature or project are you most proud of building in this 15-day course?"
      ]
    }
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM = CURRICULUM;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CURRICULUM;
}
