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
            <li
