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
      $('#treeUser').addClass('menu-open');
      $('#userMenu').addClass('active');
      $('#roleSubMenu').addClass('active');
      $('.pageTitle').html('Role User');
      $('title').html('Role User')
      break;
    case "pengguna":
      $('a').removeClass('active');
      $('#treeUser').addClass('menu-open');
      $('#userSubMenu').addClass('active');
      $('.pageTitle').html('Pengguna');
      $('title').html('Pengguna');
      break;
    //RAPBM
    case "rapbm-pendapatan":
      $('a').removeClass('active');
      $('#treeRAPBM').addClass('menu-open');
      $('#rapbmPendapatanMenu').addClass('active');
      $('.pageTitle').html('RAPBM Pendapatan');
      $('title').html('RAPBM Pendapatan');
      break;
    case "rab":
      $('a').removeClass('active');
      $('#treeRAPBM').addClass('menu-open');
      $('#rapbmRabMenu').addClass('active');
      $('.pageTitle').html('Rencana Anggaran Belanja');
      $('title').html('RAB');
      break;
    case "rapbm-rab":
      $('a').removeClass('active');
      $('#treeRAPBM').addClass('menu-open');
      $('#rapbmRabMenu').addClass('active');
      $('.pageTitle').html('Rencana Anggaran Belanja');
      $('title').html('RAB');
      break;
    //JURNAL TRANSAKSI
    case "jurnal-transaksi-pendapatan":
      $('a').removeClass('active');
      $('#treeLaporanKeuangan').addClass('menu-open');
      $('#treeJurnalTransaksiMenu').addClass('menu-open');
      $('#jurnalTransaksiPendapatanMenu').addClass('active');
      $('.pageTitle').html('Pendapatan');
      $('title').html('Jurnal Transaksi');
      break;
    case "jurnal-transaksi-pengeluaran":
      $('a').removeClass('active');
      $('#treeLaporanKeuangan').addClass('menu-open');
      $('#treeJurnalTransaksiMenu').addClass('menu-open');
      $('#jurnalTransaksiPengeluaranMenu').addClass('active');
      $('.pageTitle').html('Pengeluaran');
      $('title').html('Pengeluaran');
      break;
    case "posisi-keuangan":
      $('a').removeClass('active');
      $('#treeLaporanKeuangan').addClass('menu-open');
      //$('#treeJurnalTransaksiMenu').addClass('menu-open');
      $('#posisiKeuanganSubMenu').addClass('active');
      $('.pageTitle').html('Posisi Keuangan');
      $('title').html('Posisi Keuangan');
      break;
    //pengaturan
    case "atur-jumlah-siswa":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#jumlahSiswanMenu').addClass('active');
      $('.pageTitle').html('Atur Tahun Ajaran');
      $('title').html('Atur T.A dan Jm.Siswa');
      break;

    case "atur-rapbm-pendapatan":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#treeAturRAPBM').addClass('menu-open');
      $('#aturRAPBMPendapatanSubMenu').addClass('active');
      $('.pageTitle').html('Atur RAPBM Pendapatan');
      $('title').html('Atur RAPBM Pendapatan');
      break;
    case "atur-rapbm-rab":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#treeAturRAPBM').addClass('menu-open');
      $('#aturRAPBMRabSubMenu').addClass('active');
      $('.pageTitle').html('Atur RAPBM RAB');
      $('title').html('Atur RAPBM RAB');
      break;

    case "atur-pengeluaran":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#aturPengeluaranSubMenu').addClass('active');
      $('.pageTitle').html('Atur Pengeluaran');
      $('title').html('Atur Pengeluaran');
      break;
    case "atur-jurnal-transaksi-pengeluaran":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#aturJurnalTransaksiPengeluaranSubMenu').addClass('active');
      $('.pageTitle').html('Atur Jurnal Transaksi Pengeluaran');
      $('title').html('Atur Jurnal Transaksi Pengeluaran');
      break;
    case "atur-jurnal-transaksi-pendapatan":
      $('a').removeClass('active');
      $('#treePengaturan').addClass('menu-open');
      $('#aturJurnalTransaksiPendapatanSubMenu').addClass('active');
      $('.pageTitle').html('Atur Jurnal Transaksi Pendapatan');
      $('title').html('Atur Jurnal Transaksi Pendapatan');
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