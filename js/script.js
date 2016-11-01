/* ===== Key Movement ===== */
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
  var $prev = toTab(-1);
}

function nextTab() {
  var $next = toTab(1);
}

function toTab(index) {
  var currentTabIndex = $('.mdl-layout__tab.is-active').index();
  var $tabs = $('.mdl-layout__tab');

  var $tabToActivate = $tabs.eq(currentTabIndex + index);

  if ( (currentTabIndex + index) <= -1 ) // we're going backwards from the first, go to last
    var $tabToActivate = $tabs.eq( ($tabs.length) - 1 );
  else if ( (currentTabIndex + index) >= $tabs.length ) // we're going forwards from the last, go back to first
    var $tabToActivate = $tabs.eq(0);
  else
    var $tabToActivate = $tabs.eq(currentTabIndex + index); // if we're in the middle, move by the specified amount

  $tabToActivate[0].click();
}
/* ===== Key Movement end ===== */

/* ===== Random Background Video ===== */
$.ajax({
  url: 'js/halloween.json',
  dataType: 'JSON',
  success: function(response) {
    var videos = response['videos'];
    var chosenVideo = videos[ Math.floor( Math.random()*videos.length ) ];
    $('#bgvid source')
      .attr('src', chosenVideo['src'])
      .attr('type', chosenVideo['type']);
    $('#bgvid')[0].load();
  }
});
/* ===== Random Background End ===== */
