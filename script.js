// =============================================
// OYUN MƏLUMATLARİ
// =============================================
const allGames = [
    { title: "Among Us", category: "all", score: "7/10", opinion: "Mobilə gəlmiş yaxşı oyunlardan biri olmuşdu." },
    { title: "Apex Legends Mobile", category: "all ali-favorites", score: "9/10", opinion: "Bağlanmamışdan əvvəl çox oynayırdım. Heyif ki, bağlandı." },
    { title: "Archero 1", category: "all", score: "4/10", opinion: "Əgər bikarsınızsa ola bilər." },
    { title: "Archero 2", category: "all", score: "5/10", opinion: "Əgər həqiqətən bikarsınızsa ola bilər." },
    { title: "Ant Colony: Wild Forest Game", category: "all", score: "6/10", opinion: "Sadəcə qarışqa simulator." },
    { title: "Aestheta", category: "all", score: "2/10", opinion: "Clash Royale çakmasıdı." },
    { title: "Ammo Fever: Tower Gun Defense", category: "all", score: "4/10", opinion: "Bikarçılıqdan oynamaq olar." },
    { title: "Archers Online: PvP", category: "all", score: "5/10", opinion: "Əslində maraqlı oyundu." },

    { title: "Battle Time", category: "all ali-favorites top10", score: "10/10", opinion: "Uşaqlığımın fav oyunu." },
    { title: "Battle Time 2", category: "all ali-favorites top10", score: "10/10", opinion: "Uşaqlığımın fav oyununun davamı." },
    { title: "Brawl Stars", category: "all active top10 ali-favorites", score: "8/10", opinion: "Oyunu hər nə qədər bəyənsəmdə bir yaxşı güncəlləmə gətirə bilmirlər." },
    { title: "Bad 2 Bad: Apocalypse", category: "all", score: "7/10", opinion: "Yaxşı mənada qəribə oyun idi. Çoxda oynanılası gəlmədi." },
    { title: "Brotato", category: "all ali-favorites", score: "8/10", opinion: "Arada komputerdə sıxılanda oynayıram. Mobile olanıda yaxşıdı." },
    { title: "Block Blast!", category: "all", score: "7/10", opinion: "Bu oyun niyə hər kəsin telefonunda var?" },
    { title: "Bag Fight", category: "all", score: "3/10", opinion: "Yənii oynanıla bilər." },
    { title: "Boom Arena", category: "all", score: "1/10", opinion: "Sözüm yoxdu." },
    { title: "Bus Frenzy - Traffic Jam", category: "all", score: "4/10", opinion: "Sıxıntıdan oynamaq olar." },

    { title: "Clash Of Clans", category: "all top10 ali-favorites active", score: "9/10", opinion: "Arada girib oynayıram amma əvvəlki kimi sarmır." },
    { title: "Combat Master Mobile FPS", category: "all", score: "5/10", opinion: "Komputerdə olanı əladı, amma bunu bəyənmədim." },
    { title: "Call Of Duty: Mobile", category: "all", score: "8/10", opinion: "Çox sarmasada əyləncəlidi." },
    { title: "Clutch The Speed", category: "all", score: "5/10", opinion: "Bidənə türk qaqaş düzəltmişdi, köməklik üçün yükləmişdim." },
    { title: "Color Block Jam", category: "all", score: "2/10", opinion: "Yox o deyil." },
    { title: "Color Clash", category: "all", score: "7/10", opinion: "Əyləncəli oyun idi." },
    { title: "Craft Runner", category: "all", score: "7/10", opinion: "Bidənə türk qaqaş düzəltmişdi, köməklik üçün yükləmişdim." },
    { title: "Clash Royale", category: "all top10 ali-favorites active", score: "9/10", opinion: "Eh yəni güncəlləmələrlə biraz yaxşı gedirlərdə hələ mənim istədiyim evrim gəlmir. :/" },

    { title: "Earth Inc. Tycoon Idle Miner", category: "all", score: "5/10", opinion: "İdarə edər nə yalan deyim." },

    { title: "Fortres Of Gears", category: "all", score: "4/10", opinion: "Sözüm yoxdu. O vaxtı elə belə oynayırdım." },

    { title: "Mobile Legends Bang Bang", category: "all top10 ali-favorites", score: "10/10", opinion: "Əsəb xəstəsi etsədə yaxşı oyundu. Oynamanızı tövsiyə edirəm." },
    { title: "Pubg Mobile", category: "all ali-favorites", score: "8/10", opinion: "Əvvəl bütün günü oynayırdım(Corona zamanı). İndi güncəlləmələrlə oyunu oynanmaz hala salıblar." },
    { title: "Minecraft", category: "all top10 ali-favorites active", score: "10/10", opinion: "Uşaqlığım bunla keçdi. Deyəcək söz tapa bilmirəm oynayın, oylatdırın." },
    { title: "Valorant Mobile", category: "all active", score: "8/10", opinion: "Birazcıq çətindi. Odakı teldə maksimum bu qədər olur. Ha birdəki hələki Çin dilindədi." },
    { title: "Hay Day", category: "all", score: "8/10", opinion: "Əslində biri üçün yükləmişdim əvvəl, çox oynayırdım. İndi arada girirəm odaki kefim istəyəndə." },
    { title: "Rise Of Kingsdom", category: "all", score: "5/10", opinion: "O vaxtı çox bikarıydım, yükləmişdim." },
    { title: "20 Minutes Till Dawn", category: "all", score: "6/10", opinion: "Əslində yaxşı oyunduda. Mənlik deyil, yəni davamlı oynamaq olmur." },
    { title: "Genshin Impact", category: "all", score: "2/10", opinion: "Deyəcək sözüm yoxdu." },
    { title: "UNO!", category: "all", score: "5/10", opinion: "Reklamlar olmasa oynamaq olar." },
    { title: "Last Day On Earth: Survival", category: "all", score: "7/10", opinion: "Gözlədiyim kimi çıxmasada yaxşı oyundu." },
    { title: "Grow Empire", category: "all", score: "6/10", opinion: "O vaxtı hiyləlisini yükləmişdim. Amma belədə idarə edər." },
    { title: "Grow Castle", category: "all ali-favorites", score: "9/10", opinion: "Əvvəl dəli kimi oynayırdımda indi mənası yoxdu." },
    { title: "Leauge Of Legends: Wild Rift", category: "all", score: "4/10", opinion: "Təzə videolarını gördüm. Bir MLBB qədər etmir." },
    { title: "Into Dead 2", category: "all", score: "6/10", opinion: "Qaçmağı sevirsənsə tam sənlik." },
    { title: "Inventory Merge Combat", category: "all", score: "5/10", opinion: "Eh normal bir oyundu." },
    { title: "PvZ 2", category: "all ali-favorites active top10", score: "9/10", opinion: "Əlbəttə bu oyun olmazsa olmaz." },
    { title: "Laser Bounce Puzzle", category: "all", score: "5/10", opinion: "Buda normal vaxt keçirməlik bir oyundu." },
    { title: "Lumber Empire: Idle Wood Inc", category: "all", score: "4/10", opinion: "Vaxt keçirməlik sıxıcı bir oyun." },
    { title: "Map Game", category: "all ali-favorites", score: "6/10", opinion: "İnteraktiv xəritə oyunudu, ölkə tapırsan sadəcə." },
    { title: "Pickle Pete: Survivor", category: "all ali-favorites", score: "8/10", opinion: "Əvvəl dəli kimi uşaqlarnan yarışırdıq." },
    { title: "Royal Match", category: "all ali-favorites", score: "7/10", opinion: "Reklamsız olması əladı." },
    { title: "Pill Fortress", category: "all", score: "5/10", opinion: "Eh, yəni idarə edər." },
    { title: "Hocus.", category: "all", score: "6/10", opinion: "Beyin yakmalı oyun." },

    { title: "Sea Battle 2: Warship Online", category: "all", score: "8/10", opinion: "Yaxşı oyundu, oynanıla bilər." },
    { title: "Slither.io", category: "all", score: "8/10", opinion: "O vaxtın gözəl oyunlarından biriydi." },
    { title: "Stick War: Saga", category: "all ali-favorites active", score: "8/10", opinion: "Bunun ikinci oyunuda əlaydı, buda eyniylə." },
    { title: "Stick War: Legacy", category: "all ali-favorites top10", score: "9/10", opinion: "Uşaqkən oynayırdım. Tövsiyyə edirəm." },

    { title: "We Are Warriors!", category: "all", score: "6/10", opinion: "Şirin oyundu." },
    { title: "Warriors Market Mayhem VIP", category: "all", score: "4/10", opinion: "Nə qədər oyun var oynamışam." },
];

