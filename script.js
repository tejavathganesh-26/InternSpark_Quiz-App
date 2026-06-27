// ============================================
// QUESTION BANK - All questions have 4 options
// ============================================
const questionBank = {
    HTML: [
        { q: "What does HTML stand for?", o: ["Hyper Text Markup Language", "High Tech Modern Language",
                "Hyper Transfer Markup Language", "High Text Markup Language"
            ], a: "Hyper Text Markup Language" },
        { q: "Which tag is used for the largest heading?", o: ["<h1>", "<h6>", "<head>", "<heading>"],
            a: "<h1>" },
        { q: "What is the correct HTML element for a line break?", o: ["<br>", "<lb>", "<break>", "<line>"],
            a: "<br>" },
        { q: "Which tag creates a hyperlink?", o: ["<a>", "<link>", "<href>", "<url>"], a: "<a>" },
        { q: "Which tag inserts an image?", o: ["<img>", "<image>", "<src>", "<pic>"], a: "<img>" },
        { q: "Which attribute specifies image URL?", o: ["src", "href", "link", "url"], a: "src" },
        { q: "Which tag defines a paragraph?", o: ["<p>", "<para>", "<paragraph>", "<text>"], a: "<p>" },
        { q: "Which tag defines an unordered list?", o: ["<ul>", "<ol>", "<li>", "<list>"], a: "<ul>" },
        { q: "Which tag defines a list item?", o: ["<li>", "<item>", "<list>", "<ul>"], a: "<li>" },
        { q: "What is the HTML5 doctype?", o: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE>", "<HTML5>"],
            a: "<!DOCTYPE html>" },
        { q: "Which tag makes text bold?", o: ["<b>", "<strong>", "Both", "None"], a: "Both" },
        { q: "Which tag makes text italic?", o: ["<i>", "<em>", "Both", "None"], a: "Both" }
    ],
    CSS: [
        { q: "What does CSS stand for?", o: ["Cascading Style Sheets", "Computer Style Sheets",
                "Creative Style Sheets", "Cascading Sheet Styles"
            ], a: "Cascading Style Sheets" },
        { q: "Which property changes text color?", o: ["color", "text-color", "font-color", "background-color"],
            a: "color" },
        { q: "Which property changes background color?", o: ["background-color", "bg-color", "color",
                "background"
            ], a: "background-color" },
        { q: "How to center text?", o: ["text-align: center", "align: center", "center: text", "text-center"],
            a: "text-align: center" },
        { q: "Which property sets font size?", o: ["font-size", "size", "text-size", "font"], a: "font-size" },
        { q: "How to make text bold?", o: ["font-weight: bold", "font: bold", "bold: true", "text-weight: bold"],
            a: "font-weight: bold" },
        { q: "Which property adds space inside?", o: ["padding", "margin", "border", "spacing"], a: "padding" },
        { q: "Which property adds space outside?", o: ["margin", "padding", "border", "spacing"], a: "margin" },
        { q: "Default position value?", o: ["static", "relative", "absolute", "fixed"], a: "static" },
        { q: "Which property creates rounded corners?", o: ["border-radius", "radius", "corner-radius",
                "rounded"
            ], a: "border-radius" },
        { q: "How to add shadow to text?", o: ["text-shadow", "shadow", "text-box-shadow", "box-shadow"],
            a: "text-shadow" },
        { q: "Which property sets width?", o: ["width", "size", "dimension", "w"], a: "width" }
    ],
    JavaScript: [
        { q: "What is JavaScript?", o: ["Programming language", "Style sheet", "Markup language", "Database"],
            a: "Programming language" },
        { q: "Which keyword declares a variable?", o: ["var", "let", "const", "All"], a: "All" },
        { q: "How to write a comment in JS?", o: ["// comment", "/* comment */", "Both", "None"], a: "Both" },
        { q: "How to write an array?", o: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
            a: "[1, 2, 3]" },
        { q: "How to create a function?", o: ["function myFunction()", "myFunction()", "function: myFunction()",
                "def myFunction()"
            ], a: "function myFunction()" },
        { q: "How to write an if statement?", o: ["if (condition) {}", "if condition {}", "if {} condition",
                "condition if {}"
            ], a: "if (condition) {}" },
        { q: "How to write a for loop?", o: ["for (i=0; i<10; i++)", "for i=0 to 10", "loop i=0 to 10",
                "for (i=0; i<10)"
            ], a: "for (i=0; i<10; i++)" },
        { q: "What does console.log() do?", o: ["Prints to console", "Logs error", "Shows alert", "None"],
            a: "Prints to console" },
        { q: "How to convert string to number?", o: ["Number()", "parseInt()", "parseFloat()", "All"],
            a: "All" },
        { q: "What is typeof?", o: ["Returns type", "Returns size", "Returns value", "None"], a: "Returns type" },
        { q: "How to add element to array?", o: ["push()", "add()", "append()", "insert()"], a: "push()" },
        { q: "What is array length?", o: ["Number of elements", "Size in bytes", "Length in characters",
                "None"
            ], a: "Number of elements" }
    ],
    Java: [
        { q: "What is Java?", o: ["Programming language", "Scripting language", "Markup language", "Database"],
            a: "Programming language" },
        { q: "What is the main method signature?", o: ["public static void main(String[] args)",
                "public void main()", "static void main()", "void main()"
            ], a: "public static void main(String[] args)" },
        { q: "What is a class?", o: ["Blueprint for objects", "Function", "Variable", "Package"],
            a: "Blueprint for objects" },
        { q: "What is an object?", o: ["Instance of class", "Function", "Variable", "Package"],
            a: "Instance of class" },
        { q: "What is inheritance?", o: ["Extending class", "Implementing class", "Abstract class", "None"],
            a: "Extending class" },
        { q: "What is polymorphism?", o: ["Multiple forms", "Single form", "Inheritance", "Encapsulation"],
            a: "Multiple forms" },
        { q: "What is encapsulation?", o: ["Data hiding", "Data sharing", "Data modification", "None"],
            a: "Data hiding" },
        { q: "What is a constructor?", o: ["Initialize objects", "Destroy objects", "Create objects", "None"],
            a: "Initialize objects" },
        { q: "Abstract class vs interface?", o: ["Abstract can have concrete methods",
                "Interface can have concrete methods", "Both same", "None"
            ], a: "Abstract can have concrete methods" },
        { q: "What is a package?", o: ["Group of classes", "Group of functions", "Group of variables", "None"],
            a: "Group of classes" },
        { q: "What is a static method?", o: ["Belongs to class", "Belongs to object", "Both", "None"],
            a: "Belongs to class" },
        { q: "What is the final keyword?", o: ["Constant", "Class cannot inherit", "Method cannot override",
                "All"
            ], a: "All" }
    ],
    Python: [
        { q: "What is Python?", o: ["Programming language", "Scripting language", "Both", "None"],
            a: "Programming language" },
        { q: "How to print in Python?", o: ["print()", "console.log()", "System.out.println()", "echo"],
            a: "print()" },
        { q: "How to comment in Python?", o: ["# comment", "// comment", "/* comment */", "<!-- comment -->"],
            a: "# comment" },
        { q: "What is a list?", o: ["Ordered collection", "Unordered collection", "Set", "Dictionary"],
            a: "Ordered collection" },
        { q: "What is a tuple?", o: ["Immutable list", "Mutable list", "Set", "Dictionary"],
            a: "Immutable list" },
        { q: "What is a dictionary?", o: ["Key-value pairs", "List", "Set", "Tuple"], a: "Key-value pairs" },
        { q: "What is a set?", o: ["Unordered unique elements", "Ordered collection", "Key-value pairs",
                "None"
            ], a: "Unordered unique elements" },
        { q: "How to define a function?", o: ["def function_name():", "function function_name():",
                "func function_name():", "define function_name():"
            ], a: "def function_name():" },
        { q: "How to write if statement?", o: ["if condition:", "if (condition)", "if condition {}", "None"],
            a: "if condition:" },
        { q: "How to write for loop?", o: ["for item in iterable:", "for (item in iterable)", "for item: iterable",
                "None"
            ], a: "for item in iterable:" },
        { q: "List vs tuple?", o: ["List mutable, tuple immutable", "Both mutable", "Both immutable", "None"],
            a: "List mutable, tuple immutable" },
        { q: "Deep vs shallow copy?", o: ["Deep all levels, shallow first level", "Both same",
                "Shallow all levels", "None"
            ], a: "Deep all levels, shallow first level" }
    ],
    React: [
        { q: "What is React?", o: ["JavaScript library", "Framework", "Language", "Database"],
            a: "JavaScript library" },
        { q: "What is JSX?", o: ["JavaScript XML", "JavaScript Extension", "Java XML", "None"],
            a: "JavaScript XML" },
        { q: "What is a component?", o: ["Reusable UI piece", "Function", "Class", "All"],
            a: "Reusable UI piece" },
        { q: "What are props?", o: ["Properties", "Components", "States", "Methods"], a: "Properties" },
        { q: "What is state?", o: ["Component data", "Component properties", "Methods", "None"],
            a: "Component data" },
        { q: "props vs state?", o: ["Props immutable, state mutable", "Both mutable", "Both immutable",
                "None"
            ], a: "Props immutable, state mutable" },
        { q: "What is useEffect?", o: ["Handle side effects", "Handle state", "Handle props", "None"],
            a: "Handle side effects" },
        { q: "What is useState?", o: ["Handle state", "Handle props", "Handle effects", "None"],
            a: "Handle state" },
        { q: "Virtual DOM vs Real DOM?", o: ["Virtual is lightweight copy, Real is actual", "Both same",
                "Real is lightweight", "None"
            ], a: "Virtual is lightweight copy, Real is actual" },
        { q: "Why use key in lists?", o: ["Performance", "Unique identification", "Both", "None"],
            a: "Both" },
        { q: "What is useCallback?", o: ["Memoize functions", "Memoize values", "Both", "None"],
            a: "Memoize functions" },
        { q: "What is useMemo?", o: ["Memoize values", "Memoize functions", "Both", "None"],
            a: "Memoize values" }
    ],
    "Machine Learning": [
        { q: "What is Machine Learning?", o: ["AI subset", "Data Science", "Both", "None"], a: "AI subset" },
        { q: "What is supervised learning?", o: ["Labeled data", "Unlabeled data", "Both", "None"],
            a: "Labeled data" },
        { q: "What is unsupervised learning?", o: ["Unlabeled data", "Labeled data", "Both", "None"],
            a: "Unlabeled data" },
        { q: "Classification vs regression?", o: ["Classification predicts categories, regression values",
                "Both predict categories", "Both predict values", "None"
            ], a: "Classification predicts categories, regression values" },
        { q: "What is overfitting?", o: ["Model memorizes training data", "Model generalizes well", "Both",
                "None"
            ], a: "Model memorizes training data" },
        { q: "Bagging vs boosting?", o: ["Bagging reduces variance, boosting reduces bias",
                "Both reduce bias", "Both reduce variance", "None"
            ], a: "Bagging reduces variance, boosting reduces bias" },
        { q: "What is regularization?", o: ["Prevent overfitting", "Reduce complexity", "Both", "None"],
            a: "Both" },
        { q: "What is a neural network?", o: ["Computational model", "Data structure", "Algorithm", "None"],
            a: "Computational model" },
        { q: "What is deep learning?", o: ["Neural networks with many layers", "Simple networks",
                "Data preprocessing", "None"
            ], a: "Neural networks with many layers" },
        { q: "What is loss function?", o: ["Measure model performance", "Train model", "Both", "None"],
            a: "Both" },
        { q: "Training vs testing data?", o: ["Training teaches, testing evaluates", "Both teach",
                "Both evaluate", "None"
            ], a: "Training teaches, testing evaluates" },
        { q: "What is cross-validation?", o: ["Validate model performance", "Train model", "Both", "None"],
            a: "Validate model performance" }
    ],
    SQL: [
        { q: "What is SQL?", o: ["Structured Query Language", "Sequential Query Language",
                "System Query Language", "None"
            ], a: "Structured Query Language" },
        { q: "How to select all columns?", o: ["SELECT * FROM table", "SELECT ALL FROM table", "SELECT table.*",
                "None"
            ], a: "SELECT * FROM table" },
        { q: "How to add WHERE condition?", o: ["WHERE condition", "HAVING condition", "IF condition", "None"],
            a: "WHERE condition" },
        { q: "WHERE vs HAVING?", o: ["WHERE filters rows, HAVING filters groups", "Both filter rows",
                "Both filter groups", "None"
            ], a: "WHERE filters rows, HAVING filters groups" },
        { q: "What is a JOIN?", o: ["Combine tables", "Filter tables", "Group tables", "None"],
            a: "Combine tables" },
        { q: "INNER JOIN vs OUTER JOIN?", o: ["Inner matching rows, outer all rows", "Both join all rows",
                "Outer matching rows", "None"
            ], a: "Inner matching rows, outer all rows" },
        { q: "What is an index?", o: ["Speed up queries", "Speed up writes", "Both", "None"],
            a: "Speed up queries" },
        { q: "What is a primary key?", o: ["Unique identifier", "Foreign key", "Composite key", "None"],
            a: "Unique identifier" },
        { q: "What is a foreign key?", o: ["References primary key", "Unique identifier", "Composite key",
                "None"
            ], a: "References primary key" },
        { q: "What is GROUP BY?", o: ["Group rows", "Filter rows", "Sort rows", "None"], a: "Group rows" },
        { q: "DELETE vs TRUNCATE?", o: ["DELETE removes rows, TRUNCATE removes all", "Both remove all",
                "TRUNCATE removes rows", "None"
            ], a: "DELETE removes rows, TRUNCATE removes all" },
        { q: "What is ORDER BY?", o: ["Sort results", "Group results", "Filter results", "None"],
            a: "Sort results" }
    ]
};

