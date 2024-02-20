console.log('Script is working');

const addBtn = $('#add');
const assignBtn = $('#assign');

addBtn.on("click", function() {
   console.log('clicked');

    $('.container-content').append(
        `<ul>
        <li>
            <div class="content">
                <div class="details">
                    <button><i class="iconoir-xmark-circle"></i></button>
                    <p id="task">Hello</p>
                </div>
                <div class="profiles">
                    <i class="iconoir-xmark-circle"></i>
                </div>
            </div>
        </li>
    </ul>`
    );

  } );

assignBtn.on("click", function() {
   console.log('clicked');
  } );