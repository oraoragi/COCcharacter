document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const character = {
        name: document.getElementById('name').value,
        furigana: document.getElementById('furigana').value,
        occupation: document.getElementById('occupation').value,
        nationality: document.getElementById('nationality').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        abilities: {
            STR: document.getElementById('str').value,
            CON: document.getElementById('con').value,
            POW: document.getElementById('pow').value,
            DEX: document.getElementById('dex').value,
            APP: document.getElementById('app').value,
            SIZ: document.getElementById('siz').value,
            INT: document.getElementById('int').value,
            EDU: document.getElementById('edu').value,
        },
        skills: document.getElementById('skills').value,
        spells: getSpells(),
        artifacts: getArtifacts(),
        scenarios: document.getElementById('scenarios').value,
        notes: document.getElementById('notes').value,
    };

    addCharacterToList(character);
    document.getElementById('characterForm').reset();
    document.getElementById('spellsContainer').innerHTML = '';
    document.getElementById('artifactsContainer').innerHTML = '';
});

function getSpells() {
    const spells = [];
    const spellElements = document.querySelectorAll('.spell');
    spellElements.forEach(spell => {
        const name = spell.querySelector('.spellName').value;
        const effect = spell.querySelector('.spellEffect').value;
        if (name && effect) {
            spells.push({ name, effect });
        }
    });
    return spells;
}

function getArtifacts() {
    const artifacts = [];
    const artifactElements = document.querySelectorAll('.artifact');
    artifactElements.forEach(artifact => {
        const name = artifact.querySelector('.artifactName').value;
        const effect = artifact.querySelector('.artifactEffect').value;
        if (name && effect) {
            artifacts.push({ name, effect });
        }
    });
    return artifacts;
}

function addCharacterToList(character) {
    const characterList = document.getElementById('characterList');
    const characterDiv = document.createElement('div');
    characterDiv.className = 'character';

    characterDiv.innerHTML = `
        <h3>${character.name} (${character.furigana})</h3>
        <p>職業: ${character.occupation}</p>
        <p>国籍: ${character.nationality}</p>
        <p>年齢: ${character.age}</p>
        <p>性別: ${character.gender}</p>
        <h4>能力値</h4>
        <ul>
            <li>STR: ${character.abilities.STR}</li>
            <li>CON: ${character.abilities.CON}</li>
            <li>POW: ${character.abilities.POW}</li>
            <li>DEX: ${character.abilities.DEX}</li>
            <li>APP: ${character.abilities.APP}</li>
            <li>SIZ: ${character.abilities.SIZ}</li>
            <li>INT: ${character.abilities.INT}</li>
            <li>EDU: ${character.abilities.EDU}</li>
        </ul>
        <p>技能値: ${character.skills}</p>
        <h4>所持している呪文</h4>
        <ul>${character.spells.map(spell => `<li>${spell.name}: ${spell.effect}</li>`).join('')}</ul>
        <h4>所持しているアーティファクト</h4>
        <ul>${character.artifacts.map(artifact => `<li>${artifact.name}: ${artifact.effect}</li>`).join('')}</ul>
        <p>参加したシナリオ: ${character.scenarios}</p>
        <p>メモ欄: ${character.notes}</p>
    `;

    characterList.appendChild(characterDiv);
}

// 呪文追加ボタンの処理
document.getElementById('addSpell').addEventListener('click', function() {
    const spellContainer = document.createElement('div');
    spellContainer.className = 'spell';
    spellContainer.innerHTML = `
        <label for="spellName">名前:</label>
        <input type="text" class="spellName" required>
        <label for="spellEffect">効果:</label>
        <input type="text" class="spellEffect" required>
    `;
    document.getElementById('spellsContainer').appendChild(spellContainer);
});

// アーティファクト追加ボタンの処理
document.getElementById('addArtifact').addEventListener('click', function() {
    const artifactContainer = document.createElement('div');
    artifactContainer.className = 'artifact';
    artifactContainer.innerHTML = `
        <label for="artifactName">名前:</label>
        <input type="text" class="artifactName" required>
        <label for="artifactEffect">効果:</label>
        <input type="text" class="artifactEffect" required>
    `;
    document.getElementById('artifactsContainer').appendChild(artifactContainer);
});

       
