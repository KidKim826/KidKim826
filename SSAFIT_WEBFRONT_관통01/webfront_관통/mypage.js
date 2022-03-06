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
            <div class="card" style="width: 350px; height: auto; border: 0px;">
              <iframe 
              width="auto"
              height="auto"
              src="https://www.youtube.com/embed/${videoList[i].id}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              ></iframe>
              <div class="card-body" style="border-top: 1px solid rgb(109, 109, 109);">
                  <button class="btn btn-outline-danger">찜</button>
                  <button class="review btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal">리뷰</button>
              </div>
            </div>
        `
        document.querySelector(`#myvideo${parseInt(i/3)}`).innerHTML += videoHtml;
      }
    }
  }
}

// for(let i=0;i<document.querySelectorAll(".review-details").length;i++){
    
//     document.querySelectorAll(".review-details")[i].addEventListener(function(){

//     })
// }

