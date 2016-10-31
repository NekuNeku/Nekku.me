$(document).keydown(function(e) {
  var key = e.which;
  if ( key == 37 || key == 39 ) {
    e.preventDefault();

    if ( key == 37 )
      prevTab();
    else
      nextTab();
  }
});

function prevTab() {
  var $prev = toPanel(-1);
}

function nextTab() {
  var $next = toPanel(1);
}

function toPanel(index) {
  var currentTabIndex = $('.mdl-layout__tab.is-active').index();
  var $tabs = $('.mdl-layout__tab');

  var $tabToActivate = $tabs.eq(currentTabIndex + index);

  if ( (currentTabIndex + index) != -1 && (currentTabIndex + index) != $tabs.length ) {
    $tabToActivate[0].click();
  }
}
