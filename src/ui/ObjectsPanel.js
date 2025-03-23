class ObjectsPanel {

    constructor() {
        this.new_objects_dialog = new NewObjectDialog();

        
        this.$container = $createPanel("📦",  "Objects", 300, "100%");
        
        this.$new_button = $createButton("+", "Add object" , "start");
        this.$container.widget().append(this.$new_button);
        this.$new_button.on("click", () => {
            this.new_objects_dialog.open();
        })

        


        this.$objects_list = new $createList(".handle");
        this.$container.widget().append(this.$objects_list);
        this.$objects_list.append($createDefaultListItemWithHandle("First"))
        this.$objects_list.append($createDefaultListItemWithHandle("Second"))
        this.$objects_list.append($createDefaultListItemWithHandle("3"))
        this.$objects_list.append($createDefaultListItemWithHandle("45"))
        this.$objects_list.append($createDefaultListItemWithHandle("dfafdsaf"))
        
        
    }
  
    display($container) {
        $container.append(this.$container);
    }


}
