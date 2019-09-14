$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    image = (message.image.url) ? image= `<img src ="${message.image.url}"></img>` : '';
    // if文を三項演算子で記述している。

    var html =` <div class='messages'>
                <div class='message' data-message-id='24'>
                <div class='message-user'>
                ${message.user_name}
                </div>
                <div class='message-font'>
                <div class='message-font__content'>
                ${message.text}
                </div>
                <div class='message-font__date'>
                ${message.data}
                </div>
                </div>
                </div>
                </div>
                </div>
                ${image}
                `
                return html;
  }
  $("#new_message").on("submit", function(e){
    // console.log("発火")
    e.preventDefault();
    //フォームの送信の動きを止めている

    var formData = new FormData(this);
    //送信された内容を取得している

    var url = $(this).attr('action');
      //ajaxで送るurl先を取得。フォームのアクション属性を取得。
      //thisは("#new_message")を指している。

    $.ajax({
      //ajaxのリクエスト先指定
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })


    .done(function(data){
    //ajaxのリクエストがうまくいけば以下の処理が動く

    var html = buildHTML(data);
    
    $('.messages').append(html);
    //('.messages')に(html)を追加している。

    $('#new_message')[0].reset();
    //フォームの('#new_message')に文字を打って送信すると自動で削除される
    
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    //('.messages')を自動でスクロールしてくれる。

    $('.form__submit').prop('disabled', false);
    //連続送信できるようにしている
    return false;
    })
    .fail(function(){
      //ajaxのリクエストが失敗した時は以下の処理が動く。

        alert('メッセージを入力して下さい');
      })
    });
  })