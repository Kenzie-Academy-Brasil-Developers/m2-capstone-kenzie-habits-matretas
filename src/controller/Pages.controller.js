import Api from "./Api.controller.js"
import ComponentesDom from "../models/ComponentesDom.models.js";

class Pages {
    static async renderAllHabits() {
        const response = await Api.readAllHabits()
        const tBody = document.querySelector('tbody')
        tBody.innerHTML = ""
        response.forEach((habit) => {
            const newTr = document.createElement('tr')
            newTr.className = "tableAffairs__tr--data"
            const status = document.createElement('td')
            const statusInput = document.createElement('input')
            statusInput.type = "checkbox"
            statusInput.className = "ex"
            statusInput.checked = habit.habit_status
            statusInput.id  = habit.habit_id;
            statusInput.addEventListener("click", async (e) => {
                console.log(e.target.id);
                console.log(statusInput.checked);

                const habitId = e.target.id;

                const response = await Api.completeHabit(habitId);

                if (response.message == "hábito concluído com sucesso" && statusInput.checked) {
                    document.body.append(ComponentesDom.modalSuccess());
                    const text = document.querySelector(".modal__warningText");
                    text.innerText = `${response.message}`;

                } else if(statusInput.checked == false){
                    document.body.append(ComponentesDom.modalSuccess());
                    const text = document.querySelector(".modal__warningText");
                    text.innerText = "Hábito alterado para inconcluido.";
                };
            })
            status.appendChild(statusInput)
            
            
            const title = document.createElement('td')
            title.innerText = habit.habit_title

            const edit = document.createElement('td')
            edit.className = "tableAffairs__edit  "
            const editBtn = document.createElement('button')
            editBtn.innerText = "..."
            editBtn.className = "tableAffairs__edit--button"
            editBtn.id = habit.habit_id

            edit.appendChild(editBtn)

            newTr.append(status, title, edit)

            
            tBody.appendChild(newTr)
        })
    }

    
}

export default Pages


