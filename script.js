document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const character = {
        name: document.getElementById('name').value,
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
        spells: document.getElementById('spells').value,
        artifacts: document.getElementById('artifacts').value,
        scenarios: document.getElementById('scenarios').value,
        notes: document.getElementById('notes').value,
    };

    addCharacterToList(character);
    document.getElementById('characterForm').reset();
});

function addCharacterToList(character) {
    const characterList = document.getElementById('characterList');
    const characterDiv = document.createElement('div');
    characterDiv.className = 'character';

    characterDiv.innerHTML = `
        <h3>${character.name}</h3>
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
        <p>所持している呪文: ${character.spells}</p>
        <p>所持しているアーティファクト: ${character.artifacts}</p>
        <p>参加したシナリオ: ${character.scenarios}</p>
        <p>メモ欄: ${character.notes}</p>
    `;

    characterList.appendChild(characterDiv);
}
