
   
    var section = document.querySelector('section');
        
    var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
    var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
    var superTowns = request.response;
        showTowns(superTowns);
    }
    
    
    function showTowns(jsonObj) {
        var superTowns = jsonObj['superTowns'];
      
        for (var i = 0; i < superTowns.length; i++) {
            
            if (i==2) {
                continue;
            }
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myList = document.createElement('ul');

                myH2.textContent = superTowns[i].name;
                myPara1.textContent = 'motto ' + superTowns[i].motto;
                myPara2.textContent = 'yearFounded' + superTowns[i].year;
                myPara3.textContent = 'currentPopulation' + superTowns[i].population;
                myPara4.textContent = 'averaheRainfall ' + superTowns[i].rain;
                myPara5.textContent = 'showEvents:';
            
               
        
            var showEvents = superTowns[i].events;
            for (var j = 0; j < showEvents.length; j++) {
                var listItem = document.createElement('li');
                    listItem.textContent = showEvents[j];
                    myList.appendChild(listItem);
    }

                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myPara4);
                myArticle.appendChild(myList);

    section.appendChild(myArticle);
    }
    

}
    
