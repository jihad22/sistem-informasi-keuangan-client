const API_URI = 'http://localhost:9000/auth/';
//save role
var data_role = new Map();
//tampung data token
var token = Cookies.get('tokenAccess');

//pecah isi token sesuai objeknya
function GenerateToken() {
  if (token == undefined) {
    Cookies.remove('tokenAccess');
    window.location.href = "/simamin/";
  } else {
    var base64 = atob(token.split('.')[1]);
    var response = JSON.parse(base64);
    return response;
  }
}

//CEK EXPIRED TOKEN dari database
function CekTokenExpired() {
  //instance tanggal sekarang
  var time = new Date();
  var now = time.toUTCString();
  //konversi unix time ke dalam bentuk utc string
  var milisecond = new Date(GenerateToken().exp * 1000);
  var utcString = milisecond.toUTCString();
  var expire = utcString.toLocaleString();
  //bandingkan expiration token dengan tanggal sekarang
  if (now == expire) {
    return true //maka token sudah kadaluarsa
  } else {
    return false
  }
}

//memformat angka menjadi angka rupiah
function formatNum(num) {
  var angka = new Intl.NumberFormat('ID').format(num);
  return angka
}

//remove separator angka pada inputan nominal
function removeCommaSeparator(selector) {
  var angka = $(selector).val();
  var data = angka.replace(/[\D\s\._\-]+/g, "");
  return parseInt(data);
}

//ambil karakter awal di setiap kata setelah spasi
//gunakan untuk membuat ID jenis pendapatan
function firstChar(str) {
  var kalimat = str.toUpperCase();
  var matches = kalimat.match(/\b(\w)/g);
  return matches.join('');
}


//api call var inside
var API_REQUEST = function (Url, Method, token, UrlParam, Data) {
	return $.ajax({
		url: API_URI + Url + UrlParam,
    type: Method,
    dataType:'JSON',
    cache: true,
    data: Data,
    crossDomain: true,
    beforeSend: function (xhr) {
      xhr.withCredentials = true;
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      //xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      xhr.setRequestHeader("Content-Type", "application/json, *");
      xhr.setRequestHeader("x-access-token-to-my-site", token);
    }
  }).fail(function(err){
		switch(err.status) {
      case 0 :
        Swal.fire({
          icon: 'error',
          title: 'Error Status : ' + err.status,
          text: 'Please Check Your Internet Connection!'
        });
      break;
      case 500 :
        Swal.fire({
          icon: 'error',
          title: 'Error Status : ' + err.status,
          text: 'Internal Server Error!'
        });
      break;
      case 400 :
        Swal.fire({
          icon: 'error',
          title: 'Error Status : ' + err.status,
          text: 'Bad Request!'
        },Cookies.remove('accessToken', {path:'/'}),
        window.location.href = "/simamin/");
      break;
      case 401 :
        Swal.fire({
          icon: 'error',
          title: 'Error Status : ' + err.status,
          text: 'Unauthorized!'
        }, 
        Cookies.remove('accessToken', {path:'/'}),
        window.location.href = "/simamin/");
      break;
      case 404 :
        Swal.fire({
          icon: 'error',
          title: 'Error Status : ' + err.status,
          text: 'Not Found!'
        });
      break;
      case 405 :
        Swal.fire({
          icon: 'error',
          title: 'Error Status : ' + err.status,
          text: 'Method Not Allowed!'
        });
      break;
    }
	});
};

//gunakan untun pemilihan satuan pada RAPBM
var satuan = new Array(
  "kg","gr","mg", 
  "liter",
  "Org","Ekor","Buah",
  "Km","m","Cm","Inc",
  "TB","GB","MB","Byte","Bit",
  "Hari","Bulan","Jam"
);
//rumus untuk RAPBM
function Rumus(nominal, jumlahSiswa, item1, item2){
  //console.log(nominal+", "+jumlahSiswa+", "+item1+", "+item2);
  let jumlah = 0;
  if ((jumlahSiswa != 0) && (item1 == 0 || item1 == "") && (item2 == 0 || item1 == "")) {
    jumlah = nominal * jumlahSiswa;
  } 
  else if ((jumlahSiswa == 0) && (item1 != 0) && (item2 == 0 || item1 == "")) {
    jumlah = nominal * item1;
  }
  else if ((jumlahSiswa == 0) && (item1 == 0 || item1 == "") && (item2 != 0)) {
    jumlah = nominal * item2;
  }
  else if ((jumlahSiswa != 0) && (item1 != 0) && (item2 == 0 || item1 == "")) {
    jumlah = nominal * jumlahSiswa * item1;
  }
  else if ((jumlahSiswa == 0) && (item1 != 0) && (item2 != 0)) {
    jumlah = nominal * item1 * item2;
  }
  else if ((jumlahSiswa != 0) && (item1 != 0) && (item2 != 0)) {
    jumlah = nominal * jumlahSiswa * item1 * item2;
  } else {
    jumlah = nominal;
  }
  return jumlah;
}