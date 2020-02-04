$('.card').on('click', function() {
    $('.card').removeClass('active');
    $(this).addClass('active');
    $('.form').stop().slideUp();
    $('.form').delay(300).slideDown();
    
    
  
  });
  
  $('#one-button').on('click', function() {
    $('.card').removeClass('active');
    $('#two').addClass('active');
    $('.form').stop().slideUp();
    $('.form').delay(300).slideDown();
    
    
  
  });
  
  $('#two-button').on('click', function() {
    $('.card').removeClass('active');
    $('#three').addClass('active');
    $('.form').stop().slideUp();
    $('.form').delay(300).slideDown();
    
    
  
  });
  $('#three-button').on('click', function() {
    $('.card').removeClass('active');
    $('#four').addClass('active');
    $('.form').stop().slideUp();
    $('.form').delay(300).slideDown();
    
    
  
  });
  $('#four-button').on('click', function() {
    $('.card').removeClass('active');
    $('#one').addClass('active');
    $('.form').stop().slideUp();
    $('.form').delay(300).slideDown();
    
    
  
  });
  
  
  
     
    $(document).ready(function(){  
    
    
       $("#one-button").click(function(){
          $("#one-inner").hide();
      }); 
      $("#one-button").click(function(){
          $("#two-inner").show();
      });
      
       $("#two-button").click(function(){
          $("#one-inner").hide();
      }); 
      $("#two-button").click(function(){
          $("#two-inner").show();
      });
      
       $("#three-button").click(function(){
          $("#three-inner").hide();
      }); 
      $("#three-button").click(function(){
          $("#four-inner").show();
      });
      
      $("#four-button").click(function(){
          $("#two-inner").hide();
      }); 
      $("#four-button").click(function(){
          $("#one-inner").show();
      });
      
      
        
        
      $("#two-inner").hide();
      $("#three-inner").hide();
      $("#four-inner").hide();
     $("#one").click(function(){
          $("#two-inner").hide();
          $("#three-inner").hide();
          $("#four-inner").hide();
      });
      $("#one").click(function(){
          $("#one-inner").show();
      });
      
      $("#two").click(function(){
          $("#one-inner").hide();
          $("#three-inner").hide();
          $("#four-inner").hide();
      });
      $("#two").click(function(){
          $("#two-inner").show();
      });
      
      $("#three").click(function(){
          $("#one-inner").hide();
          $("#two-inner").hide();
          $("#four-inner").hide();
      });
      $("#three").click(function(){
          $("#three-inner").show();
      });
      
      $("#four").click(function(){
          $("#one-inner").hide();
          $("#two-inner").hide();
          $("#three-inner").hide();
      });
      $("#four").click(function(){
          $("#four-inner").show();
      });
    
  });