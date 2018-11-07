var ranking = firebase.database().ref('DecimalRanking/').orderByChild('Position');
var colorNumber = 0;
ranking.on('child_added', function(data) {
  var record = data.child('Record').val() * -1;
  var time = data.child("Time").val();
  var position = data.child("Position").val();
  var uid = data.key;
  var userRef = firebase.database().ref('Users/' + uid);
  firebase.database().ref('Users/' + uid).once('value').then(function(snapshot) {
     var nome = snapshot.child('Name').val();
     var imgUrl = snapshot.child('PhotoUrl').val();
     var color = "000000"
     switch(colorNumber) {
          case 0:
            color = "#FF580D";
            colorNumber ++;
          break;
          case 1:
            color = "#00D6F1";
            colorNumber ++;
          break;
          case 2:
            color = "#D33C4C";
            colorNumber ++;
          break;
          default:
            color = "#FFE74E";
            colorNumber = 0;
              
      }
     if (position == 1) {
       $("#ranking").append("<div class='col-md-12' style='padding:16px; margin-bottom:0px;'><center><img src='"+imgUrl+"' class='rounded-circle' style='width:96px; height:96px;'><h1>"+nome+"</h1><h2>"+record+" / "+time+"</h2></center></div>");
     }else{
       $("#ranking").append("<div class='col-sm-2'></div><div class='col-sm-2 rounded-left text-center' style='margin-bottom:16px; background-color:"+color+"; padding:10px 0px 10px 10px;'><img src='"+imgUrl+"' class='rounded-circle' style='width:96px; height:96px;'></div><div class='col-sm-4 text-center' style='margin-bottom:16px; background-color:"+color+"; padding:10px 0px 10px 0px;'><h1>"+nome+"</h1><h2>"+record+" / "+time+"</h2></div><div class='col-sm-2 rounded-right text-center' style='margin-bottom:16px; background-color:"+color+"; padding:30px 0px 30px 0px;'><h1>"+position+"</h1></div><div class='col-sm-2'></div>");
     }
  });
});
