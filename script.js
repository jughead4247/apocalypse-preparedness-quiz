const questions = [

    // ========================================================
    // PHYSICAL
    // ========================================================

    {
        question: "How would you describe your current physical fitness?",
        category: "physical",
        answers: [
            ["I get tired from normal daily activities", 1],
            ["I'm not very active, but I manage", 2],
            ["I'm reasonably fit", 3],
            ["I'm physically fit and active", 4],
            ["I'm in excellent shape and train regularly", 5]
        ]
    },

    {
        question: "How far could you comfortably walk in a day if necessary?",
        category: "physical",
        answers: [
            ["Less than 2 km", 1],
            ["2–5 km", 2],
            ["5–10 km", 3],
            ["10–20 km", 4],
            ["More than 20 km", 5]
        ]
    },

    {
        question: "How well can you handle physically demanding work?",
        category: "physical",
        answers: [
            ["I struggle with physical work", 1],
            ["I can manage short periods", 2],
            ["I can handle moderate work", 3],
            ["I can work hard for several hours", 4],
            ["I can handle intense physical work for long periods", 5]
        ]
    },

    {
        question: "How confident are you in your ability to stay calm under physical stress?",
        category: "physical",
        answers: [
            ["I usually panic", 1],
            ["I become stressed very quickly", 2],
            ["It depends on the situation", 3],
            ["I generally stay composed", 4],
            ["I perform well under extreme pressure", 5]
        ]
    },

    {
        question: "How comfortable are you spending a long period without modern comforts?",
        category: "physical",
        answers: [
            ["I would struggle immediately", 1],
            ["A few days would be difficult", 2],
            ["I could manage for a while", 3],
            ["I could adapt fairly well", 4],
            ["I could live simply for a long time", 5]
        ]
    },


    // ========================================================
    // MEDICAL
    // ========================================================

    {
        question: "How much basic first-aid knowledge do you have?",
        category: "medical",
        answers: [
            ["Almost none", 1],
            ["Very little", 2],
            ["I know some basics", 3],
            ["I know how to handle common injuries", 4],
            ["I have strong first-aid knowledge or training", 5]
        ]
    },

    {
        question: "Could you properly treat a serious cut or bleeding injury?",
        category: "medical",
        answers: [
            ["I wouldn't know what to do", 1],
            ["I would probably panic", 2],
            ["I know some basic steps", 3],
            ["I could provide effective first aid", 4],
            ["I am confident handling serious bleeding", 5]
        ]
    },

    {
        question: "How prepared are you with basic medicines and medical supplies?",
        category: "medical",
        answers: [
            ["I have almost nothing", 1],
            ["Only a few basic medicines", 2],
            ["I have a small first-aid kit", 3],
            ["I have a well-equipped kit", 4],
            ["I have extensive medical supplies and knowledge", 5]
        ]
    },

    {
        question: "If someone with you became seriously injured, how useful could you be?",
        category: "medical",
        answers: [
            ["I would not know what to do", 1],
            ["I could only call for help", 2],
            ["I could provide basic assistance", 3],
            ["I could handle many emergency situations", 4],
            ["I could provide advanced medical assistance", 5]
        ]
    },

    {
        question: "How well do you understand basic hygiene and disease prevention?",
        category: "medical",
        answers: [
            ["I have never really thought about it", 1],
            ["I know a few basics", 2],
            ["I understand the main principles", 3],
            ["I am careful about sanitation", 4],
            ["I understand hygiene, sanitation and disease prevention very well", 5]
        ]
    },


    // ========================================================
    // RESOURCES
    // ========================================================

    {
        question: "How much drinking water do you currently have available at home?",
        category: "resources",
        answers: [
            ["Less than one day's supply", 1],
            ["About 1–2 days", 2],
            ["Several days", 3],
            ["At least a couple of weeks", 4],
            ["A large long-term supply", 5]
        ]
    },

    {
        question: "How much food could you live on without going shopping?",
        category: "resources",
        answers: [
            ["Less than a few days", 1],
            ["About a week", 2],
            ["Several weeks", 3],
            ["A few months", 4],
            ["Many months or longer", 5]
        ]
    },

    {
        question: "How prepared are you for losing electricity?",
        category: "resources",
        answers: [
            ["I depend completely on electricity", 1],
            ["I have almost no backup", 2],
            ["I have a few useful alternatives", 3],
            ["I have several backup options", 4],
            ["I could comfortably operate without electricity for a long time", 5]
        ]
    },

    {
        question: "How much useful emergency equipment do you already own?",
        category: "resources",
        answers: [
            ["Almost none", 1],
            ["A few basic items", 2],
            ["Some useful equipment", 3],
            ["A well-stocked emergency kit", 4],
            ["Extensive emergency equipment", 5]
        ]
    },

    {
        question: "If shops suddenly closed, how long could your household function?",
        category: "resources",
        answers: [
            ["Less than a week", 1],
            ["About a week", 2],
            ["Several weeks", 3],
            ["A few months", 4],
            ["Six months or more", 5]
        ]
    },


    // ========================================================
    // PRACTICAL SKILLS
    // ========================================================

    {
        question: "How good are you at repairing broken household items?",
        category: "practical",
        answers: [
            ["I usually need someone else", 1],
            ["I can do very simple repairs", 2],
            ["I can handle basic repairs", 3],
            ["I'm good with tools and repairs", 4],
            ["I can repair or improvise many things", 5]
        ]
    },

    {
        question: "How comfortable are you using hand tools?",
        category: "practical",
        answers: [
            ["I rarely use them", 1],
            ["I know a few basics", 2],
            ["I can use common tools", 3],
            ["I'm comfortable with most tools", 4],
            ["I'm highly skilled with tools", 5]
        ]
    },

    {
        question: "Could you cook a nutritious meal without electricity?",
        category: "practical",
        answers: [
            ["I wouldn't know how", 1],
            ["It would be difficult", 2],
            ["I could manage something simple", 3],
            ["I could prepare several meals", 4],
            ["I could cook efficiently using alternative methods", 5]
        ]
    },

    {
        question: "How capable are you at finding practical solutions when something goes wrong?",
        category: "practical",
        answers: [
            ["I usually need someone to solve it", 1],
            ["I struggle to improvise", 2],
            ["I can sometimes figure things out", 3],
            ["I'm good at solving problems", 4],
            ["I'm very good at improvising with limited resources", 5]
        ]
    },

    {
        question: "How much practical knowledge could you teach another survivor?",
        category: "practical",
        answers: [
            ["Very little", 1],
            ["A few basic things", 2],
            ["Several useful skills", 3],
            ["Many practical skills", 4],
            ["I have a broad range of useful skills", 5]
        ]
    },


    // ========================================================
    // SOCIAL & ADAPTABILITY
    // ========================================================

    {
        question: "If the normal world disappeared tomorrow, how quickly could you adapt?",
        category: "social",
        answers: [
            ["I would be completely lost", 1],
            ["It would take me a long time", 2],
            ["I could adapt gradually", 3],
            ["I could adapt fairly quickly", 4],
            ["I adapt extremely well to changing situations", 5]
        ]
    },

    {
        question: "How well do you work with other people during a crisis?",
        category: "social",
        answers: [
            ["I prefer to be completely alone", 1],
            ["I find teamwork difficult", 2],
            ["I can cooperate when necessary", 3],
            ["I'm a good team member", 4],
            ["I naturally help organize and support a group", 5]
        ]
    },

    {
        question: "How good are you at making difficult decisions under pressure?",
        category: "social",
        answers: [
            ["I freeze", 1],
            ["I struggle badly", 2],
            ["I can decide with some difficulty", 3],
            ["I make reasonable decisions", 4],
            ["I can make difficult decisions quickly and calmly", 5]
        ]
    },

    {
        question: "How useful would your current friends, family or community be during a major crisis?",
        category: "social",
        answers: [
            ["I would have almost nobody to rely on", 1],
            ["Only one or two people", 2],
            ["A small support network", 3],
            ["A strong support network", 4],
            ["A large group of capable people I could rely on", 5]
        ]
    },

    {
        question: "How willing are you to learn completely new skills if necessary?",
        category: "social",
        answers: [
            ["I don't like learning unfamiliar things", 1],
            ["I would learn only if forced", 2],
            ["I would try", 3],
            ["I enjoy learning useful skills", 4],
            ["I actively seek new skills and knowledge", 5]
        ]
    },


    // ========================================================
    // ENVIRONMENT
    // ========================================================

    {
        question: "How suitable is your current home for staying safe during a major disaster?",
        category: "environment",
        answers: [
            ["It offers almost no protection", 1],
            ["It provides limited protection", 2],
            ["It is reasonably secure", 3],
            ["It is quite secure", 4],
            ["It is highly secure and defensible", 5]
        ]
    },

    {
        question: "How close are you to reliable sources of water?",
        category: "environment",
        answers: [
            ["I have no reliable source nearby", 1],
            ["Water would be difficult to obtain", 2],
            ["I have some options", 3],
            ["Reliable water is reasonably accessible", 4],
            ["I have a dependable water source available", 5]
        ]
    },

    {
        question: "How isolated or exposed is your current location during a major crisis?",
        category: "environment",
        answers: [
            ["Extremely exposed and crowded", 1],
            ["Quite exposed", 2],
            ["Moderately exposed", 3],
            ["Relatively safe and manageable", 4],
            ["Well positioned away from major threats", 5]
        ]
    },

    {
        question: "How well could your current location support you if you couldn't leave for several weeks?",
        category: "environment",
        answers: [
            ["I could not manage for long", 1],
            ["Only for a short period", 2],
            ["I could manage for a few weeks", 3],
            ["I could remain there comfortably for months", 4],
            ["My location could support long-term self-sufficiency", 5]
        ]
    },

    {
        question: "How familiar are you with the area around where you live?",
        category: "environment",
        answers: [
            ["I barely know the area", 1],
            ["I know only the main roads", 2],
            ["I know my neighborhood reasonably well", 3],
            ["I know many routes and useful locations", 4],
            ["I know the area extremely well, including alternate routes and resources", 5]
        ]
    }

];


