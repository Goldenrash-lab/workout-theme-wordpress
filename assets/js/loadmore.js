$(document).ready(function ($) {
  var count = 3; // Начальное количество загружаемых постов
  $(".btn-loadmore").on("click", function () {
    $.ajax({
      url: my_ajax_obj.ajaxurl, // URL обработчика AJAX-запроса на сервере WordPress
      type: "POST",
      data: {
        action: "load_more_posts",
        count: count,
      },
      success: function (response) {
        console.log(response.split("</li>"));
        if (response.split("</li>").length < 4) {
          $(".btn-loadmore").css("display", "none");
        }
        $(".benefits__list").append(response); // Добавляем полученные посты к списку
        count += 3; // Увеличиваем количество загружаемых постов на 3
      },
      error: function (xhr, status, error) {
        console.error("Error loading more posts: " + error);
      },
    });
  });

  var countTeam = 4; // Начальное количество загружаемых постов

  $(".btn-loadmore-team").on("click", function () {
    $.ajax({
      url: ajax_obj.ajaxurl, // URL обработчика AJAX-запроса на сервере WordPress
      type: "POST",
      data: {
        action: "load_more_posts_team",
        countTeam: countTeam,
      },
      success: function (response) {
        console.log(response.split("</li>"));
        if (response.split("</li>").length < 4) {
          $(".btn-loadmore-team").css("display", "none");
        }
        $(".team__list").append(response); // Добавляем полученные посты к списку
        countTeam += 3; // Увеличиваем количество загружаемых постов на 3
      },
      error: function (xhr, status, error) {
        console.error("Error loading more posts: " + error);
      },
    });
  });

  // Обработчик события клика на кнопку "Load More"
});
