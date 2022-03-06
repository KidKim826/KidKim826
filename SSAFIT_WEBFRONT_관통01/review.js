let xhr = new XMLHttpRequest();
xhr.onreadystatechange = responseVideo;
xhr.open("GET", "./data/video.json", true);
xhr.send(null)



function responseVideo() {
  //완벽하게 통신이 끝났을때
  if (xhr.readyState == 4) {
    //에러없이 응답이 성공적으로 처리가 되었을떄
    if (xhr.status == 200) {
      
      let videoList = JSON.parse(xhr.response)
      console.log(videoList)
      //우리가 일반적으로 알고있는 반복문
      for (let i = 0; i < videoList.length; i++){
        let videoHtml = 
        `
        <div class="carousel-item active">
          <div class="videos">
            <div class="card" style="width: auto; height: 500; border: 0px;">
              <iframe 
              width="auto"
              height="500"
              src="https://www.youtube.com/embed/${videoList[i].id}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              ></iframe>
            </div> 
          </div>
        </div>  
        
        `
        document.querySelector(`#video${i}`).innerHTML = videoHtml;
      }      
    }
  }
}

// 모달을 하려 했으나 뭔가 문제가 생겼다. 없어도 그냥 작동이 되는 듯 하다. 부트스트랩 자체 js로 작동하는 듯.
// for(let i=0;i<document.querySelectorAll(".review-details").length;i++){
//   document.querySelectorAll(".review-details")[i].addEventListener(function(){
//   })
// }
