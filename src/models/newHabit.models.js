import Api from "../controller/Api.controller.js";

export default class NewHabit {
    constructor(habit_title, habit_description, habit_category) {
        this.habit_title = habit_title;
        this.habit_description = habit_description;
        this.habit_category = habit_category;
    };

    async createNewHabit() {
       return await Api.createHabit(this);
    };
};