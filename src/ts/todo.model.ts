/**
 * Created by jgluhov on 07/01/16.
 */
export class TodoModel {
    constructor(
        public title: string = "",
        public status: string = "started"
    ) {}
    toggle() {
        this.status =
            this.status == "started"
                ? "completed"
                : "started";
    }
}