// ============================================
// QUIZ APPLICATION
// ============================================
class QuizApp {
    constructor() {
        // DOM Elements
        this.categorySelect = document.getElementById('categorySelect');
        this.questionText = document.getElementById('questionText');
        this.questionNumber = document.getElementById('questionNumber');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.progressBar = document.getElementById('progressBar');
        this.timerText = document.getElementById('timerText');
        this.timerCircle = document.getElementById('timerCircle');
        this.scoreDisplay = document.getElementById('scoreDisplay');
        this.questionCounter = document.getElementById('questionCounter');
        this.categoryDisplay = document.getElementById('categoryDisplay');
        this.palette = document.getElementById('palette');
        this.streakCount = document.getElementById('streakCount');
        this.streakDisplay = document.getElementById('streakDisplay');
        this.finalScore = document.getElementById('finalScore');
        this.correctCount = document.getElementById('correctCount');
        this.wrongCount = document.getElementById('wrongCount');
        this.accuracyResult = document.getElementById('accuracyResult');
        this.achievementBadge = document.getElementById('achievementBadge');
        this.confettiContainer = document.getElementById('confettiContainer');
        this.reviewContainer = document.getElementById('reviewContainer');
        this.totalQuizzes = document.getElementById('totalQuizzes');
        this.highestScore = document.getElementById('highestScore');
        this.accuracyPercent = document.getElementById('accuracyPercent');

        // State
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.correct = 0;
        this.wrong = 0;
        this.userAnswers = [];
        this.timer = null;
        this.timeLeft = 20;
        this.streak = 0;
        this.isComplete = false;
        this.answered = new Set();
        this.skipped = new Set();
        this.soundEnabled = true;

        // Init
        this.populateCategories();
        this.loadStats();
        this.loadTheme();
        this.loadSoundState();
        this.setupEvents();
        this.createParticles();
        this.showScreen('homeScreen');
    }

