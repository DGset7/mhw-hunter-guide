let currentScreen='home';let currentFilter='all';let currentMonster=null;
let favorites=JSON.parse(localStorage.getItem('mhw_favorites')||'[]');

function navigateTo(screenName,data){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    const screen=document.getElementById('screen-'+screenName);
    if(screen){screen.classList.add('active');currentScreen=screenName}
    switch(screenName){
        case'bestiary':renderMonsterList();break;
        case'monster-detail':renderMonsterDetail(data);break;
        case'favorites':renderFavorites();break;
    }
    window.scrollTo(0,0);
}

function renderMonsterList(){
    const list=document.getElementById('monster-list');
    const searchTerm=document.getElementById('search-input').value.toLowerCase();
    let filtered=MONSTERS_DB;
    if(currentFilter!=='all'){filtered=filtered.filter(m=>m.type===currentFilter)}
    if(searchTerm){filtered=filtered.filter(m=>m.name.toLowerCase().includes(searchTerm)||m.species.toLowerCase().includes(searchTerm)||m.type.toLowerCase().includes(searchTerm))}
    if(filtered.length===0){list.innerHTML='<div class="empty-state"><span class="empty-icon">🔍</span><p>Nenhum monstro encontrado</p><small>Tente outro termo ou filtro</small></div>';return}
    list.innerHTML=filtered.map(monster=>`
        <div class="monster-card" onclick="navigateTo('monster-detail',${monster.id})">
            <span class="monster-emoji">${monster.emoji}</span>
            <div class="monster-info">
                <h3>${monster.name}</h3>
                <div class="monster-type">${monster.type} • ${monster.species}</div>
                <div class="monster-elements">${getTopWeaknesses(monster.weaknesses)}</div>
            </div>
            <span class="arrow">›</span>
        </div>
    `).join('');
}

function getTopWeaknesses(w){
    const names={fire:'Fogo',water:'Água',thunder:'Trovão',ice:'Gelo',dragon:'Dragão'};
    return Object.entries(w).filter(([k])=>['fire','water','thunder','ice','dragon'].includes(k)).filter(([,v])=>v>=2).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k])=>`<span class="element-badge ${k}">${names[k]}</span>`).join('');
}

function setFilter(filter,btn){
    currentFilter=filter;
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderMonsterList();
}

function filterMonsters(){renderMonsterList()}

function renderMonsterDetail(id){
    const monster=MONSTERS_DB.find(m=>m.id===id);
    if(!monster)return;
    currentMonster=monster;
    document.getElementById('detail-monster-name').textContent=monster.name;
    updateFavButton();
    const c=document.getElementById('monster-detail-content');
    c.innerHTML=`
        <div class="detail-header">
            <span class="detail-emoji">${monster.emoji}</span>
            <div class="detail-type">${monster.type} • ${monster.species}</div>
        </div>
        <div class="detail-section">
            <h3>📋 Descrição</h3>
            <p class="strategy-text">${monster.description}</p>
        </div>
        <div class="detail-section">
            <h3>⚔️ Fraquezas Elementais</h3>
            <table class="weakness-table">
                ${wRow('🔥 Fogo',monster.weaknesses.fire)}
                ${wRow('💧 Água',monster.weaknesses.water)}
                ${wRow('⚡ Trovão',monster.weaknesses.thunder)}
                ${wRow('❄️ Gelo',monster.weaknesses.ice)}
                ${wRow('🐉 Dragão',monster.weaknesses.dragon)}
            </table>
        </div>
        <div class="detail-section">
            <h3>🧪 Fraquezas de Status</h3>
            <table class="weakness-table">
                ${wRow('☠️ Veneno',monster.weaknesses.poison)}
                ${wRow('⚡ Paralisia',monster.weaknesses.paralysis)}
                ${wRow('😴 Sono',monster.weaknesses.sleep)}
                ${wRow('💥 Explosão',monster.weaknesses.blast)}
            </table>
        </div>
        <div class="detail-section">
            <h3>🔨 Partes Quebráveis</h3>
            <div class="parts-list">${monster.breakableParts.map(p=>`<span class="part-tag">${p}</span>`).join('')}</div>
        </div>
        <div class="detail-section">
            <h3>📍 Locais de Aparição</h3>
            <div class="locations-list">${monster.locations.map(l=>`<span class="location-tag">${l}</span>`).join('')}</div>
        </div>
        <div class="detail-section">
            <h3>🎯 Estratégia de Caça</h3>
            <ul class="strategy-text">${monster.strategy.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
    `;
}

function wRow(label,value){
    const stars='★'.repeat(value)+'☆'.repeat(3-value);
    let c='none';if(value===3)c='high';else if(value===2)c='medium';else if(value===1)c='low';
    return`<tr><td>${label}</td><td><span class="stars ${c}">${stars}</span></td></tr>`;
}

function toggleFavorite(){
    if(!currentMonster)return;
    const id=currentMonster.id;const i=favorites.indexOf(id);
    if(i>-1)favorites.splice(i,1);else favorites.push(id);
    localStorage.setItem('mhw_favorites',JSON.stringify(favorites));
    updateFavButton();
}

function updateFavButton(){
    const btn=document.getElementById('fav-btn');if(!currentMonster)return;
    if(favorites.includes(currentMonster.id)){btn.textContent='★';btn.style.color='#ffd700'}
    else{btn.textContent='☆';btn.style.color='#8a8a9a'}
}

function renderFavorites(){
    const list=document.getElementById('favorites-list');
    const noFav=document.getElementById('no-favorites');
    const favMonsters=MONSTERS_DB.filter(m=>favorites.includes(m.id));
    if(favMonsters.length===0){list.innerHTML='';noFav.style.display='block';return}
    noFav.style.display='none';
    list.innerHTML=favMonsters.map(monster=>`
        <div class="monster-card" onclick="navigateTo('monster-detail',${monster.id})">
            <span class="monster-emoji">${monster.emoji}</span>
            <div class="monster-info">
                <h3>${monster.name}</h3>
                <div class="monster-type">${monster.type} • ${monster.species}</div>
                <div class="monster-elements">${getTopWeaknesses(monster.weaknesses)}</div>
            </div>
            <span class="arrow">›</span>
        </div>
    `).join('');
}

if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('service-worker.js').then(r=>console.log('SW ok:',r.scope)).catch(e=>console.log('SW erro:',e));
    });
}

document.addEventListener('DOMContentLoaded',()=>{navigateTo('home')});
