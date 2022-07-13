import Api from "../controller/Api.controller.js"

class ComponentesDom {
    static modalEdit(id) {
        
        const divModal = document.createElement('div')
        divModal.className = "modal"
        divModal.id = id
        const divContainer = document.createElement('div')
        divContainer.className = "container"
        const divModalInner = document.createElement('div')
        divModalInner.className = "modal__inner"

        const divModalTitle = document.createElement('div')
        divModalTitle.className = "modal__title"
        const modalTitle = document.createElement('h2')
        modalTitle.innerText = "Editar hábito"
        const modalCloseBtn = document.createElement('button')
        modalCloseBtn.innerText = "X"
        modalCloseBtn.className = "modal__button--close"

        divModalTitle.append(modalTitle, modalCloseBtn)

        const modalForm = document.createElement('form')
        modalForm.className = "modal__form"
        const modalFormLabelTitle = document.createElement('label')
        modalFormLabelTitle.for = "title"
        modalFormLabelTitle.innerText = "Titulo"
        const modalFormInputTitle = document.createElement('input')
        modalFormInputTitle.type = "text"
        modalFormInputTitle.name = "title"
        modalFormInputTitle.id = "title"
        modalFormInputTitle.placeholder = "Digitar título"

        const modalFormLabelCategory = document.createElement('label')
        modalFormLabelCategory.for = "category"
        modalFormLabelCategory.innerText = "Categoria"
        const modalFormCategorySelect = document.createElement('select')
        modalFormCategorySelect.name = "category"
        modalFormCategorySelect.id = "category"
        const optionDefault = document.createElement('option')
        optionDefault.value = ""
        optionDefault.innerText = "Selecionar categoria"
        const optionHouse = document.createElement('option')
        optionHouse.value = "house"
        optionHouse.innerText = "Casa"
        const optionStudy = document.createElement('option')
        optionStudy.value = "study"
        optionStudy.innerText = "Estudo"
        const optionLeisure = document.createElement('option')
        optionLeisure.value = "leisure"
        optionLeisure.innerText = "Lazer"
        const optionWork = document.createElement("option")
        optionWork.value = "work"
        optionWork.innerText = "Trabalho"
        const optionHealth = document.createElement('option')
        optionHealth.value = "health"
        optionHealth.innerText = "Saúde"

        modalFormCategorySelect.append(optionDefault, optionHouse, optionStudy, optionLeisure, optionWork, optionHealth)

        const divModalStatus = document.createElement('div')
        divModalStatus.className = "modal__status"
        const modalStatusLabel = document.createElement('label')
        modalStatusLabel.for = "status"
        modalStatusLabel.innerText = "Status"
        const modalStatusInput = document.createElement('input')
        modalStatusInput.type = "checkbox"
        modalStatusInput.name = "status"
        modalStatusInput.id = "status"

        divModalStatus.append(modalStatusLabel, modalStatusInput)

        const divModalButtons = document.createElement('div')
        divModalButtons.className = "modal__buttons"
        const modalButtonsDelete = document.createElement('button')
        modalButtonsDelete.type = 'button'
        modalButtonsDelete.className = "modal__button modal__button--delete"
        modalButtonsDelete.innerText = "Excluir"
        const modalButtonsEdit = document.createElement('button')
        modalButtonsEdit.type = 'button'
        modalButtonsEdit.className = "modal__button modal__button--save"
        modalButtonsEdit.innerText = "Salvar alterações"

        divModalButtons.append(modalButtonsDelete, modalButtonsEdit)

        modalForm.append(modalFormLabelTitle, modalFormInputTitle, modalFormLabelCategory, modalFormCategorySelect, divModalStatus, divModalButtons)


        divModalInner.append(divModalTitle, modalForm)
        divContainer.append(divModalInner)
        divModal.append(divContainer)

        document.body.appendChild(divModal)

        const modalClose = document.querySelector('.modal__button--close').addEventListener('click', (e) => {
            const modal = document.querySelector('.modal')
            document.body.removeChild(modal)
        })

        const modalButtonDelete = document.querySelector('.modal__button--delete').addEventListener('click', (e) => {
            console.log(id)
            this.modalConfirmExclusion(id)
        })

    }

    static modalConfirmExclusion(id) {
        
        const divModal = document.createElement('div')
        divModal.className = "modal"
        const divContainer = document.createElement('div')
        divContainer.className = "container"
        const divModalInner = document.createElement('div')
        divModalInner.className = "modal__inner"

        const divModalTitle = document.createElement('div')
        divModalTitle.className = "modal__title"
        const modalTitle = document.createElement('h2')
        modalTitle.innerText = "Excluir hábito"
        const modalCloseBtn = document.createElement('button')
        modalCloseBtn.type = "button"
        modalCloseBtn.className = "modal__button--close"

        divModalTitle.append(modalTitle, modalCloseBtn)

        const divModalTexts = document.createElement('div')
        divModalTexts.className = "modal__texts"
        const modalTextsP = document.createElement('p')
        modalTextsP.className = "modal__confirmationText"
        modalTextsP.innerText = "Certeza que deseja excluir este hábito?"

        const modalPWarning = document.createElement('p')
        modalPWarning.className = "modal__waningText"
        modalPWarning.innerText = "Após executar essa ação não será possivel desfazer"

        divModalTexts.append(modalTextsP, modalPWarning)

        const divModalButtons = document.createElement('div')
        const buttonCancel = document.createElement('button')
        buttonCancel.type = 'button'
        buttonCancel.className = "modal__button modal__button--cancel"
        buttonCancel.innerText = "Cancelar"
        const buttonDelete = document.createElement('button')
        buttonDelete.type = 'button'
        buttonDelete.className = "modal__button modal__button--delete modal__button--red"
        buttonDelete.innerText = "Sim, excluir este hábito"

        divModalButtons.append(buttonCancel, buttonDelete)

        divModalInner.append(divModalTitle, divModalTexts, divModalButtons)
        divContainer.append(divModalInner)
        divModal.append(divContainer)

        document.body.appendChild(divModal)

        const modalClose = document.querySelector('.modal__button--cancel').addEventListener('click', (e) => {
            console.log(e.target.parentNode.parentNode.parentNode.parentNode)
            const modal = e.target.parentNode.parentNode.parentNode.parentNode

            document.body.removeChild(modal)

        })

        const modalConfirm = document.querySelector('.modal__button--red').addEventListener('click', (e) => {

            
            Api.deleteHabit(id)

            const modal = e.target.parentNode.parentNode.parentNode.parentNode

            document.body.removeChild(modal)

        })
    }
}

export default ComponentesDom