    populateCategories() {
        const cats = Object.keys(questionBank);
        this.categorySelect.innerHTML = cats.map(c =>
            `<option value="${c}">${c}</option>`
        ).join('');
    }

    createParticles() {
        const container = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = 15 + Math.random() * 20 + 's';
            p.style.animationDelay = Math.random() * 20 + 's';
            p.style.width = 2 + Math.random() * 4 + 'px';
            p.style.height = p.style.width;
            container.appendChild(p);
        }
    }

    loadSoundState() {
        const saved = localStorage.getItem('soundEnabled');
        if (saved !== null) {
            this.soundEnabled = saved === 'true';
        }
        this.updateSoundButton();
    }

    updateSoundButton() {
        const btn = document.getElementById('soundToggle');
        btn.textContent = this.soundEnabled ? '🔊' : '🔇';
        btn.classList.toggle('muted', !this.soundEnabled);
    }

    setupEvents() {
        document.getElementById('soundToggle').addEventListener('click', () => {
            this.soundEnabled = !this.soundEnabled;
            localStorage.setItem('soundEnabled', this.soundEnabled);
            this.updateSoundButton();
        });

        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        document.getElementById('startQuizBtn').addEventListener('click', () => this.showScreen('setupScreen'));
        document.getElementById('startQuizBtn2').addEventListener('click', () => this.startQuiz());
        document.getElementById('backHomeBtn').addEventListener('click', () => this.showScreen('homeScreen'));
        document.getElementById('backToResultsBtn').addEventListener('click', () => this.showScreen('resultsScreen'));
        document.getElementById('homeBtn').addEventListener('click', () => this.goHome());
        document.getElementById('playAgainBtn').addEventListener('click', () => this.showScreen('setupScreen'));
        document.getElementById('reviewBtn').addEventListener('click', () => this.showReview());
        document.getElementById('prevBtn').addEventListener('click', () => this.navigate(-1));
        document.getElementById('nextBtn').addEventListener('click', () => this.navigate(1));
        document.getElementById('submitBtn').addEventListener('click', () => this.submitQuiz());

        document.addEventListener('keydown', (e) => {
            const map = { '1': 0, '2': 1, '3': 2, '4': 3 };
            if (e.key in map) {
                e.preventDefault();
                const btns = this.optionsContainer.querySelectorAll('.option-btn');
                if (btns[map[e.key]] && !btns[map[e.key]].classList.contains('disabled')) {
                    this.selectOption(map[e.key]);
                }
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                if (this.currentIndex === this.questions.length - 1) this.submitQuiz();
                else this.navigate(1);
            }
            if (e.key === 'ArrowLeft') { e.preventDefault();
                this.navigate(-1); }
            if (e.key === 'ArrowRight') { e.preventDefault();
                this.navigate(1); }
        });
    }

    showScreen(name) {
        const screens = ['homeScreen', 'setupScreen', 'quizScreen', 'resultsScreen', 'reviewScreen'];
        screens.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('active');
        });
        const target = document.getElementById(name);
        if (target) target.classList.add('active');
    }

    startQuiz() {
        const category = this.categorySelect.value;
        let questions = [...questionBank[category]];

        if (questions.length < 10) {
            alert('Not enough questions! Need at least 10.');
            return;
        }

        this.questions = this.shuffle(questions).slice(0, 10);
        this.questions = this.questions.map(q => ({
            question: q.q,
            options: [...q.o],
            answer: q.a
        }));

        this.questions = this.questions.map(q => ({
            ...q,
            options: this.shuffle(q.options)
        }));

        this.currentIndex = 0;
        this.score = 0;
        this.correct = 0;
        this.wrong = 0;
        this.userAnswers = new Array(10).fill(null);
        this.answered = new Set();
        this.skipped = new Set();
        this.streak = 0;
        this.isComplete = false;

        this.categoryDisplay.textContent = `📚 ${category}`;

        this.showScreen('quizScreen');
        this.renderQuestion();
        this.updateProgress();
        this.updatePalette();
        this.updateStreak();
        this.startTimer();
    }

    renderQuestion() {
        if (!this.questions || this.questions.length === 0 || this.currentIndex >= this.questions.length) {
            return;
        }

        const q = this.questions[this.currentIndex];
        if (!q || !q.options || q.options.length === 0) {
            return;
        }

        this.questionText.textContent = q.question;
        this.questionNumber.textContent = `Question ${this.currentIndex + 1} of ${this.questions.length}`;

        this.optionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];
        const userAns = this.userAnswers[this.currentIndex];
        const isLocked = userAns !== null || this.skipped.has(this.currentIndex);

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';

            const letterSpan = document.createElement('span');
            letterSpan.className = 'option-letter';
            letterSpan.textContent = letters[i];

            const textSpan = document.createElement('span');
            textSpan.className = 'option-text';
            textSpan.textContent = opt;

            btn.appendChild(letterSpan);
            btn.appendChild(textSpan);

            if (isLocked) {
                btn.classList.add('disabled');
                if (userAns === opt) btn.classList.add('selected');
                if (opt === q.answer) btn.classList.add('correct');
                if (userAns === opt && userAns !== q.answer) btn.classList.add('wrong');
            }

            btn.addEventListener('click', () => {
                if (this.userAnswers[this.currentIndex] !== null || this.skipped.has(this.currentIndex)) return;
                this.selectOption(i);
            });

            this.optionsContainer.appendChild(btn);
        });

        this.questionCounter.textContent = `${this.currentIndex + 1}/${this.questions.length}`;
        document.getElementById('prevBtn').disabled = this.currentIndex === 0;
        document.getElementById('nextBtn').disabled = this.currentIndex === this.questions.length - 1;

        this.updatePalette();

        if (isLocked) {
            if (this.timer) clearInterval(this.timer);
            this.timerText.textContent = this.skipped.has(this.currentIndex) ? '⏱️' : '✓';
        } else {
            this.resetTimer();
        }
    }

    selectOption(index) {
        if (!this.questions || this.questions.length === 0 || this.currentIndex >= this.questions.length) {
            return;
        }

        const q = this.questions[this.currentIndex];
        if (!q || !q.options || q.options.length === 0) {
            return;
        }

        if (this.userAnswers[this.currentIndex] !== null || this.skipped.has(this.currentIndex)) {
            return;
        }

        const answer = q.options[index];
        if (!answer) return;

        this.userAnswers[this.currentIndex] = answer;
        this.answered.add(this.currentIndex);

        if (answer === q.answer) {
            this.correct++;
            this.streak++;
            this.score += 1 + (this.streak >= 3 ? 2 : 0);
            this.playSound('correct');
            if (this.streak >= 3) this.showStreakBonus();
        } else {
            this.wrong++;
            this.streak = 0;
            this.playSound('wrong');
        }

        this.updateScore();
        this.updateStreak();
        this.renderQuestion();
        this.updateProgress();
        this.updatePalette();

        if (this.currentIndex < this.questions.length - 1) {
            setTimeout(() => {
                this.currentIndex++;
                this.renderQuestion();
                this.resetTimer();
            }, 500);
        }
    }

    navigate(dir) {
        const newIdx = this.currentIndex + dir;
        if (newIdx >= 0 && newIdx < this.questions.length) {
            this.currentIndex = newIdx;
            this.renderQuestion();
            this.resetTimer();
        }
    }

    startTimer() {
        this.timeLeft = 20;
        this.updateTimer();
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimer();
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.handleTimeout();
            }
        }, 1000);
    }

    resetTimer() {
        if (this.timer) clearInterval(this.timer);
        this.startTimer();
    }

    updateTimer() {
        this.timerText.textContent = `${this.timeLeft}s`;
        this.timerCircle.className = 'timer-ring';
        if (this.timeLeft <= 5) this.timerCircle.classList.add('danger');
        else if (this.timeLeft <= 10) this.timerCircle.classList.add('warning');
    }

    handleTimeout() {
        if (this.userAnswers[this.currentIndex] !== null || this.skipped.has(this.currentIndex)) return;
        this.skipped.add(this.currentIndex);
        this.wrong++;
        this.streak = 0;
        this.updateStreak();
        this.playSound('wrong');

        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            this.resetTimer();
        } else {
            this.submitQuiz();
        }
    }

    updateScore() {
        this.scoreDisplay.textContent = this.score;
    }

    updateProgress() {
        const answered = this.userAnswers.filter(a => a !== null).length;
        const progress = this.questions.length > 0 ? (answered / this.questions.length) * 100 : 0;
        this.progressBar.style.width = `${progress}%`;
    }

    updatePalette() {
        this.palette.innerHTML = '';
        for (let i = 0; i < this.questions.length; i++) {
            const item = document.createElement('div');
            item.className = 'palette-item';
            if (this.answered.has(i)) item.classList.add('answered');
            else if (this.skipped.has(i)) item.classList.add('skipped');
            if (i === this.currentIndex) item.classList.add('current');
            item.textContent = i + 1;
            item.addEventListener('click', () => {
                this.currentIndex = i;
                this.renderQuestion();
                this.resetTimer();
            });
            this.palette.appendChild(item);
        }
    }

    updateStreak() {
        this.streakCount.textContent = this.streak;
        this.streakDisplay.style.display = this.streak >= 2 ? 'block' : 'none';
    }

    showStreakBonus() {
        const el = document.createElement('div');
        el.className = 'streak-bonus';
        el.innerHTML = '🔥 +2 Bonus! <span>Streak of 3!</span>';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1800);
    }

    submitQuiz() {
        if (this.isComplete) return;
        clearInterval(this.timer);

        const answered = this.userAnswers.filter(a => a !== null).length;
        if (answered < this.questions.length) {
            if (!confirm(`You have ${this.questions.length - answered} unanswered. Submit anyway?`)) return;
        }

        // BUGFIX: any question left unanswered (skipped via navigation, never
        // timed-out, never clicked) was previously not counted as wrong at all,
        // which made correctCount + wrongCount NOT add up to total questions on
        // the results screen. We mark every remaining null answer as wrong here,
        // guarding against double-counting questions that already timed out.
        this.userAnswers.forEach((ans, i) => {
            if (ans === null && !this.skipped.has(i)) {
                this.skipped.add(i);
                this.wrong++;
            }
        });

        this.isComplete = true;
        this.playSound('complete');
        this.showResults();
    }

    showResults() {
        const accuracy = this.questions.length > 0 ? Math.round((this.correct / this.questions.length) * 100) : 0;

        this.animateNumber(this.finalScore, this.score);
        this.animateNumber(this.correctCount, this.correct);
        this.animateNumber(this.wrongCount, this.wrong);
        this.animateNumber(this.accuracyResult, accuracy, 900, '%');

        let badge = '🌟 Beginner';
        if (accuracy >= 90) badge = '🏆 Quiz Champion';
        else if (accuracy >= 80) badge = '🎯 Expert';
        else if (accuracy >= 70) badge = '📚 Intermediate';
        this.achievementBadge.textContent = badge;

        if (accuracy > 80) this.showConfetti();

        this.saveStats(this.score, accuracy);
        this.updateLeaderboard();
        this.showScreen('resultsScreen');
    }

    // Smoothly counts a number up from 0 to target for a nicer results reveal
    animateNumber(el, target, duration = 800, suffix = '') {
        const startTime = performance.now();
        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const value = Math.round(target * eased);
            el.textContent = `${value}${suffix}`;
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = `${target}${suffix}`;
        };
        requestAnimationFrame(step);
    }

    showConfetti() {
        const colors = ['#00f5d4', '#f72585', '#7209b7', '#f9c74f', '#4ecdc4', '#ff6b6b'];
        for (let i = 0; i < 60; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            const size = 6 + Math.random() * 10;
            piece.style.cssText = `
                    left: ${Math.random() * 100}%;
                    top: -10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    width: ${size}px;
                    height: ${size * (0.5 + Math.random())}px;
                    animation-duration: ${2 + Math.random() * 3}s;
                    animation-delay: ${Math.random() * 2}s;
                    border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                    transform: rotate(${Math.random() * 360}deg);
                `;
            this.confettiContainer.appendChild(piece);
            setTimeout(() => piece.remove(), 5000);
        }
    }

    // ============================================
    // FIXED: showReview() - Now shows both answers properly
    // ============================================
    // BUGFIX: answers in the question bank are sometimes literal tag strings
    // like "<br>", "<h1>", "<a>". Inserting those raw via innerHTML made the
    // browser parse them as actual HTML tags instead of showing the text,
    // which is why the review screen looked blank for those questions.
    escapeHtml(str) {
        if (str === null || str === undefined) return '';
        const div = document.createElement('div');
        div.textContent = String(str);
        return div.innerHTML;
    }

    showReview() {
        this.reviewContainer.innerHTML = '';
        this.questions.forEach((q, i) => {
            const userAns = this.userAnswers[i];
            const isCorrect = userAns === q.answer;
            const div = document.createElement('div');
            div.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
            div.style.animationDelay = `${i * 0.08}s`;

            // Format the answer display (escaped so literal tags show as text)
            const correctAnswer = this.escapeHtml(q.answer || 'Not specified');
            const userAnswer = this.escapeHtml(userAns || 'Not answered');
            const questionText = this.escapeHtml(q.question);

            div.innerHTML = `
                <div class="q">${i + 1}. ${questionText}</div>
                <div class="a">✅ Correct Answer: <strong>${correctAnswer}</strong></div>
                <div class="a">Your Answer: <strong>${userAnswer}</strong></div>
                <div class="status ${isCorrect ? 'correct' : 'wrong'}">
                    ${isCorrect ? '✅ Correct' : '❌ Wrong'}
                </div>
            `;
            this.reviewContainer.appendChild(div);
        });
        this.showScreen('reviewScreen');
    }

    loadStats() {
        const stats = JSON.parse(localStorage.getItem('quizStats')) || {
            totalQuizzes: 0,
            totalScore: 0,
            totalAccuracy: 0,
            highestScore: 0,
            quizCount: 0
        };
        this.totalQuizzes.textContent = stats.totalQuizzes || 0;
        this.highestScore.textContent = stats.highestScore || 0;
        this.accuracyPercent.textContent = stats.quizCount > 0 ?
            Math.round(stats.totalAccuracy / stats.quizCount) + '%' : '0%';
    }

    saveStats(score, accuracy) {
        const stats = JSON.parse(localStorage.getItem('quizStats')) || {
            totalQuizzes: 0,
            totalScore: 0,
            totalAccuracy: 0,
            highestScore: 0,
            quizCount: 0
        };
        stats.totalQuizzes++;
        stats.totalScore += score;
        stats.totalAccuracy += accuracy;
        stats.quizCount++;
        if (score > stats.highestScore) stats.highestScore = score;
        localStorage.setItem('quizStats', JSON.stringify(stats));
        this.loadStats();
    }

    updateLeaderboard() {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        if (this.isComplete && this.correct > 0) {
            leaderboard.push({
                name: 'Player',
                score: this.score,
                accuracy: Math.round((this.correct / this.questions.length) * 100)
            });
            leaderboard.sort((a, b) => b.score - a.score);
            if (leaderboard.length > 5) leaderboard.length = 5;
            localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        }
    }

    playSound(type) {
        if (!this.soundEnabled) return;

        try {
            const ctx = new(window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            if (type === 'correct') {
                osc.frequency.value = 523.25;
                osc.type = 'sine';
                gain.gain.value = 0.3;
                osc.start();
                setTimeout(() => { osc.frequency.value = 659.25; }, 100);
                setTimeout(() => { osc.frequency.value = 783.99; }, 200);
                setTimeout(() => osc.stop(), 300);
            } else if (type === 'wrong') {
                osc.frequency.value = 300;
                osc.type = 'sawtooth';
                gain.gain.value = 0.2;
                osc.start();
                setTimeout(() => osc.stop(), 300);
            } else if (type === 'complete') {
                [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
                    setTimeout(() => {
                        const o = ctx.createOscillator();
                        const g = ctx.createGain();
                        o.connect(g);
                        g.connect(ctx.destination);
                        o.frequency.value = f;
                        o.type = 'sine';
                        g.gain.value = 0.2;
                        o.start();
                        setTimeout(() => o.stop(), 200);
                    }, i * 150);
                });
            }
        } catch (e) {}
    }

    toggleTheme() {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        document.getElementById('themeToggle').textContent = next === 'dark' ? '☀️' : '🌙';
    }

    loadTheme() {
        const theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    goHome() {
        if (this.timer) clearInterval(this.timer);
        this.showScreen('homeScreen');
        this.loadStats();
        this.updateLeaderboard();
    }
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const app = new QuizApp();
    window.quizApp = app;
});