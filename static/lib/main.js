






// DEFENITION SELECTOR
//-----tambahAnggota---------- 
const subFormShowHideBt = $('.showsubform');




$(document).ready(function () {
  collapseNavItem();
  toggleSidebar();
  // drawChartSHU();
  // drawChartDT();
  subFormHide();
});



// Tambah Anggota
function subFormHide() {
  subFormShowHideBt.each(function(index) {
    $(this).click(function(e){
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



//Sidebar
function collapseNavItem() {
  $('.navitem-collapse').each(function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      var area = $(this).attr('area-collapse');
      var iconCollapse = $(this).attr('btn-collapse');
      var sttsarea = $(`#${iconCollapse}`).hasClass('sidebarItemCollapse');
      $(`#${area}`).slideToggle();

      if (sttsarea) {
        $(this).addClass('navitemCollapsed');
        $(`#${iconCollapse}`).removeClass('sidebarItemCollapse');
        $(`#${iconCollapse}`).addClass('CollapseReverse');
      } else {
        $(`#${iconCollapse}`).addClass('sidebarItemCollapse');
        $(`#${iconCollapse}`).removeClass('CollapseReverse');
        $(this).removeClass('navitemCollapsed');
      }
    });
  });
}

function toggleSidebar(){
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    var itemsmhidden = $(".item-sm-hidden").hasClass("d-none");
    $(".sidebar").toggleClass("toggled");
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


// Dashboard
function drawChartSHU() {
  var ctx = document.getElementById("pertumbuhanSHU");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      responsive:true,
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
}


function drawChartDT() {
  var ctx = document.getElementById("detailTransaksi");
  new Chart(ctx, {
   type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      responsive:true,
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });
}
