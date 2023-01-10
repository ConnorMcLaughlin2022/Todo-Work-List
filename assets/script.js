var date = $('#currentDay')
function displayTime() {
  var day = dayjs().format('dddd MMM D[,] YYYY')
  date.text(day);
}

for (let index = 9; index < 18; index++) {
    var time = index
    var amPm = ":00"
    
  
    if(index > 18){
      time = index-18
      amPm = ":00"
    }
    var timeBlock = $(`   <div id="hour-${time}" class="row time-block">
    <div class="col-2 col-md-1 hour text-center py-3">${time}${amPm}</div>
    <textarea class="col-8 col-md-10 description" id= "${time}text" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
  `)
  
    $(".container-lg").append($(timeBlock))
  
    var currentHour = dayjs().format('H');
      
    // $("#"+i+"text").addClass("past")
    if (currentHour == time){
    $("#"+time+"text").addClass("present")
  }
    if (currentHour > time){
    $("#"+time+"text").addClass("past")
    }
    if (currentHour < time){
    $("#"+time+"text").addClass("future")
    }
  
  }
  
  var buttons = $(".saveBtn")
  function saveText (event){
    console.log(event.currentTarget)
    var clickSave = event.currentTarget;
    var textBox = $(clickSave).siblings("textarea");
    var textToSave = textBox.val()
    localStorage.setItem(textBox.attr("id"), textToSave)
  }
  buttons.on('click', saveText)
  
  for (let index = 9; index < 18; index++) {
    $("#"+index+"text").val(localStorage.getItem(index+"text"))
  }
  setInterval('window.location.reload()', 60000) ; 
  console.log("refresh")      

displayTime();