/** @format */
const nav_bar = ["Home", "Data Siswa", "About"];
var index = $("#index");
if (nav_bar.length > 0) {
  nav_bar.forEach((Element) => {
    index.append("<a id='" + Element + "'>" + Element + "</a>");
  });
}
$("a").click(function () {
  var url = $(this).text();
  $("#script_js").html("<script src='/FrontEnd/App/" + url + ".js'></script>");
  console.log("clicked" + url);
});
