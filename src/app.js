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
            document.getElementById('button').click();
            let newNames = event.target.value.split();
            if(newNames[0] !== ''){
                newNames.forEach(name => {
                    participantNames.push(name);
                    let item = createListItem(name);
                    nameList.appendChild(item);
                });
            }
        }
    })

    giveATry.addEventListener('click', function(){
        if(participantNames.length === 0){
            alert('There is no entry');
        }else{
            let shuffledNames = shuffle(participantNames);
            for(let i = 1; i < shuffledNames.length; i++){
                (function(i, count){
                    
                    setTimeout(() => {
                        let rand = Math.floor(Math.random() * (shuffledNames.length));
                        display.innerHTML = shuffledNames[rand];

                        if(count === shuffledNames.length - 1){

                            if(!firstPosition.innerHTML){
                                firstPosition.innerHTML = shuffledNames[rand];
                                let index = participantNames.indexOf(shuffledNames[rand]);
                                participantNames.splice(index, 1);
                            }else if(!secondPosition.innerHTML){
                                secondPosition.innerHTML = shuffledNames[rand];
                                let index = participantNames.indexOf(shuffledNames[rand]);
                                participantNames.splice(index, 1);
                            }else if(!thirdPosition.innerHTML){
                                thirdPosition.innerHTML = shuffledNames[rand];
                                let index = participantNames.indexOf(shuffledNames[rand]);
                                participantNames.splice(index, 1);
                            }else {
                                alert ('Draw is completed succesfully. Congratulations to the winners!');
                            }
                        }

                    }, i);
                    
                    if(count === shuffledNames.length - 1){

                        if(!firstPosition.innerHTML){
                            firstPosition.innerHTML = shuffledNames[rand];
                            let index = participantNames.indexOf(shuffledNames[rand]);
                            participantNames.splice(index, 1);
                        }else if(!secondPosition.innerHTML){
                            secondPosition.innerHTML = shuffledNames[rand];
                            let index = participantNames.indexOf(shuffledNames[rand]);
                            participantNames.splice(index, 1);
                        }else if(!thirdPosition.innerHTML){
                            thirdPosition.innerHTML = shuffledNames[rand];
                            let index = participantNames.indexOf(shuffledNames[rand]);
                            participantNames.splice(index, 1);
                        }else {
                            alert ('Draw is completed succesfully. Congratulations to the winners!');
                        }
                    }

                })(i*100, i)
            }
        }
    });

    function createListItem(name){
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = name;
        return li;
    }

    function shuffle(array) {

        let shuffledArray = [...array];

        for(let i = shuffledArray.length - 1; i > 0; i--){
            let randomNumber = Math.floor(Math.random() * (i + 1));
            let temporary = shuffledArray[randomNumber];
            shuffledArray[randomNumber] = shuffledArray[i];
            shuffledArray[i] = temporary;
        }
        return shuffledArray;
    }


    
