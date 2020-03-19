console.log("main js is working");

function getData(url, callback) {
  $.ajax({
    url: url,
    dataType: "json",
    type: "Get",
    success: callback
  });
}

// Populate Program Info
getData("/src/js/data.json", function(data) {
  let i = 0;
  //   console.log(data[i].program_name);
  $(".header-title").text(data[i].program_name);
  $(".header-byline").text(data[i].program_byline);

  //   $(".leaderboard__home__default__avatar").each(function() {
  //     $(this).append(
  //       `<img class='img-fluid' src='${data[i]["participants"][i]["avatar"]}'/>`
  //     );

  for (i = 0; i < 4; i++) {
    console.log(data[i].participants[i].avatar);
  }
});

// Populate Main Navigation

getData("/src/js/navigation.json", function(data) {
  for (i = 0; i < data.length; i++) {
    if (data[i].isPrivate === true) {
      $("ul.navbar-nav.ml-auto").append(
        `<li class='nav-item'><a class="nav-link" href='./${data[i].url}'>${data[i].name}</a></li>`
      );
    }

    if (data[i].isPrivate === false) {
      $(".footer-links").append(
        `<li class='nav-item'><a class="nav-link" href='./${data[i].url}'>${data[i].name}</a></li>`
      );
    }
  }
});

/********************************************************
 * Shopping Navigation
 ********************************************************/

//  Show DESKTOP megamenu

$(".megamenu-desktop").hide();

$("#desktopDeptBtn").click(function() {
  event.preventDefault();
  $(".megamenu-desktop").toggle();
});

// Top Level Category Click
$("#showTopCategories").click(function() {
  $("#topCategories").css({ display: "block" });
  $("#topCategoriesImageRep").css({
    "max-width": "50%",
    flex: "0 0 50%"
  });
});
//  Sub (Second Level) Category Click
$("#topCategories li.list-group-item a").click(function() {
  $("#secondLvlCategories").css({ display: "block" });
  $("#topCategoriesImageRep").css({
    "max-width": "25%",
    flex: "0 0 25%"
  });
});

// Open Mobile Menu

$("#mobileDeptBtn").click(function() {
  $(".stack-menu").animate({ left: "0px" }, 200);
});

$(document).on("click", function(event) {
  let trigger = $("#mobileDeptBtn");

  if (trigger !== event.target && !trigger.has(event.target).length) {
    $(".stack-menu").css({ left: "-350px" }, 200);
  }
});