// =============================================
// STATE
// =============================================
let currentCategory = 'all';
let currentSort     = 'az';

// =============================================
// DOM ELEMENTLƏR
// =============================================
const gameList        = document.getElementById('game-list');
const searchInput     = document.getElementById('search-input');
const navButtons      = document.querySelectorAll('.nav-button');
const filterButtons   = document.querySelectorAll('.filter-button');
const settingsButton  = document.getElementById('settings-button');
const settingsMenu    = document.getElementById('settings-menu');
const themeButtons    = document.querySelectorAll('.theme-button');
const scrollToTop     = document.getElementById('scroll-to-top');
const themeToggle     = document.getElementById('theme-toggle');
const totalCount      = document.getElementById('total-count');
const avgScore        = document.getElementById('avg-score');
const topCount        = document.getElementById('top-count');

// =============================================
// ARXİ FON PARÇACİQLARI
// =============================================
function createParticles() {
    const container = document.getElementById('bg-particles');
    if (!container) return;
    const count = 18;
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.classList.add('particle');
        const size = Math.random() * 6 + 2;
        el.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            animation-duration: ${Math.random() * 18 + 12}s;
            animation-delay: ${Math.random() * -20}s;
        `;
        container.appendChild(el);
    }
}

// =============================================
// STAT COUNTER ANİMASİYASI
// =============================================
function animateCount(el, target, decimals = 0) {
    const dur = 900;
    const start = performance.now();
    function step(now) {
        const progress = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = (target * ease).toFixed(decimals);
        el.textContent = val;
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

function updateStats(filtered) {
    const total = filtered.length;
    const scores = filtered.map(g => parseInt(g.score.split('/')[0]));
    const avg = total ? (scores.reduce((a, b) => a + b, 0) / total) : 0;
    const top = allGames.filter(g => g.category.includes('top10')).length;

    animateCount(totalCount, total);
    animateCount(avgScore, avg, 1);
    animateCount(topCount, top);
}

// =============================================
// FİLTRLƏ & SIRALA
// =============================================
function updateGameList() {
    const term = searchInput.value.toLowerCase().trim();

    let filtered = allGames.filter(g =>
        g.category.includes(currentCategory) &&
        g.title.toLowerCase().includes(term)
    );

    filtered.sort((a, b) => {
        const sA = parseInt(a.score);
        const sB = parseInt(b.score);
        const tA = a.title.toUpperCase();
        const tB = b.title.toUpperCase();

        if (currentSort === 'az')         return tA < tB ? -1 : tA > tB ? 1 : 0;
        if (currentSort === 'za')         return tA > tB ? -1 : tA < tB ? 1 : 0;
        if (currentSort === 'score-high') return sB !== sA ? sB - sA : (tA < tB ? -1 : 1);
        return 0;
    });

    renderGames(filtered);
    updateStats(filtered);
}

// =============================================
// RENDER
// =============================================
function renderGames(games) {
    gameList.innerHTML = '';

    if (!games.length) {
        gameList.innerHTML = `<p class="placeholder-text">Axtarışa uyğun oyun tapılmadı 🔍</p>`;
        return;
    }

    const frag = document.createDocumentFragment();

    games.forEach((game, i) => {
        const score = parseInt(game.score.split('/')[0]);
        const item  = document.createElement('div');
        item.classList.add('game-item');
        item.setAttribute('data-score', score);
        item.style.animationDelay = `${Math.min(i * 0.03, 0.6)}s`;

        item.innerHTML = `
            <span class="game-number">${i + 1}.</span>
            <span class="game-title">${escapeHtml(game.title)}</span>
            <span class="game-score">${game.score}</span>
            <span class="game-opinion">${escapeHtml(game.opinion)}</span>
        `;
        frag.appendChild(item);
    });

    gameList.appendChild(frag);
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// =============================================
// TEMA SİSTEMİ
// =============================================
const THEMES = ['default', 'red-black', 'orange-dark', 'purple-night'];
const THEME_ICONS = { 'default': '🌙', 'red-black': '🔴', 'orange-dark': '🟠', 'purple-night': '🟣' };

function applyTheme(name) {
    document.body.classList.remove(...THEMES.map(t => `theme-${t}`));
    if (name !== 'default') document.body.classList.add(`theme-${name}`);
    localStorage.setItem('selectedTheme', name);
    if (themeToggle) themeToggle.textContent = THEME_ICONS[name] || '🌙';
}

function cycleTheme() {
    const cur = localStorage.getItem('selectedTheme') || 'default';
    const idx = THEMES.indexOf(cur);
    applyTheme(THEMES[(idx + 1) % THEMES.length]);
}

// =============================================
// PAYLAŞMA
// =============================================
function shareSite() {
    const data = {
        title: 'Əlinin Oyunları',
        text: 'Əlinin oynadığı bütün oyunların siyahısı burada.',
        url: window.location.href
    };
    if (navigator.share) {
        navigator.share(data).catch(() => {});
    } else {
        navigator.clipboard?.writeText(window.location.href)
            .then(() => showToast('🔗 Link kopyalandı!'))
            .catch(() => showToast('Paylaşma dəstəklənmir.'));
    }
}

// =============================================
// TOAST BİLDİRİŞİ
// =============================================
function showToast(msg) {
    const old = document.querySelector('.toast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    toast.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: var(--primary); color: var(--bg-deep);
        padding: 10px 20px; border-radius: 10px; font-weight: 700;
        font-family: 'Nunito', sans-serif; z-index: 9999;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        animation: fadeSlideIn 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// =============================================
// SCROLL TO TOP
// =============================================
window.addEventListener('scroll', () => {
    scrollToTop?.classList.toggle('scroll-to-top-hidden', window.scrollY <= 300);
});

scrollToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================================
// PARAMETRLƏR MENYUSU
// =============================================
function toggleSettings() {
    settingsMenu.classList.toggle('settings-menu-hidden');
}

document.addEventListener('click', (e) => {
    if (!settingsButton.contains(e.target) && !settingsMenu.contains(e.target)) {
        settingsMenu.classList.add('settings-menu-hidden');
    }
});

// =============================================
// YÜKLƏNMƏ EKRANI
// =============================================
function hideLoader() {
    const loader = document.getElementById('loading-screen');
    if (!loader) return;
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 650);
    }, 700);
}

// =============================================
// BAŞLATMA
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Tema
    applyTheme(localStorage.getItem('selectedTheme') || 'default');

    // Arxa fon
    createParticles();

    // Nav düymələri
    navButtons.forEach(btn => btn.addEventListener('click', e => {
        navButtons.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.getAttribute('data-category');
        updateGameList();
    }));

    // Sıralama düymələri
    filterButtons.forEach(btn => btn.addEventListener('click', e => {
        filterButtons.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentSort = e.currentTarget.getAttribute('data-sort');
        updateGameList();
    }));

    // Axtarış
    searchInput.addEventListener('input', updateGameList);

    // Parametrlər
    settingsButton.addEventListener('click', e => {
        e.stopPropagation();
        toggleSettings();
    });

    themeButtons.forEach(btn => btn.addEventListener('click', () => {
        applyTheme(btn.getAttribute('data-theme'));
        settingsMenu.classList.add('settings-menu-hidden');
    }));

    // Tema toggle
    themeToggle?.addEventListener('click', cycleTheme);

    // Paylaşma
    document.getElementById('share-button-id')?.addEventListener('click', shareSite);

    // İlk render
    updateGameList();

    // Loader
    hideLoader();
});
