(function(){
  function addUser(data){
    var showid = $('li','#user_list').length;
    $('#user_list').append("<li>" + showid + ":" + data.name + ":" + data.email + '<a class="del" href="javascript:void;" data-id="' + data.id + '">del </a>' + "</li>")
  };
  function addSearchUser(data){
    if(!data.id){
       $('#search_user_result').html('sorry');
    }else{
       $('#search_user_result').html("<li>" + data.id + ":" + data.name + ":" + data.email + "</li>");
    }
  }
  $('#user_list').on('click',function(e){
    var _target = $(e.target);
    if(_target && $(_target).prop("tagName").toLowerCase() == 'a'){
      $.post('deluser',{
        id : $(_target).attr('data-id') - 0
      },function(result){
        if(result.error == false){
          $(_target).parent().remove()
        }
      })
    }
  })
  $('#add_user').on('click',function(e){
    $.post('/user',{
      name : $('#a_name').val(),
      email : $('#a_email').val()
    },function(result){
      if(result.error == false){
        addUser(result.data)
      }
    })
  });
  $("#search_user").on('click',function(e){
    $.post('searchuser',{
      name : $('#s_name').val()
    },function(result){
      if(result.error ==  false){
        addSearchUser(result.data)
      }
    })
  })
})()