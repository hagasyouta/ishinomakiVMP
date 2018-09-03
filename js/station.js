(function(){
    'use strict';
    var currentNum = 0;

    var mask = document.getElementById('mask');
    var back = document.getElementById('back');

    // Menu's icons

    var btn_station = document.getElementById('btn_station');
    var btn_cityHall = document.getElementById('btn_cityHall');

    // 市役所
    var cityHallArray = [
        'img/pic/station/cityhall/cityhall1.jpg',
        'img/pic/station/cityhall/cityhall2.jpg',
        'img/pic/station/cityhall/cityhall3.jpg',
        'img/pic/station/cityhall/cityhall4.jpg',
        'img/pic/station/cityhall/cityhall5.jpg'
    ];
    var cityHallprev = document.getElementById('cityHallprev');
    var cityHallnext = document.getElementById('cityHallnext');
    var cityHall_target = document.getElementById('cityHall_target');
    var cityHall_thumbnails = document.getElementById('cityhall_thumbnails');


    function create_cityHall_thumbnails(){
        var i;
        var li;
        var img;
        for(i = 0; i < cityHallArray.length; i++){
            li = document.createElement('li');
            li.addEventListener('click', function(){
                cityHall_target.src = this.children[0].src;
            });
            img = document.createElement('img');
            img.src = cityHallArray[i];
            li.appendChild(img);
            cityHall_thumbnails.appendChild(li);
        }
    }

    create_cityHall_thumbnails();
    cityHall_thumbnails.children[currentNum].className = 'current';

    cityHallprev.addEventListener('click', function(){
        cityHall_thumbnails.children[currentNum].className = '';
        currentNum--;
        if(currentNum < 0){
            currentNum = 4;
        }
        cityHall_target.src = cityHallArray[currentNum];
        cityHall_thumbnails.children[currentNum].className = 'current';
    });

    cityHallnext.addEventListener('click', function(){
        cityHall_thumbnails.children[currentNum].className = '';
        currentNum++;
        if(currentNum > 4){
            currentNum = 0;
        }
        cityHall_target.src = cityHallArray[currentNum];
        cityHall_thumbnails.children[currentNum].className = 'current';        
    });

})();