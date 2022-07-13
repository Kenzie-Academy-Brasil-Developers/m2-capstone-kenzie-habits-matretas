import Api from "./Api.controller.js"

class Pages {
    static async renderHabits() {
        const response = await Api.readAllHabits()
        response.forEach((habit) => {
            const newTr = document.createElement('tr')
            const status = document.createElement('td')
            const statusInput = document.createElement('input')
            statusInput.type = "checkbox"
            statusInput.checked = habit.habit_status
            status.appendChild(statusInput)
            
            const title = document.createElement('td')
            title.innerText = habit.habit_title

            const edit = document.createElement('td')
            const editBtn = document.createElement('button')
            editBtn.innerText = "..."

            edit.appendChild(editBtn)

            newTr.append(status, title, edit)

            const tBody = document.querySelector('tbody')
            tBody.appendChild(newTr)
        })
    }
}

export default Pages