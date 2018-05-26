
var text = document.getElementById('text');    

function getSelectLabel(idname){
      var obj = document.getElementById("sel");
            
      var idx = obj.selectedIndex; 
      
      var val = obj.options[idx].value;
      
      console.log("hell");
      
      if(val == 3) {
        console.log("hello");
        document.getElementById('s5').style.display = "none";
        document.getElementById('s6').style.display = "none";
      }else if (val == 4){
        document.getElementById('s5').style.display = "block";
        document.getElementById('s6').style.display = "none";
      }else{
        document.getElementById('s5').style.display = "block";
        document.getElementById('s6').style.display = "block";
      }
    
  var obj_1 = document.getElementById("s1");
  var idx_1 = obj.selectedIndex; 
  var val_1 = obj.options[idx_1].value;
   if(val_1 == 1) {
       text.textContent('村人');
      }else if (val_1 == 2){
       text.textContent('村人');
        }else if (val_1 == 3){
       text.textContent('村人');
          }else if (val_1 == 4){
       text.textContent('村人');
            }else if (val_1 == 5){
      text.textContent('村人');
              }else if (val_1 == 6){
       text.textContent('村人');
      }    
    }
 

//function getSelectLabel(idname){
//      var obj = document.getElementById("s1");
//      var idx = obj.selectedIndex; 
//      var val = obj.options[idx].value;
//   if(val == 1) {
//        text.textContent = '村人';
//      }else if (val == 2){
//        text.textContent = '人狼';
//        }else if (val == 3){
//        text.textContent = '占い師';
//          }else if (val == 4){
//        dtext.textContent = '霊媒師';
//            }else if (val == 5){
//         dtext.textContent = '騎士';
//              }else if (val == 6){
//         dtext.textContent = 'アーティスト';
//      }    
//  
//  
//    
//    }