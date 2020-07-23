function createTodo() {
    var txt = $("#txtTodo").val(); // 
    //var txt = document.getElementById("txtTodo");
    //console.log(txt);
    //create an li to display the todo
    var li = '<li>' + txt + '</li>';
    console.log("syntax", li);

    $(".list").append(li);
    $("#txtTodo").val('');
    $("#txtTodo").focus();
}


function init() {
    console.log("Page is ready!");

    // setup events
    // getting the elements from the HTML file by their assigned ID //
    // this is an inline function //
    // var btn = document.getElementById("btnAdd");
    // btn.onclick = createTodo;

    $("#btnAdd").click(createTodo);

    $("#txtTodo").keypress(function (args) {
        if (args.key == "Enter") {
            console.log("Enter pressed!");
            createTodo();
        }
    });


    //console.log("Clicked!");
    //var txt = document.getElementById("txtTodo");
    //console.log(txt.value);
    // set the click event

    //fetch initial data
}






// onload gets called when the browser finished rendering the HTML
//pass a function name to it
window.onload = init;