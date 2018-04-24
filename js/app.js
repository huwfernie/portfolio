console.log('Hello Huw');


$(() => {
  const $navLink = $('.nav ul li');
  const $subNavList = $('#subNavList');
  const $subNav = $('.subNav');

  const menu = [
    { name: 'Introduction'},
    { name: 'Contact'},
    { name: 'Games', children: [{name: 'Dots and Boxes', address: '#'},{name: 'Space Invaders', address: '#'},{name: 'Sudoku', address: '#'}]},
    { name: 'MVP/Prototypes', children: [{name: 'Blogging Site', address: '#'},{name: 'London Running', address: '#'},{name: 'Yabee', address: '#'}]},
    { name: 'Arduino'},
    { name: 'Design', children: [{name: 'This site', address: '#'},{name: 'Outside the box?', address: '#'}]}];
  $navLink.click((e)=>{
    console.log(e);
    const text = e.target.innerHTML;
    console.log(text);
    const thisOne = menu.find((elem)=>{
      if(elem.name === text){
        return elem;
      }
    });
    $subNavList.html('');
    $subNav.css('opacity','0');
    if(thisOne.children) {
      $subNav.css('opacity','1');
      thisOne.children.forEach((child)=>{
        $subNavList.append(`<li><a href='${child.address}'>${child.name}</a></li>`);
      });
    }
  });

});
