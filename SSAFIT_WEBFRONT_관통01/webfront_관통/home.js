let xhr = new XMLHttpRequest();
xhr.onreadystatechange = responseVideo;
xhr.open("GET", "./data/video.json", true);
xhr.send(null)



// 리뷰 창 같은 경우 영상 별로 리뷰를 작성할 수 있도록 모달을 띄워줌.


function responseVideo() {
  //완벽하게 통신이 끝났을때
  if (xhr.readyState == 4) {
    //에러없이 응답이 성공적으로 처리가 되었을떄
    if (xhr.status == 200) {
      
      let videoHtml = "";
      
      let videoList = JSON.parse(xhr.response)
      console.log(videoList)
      //우리가 일반적으로 알고있는 반복문
      for (let i = 0; i < videoList.length; i++){
        
        videoHtml += 
        `
        <td>
          <div class="card" style="width: auto; height: 350; border: none;">
              <iframe
              width="auto"
              height="300"
              src="https://www.youtube.com/embed/${videoList[i].id}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              ></iframe>
              <div class="card-body" >
                  <button class="btn btn-outline-danger">찜</button>
                  <button class="review btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal">리뷰</button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-black">
                        <div class="modal-header">
                          <h5 class="modal-title bg-black" id="exampleModalLabel"><i class="bi bi-piggy-bank-fill"></i>운동영상 리뷰<i class="bi bi-piggy-bank-fill"></i></h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <input class="reiviewTitle bg-black" type="text" placeholder="제목을 적어주세요">
                        </div>
                        <div class="modal-body">
                          <input class="reiviewinput bg-black" type="text" placeholder="리뷰내용을 적어주세요">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btnsubmit bg-black" data-bs-dismiss="modal">등록</button>
                          <button type="button" class="btncancle bg-black" data-bs-dismiss="modal">취소</button>
                        </div>
                      </div>
                    </div>
                  </div>
              
          </div>
        </td>
        `      
      }


      let recommendHtml="";
      for (let i = 0; i < videoList.length; i++){
        if(i%2==1){
          recommendHtml += 
          `
          <td>
            <div class="card" style="width: auto; height: 350; border: none;">
                <iframe
                width="auto"
                height="300"
                src="https://www.youtube.com/embed/${videoList[i].id}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
                <div class="card-body" >
                  <button class="btn btn-outline-danger">찜</button>
                  <button class="review btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal">리뷰</button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-black">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel"><i class="bi bi-piggy-bank-fill"></i>운동영상 리뷰<i class="bi bi-piggy-bank-fill"></i></h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <input class="reiviewinput" type="text" placeholder="제목을 작성해주세요">
                        </div>
                        <div class="modal-body">
                          <input class="reiviewinput" type="text" placeholder="리뷰내용 작성해주세요">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btnsubmit" data-bs-dismiss="modal" style="border: 1px blue;">등록</button>
                          <button type="button" class="btncancle">취소</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </td>
          `
        }
      }

     

      let categoryHtml="";
      for (let i = 0; i < videoList.length; i++){
        if(i%3==0){
          categoryHtml += 
          `
          <td>
            <div class="card" style="width: auto; height: 350; border: none;">
                <iframe
                width="auto"
                height="300"
                src="https://www.youtube.com/embed/${videoList[i].id}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
                <div class="card-body" >
                  <button class="btn btn-outline-danger">찜</button>
                  <button class="review btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal">리뷰</button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-black">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel"><i class="bi bi-piggy-bank-fill"></i>운동영상 리뷰<i class="bi bi-piggy-bank-fill"></i></h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <input class="reiviewinput" type="text" placeholder="제목을 작성해주세요">
                        </div>
                        <div class="modal-body">
                          <input class="reiviewinput" type="text" placeholder="리뷰내용을 작성해주세요">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btnsubmit" data-bs-dismiss="modal" style="border: 1px blue;">등록</button>
                          <button type="button" class="btncancle">취소</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </td>
          `
        }
        
        
      }


      


      document.querySelector("#video-area").innerHTML = videoHtml;
      document.querySelector("#recommend-video-area").innerHTML = recommendHtml;
      document.querySelector("#category-video-area").innerHTML = categoryHtml;
    }
  }
}

function replay() {
  // console.log('play()')
  document.querySelector('video').load()
}
