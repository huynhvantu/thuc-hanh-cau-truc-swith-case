function xuly(){
	console.log('da vao ham')
	var thang= document.getElementById('tinhsongay').value;	
	console.log(thang);	
	switch(thang){
		case "4":
		case "6":
		case "9":
		case "11":
		var ketqua = (thang) +' có 30 ngày';
		break;
		case "2":
		var ketqua = (thang) + ' có 28 hoặc 29 ngày' ;
		break;
		default:
		var ketqua = (thang)+' có 31 ngày';

	}
	document.getElementById('ketquala').innerHTML = ' Tháng  ' + ketqua;
	var thang1= document.getElementById('tinhsongay1').value;
	switch(thang1){
		case "4":
		case "6":
		case "9":
		case "11":
		var ketqua1 = (thang1) +' có 30 ngày';
		break;
		case "2":
		var ketqua1 = (thang1) + ' có 28 hoặc 29 ngày' ;
		break;
		default:
		var ketqua1 = (thang1)+' có 31 ngày'
	}
	document.getElementById('ketquala1').innerHTML = ' Tháng  ' + ketqua1;

}