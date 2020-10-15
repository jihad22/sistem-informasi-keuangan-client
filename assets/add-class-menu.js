//fungsi yang ddigunakan untuk memotong url
function UriSplit(index) {
  let uri = window.location.pathname.split('/');
  return uri[index];
}

//digunakan untuk mengambil parameter dari sebuah URL yang menggunakan query string
function getQStringVal(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//tambahkan class 'active' pada menu yang diakses berdasarkan url yang sudah di pecah
$(document).ready(function () {
  var UrlPath = UriSplit(3);
  switch (UrlPath) {
    case "user-role":
      $('a').removeClass('active');
      $('#userMenu').addClass('active');
      $('.pageTitle').html('Role User');
      $('title').html('Role User')
      break;
    case "user":
      $('a').removeClass('active');
      $('#treeUser').addClass('menu-open');
      $('#userMenu').addClass('active');
      $('.pageTitle').html('Pengguna');
      $('title').html('Pengguna');
      break;
    case "pendapatan":
      $('a').removeClass('active');
      $('#pendapatanMenu').addClass('active');
      $('.pageTitle').html('Pendapatan');
      $('title').html('Pendapatan');
      break;
    case "rab":
      $('a').removeClass('active');
      //$('#treePengaturan').addClass('menu-open');
      $('#rabMenu').addClass('active');
      $('.pageTitle').html('Rencana Anggaran Belanja');
      $('title').html('RAB');
      break;
    //pengaturan
    case "atur-jumlah-siswa":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#pengaturanMenu').addClass('active');
      $('.pageTitle').html('Atur Jumlah Siswa');
      $('title').html('Atur Jumlah Siswa');
      break;
    case "atur-pendapatan":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#pengaturanMenu').addClass('active');
      $('.pageTitle').html('Atur Pendapatan');
      $('title').html('Atur Jumlah Siswa');
      break;
    case "atur-pengeluaran":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#pengaturanMenu').addClass('active');
      $('.pageTitle').html('Atur Pengeluaran');
      $('title').html('Atur Pengeluaran');
      break;
    default:
      $('a').removeClass('active');
      $('#dashboard').addClass('active');
      $('.pageTitle').html('Dashboard');
      $('title').html('Dashboard');
      break;
  }
});

/*
case "komite":
      $('li').removeClass('active');
      $('#pendapatan').addClass('active');
      $('.pageTitle').html('Komite');
      break;
    case "bos":
      $('li').removeClass('active');
      $('#pendapatan').addClass('active');
      $('.pageTitle').html('Dana Bos');
      break;
    case "sumber-lain":
      $('li').removeClass('active');
      $('#pendapatan').addClass('active');
      $('.pageTitle').html('Sumber Lain');
      break;
    case "rincian-sumber-lain":
      $('li').removeClass('active');
      $('#pendapatan').addClass('active');
      $('.pageTitle').html('Sumber Lain');
      break;
    case "pengaturan":
      $('li').removeClass('active');
      $('#pengaturan').addClass('active');
      $('.pageTitle').html('Pengaturan');
      break; 
    default:
      $('li').removeClass('active');
      $('#dashboard').addClass('active');
      $('.pageTitle').html('Dashboard');
      break;
      */