// ============================================================
// ELEMENTS
// ============================================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const homeInfo = document.getElementById("home-info");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const shareBtn = document.getElementById("share-btn");
const challengeBtn = document.getElementById("challenge-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");

const resultTitle = document.getElementById("result-title");
const finalScore = document.getElementById("final-score");
const resultDescription = document.getElementById("result-description");
const rightNowDescription = document.getElementById("right-now-description");

const physicalScore = document.getElementById("physical-score");
const medicalScore = document.getElementById("medical-score");
const resourcesScore = document.getElementById("resources-score");
const practicalScore = document.getElementById("practical-score");
const socialScore = document.getElementById("social-score");
const environmentScore = document.getElementById("environment-score");

const strengthArea = document.getElementById("strength-area");
const weaknessArea = document.getElementById("weakness-area");


// ============================================================
// QUIZ VARIABLES
// ============================================================

let currentQuestion = 0;
let totalScore = 0;

let categoryScores = {
    physical: 0,
    medical: 0,
    resources: 0,
    practical: 0,
    social: 0,
    environment: 0
};


// ============================================================
// CATEGORY NAMES
// ============================================================

const categoryNames = {
    physical: "💪 Physical",
    medical: "🩺 Medical",
    resources: "💧 Resources",
    practical: "🛠️ Practical Skills",
    social: "👥 Social & Adaptability",
    environment: "🏠 Environment"
};


