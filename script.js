document.addEventListener('DOMContentLoaded', function() {
    const characterForm = document.getElementById('characterForm');
    const characterList = document.getElementById('characterList');
    const characterDetail = document.getElementById('characterDetail');
    const spellsDiv = document.getElementById('spells');
    const artifactsDiv = document.getElementById('artifacts');
    const addSpellButton = document.getElementById('addSpell');
    const addArtifactButton = document.getElementById('addArtifact');

    let characters = [];
    let spellCount = 0;
    let artifactCount = 0;

    function createSpellInput() {
        const spellDiv = document.createElement('div');
        spellDiv.classList.add('spell');
        spellDiv.innerHTML = `
            <label for="spellName${spellCount}">スペル名:</label>
            <input type="text" id="spellName${spellCount}" name="spellName${spellCount}" required>
            <label for="spellPower${spellCount}">スペルパワー:</label>
            <input type="number" id="spellPower${spellCount}" name="spellPower${spellCount}" required>
        `;
        spellsDiv.appendChild(spellDiv);
        spellCount++;
    }

    function createArtifactInput() {
        const artifactDiv = document.createElement('div');
        artifactDiv.classList.add('artifact');
        artifactDiv.innerHTML = `
            <label for="artifactName${artifactCount}">アーティファクト名:</label>
            <input type="text" id="artifactName${artifactCount}" name="artifactName${artifactCount}" required>
            <label for="artifactPower${artifactCount}">アーティファクトパワー:</label>
            <input type="number" id="artifactPower${artifactCount}" name="artifactPower${artifactCount}" required>
        `;
        artifactsDiv.appendChild(artifactDiv);
        artifactCount++;
    }

    addSpellButton.addEventListener('click', createSpellInput);
    addArtifactButton.addEventListener('click', createArtifactInput);

    characterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(characterForm);
        const newCharacter = {
            name: formData.get('name'),
            age: formData.get('age'),
            gender: formData.get('gender'),
            description: formData.get('description'),
            spells: [],
            artifacts: []
        };

        for (let i = 0; i < spellCount; i++) {
            newCharacter.spells.push({
                name: formData.get(`spellName${i}`),
                power: formData.get(`spellPower${i}`)
            });
        }

        for (let i = 0; i < artifactCount; i++) {
            newCharacter.artifacts.push({
                name: formData.get(`artifactName${i}`),
                power: formData.get(`artifactPower${i}`)
            });
        }

        characters.push(newCharacter);
        renderCharacterList();
        characterForm.reset();
        spellsDiv.innerHTML = '';
        artifactsDiv.innerHTML = '';
        spellCount = 0;
        artifactCount = 0;
    });

    function renderCharacterList() {
        characterList.innerHTML = '';
        characters.forEach((character, index) => {
            const characterTile = document.createElement('div');
            characterTile.classList.add('character-tile');
            characterTile.textContent = character.name;
            characterTile.addEventListener('click', () => renderCharacterDetail(index));
            characterList.appendChild(characterTile);
        });
    }

    function renderCharacterDetail(index) {
        const character = characters[index];
        characterDetail.innerHTML = `
            <div><strong>名前:</strong> ${character.name}</div>
            <div><strong>年齢:</strong> ${character.age}</div>
            <div><strong>性別:</strong> ${character.gender}</div>
            <div><strong>説明:</strong> ${character.description}</div>
            <div id="spellsDetail">
                <strong>スペル:</strong>
                <ul>
                    ${character.spells.map(spell => `<li>${spell.name} (パワー: ${spell.power})</li>`).join('')}
                </ul>
            </div>
            <div id="artifactsDetail">
                <strong>アーティファクト:</strong>
                <ul>
                    ${character.artifacts.map(artifact => `<li>${artifact.name} (パワー: ${artifact.power})</li>`).join('')}
                </ul>
            </div>
        `;
    }
});
