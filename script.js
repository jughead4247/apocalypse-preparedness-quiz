// ============================================================
// APOCALYPSE PREPAREDNESS QUIZ
// ============================================================


// ============================================================
// QUESTIONS
// ============================================================

const questions = [

    // ========================================================
    // ENVIRONMENT
    // ========================================================

    {
        question: "Where do you currently live?",
        category: "environment",
        answers: [
            ["🏙️ Large city / urban area", 2],
            ["🏢 Apartment or high-rise building", 2],
            ["🏘️ Small town / suburban area", 3],
            ["🌾 Rural area / farm / isolated property", 5]
        ]
    },


    // ========================================================
    // PHYSICAL
    // ========================================================

    {
        question: "What is your age group?",
        category: "physical",
        answers: [
            ["0–15", 2],
            ["16–25", 4],
            ["26–55", 5],
            ["56 and above", 3]
        ]
    },

    {
        question: "What is your primary mode of transportation?",
        category: "physical",
        answers: [
            ["🚗 Car", 5],
            ["🏍️ Motorcycle / scooter", 4],
            ["🚲 Bicycle", 3],
            ["🚌 Public transportation / walking", 2]
        ]
    },


    // ========================================================
    // RESOURCES
    // ========================================================

    {
        question: "What type of weapons or defensive tools are available in your home?",
        category: "resources",
        answers: [
            ["🔪 Knife / screwdriver or other basic hand tools", 3],
            ["🔪 Machete", 4],
            ["🪓 Axe", 4],
            ["🔫 Firearm", 3]
        ]
    },


    // ========================================================
    // PROFILE ONLY
    // ========================================================

    {
        question: "If you had to choose one defensive option during an apocalypse, which would you prefer?",
        category: "profile",
        answers: [
            ["🔫 Gun", 0],
            ["🔪 Knife", 0],
            ["🔫🔪 Both", 0],
            ["❌ Neither", 0]
        ]
    },


    // ========================================================
    // MEDICAL
    // ========================================================

    {
        question: "How well do you understand medicines and basic medical care?",
        category: "medical",
        answers: [
            ["🩺 Pretty well — I have good knowledge of medicines and basic medical care", 5],
            ["💊 I can identify and use some common/basic medicines", 3],
            ["🤷 I know very little about medicines", 2],
            ["❓ I have essentially no knowledge about medicines", 1]
        ]
    },

    {
        question: "How well can you handle and treat a wound in an emergency?",
        category: "medical",
        answers: [
            ["🩹 Yes — I can treat most basic wounds myself", 5],
            ["🩹 Somewhat — I can handle minor wounds but may need help with more serious injuries", 4],
            ["🤝 I can assist someone else, but I'm not confident treating a wound myself", 2],
            ["😰 I struggle around blood and may faint or become unable to help", 1]
        ]
    },


    // ========================================================
    // PROFILE ONLY
    // ========================================================

    {
        question: "How do you feel in enclosed or confined spaces?",
        category: "profile",
        answers: [
            ["😌 Comfortable — I have no problem being in enclosed spaces", 0],
            ["🙂 Slightly uncomfortable, but I can manage", 0],
            ["😰 Very uncomfortable — I prefer open spaces", 0],
            ["😨 Extremely uncomfortable — I may panic or feel unable to stay inside", 0]
        ]
    },


    // ========================================================
    // MEDICAL
    // ========================================================

    {
        question: "Are you currently taking any medication on a regular basis?",
        category: "medical",
        answers: [
            ["💊 Yes — I take regular medication", 3],
            ["💊 Yes — I occasionally need medication", 4],
            ["❌ No — I don't currently take any medication", 5],
            ["🤷 Prefer not to say / unsure", 3]
        ]
    },

    {
        question: "Do you have any known allergies?",
        category: "medical",
        answers: [
            ["🤧 Yes — I have one known allergy", 4],
            ["🤧 Yes — I have multiple known allergies", 3],
            ["✅ No — I don't have any known allergies", 5],
            ["🤷 I'm not sure / I've never been tested", 4]
        ]
    },


    // ========================================================
    // PHYSICAL
    // ========================================================

    {
        question: "How physically durable are you when you need to travel on foot?",
        category: "physical",
        answers: [
            ["🥾 I can walk for most of the day if necessary", 5],
            ["🚶 I can comfortably walk several kilometers", 4],
            ["🚶‍♂️ I can walk short distances, but I prefer using transportation", 2],
            ["🪑 I have limited walking endurance and would struggle with long distances", 1]
        ]
    },

    {
        question: "How would you describe your running stamina?",
        category: "physical",
        answers: [
            ["🏃 High — I can run for a long distance without stopping", 5],
            ["🏃 Moderate — I can run a few kilometers before needing a break", 4],
            ["🏃 Low — I can run only short distances", 2],
            ["😮‍💨 Very low — I struggle to run or avoid running whenever possible", 1]
        ]
    },


    // ========================================================
    // RESOURCES
    // ========================================================

    {
        question: "What type of flashlight or portable light do you have available?",
        category: "resources",
        answers: [
            ["📱 Phone flashlight only", 2],
            ["🔋 Battery-powered flashlight", 4],
            ["🔌 Rechargeable / USB-charging flashlight", 4],
            ["☀️ Solar-powered light / flashlight", 5]
        ]
    },


    // ========================================================
    // PRACTICAL
    // ========================================================

    {
        question: "How well can you cook for yourself?",
        category: "practical",
        answers: [
            ["👨‍🍳 I can prepare a wide variety of meals from basic ingredients", 5],
            ["🍳 I can cook simple everyday meals", 4],
            ["🥪 I can prepare only very basic food", 2],
            ["❌ I don't know how to cook", 1]
        ]
    },

    {
        question: "How well can you start a fire without modern appliances?",
        category: "practical",
        answers: [
            ["🔥 I can start a fire using matches, a lighter, or similar methods", 4],
            ["🪨 I can start a fire using a fire starter, flint, or similar tools", 5],
            ["🔥 I can start a fire, but only with some assistance", 3],
            ["🥶 I would freeze up and probably be unable to start one in an emergency", 1]
        ]
    },

    // ========================================================
    // PROFILE ONLY
    // ========================================================

    {
        question: "How well could you function without your smartphone during an emergency?",
        category: "profile",
        answers: [
            ["📵 Easily — I can function normally without it", 0],
            ["🙂 Mostly — I can manage most important tasks without it", 0],
            ["😕 With difficulty — I rely on it for many things", 0],
            ["😰 Not well — I would struggle to function without it", 0]
        ]
    },

    {
        question: "What type of footwear do you usually wear?",
        category: "resources",
        answers: [
            ["🥾 Sturdy boots / work boots", 5],
            ["👟 Sports shoes / sneakers", 4],
            ["🩴 Sandals / flip-flops", 2],
            ["👞 Formal shoes / other footwear", 2]
        ]
    },

    {
        question: "What type of clothing do you usually wear on a daily basis?",
        category: "resources",
        answers: [
            ["👕 Comfortable, durable everyday clothes", 5],
            ["👖 Jeans / trousers with a regular shirt or T-shirt", 4],
            ["🩳 Light, loose clothing", 3],
            ["👔 Formal or office-style clothing", 2]
        ]
    },


    // ========================================================
    // RESOURCES
    // ========================================================

    {
        question: "How much water do you currently have stored at home?",
        category: "resources",
        answers: [
            ["💧 Enough for several weeks", 5],
            ["💧 Enough for several days", 4],
            ["💧 Only a small amount, such as a few bottles", 2],
            ["❌ No stored water beyond what I normally use", 1]
        ]
    },

    {
        question: "What is your home's main source of electricity?",
        category: "resources",
        answers: [
            ["⚡ Electricity grid / power line", 2],
            ["☀️ Solar power system", 4],
            ["⛽ Generator", 4],
            ["🔋 A combination of two or more sources / other backup system", 5]
        ]
    },


    // ========================================================
    // PROFILE ONLY
    // ========================================================

    {
        question: "In a major emergency, would you prefer to survive alone or with other people?",
        category: "profile",
        answers: [
            ["👤 Alone — I work better independently", 0],
            ["👥 Small group — I prefer a few trusted people", 0],
            ["👨‍👩‍👧‍👦 Large group — I feel safer with more people around", 0],
            ["🤷 No strong preference — it would depend on the situation", 0]
        ]
    },


    // ========================================================
    // PRACTICAL
    // ========================================================

    {
        question: "What best describes your current occupation or background?",
        category: "practical",
        answers: [
            ["🔧 Skilled / blue-collar work — construction, mechanic, technician, trades, etc.", 5],
            ["💻 Office / computer / IT-based work", 3],
            ["🛡️ Defence / police / security / emergency services", 5],
            ["🌾 Farming / agriculture / outdoor work", 5],
            ["🛒 Retail / sales / customer service", 2],
            ["🎓 Student", 3],
            ["👔 Other professional / specialized work", 4],
            ["❌ Not currently working / retired / other", 2]
        ]
    },


    // ========================================================
    // PROFILE ONLY
    // ========================================================

    {
        question: "How comfortable are you around animals?",
        category: "profile",
        answers: [
            ["🐕 I'm comfortable with common pets like dogs and cats", 0],
            ["🐦 I'm comfortable with birds and smaller animals, but not necessarily larger animals", 0],
            ["🐾 I'm comfortable around almost all types of animals", 0],
            ["😨 I prefer to stay away from animals as much as possible", 0]
        ]
    },


    // ========================================================
    // PHYSICAL
    // ========================================================

    {
        question: "How well can you climb when necessary?",
        category: "physical",
        answers: [
            ["🪜 I can comfortably climb stairs and basic ladders", 3],
            ["🌳 I can climb trees, pipes, fences, or similar structures", 4],
            ["🧗 I can handle difficult or uneven terrain and challenging climbs", 5],
            ["🛗 I prefer lifts and avoid climbing whenever possible", 1]
        ]
    },


    // ========================================================
    // PROFILE ONLY
    // ========================================================

    {
        question: "Which environment do you generally prefer spending your time in?",
        category: "profile",
        answers: [
            ["🏠 Mostly indoors — I feel more comfortable inside", 0],
            ["🌳 Mostly outdoors — I enjoy spending time outside", 0],
            ["⚖️ Both — I'm equally comfortable indoors and outdoors", 0],
            ["🤷 It depends on the situation — I don't have a strong preference", 0]
        ]
    },

    {
        question: "What best describes your current living situation?",
        category: "profile",
        answers: [
            ["👤 I live alone", 0],
            ["👫 I live with a partner / spouse", 0],
            ["👨‍👩‍👧‍👦 I live with family", 0],
            ["🏠 I live with roommates / other people", 0],
            ["🏠 Other / prefer not to say", 0]
        ]
    },

    {
        question: "How comfortable are you caring for children or babies during an emergency?",
        category: "profile",
        answers: [
            ["👶 Very comfortable — I can confidently care for and handle children or babies", 0],
            ["🙂 Somewhat comfortable — I can help with basic needs but may need guidance", 0],
            ["😐 I would try to avoid responsibility for children or babies if possible", 0],
            ["😣 I strongly dislike handling or caring for children or babies", 0]
        ]
    },


    // ========================================================
    // PRACTICAL
    // ========================================================

    {
        question: "How good are you at understanding and following directions?",
        category: "practical",
        answers: [
            ["🧭 Very good — I can quickly understand and follow detailed directions", 5],
            ["👍 Good — I can follow normal directions without much difficulty", 4],
            ["🤔 Average — I may need directions repeated or explained", 2],
            ["😕 Poor — I often have difficulty understanding or remembering directions", 1]
        ]
    },

    {
        question: "How well do you understand farming or gardening?",
        category: "practical",
        answers: [
            ["🌾 Very well — I can grow and maintain crops or a vegetable garden independently", 5],
            ["🌱 Fairly well — I understand basic planting, watering, and plant care", 3],
            ["🌿 A little — I have some practical experience but would need guidance", 2],
            ["❌ Not at all — I have little or no experience with farming or gardening", 1]
        ]
    },

    {
        question: "How do you usually make sure your drinking water is safe?",
        category: "practical",
        answers: [
            ["💧 I filter or purify it before drinking", 5],
            ["🔥 I boil water before drinking when necessary", 5],
            ["🧴 I mainly rely on packaged/bottled drinking water", 3],
            ["🚰 I usually drink tap water directly without additional treatment", 1]
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

    q.answers.forEach((answer) => {

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

    if (categoryScores[category] !== undefined) {
        categoryScores[category] += points;
    }

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


    // Calculate maximum possible score from
    // scoring questions only.

    let maximumScore = 0;

    questions.forEach(question => {

        question.answers.forEach(answer => {

            if (answer[1] > maximumScore) {
                maximumScore += answer[1];
            }

        });

    });


    // The above would count all answer choices.
    // We need the maximum answer for each question instead.

    maximumScore = questions.reduce((total, question) => {

        const maxAnswer = Math.max(
            ...question.answers.map(answer => answer[1])
        );

        return total + maxAnswer;

    }, 0);


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

    const categories = [
        "physical",
        "medical",
        "resources",
        "practical",
        "social",
        "environment"
    ];

    categories.forEach(category => {

        const categoryQuestions =
            questions.filter(q => q.category === category);

        if (categoryQuestions.length === 0) {
            return;
        }

        const maximumCategoryScore =
            categoryQuestions.reduce((total, question) => {

                const maxAnswer = Math.max(
                    ...question.answers.map(answer => answer[1])
                );

                return total + maxAnswer;

            }, 0);

        if (maximumCategoryScore === 0) {

            if (category === "physical") physicalScore.textContent = "—";
            if (category === "medical") medicalScore.textContent = "—";
            if (category === "resources") resourcesScore.textContent = "—";
            if (category === "practical") practicalScore.textContent = "—";
            if (category === "social") socialScore.textContent = "—";
            if (category === "environment") environmentScore.textContent = "—";

            return;
        }

        const percentage =
            Math.round(
                (categoryScores[category] / maximumCategoryScore) * 100
            );

        if (category === "physical") {
            physicalScore.textContent = `${percentage}%`;
        }

        if (category === "medical") {
            medicalScore.textContent = `${percentage}%`;
        }

        if (category === "resources") {
            resourcesScore.textContent = `${percentage}%`;
        }

        if (category === "practical") {
            practicalScore.textContent = `${percentage}%`;
        }

        if (category === "social") {
            socialScore.textContent = "Profile";
        }

        if (category === "environment") {
            environmentScore.textContent = `${percentage}%`;
        }

    });
}


// ============================================================
// STRONGEST / WEAKEST AREA
// ============================================================

function updateStrengthWeakness() {

    const categories = [
        "physical",
        "medical",
        "resources",
        "practical",
        "environment"
    ];

    let strongest = categories[0];
    let weakest = categories[0];

    categories.forEach(category => {

        if (categoryScores[category] >
            categoryScores[strongest]) {

            strongest = category;
        }

        if (categoryScores[category] <
            categoryScores[weakest]) {

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


    if (navigator.share) {

        navigator.share({
            title: "How Prepared Are You for the Apocalypse?",
            text: shareText,
            url: window.location.href
        }).catch(() => {});

        return;
    }


    if (navigator.clipboard &&
        navigator.clipboard.writeText) {

        navigator.clipboard.writeText(fullText)
            .then(() => {

                alert(
                    "Your result has been copied to the clipboard!"
                );

            })
            .catch(() => {

                fallbackCopy(fullText);

            });

        return;
    }


    fallbackCopy(fullText);
}


// ============================================================
// CHALLENGE FRIENDS
// ============================================================

function challengeFriends() {

    const score = finalScore.textContent;

    const challengeText =
        `I scored ${score}% on the Apocalypse Preparedness Quiz. ⚠️\n\nHow prepared are YOU?\n\n${window.location.href}`;


    if (navigator.share) {

        navigator.share({
            title: "Apocalypse Preparedness Challenge",
            text: challengeText,
            url: window.location.href
        }).catch(() => {});

        return;
    }


    if (navigator.clipboard &&
        navigator.clipboard.writeText) {

        navigator.clipboard.writeText(challengeText)
            .then(() => {

                alert(
                    "Challenge message copied! Send it to your friends."
                );

            })
            .catch(() => {

                fallbackCopy(challengeText);

            });

        return;
    }


    fallbackCopy(challengeText);
}


// ============================================================
// COPY FALLBACK
// ============================================================

function fallbackCopy(text) {

    const textarea =
        document.createElement("textarea");

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

            alert(
                "Copied! You can now paste and share it with your friends."
            );

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