// ============================================================
// START QUIZ
// ============================================================

function startQuiz() {

    currentQuestion = 0;
    totalScore = 0;

    categoryScores = {
        physical: 0,
        medical: 0,
        resources: 0,
        practical: 0,
        social: 0,
        environment: 0
    };

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    homeInfo.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = q.question;

    answersContainer.innerHTML = "";

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    q.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer[0];

        button.addEventListener("click", () => {
            selectAnswer(answer[1]);
        });

        answersContainer.appendChild(button);
    });
}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(points) {

    const category = questions[currentQuestion].category;

    totalScore += points;
    categoryScores[category] += points;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();

    }
}


// ============================================================
// FINISH QUIZ
// ============================================================

function finishQuiz() {

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    progressBar.style.width = "100%";

    const maximumScore = questions.length * 5;

    const percentage =
        Math.round((totalScore / maximumScore) * 100);

    finalScore.textContent = percentage;

    setResult(percentage);

    updateCategoryScores();

    updateStrengthWeakness();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// RESULT LEVEL
// ============================================================

function setResult(score) {

    if (score <= 20) {

        resultTitle.textContent = "BARELY PREPARED";

        resultDescription.textContent =
            "You currently have very few advantages for a sudden apocalypse. Your biggest priority would be building basic supplies, practical skills and a reliable emergency plan.";

        rightNowDescription.textContent =
            "If everything changed right now, you would probably be forced to improvise quickly. Your first priority would be finding safety, water, food and reliable people.";

    }

    else if (score <= 40) {

        resultTitle.textContent = "UNDERPREPARED";

        resultDescription.textContent =
            "You have some useful advantages, but several important weaknesses could become serious problems during a prolonged crisis.";

        rightNowDescription.textContent =
            "You could probably manage the initial shock, but shortages and loss of normal services would expose your weak areas fairly quickly.";

    }

    else if (score <= 60) {

        resultTitle.textContent = "REASONABLY PREPARED";

        resultDescription.textContent =
            "You have a decent foundation. You possess several useful advantages, although there is still plenty of room to improve your preparedness.";

        rightNowDescription.textContent =
            "You would have a reasonable chance of handling the initial disruption, especially if you can stay calm and use your existing resources wisely.";

    }

    else if (score <= 80) {

        resultTitle.textContent = "WELL PREPARED";

        resultDescription.textContent =
            "You have built a strong collection of skills, resources and advantages. You would be better positioned than most people if normal life suddenly disappeared.";

        rightNowDescription.textContent =
            "You would enter the crisis with several important advantages. Your biggest challenge would be maintaining those advantages as the situation continues.";

    }

    else {

        resultTitle.textContent = "HIGHLY PREPARED";

        resultDescription.textContent =
            "You have an impressive combination of skills, resources, adaptability and environmental advantages. You are about as prepared as an ordinary person can reasonably be.";

        rightNowDescription.textContent =
            "If the apocalypse started right now, you would have a strong starting position. Your biggest challenge would be avoiding unnecessary risks and protecting your resources.";

    }
}


// ============================================================
// CATEGORY SCORES
// ============================================================

function updateCategoryScores() {

    const maxCategoryScore = 25;

    physicalScore.textContent =
        `${Math.round((categoryScores.physical / maxCategoryScore) * 100)}%`;

    medicalScore.textContent =
        `${Math.round((categoryScores.medical / maxCategoryScore) * 100)}%`;

    resourcesScore.textContent =
        `${Math.round((categoryScores.resources / maxCategoryScore) * 100)}%`;

    practicalScore.textContent =
        `${Math.round((categoryScores.practical / maxCategoryScore) * 100)}%`;

    socialScore.textContent =
        `${Math.round((categoryScores.social / maxCategoryScore) * 100)}%`;

    environmentScore.textContent =
        `${Math.round((categoryScores.environment / maxCategoryScore) * 100)}%`;
}


// ============================================================
// STRONGEST / WEAKEST AREA
// ============================================================

function updateStrengthWeakness() {

    const categories = Object.keys(categoryScores);

    let strongest = categories[0];
    let weakest = categories[0];

    categories.forEach(category => {

        if (categoryScores[category] > categoryScores[strongest]) {
            strongest = category;
        }

        if (categoryScores[category] < categoryScores[weakest]) {
            weakest = category;
        }

    });

    strengthArea.textContent =
        categoryNames[strongest];

    weaknessArea.textContent =
        categoryNames[weakest];
}


// ============================================================
// RESTART
// ============================================================

function restartQuiz() {

    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    homeInfo.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// SHARE RESULT
// ============================================================

function shareResult() {

    const score = finalScore.textContent;
    const title = resultTitle.textContent;

    const shareText =
        `I scored ${score}% on the How Prepared Are You for the Apocalypse? quiz! I am "${title}". Can you beat my score?`;

    const fullText =
        `${shareText}\n\n${window.location.href}`;

    // Use native sharing when available
    if (navigator.share) {

        navigator.share({
            title: "How Prepared Are You for the Apocalypse?",
            text: shareText,
            url: window.location.href
        }).catch(() => {});

        return;
    }

    // Clipboard API when available
    if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(fullText)
            .then(() => {
                alert("Your result has been copied to the clipboard!");
            })
            .catch(() => {
                fallbackCopy(fullText);
            });

        return;
    }

    // Older browser / HTTP fallback
    fallbackCopy(fullText);
}


// ============================================================
// CHALLENGE FRIENDS
// ============================================================

function challengeFriends() {

    const score = finalScore.textContent;

    const challengeText =
        `I scored ${score}% on the Apocalypse Preparedness Quiz. 🧟\n\nHow prepared are YOU?\n\n${window.location.href}`;

    // Use native sharing when available
    if (navigator.share) {

        navigator.share({
            title: "Apocalypse Preparedness Challenge",
            text: challengeText,
            url: window.location.href
        }).catch(() => {});

        return;
    }

    // Clipboard API when available
    if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(challengeText)
            .then(() => {
                alert("Challenge message copied! Send it to your friends.");
            })
            .catch(() => {
                fallbackCopy(challengeText);
            });

        return;
    }

    // Older browser / HTTP fallback
    fallbackCopy(challengeText);
}


// ============================================================
// COPY FALLBACK
// ============================================================

function fallbackCopy(text) {

    const textarea = document.createElement("textarea");

    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    try {

        const successful =
            document.execCommand("copy");

        if (successful) {

            alert("Copied! You can now paste and share it with your friends.");

        } else {

            alert(text);

        }

    } catch (error) {

        alert(text);

    }

    document.body.removeChild(textarea);
}


// ============================================================
// BUTTON EVENTS
// ============================================================

startBtn.addEventListener("click", startQuiz);

restartBtn.addEventListener("click", restartQuiz);

shareBtn.addEventListener("click", shareResult);

challengeBtn.addEventListener("click", challengeFriends);
