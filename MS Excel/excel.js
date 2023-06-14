

function vCare(evt, disease) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs__content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs__button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(disease).style.display = "block";
    evt.currentTarget.className += " active";
  }
  //menu toggle
  
  
  let lst = document.querySelectorAll('.list');
  for (let i=0;i<lst.length;i++){
      lst[i].onclick = function(){
          let j=0;
          while(j<lst.length){
              lst[j++].classList.remove('active');
          }
          lst[i].classList.add('active');
      }
  }
  
  function change() {
    nav.classList.add("bg-light");
  };

 
