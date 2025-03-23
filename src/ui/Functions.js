
/**
 * Create a simple button with an optional icon.
 * @param {*} icon - the HTML that displays the icon 
 * @param {*} label - the caption inside the button
 * @returns jQuery button widget
 */
function $createButton(icon, label, show_on_hover = false, tooltip_text = null) {

    var $icon = $("<span>");
    $icon.html(icon);

    var $label = $("<span>");
    $label.text(label);


    var $button = $("<div>").addClass("button");
    $button.append($icon);
    $button.append($label);

    // if (show_on_hover) {
    //     $label.hide();
    //     $button.on("mouseover", () => $label.show())
    //     $button.on("mouseout", () => $label.hide())
    // }

    return $button;
}



function $createPanel(icon, title, width, height, resizable = true) {
    var $panel = $("<div>");
    $panel.addClass("panel")

    var $header = $("<div>");
    $panel.append($header)
    $header.addClass("header")

    var $icon = $("<span>");
    $header.append($icon)
    $icon.text(icon + " ")

    var $title = $("<span>");
    $header.append($title)
    $title.text(title);


    var $content = $("<div></div>")
    $content.addClass("content")
    $panel.append($content);


    $panel.css({
        "width": width,
        "height": height,

    })


    $panel.widget = function () {
        return $content;
    }

    if (resizable) {
        $panel.resizable()
    }

    return $panel;
}



function $createList(handle, selectable = false) {
    var $list = $("<ul>");
    $list.sortable({
        "handle": handle,
        "animation": 150
    });

    if (selectable) {
        $list.selectable({

            "selected": function (event, ui) {
                $(ui.selected).addClass("selected")
            },
            "unselected": function (event, ui) {
                $(ui.unselected).removeClass("selected")
            }
        });
    }

    return $list;
}


function $createEmptyListItem($contents) {
    var $item = $("<li>");
    $item.append($contents);
    return $item;
}





function $createDefaultListItem(contents) {
    var $item = $("<li>");
    $item.append(contents);
    return $item;
}





function $createDefaultListItemWithHandle(contents) {
    var $list_item = $("<li>");
    var $contents = $("<div>").addClass("button").html(contents);

    var $handle = $("<span>");
    $handle.addClass("handle");

    $list_item.append($handle);
    $list_item.append($contents);

    return $list_item;
}




function $createDialog(title, $contents) {
    var $dialog = $("<div>");
    $dialog.attr("title", title);
    $dialog.html($contents);
    $dialog.dialog({
        "modal": true,
        "autoOpen": false
    });
    return $dialog;
}