var ranking = firebase.database().ref('DecimalRanking/').orderByChild('Position');
ranking.on('child_added', function(data) {
  var record = data.child('Record').val() * -1;
  var time = data.child("Time").val();
  var position = data.child("Position").val();
  var uid = data.key;
  var userRef = firebase.database().ref('Users/' + uid);
  firebase.database().ref('Users/' + uid).once('value').then(function(snapshot) {
     var nome = snapshot.child('Name').val();
     var imgUrl = snapshot.child('PhotoUrl').val();
     $("#ranking").append("<center><div class='col-md-12 card' style='margin:10px;'><div class='col-md-3'></div><div class='col-md-1'><img src='"+imgUrl+"' class='img-responsive img-rounded' width='96' height='96'></div><div class='col-md-2 paragrafo' style='text-align:center;height: 80px;line-height: 80px;border: 2px dashed #f69c55;'>"+nome+"</div><div class='col-md-1'><p class='paragrafo'>"+record+"<br>"+time+"</p></div><div class='col-md-1'><h1>"+position+"</h1></div><div class='col-md-3'></div></center>");
  });
});
