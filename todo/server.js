function start() {
  var input = document.getElementById('input');
  var btn = document.getElementById('btn');
  var lists = {
     todo: document.getElementById('todo'),
     done: document.getElementById('done')
      };
  //function that creates the list element
  var addTask = function(str, onCheck) { //onCheck is the callback function
  var el = document.createElement('li');
  var input = document.createElement('input');
  var span = document.createElement('span');

  // <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element.
  span.textContent = str;
  input.type = 'checkbox';
  input.addEventListener('click', onCheck);

  el.appendChild(input);
  el.appendChild(span);

  return el;
  };

  function onCheck(event) {
    var t = event.target.parentElement;
    var list = t.parentElement.id;

    lists[list === 'done' ? 'todo' : 'done'].appendChild(t);
    this.checked = false;
    input.focus();
    //console.log(t);
  };

  var task = function(list, task) {
    list.appendChild(task)
  };

  var onInput = function() {
    var str = input.value.trim();

    if(str.length > 0) {
      task(lists.todo, addTask(str, onCheck));
      input.value = "";
      input.focus();
    }
  }

  btn.addEventListener('click', onInput);
  input.addEventListener('keyup', function(event) {
    var code = event.keyCode;
    if(code == 13) {
      onInput();
    }
  })
  // task(lists.todo, addTask('test task - todo', onCheck));
  // task(lists.done, addTask('test task - done', onCheck));
  input.focus();
};
