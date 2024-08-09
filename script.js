var menubutton = document.querySelector('.menubutton');
console.log(menubutton);
var sidebar = document.querySelector('.left-home');
console.log(sidebar);

var smallSidebar = document.querySelector('.mid-mid');
console.log(smallSidebar);

var rightDiv = document.querySelector('.right-home');
console.log(rightDiv);

var searchDiv = document.querySelector('.search-div');
console.log(rightDiv);

var searchExit = document.querySelector('.search-exit');
console.log(searchExit);

var searchDivMike = document.querySelector('.search-div-mike');
console.log(searchDivMike);

var uploadVedio = document.querySelector('.upload-vedio');
console.log(uploadVedio);


var wrapper = document.querySelector('.wrapper');
console.log(wrapper);

var searchItem = document.querySelector('.search-bar-left-box');
console.log(searchItem);

var recent = document.querySelector('.recover');
console.log(recent);


var selectIcon = document.querySelector('.icon-select');
console.log(selectIcon);

var selectDiv = document.querySelector('.select-div');
console.log(selectDiv);

var displayIcon = document.querySelector('.display-icon');
console.log(displayIcon);


menubutton.addEventListener('click', function () {
    sidebar.classList.toggle('hide-sidebar');
    smallSidebar.classList.toggle('show-small-sidebar');

    if(sidebar.classList.contains('hide-sidebar')) {
        rightDiv.style.width = '96%';
    } else {
        rightDiv.style.width = '85%';
    }
}); 


var adjustSearch = document.querySelector('.adjust-search');
console.log(adjustSearch);

var searchBox = document.querySelector('.search-bar-right-box');
console.log(searchBox);

searchBox.addEventListener('mouseover',function(){
    adjustSearch.style.display = 'flex';
})

searchBox.addEventListener('mouseleave',function(){
    adjustSearch.style.display = 'none';
})



var searchVoice = document.querySelector('.search-voice');
console.log(searchVoice);

var mikeBox = document.querySelector('.mike-box');
console.log(mikeBox);

mikeBox.addEventListener('mouseover',function(){
    searchVoice.style.display = 'flex';
})

mikeBox.addEventListener('mouseleave',function(){
    searchVoice.style.display = 'none';
})




var vedio = document.querySelector('.vedio-adjust i');
console.log(vedio);

var createAdjust = document.querySelector('.create-adjust');
console.log(createAdjust);

vedio.addEventListener('mouseover',function(){
    createAdjust.style.display = 'flex';
})

vedio.addEventListener('mouseleave',function(){
    createAdjust.style.display = 'none';
})


var notification = document.querySelector('.notification');
console.log(notification);

var notificationAdjust = document.querySelector('.notification-adjust');
console.log(notificationAdjust);

notification.addEventListener('mouseover',function(){
    notificationAdjust.style.display = 'flex';
})

notification.addEventListener('mouseleave',function(){
    notificationAdjust.style.display = 'none';
})



// mikeBox.addEventListener('click',function(){
//     searchDiv.style.display = 'flex';
//     searchDiv.style.justifyContentFlexDirection = 'column';

// })

// searchExit.addEventListener('click',function(){
//     searchDiv.style.display = 'none';
// })


mikeBox.addEventListener('click', function() {
    searchDiv.style.display = 'flex';
    searchDiv.style.flexDirection = 'column';
  });
  
  searchExit.addEventListener('click', function() {
    searchDiv.style.display = 'none';
  });


  vedio.addEventListener('click', function(event) {
    uploadVedio.style.display = 'flex';
    event.stopPropagation();
  });

  

  searchItem.addEventListener('click', function(event) {
    recent.style.display = 'flex';
    event.stopPropagation();
  });

  
  
  wrapper.addEventListener('click', function() {
    uploadVedio.style.display = 'none';
  });

  wrapper.addEventListener('click', function() {
    recent.style.display = 'none';
  });



  displayIcon.addEventListener('click', function(event) {
    selectDiv.style.display = 'flex';
    event.stopPropagation();
  });

  wrapper.addEventListener('click', function() {
    selectDiv.style.display = 'none';
  });





