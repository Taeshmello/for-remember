document.addEventListener("DOMContentLoaded", function () {
  const little = document.getElementById("small");
  const aboutSite = document.getElementById("about_site");
  const reason = document.getElementById("reason");
  const contentDiv = document.getElementById("um");


  const aboutSiteContent = "<p>이 웹사이트는 6.25에 대한 정보를 저장해놓은 사이트입니다.</p>";
  const reasonContent = "<p>민족의 대참사인 6.25 전쟁에 대해 <br>자세한 정보를 알고 싶은 분들을 위해 제작하였습니다</p>";


  function updateContent(content) {
    contentDiv.innerHTML = content;
  }

  
  little.addEventListener("click", () => {
    updateContent(aboutSiteContent);
  });
  aboutSite.addEventListener("click", () => updateContent(aboutSiteContent));
  reason.addEventListener("click", () => updateContent(reasonContent));
});
