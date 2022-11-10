// FUnction to add items to the list
function newItem() {
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    // Error when user clicks "add" when feild is empty
    if (inputValue === "") {
        alert(
            "User Alert! Submission field is blank! Please add text to complete submission!"
        );
    } else {
        $("#list").append(li);
    }

    // Stirking item from list
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);

    // Deleting item from the list

    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    function deleteListItem() {
        li.addClass("delete");
    }

    // Reorder list itemd sbility
    $("#list").sortable();
}
