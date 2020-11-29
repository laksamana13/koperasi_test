



//SELECTION PAGE
$(document).ready(function () {
  toggleSidebar();
  collapseNavItem();

  switch ($("body").data("titlepage")) {
    case "dashboard":
      drawChartSHU();
      drawChartDT.main();
      refreshChartDT();
      break;
    case "tambahanggota":
      subFormHide();
      break;
    case "detailusers":
      drawChartAktifitasUser();
      drawChartTransaksiUser();
      tabMoveUsers();
      tabMovefromChartLabelUsers();
      subFormHide();
      maximizeTable();
      break;
    case "tambahsimpanan":
      drawYear();
      break;
    case "tambahpinjaman":
      countAngsurBulan();
      break;
  }
});



//==================================================================DEFINITION FUNCTION PERPAGE================================================================//


//SIDEBAR
function collapseNavItem() {
  $('.navitem-collapse').each(function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      var area = $(this).attr('area-collapse');
      var iconCollapse = $(this).attr('btn-collapse');
      var sttsarea = $(`#${iconCollapse}`).hasClass('sidebarItemCollapseNot');
      $(`#${area}`).slideToggle();

      if (sttsarea) {
        $(this).addClass('navitemCollapsed');
        $(`#${iconCollapse}`).removeClass('sidebarItemCollapseNot');
        $(`#${iconCollapse}`).addClass('CollapseReverseNot');
      } else {
        $(`#${iconCollapse}`).addClass('sidebarItemCollapseNot');
        $(`#${iconCollapse}`).removeClass('CollapseReverseNot');
        $(this).removeClass('navitemCollapsed');
      }
    });
  });
}

function toggleSidebar(){
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    var itemsmhidden = $(".item-sm-hidden").hasClass("d-none");
    var paramSidebar;
    if ($(window).width() < 992) {
      paramSidebar = "toggledSm";
    } else {
      paramSidebar = "toggled";
    }
    $(".sidebar").toggleClass(paramSidebar);
    if (itemsmhidden) {
      $(".hiddenlabel").removeClass("d-none");
      $(".navitemLink").removeClass("text-center");
      $(".tg-cl").removeClass("d-none");
      $(".navitemCollapse").removeClass("text-center");
      $(".navitemCollapse").addClass("d-flex justify-content-between");
      $(".hidden-item").addClass("pl-4");
      $("#fotoprofil").addClass("foto-profil");
      $("#fotoprofil").removeClass("foto-profilsm");
      $(".item-sm-hidden").removeClass("d-none"); 
    } else {
      $(".item-sm-hidden").addClass("d-none");
      $(".navitemLink").addClass("text-center");
      $(".tg-cl").addClass("d-none");
      $(".navitemCollapse").removeClass("d-flex justify-content-between");
      $(".navitemCollapse").addClass("text-center");
      $(".hidden-item").removeClass("pl-4");
      $("#fotoprofil").removeClass("foto-profil");
      $("#fotoprofil").addClass("foto-profilsm");
      $(".hiddenlabel").addClass("d-none");
    }
  });
}
//END SIDEBAR


// DASHBOARD
function drawChartSHU(e) {
  var data = {
    labels: ['2015', '2016', '2017', '2018', '2019'],
    series: [
      [500, 400, 300, 700, 500],
    ]
  };

  var options = {
    seriesBarDistance: 12,
    height: '300px'
  };

  var responsiveOptions = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  new Chartist.Bar('#pertumbuhan', data, options, responsiveOptions);
}

const drawChartDT = {
  main: function (){
    var Chart = new Chartist.Pie('#detailtransaksi', {
      series: [60, 30, 10]
    }, {
      height: '260px',
      donut: true,
      donutWidth: 20,
      donutSolid: true,
      startAngle: 0,
      showLabel: true
    });
    return Chart;
  }, 
  update: function () {
    const data = { series: [20, 30, 50] };
    drawChartDT.main().update(data);
  }
}

function refreshChartDT() {
  $('#refreshchartDT').click(function (e) {
    e.preventDefault();
    drawChartDT.update();
  });
}
//END DASHBOARD


// TAMBAH ANGGOTA
function subFormHide() {
  $('.showsubform').each(function(index) {
    $(this).click(function (e) {
      e.preventDefault();
      const subFormShowHideBtArea = $(this).attr("areahid");
      const sttsSubform = $(this).hasClass("subformCollapse");
      $(`#${subFormShowHideBtArea}`).slideToggle();
      if (sttsSubform) {
        $(this).removeClass("subformCollapse");
        $(this).addClass("CollapseReverse");
      } else {
        $(this).removeClass("CollapseReverse");
        $(this).addClass("subformCollapse");
      }
    });
  });
}
//END TAMBAH ANGGOTA


//DETAIL USER
function drawChartAktifitasUser() {
  new Chartist.Line('#chartAktivitas', {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei'],
    series: [
      [5, 9, 7, 8, 12],
    ]
  }, {
    fullWidth: true,
    height: "220px",
    chartPadding: {
      right: 40
    }
  });
}

function drawChartTransaksiUser() {
  new Chartist.Pie('#chartTransaksiUsers', {
    series: [60, 30, 10]
  }, {
    height: '200px',
    donut: true,
    donutWidth: 20,
    donutSolid: true,
    startAngle: 0,
    showLabel: true
  });
}

function tabMoveUsers() {
   $('.navigate-items').each(function(index) {    
      $(this).click(function (e) {
          e.preventDefault();
          $("div.tab-pane").removeClass("active");
          $("li.navigate-items").removeClass("active");
          const currentTab = $(this).data("tabdetail");
          $(`#${currentTab}`).addClass("active");
          $(this).addClass("active");
      });
  });
}

function tabMovefromChartLabelUsers() {
  $('.navigate-itemslabel').each(function(index) {    
      $(this).click(function (e) {
          e.preventDefault();
          $("div.tab-pane").removeClass("active");
          $("li.navigate-items").removeClass("active");
          const currentTab = $(this).data("tabdetail");
          $(`#${currentTab}`).addClass("active");
          $(`.navigate-items[data-tabdetail="${currentTab}"]`).addClass("active");
      });
  });
}

function maximizeTable() {
  $('#mindetailuser').hide();
  $('#maximizedetailuser').click(function (e) {
    e.preventDefault();
    $('#topdetailuser').hide();
    $(this).hide();
    $('#mindetailuser').show();
    $('.user-info-block').removeClass('px-3'); 
  });
  $('#mindetailuser').click(function (e) {
    e.preventDefault();
    $('#topdetailuser').show();
    $(this).hide();
    $('#maximizedetailuser').show();
    $('.user-info-block').addClass('px-3');
  });
}
//END DETAIL USER


// TAMBAH SIMPANAN
function drawYear() {
  var currentTime = new Date();
  for (let index = -2; index <= 2; index++) {
    $('#yearsimpanan').append(`<option value="${currentTime.getFullYear() + index }">${currentTime.getFullYear() + index}</option>`);
  }
}


// TAMBAH PINJAMAN
function countAngsurBulan() {
  var pinjaman = $('#jumlahpinjaman');
  var angsuran = $('#jumlahangsur');
  var perbulan = $('#jumlahangsuran');

  angsuran.change(function (e) {
    e.preventDefault();
    var hasil = pinjaman.val() / $(this).val();
    perbulan.val(hasil);
    console.log('test');
  });

}