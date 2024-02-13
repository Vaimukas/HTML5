
    //$('#prev').click(function(){ prev(); return false; });
    $('#playAgain').click(function () { playAgain(); return false; });
    $('#next').click(function () { next(); return false; });

    //function prev() {
    //  prevCounter--;
    //  nextCounter--;
    //  let lastItem = document.querySelector('#draggable-list1 li#i'+ prevCounter);
    //  lastItem.style.display = 'none';
    //  let previousItem = document.querySelector('#draggable-list1 li#i'+ prevCounter).previousElementSibling;
    //  previousItem.style.display = 'block flex';
    //  if (nextCounter === 0) {
    //    endMessage.style.display = 'block';
    //  }
    //}

    function next() {
      endMessage.style.display = 'none';
      draggableListItems.forEach(item => {
      document.getElementById(item.id).classList.remove('disabled');
      })
    
      prevCounter++;
      nextCounter++;
      let firstItem = document.querySelector('#draggable-list1 li#i' + nextCounter);
      firstItem.style.display = 'none';
      let nextItem = document.querySelector('#draggable-list1 li#i' + nextCounter).nextElementSibling;
      nextItem.style.display = 'block flex';

      if (nextCounter === 16) {
        endMessage.style.display = 'block';
      }
    }

    let prevCounter = 17;
    let nextCounter = 0;

    function playAgain() {
      location.reload();
      //prevCounter = 17;
      //nextCounter = 0;
      //matchingCounter = 0;
      //endMessage.style.display = 'none';
      //draggableListItems.forEach(item => {
      //  //remove disabled, restart game
      //  document.getElementById(item.id).classList.remove('disabled');
      //})
      //document.querySelector('#draggable-list1 li').style.display = 'none';
      //document.querySelector('#draggable-list1 li#i1').style.display = 'block flex';
    }

    // retrieve the elements however you want (class name, tag name, ..)
    var elems = document.getElementsByTagName('li');
    var myButtons = document.getElementsByTagName('button');
    var increase_inner = Math.PI * 2 / 6;
    var increase_outer = Math.PI * 2 / 12;
    var x = 0, y = 0, angle_inner = 130; angle_outer = 180;

    for (var i = 1; i < 17; i++) {
      elem = elems[i];
      elem.style.display = 'none';
    }

    for (var i = 17; i < 17 + 6; i++) {
      elem = elems[i];
      // modify to change the radius and position of a circle
      x = 200 * Math.cos(angle_inner) + 600;
      y = 200 * Math.sin(angle_inner) + 600;
      elem.style.position = 'absolute';
      elem.style.left = x + 'px';
      elem.style.top = y + 'px';
      angle_inner += increase_inner;
    }

    for (var i = 17 + 6; i < elems.length; i++) {
      elem = elems[i];
      // modify to change the radius and position of a circle
      x = 360 * Math.cos(angle_outer) + 600;
      y = 360 * Math.sin(angle_outer) + 600;
      elem.style.position = 'absolute';
      elem.style.left = x + 'px';
      elem.style.top = y + 'px';
      angle_outer += increase_outer;
    }

    function checkForMatch(selected, dropTarget) {
      switch (selected) {

        case 'i1':
          //fighting
          switch (dropTarget) {
            case 's0': case 's5': case 's8': case 's14': case 's16':
              return true;
            default: return false;
          }

        case 'i2':
          //flying
          switch (dropTarget) {
            case 's1': case 's6': case 's11':
              return true;
            default: return false;
          }

        case 'i3':
          //poison
          switch (dropTarget) {
            case 's11': case 's17':
              return true;
            default: return false;
          }

        case 'i4':
          //ground
          switch (dropTarget) {
            case 's3': case 's5': case 's8': case 's9': case 's12':
              return true;
            default: return false;
          }

        case 'i5':
          //rock
          switch (dropTarget) {
            case 's1': case 's6': case 's11':
              return true;
            default: return false;
          }

        case 'i6':
          //bug
          switch (dropTarget) {
            case 's11': case 's13': case 's16':
              return true;
            default: return false;
          }

        case 'i7':
          //ghost
          switch (dropTarget) {
            case 's7': case 's13':
              return true;
            default: return false;
          }

        case 'i8':
          //steel
          switch (dropTarget) {
            case 's5': case 's14': case 's17':
              return true;
            default: return false;
          }

        case 'i9':
          //fire
          switch (dropTarget) {
            case 's6': case 's8': case 's11': case 's14':
              return true;
            default: return false;
          }

        case 'i10':
          //water
          switch (dropTarget) {
            case 's4': case 's5': case 's9':
              return true;
            default: return false;
          }

        case 'i11':
          //grass
          switch (dropTarget) {
            case 's4': case 's5': case 's10':
              return true;
            default: return false;
          }

        case 'i12':
          //electric
          switch (dropTarget) {
            case 's2': case 's10':
              return true;
            default: return false;
          }

        case 'i13':
          //psychic
          switch (dropTarget) {
            case 's1': case 's3':
              return true;
            default: return false;
          }

        case 'i14':
          //ice
          switch (dropTarget) {
            case 's2': case 's4': case 's11': case 's15':
              return true;
            default: return false;
          }

        case 'i15':
          //dragon
          switch (dropTarget) {
            case 's15':
              return true;
            default: return false;
          }

        case 'i16':
          //dark
          switch (dropTarget) {
            case 's7': case 's13':
              return true;
            default: return false;
          }

        case 'i17':
          //fairy
          switch (dropTarget) {
            case 's1': case 's15': case 's16':
              return true;
            default: return false;
          }

        default: return false;
      }
    }

    const draggableListItems = document.querySelectorAll('.draggable-list li');
    const endMessage = document.getElementById('endMessage');
    let selectedId;
    let dropTargetId;
    let matchingCounter = 0;

    addEventListeners();

    function dragStart() {
      selectedId = this.id;
    }

    function dragEnter() {
      this.classList.add('over');
    }

    function dragLeave() {
      this.classList.remove('over');
    }

    function dragOver(ev) {
      ev.preventDefault();
      //
    }


    function dragDrop() {
      dropTargetId = this.id;

      if (checkForMatch(selectedId, dropTargetId)) {
        //document.getElementById(selectedId).style.display = 'none';
        //document.getElementById(dropTargetId).style.display = 'none';
        document.getElementById(dropTargetId).classList.add('disabled');
        //this.classList.add('disabled');
        matchingCounter++;
      }

      let arr = [['i1', 5], ['i2', 3], ['i3', 2], ['i4', 5], ['i5', 3], ['i6', 3], ['i7', 2], ['i8', 3], ['i9', 4], ['i10', 3], ['i11', 3], ['i12', 2], ['i13', 2], ['i14', 4], ['i15', 1], ['i16', 2], ['i17', 3]];

      for (i = 0; i < arr.length; i++) {
        console.log(arr[i][0]);

        if (selectedId === arr[i][0] && matchingCounter === arr[i][1]) {
          endMessage.style.display = 'block';
        }
      }


      this.classList.remove('over');
    }

    function addEventListeners() {
      draggableListItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
      })
    }
