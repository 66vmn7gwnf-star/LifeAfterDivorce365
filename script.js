const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");

menuButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => siteNav.classList.remove("open"));
});

const topicData = {
    identity: {
        number: "01",
        title: "Identity",
        text: "Divorce can change the way you see yourself. Give yourself room to discover what matters to you independently of the relationship you left.",
        points: [
            "What parts of yourself do you want to reconnect with?",
            "What do you want your days to feel like?",
            "What is something you've always wanted to try?"
        ]
    },
    money: {
        number: "02",
        title: "Money",
        text: "A new chapter can also mean a new financial picture. Start by understanding where you are rather than trying to solve everything at once.",
        points: [
            "What does your current monthly picture look like?",
            "Which financial questions need a professional?",
            "What is one financial goal for the next 90 days?"
        ]
    },
    home: {
        number: "03",
        title: "Home",
        text: "Your environment can become part of your reset. Whether you stay, move, or simply rearrange, create spaces that feel intentional and comfortable.",
        points: [
            "What would make your home feel more like yours?",
            "What do you want to remove, change, or create?",
            "What small change could make this week better?"
        ]
    },
    relationships: {
        number: "04",
        title: "Relationships",
        text: "Your support system may change after divorce. Focus on relationships that are healthy, respectful, and aligned with the life you're building.",
        points: [
            "Who makes you feel supported and understood?",
            "Where do you need a healthier boundary?",
            "Who would you like to reconnect with?"
        ]
    },
    future: {
        number: "05",
        title: "Future",
        text: "The future doesn't have to be a five-year plan. Start by identifying what you want more of, then choose one direction to explore.",
        points: [
            "What are you curious about?",
            "What would you try if failure wasn't the concern?",
            "What is one goal worth pursuing this year?"
        ]
    }
};

const topicButtons = document.querySelectorAll(".topic");
const detail = document.getElementById("topicDetail");

topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        topicButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const data = topicData[button.dataset.topic];
        detail.innerHTML = `
            <span>${data.number}</span>
            <h3>${data.title}</h3>
            <p>${data.text}</p>
            <ul>${data.points.map(point => `<li>${point}</li>`).join("")}</ul>
        `;
    });
});

const reflections = [
    "What part of your old life are you ready to leave behind?",
    "What is one thing you want to learn about yourself?",
    "Who do you want to become in the next year?",
    "What would make this week feel like progress?",
    "What is something you can give yourself permission to enjoy again?"
];

let reflectionIndex = 0;
const reflectionButton = document.getElementById("reflectionButton");
const dayNumber = document.querySelector(".day-number strong");
const reflectionTitle = document.querySelector(".daily-copy h2");

reflectionButton.addEventListener("click", () => {
    reflectionIndex = (reflectionIndex + 1) % reflections.length;
    const words = reflections[reflectionIndex].split(" ");
    const midpoint = Math.ceil(words.length / 2);
    const first = words.slice(0, midpoint).join(" ");
    const second = words.slice(midpoint).join(" ");

    reflectionTitle.innerHTML = `${first}<br><em>${second}</em>`;
    dayNumber.textContent = String(reflectionIndex + 1).padStart(3, "0");
});

document.getElementById("startForm").addEventListener("submit", event => {
    event.preventDefault();
    const toast = document.getElementById("toast");
    toast.textContent = "Your first reflection is ready for you. (Prototype)";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3500);
    event.target.reset();
});
