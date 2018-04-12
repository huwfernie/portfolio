console.log('Hello Huw');


$(() => {
  const $test = $('.nav ul li');
  const $test2 = $('#test2');
  const $subNav = $('.subNav');

  const menu = [
    { name: 'Introduction'},
    { name: 'Timeline'},
    { name: 'Games', children: [{name: 'Dots and Boxes', address: '#'},{name: 'Space Invaders', address: '#'},{name: 'Sudoku', address: '#'}]},
    { name: 'MVP/Prototypes', children: [{name: 'Blogging Site', address: '#'},{name: 'London Running', address: '#'},{name: 'Yabee', address: '#'}]},
    { name: 'Arduino'},
    { name: 'Design', children: [{name: 'This site', address: '#'},{name: 'Outside the box?', address: '#'}]}];
  $test.click((e)=>{
    console.log(e);
    const text = e.target.innerHTML;
    console.log(text);
    const thisOne = menu.find((elem)=>{
      if(elem.name === text){
        return elem;
      }
    });
    $test2.html('');
    $subNav.css('opacity','0');
    if(thisOne.children) {
      $subNav.css('opacity','1');
      thisOne.children.forEach((child)=>{
        $test2.append(`<li><a href='${child.address}'>${child.name}</a></li>`);
      });
    }
  });

});
