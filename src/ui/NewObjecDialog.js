class NewObjectDialog {

    constructor() {
        this.$new_object_dialog = $createDialog("Add object", "Select the type of object to add");

        this.$options_list = $createList("span");
        this.$new_object_dialog.append(this.$options_list);
        this.$options_list.append(this.$createOption("👻", "Sprite"));
        this.$options_list.append(this.$createOption("🏃‍♂️", "Animated sprite"));
        this.$options_list.append(this.$createOption("🏻", "Tiled sprite"));
        this.$options_list.append(this.$createOption("📢", "Sound emitter"));


        this.$new_object_dialog.dialog("widget").append(this.$options_list);
    }


    open() {
        this.$new_object_dialog.dialog("open");
    }


    populate() {

    }


    $createOption(icon, name) {
        var $icon = $("<span>");
        $icon.text(icon);

        var $label = $("<span>");
        $label.text(name);

        var $handle = $("<span>");
      
        $handle.addClass("handle");
        $handle.addClass("ui-icon  ui-icon-arrow-2-n-s");

        

        return $createEmptyListItem(
            $handle.add($createButton(icon, name))
            // $createCustomButton(icon, name)
        )
    }
}