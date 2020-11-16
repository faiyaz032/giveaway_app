    //TODO: Extract Text from Text area and store into a array
    //TODO: Render the names Extracted from text area
    //TODO: Shuffle the names array to get random names
    //TODO: Pick a random winner, Remove him/her name from the array
    //TODO: Display winners name

    const inp = document.getElementById('inp');
    const nameList = document.getElementById('name-list');
    const display = document.getElementById('display');
    const giveATry = document.getElementById('give-a-try');
    const firstPosition = document.getElementById('first-position');
    const secondPosition = document.getElementById('second-position');
    const thirdPosition = document.getElementById('third-position');

    const participantNames = [];

    inp.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            let newNames = event.target.value.split(', ');
            if(newNames[0] !== ''){
                newNames.forEach(name => {
                    participantNames.push(name);
                    let item = createListItem(name);
                    nameList.appendChild(item);
                });
            }
        }
    })

    function createListItem(name){
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = name;
        return li;
    }

    
