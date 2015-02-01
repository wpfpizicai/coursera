(function(){
  function addUser(data){
    $('#user_list').append("<li>" + data.id + ":" + data.name + ":" + data.email + '<a class="del" href="javascript:void;">del </a>' + "</li>")
  };
  function addSearchUser(data){
    if(!data.id){
       $('#search_user_result').html('sorry');
    }else{
       $('#search_user_result').html("<li>" + data.id + ":" + data.name + ":" + data.email + "</li>");
    }
  }
  $('#add_user').on('click',function(e){
    $.post('/user',{
      name : $('#a_name').val(),
      email : $('#a_email').val
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