console.log('Hello Huw');


$(() => {
  const menu = [
    { name: 'Introduction'},
    { name: 'Contact'},
    { name: 'Games', children: [{name: 'Dots and Boxes', address: '#'},{name: 'Space Invaders', address: '#'},{name: 'Sudoku', address: '#'}]},
    { name: 'MVP/Prototypes', children: [{name: 'Blogging Site', address: '#'},{name: 'London Running', address: '#'},{name: 'Yabee', address: '#'}]},
    { name: 'Arduino'},
    { name: 'Design', children: [{name: 'This site', address: '#'},{name: 'Outside the box?', address: '#'}]}];
  return menu;
});
