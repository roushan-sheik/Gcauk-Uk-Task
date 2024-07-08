$(document).ready(function () {
  $("#sidebarMenu a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).data("target");

    // Remove active class from all nav links
    $("#sidebarMenu .nav-link").removeClass("active");

    // Add active class to the clicked nav link
    $(this).addClass("active");

    $.ajax({
      url: `./pages/${target}.html`,
      type: "GET",
      dataType: "html",
      success: function (data) {
        $("#contentArea").html(data);
      },
      error: function () {
        $("#contentArea").html(
          '<div class="content-section active"><h2>Error</h2><p>Content could not be loaded.</p></div>'
        );
      },
    });
  });

  // Initial load for Home (or default content)
  $("#sidebarMenu a[data-target='home']").click();
});
