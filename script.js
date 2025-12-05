const courses = [
    { id: 1, title: "Intro to AI Coding", desc: "Learn to prompt like a pro.", lessons: ["Basics", "Context", "Refining"], completed: false },
    { id: 2, title: "Web Prototypes", desc: "Build MVPs in minutes.", lessons: ["HTML Structure", "CSS Grid", "JS Events"], completed: false },
    { id: 3, title: "GitHub Mastery", desc: "Version control essentials.", lessons: ["Commits", "Branches", "Pull Requests"], completed: false }
];

const listEl = document.getElementById('courses-grid');
const detailEl = document.getElementById('course-detail-view');
const contentEl = document.getElementById('course-content');

function renderList() {
    listEl.innerHTML = courses.map(c => `
        <div class="card" onclick="viewCourse(${c.id})">
            <span class="tag ${c.completed ? 'done' : ''}">${c.completed ? 'Completed' : 'Active'}</span>
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
        </div>
    `).join('');
}

window.viewCourse = (id) => {
    const c = courses.find(x => x.id === id);
    document.getElementById('course-list-view').classList.add('hidden');
    detailEl.classList.remove('hidden');
    
    const btnText = c.completed ? "Completed" : "Mark Complete";
    const btnClass = c.completed ? "action-btn done" : "action-btn";
    
    contentEl.innerHTML = `
        <h1>${c.title}</h1>
        <p>${c.desc}</p>
        <ul>${c.lessons.map(l => `<li>${l}</li>`).join('')}</ul>
        <button class="${btnClass}" onclick="markDone(${c.id})">${btnText}</button>
    `;
};

window.markDone = (id) => {
    const c = courses.find(x => x.id === id);
    c.completed = true;
    viewCourse(id); // Refresh view
};

document.getElementById('back-btn').onclick = () => {
    detailEl.classList.add('hidden');
    document.getElementById('course-list-view').classList.remove('hidden');
    renderList();
};

renderList();