console.log('Hello Huw');


$(() => {
  const $test = $('#test');
  const $test2 = $('#test2');

  $test.click(()=>{
    $test2.append('<li><a href="/user/messages">Dots and Boxes</a></li>');
    $test2.append('<li><a href="/user/messages">Space Invaders</a></li>');
    $test2.append('<li><a href="/user/messages">Soduko</a></li>');
  });

});
