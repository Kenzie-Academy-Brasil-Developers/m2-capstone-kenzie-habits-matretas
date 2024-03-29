import Api from "../controller/Api.controller.js"
import Pages from "../controller/Pages.controller.js"
import NewHabit from "./newHabit.models.js";

class ComponentesDom {
    static async modalEdit(id) {

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
        const modalDescriptionLabel = document.createElement('label')
        modalDescriptionLabel.for = "description"
        modalDescriptionLabel.innerText = "Descrição"
        const modalDescriptionInput = document.createElement('input')
        modalDescriptionInput.type = "text"
        modalDescriptionInput.name = "description"
        modalDescriptionInput.id = "description"
        modalDescriptionInput.placeholder = "Digitar Descrição"

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

        modalForm.append(modalFormLabelTitle, modalFormInputTitle, modalDescriptionLabel, modalDescriptionInput ,modalFormLabelCategory, modalFormCategorySelect, divModalStatus, divModalButtons)


        divModalInner.append(divModalTitle, modalForm)
        divContainer.append(divModalInner)
        divModal.append(divContainer)

        document.body.appendChild(divModal)

        const modalClose = document.querySelector('.modal__button--close').addEventListener('click', (e) => {
            const modal = document.querySelector('.modal')
            document.body.removeChild(modal)
        })

        const modalButtonDelete = document.querySelector('.modal__button--delete').addEventListener('click', (e) => {
            this.modalConfirmExclusion(id)
        })

        
        
        const modalEditButton = divModal.children[0].children[0].children[1].children[7].children[1]
        console.log(modalEditButton)
        modalEditButton.addEventListener('click', async (e) => {

            
            
            const form = divModal.children[0].children[0].children[1].children
            console.log(form)
            let tituloHabito
            let descricao
            let categoria

            for(let i = 0; i < form.length; i++) {
                if(i === 1) {
                    tituloHabito = form[i].value
                    
                }
                if(i === 3) {
                    descricao = form[i].value
                   
                }

                if(i === 5) {
                    categoria = form[i].options[form[i].selectedIndex].text
                    
                }
               
                
            }
            console.log(tituloHabito)
            let data = {
                "habit_title" : tituloHabito,
                "habit_description": descricao,
                "habit_category": categoria
            }

            await Api.updateHabit(data, id)

            location.reload()
        })

    }

    static async modalConfirmExclusion(id) {

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

        const modalConfirm = document.querySelector('.modal__button--red').addEventListener('click', async (e) => {

            await Api.deleteHabit(id)
            

            let modal = e.target.parentNode.parentNode.parentNode.parentNode

            document.body.removeChild(modal)

            modal = document.querySelector('.modal')

            document.body.removeChild(modal)

            location.reload()


        })
    }

    static modalCreateHabit() {
        const divModal = document.createElement('div')
        divModal.className = "modal"
        const divContainer = document.createElement('div')
        divContainer.className = "container"
        const divModalInner = document.createElement('div')
        divModalInner.className = "modal__inner"

        const divModalTitle = document.createElement('div')
        divModalTitle.className = "modal__title"
        const modalTitle = document.createElement('h2')
        modalTitle.innerText = "Criar hábito"
        const modalCloseBtn = document.createElement('button')
        modalCloseBtn.innerText = "X"
        modalCloseBtn.className = "modal__button--close"

        divModalTitle.append(modalTitle, modalCloseBtn)

        const modalForm = document.createElement('form')
        modalForm.className = "modal__form"
        const modalFormLabelTitle = document.createElement('label')
        modalFormLabelTitle.for = "title"
        modalFormLabelTitle.innerText = "Título"
        const modalFormInputTitle = document.createElement('input')
        modalFormInputTitle.type = "text"
        modalFormInputTitle.name = "title"
        modalFormInputTitle.id = "title"
        modalFormInputTitle.placeholder = "Digitar título"

        const modalFormLabelDescription = document.createElement("label");
        modalFormLabelDescription.for = "description";
        modalFormLabelDescription.innerText = "Descrição";

        const modalFormTextAreaDescription = document.createElement("textarea");
        modalFormTextAreaDescription.name = "description";
        modalFormTextAreaDescription.setAttribute("id", "description");
        modalFormTextAreaDescription.cols = "30";
        modalFormTextAreaDescription.rows = "3";
        modalFormTextAreaDescription.placeholder = "Descreva o hábito...";


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

        const modalButtonsDelete = document.createElement('button')
        modalButtonsDelete.type = 'button'
        modalButtonsDelete.className = "modal__button modal__button--insert"
        modalButtonsDelete.innerText = "Inserir"
        
        modalButtonsDelete.addEventListener("click", async () => {
            const habit = new NewHabit(modalFormInputTitle.value, modalFormTextAreaDescription.value, modalFormCategorySelect.value);

            const response =  habit.createNewHabit();

            if (response.habit_id) {

                document.body.append(this.modalSuccess());
                const text = document.querySelector(".modal__warningText");
                text.innerText = "Novo Hábito Criado Com Sucesso!"
            
            } else if (response.message) {
                document.body.append(this.modalFailure());
                const text = document.querySelector(".modal__warningText");
                text.innerText = `${response.message}`;
            };
        })

        modalForm.append(modalFormLabelTitle, modalFormInputTitle, modalFormLabelDescription, modalFormTextAreaDescription, modalFormLabelCategory, modalFormCategorySelect, modalButtonsDelete)


        divModalInner.append(divModalTitle, modalForm)
        divContainer.append(divModalInner)
        divModal.append(divContainer)

        document.body.appendChild(divModal)

        const modalClose = document.querySelector('.modal__button--close').addEventListener('click', (e) => {
            const modal = document.querySelector('.modal')
            document.body.removeChild(modal)
        })
    }

    static modalEditProfile(){
        const divModalProfile = document.createElement('div')
        const divContainerProfile = document.createElement('div')
        const divInnerProfile = document.createElement('div')
        const divTitleProfile = document.createElement('div')

        divModalProfile.setAttribute('id', 'modal')
        divContainerProfile.classList.add('container')
        divInnerProfile.classList.add('modal__inner')
        divTitleProfile.classList.add('modal__title')

        const h2Profile = document.createElement('h2')
        const buttonProfile = document.createElement('button')

        h2Profile.classList.add('modal__title--h2')
        buttonProfile.setAttribute('id', 'modal__button--close')
        h2Profile.innerText = 'Editar Perfil'
        buttonProfile.type = 'Button'
        buttonProfile.innerText = 'X'

        const formProfile = document.createElement('form')
        const labelProfileName = document.createElement('label')
        const inputProfileName = document.createElement('input')
        const labelProfileImg = document.createElement('label')
        const inputProfileImg = document.createElement('input')
        const buttonFormProfile = document.createElement('button')

        formProfile.classList.add('modal__form')
        labelProfileName.innerText = 'Nome'
        inputProfileName.setAttribute('id', 'name')
        inputProfileName.type = 'text'

        labelProfileImg.innerText = 'URL da imagem do perfil'
        inputProfileImg.setAttribute('id', 'imageUrl')
        inputProfileImg.type = 'url'

        buttonFormProfile.type = 'button'
        buttonFormProfile.classList.add('modal__button--save')
        buttonFormProfile.innerText = 'Salvar alterações'
        buttonFormProfile.addEventListener("click", async () => {
            const newImg = inputProfileImg.value;

            const response = await Api.updateProfile(newImg);

            if (response.message) {
                document.body.append(this.modalFailure());
                const text = document.querySelector(".modal__warningText");
                text.innerText = `${response.message}`;

            } else {
                document.body.append(this.modalSuccess());
                const text = document.querySelector(".modal__warningText");
                text.innerText = `Imagem de Perfil Alterada com Sucesso!`;
            };;
        });

        divModalProfile.append(divContainerProfile)
        divContainerProfile.append(divInnerProfile)
        divInnerProfile.append(divTitleProfile, formProfile)
        divTitleProfile.append(h2Profile, buttonProfile)
        formProfile.append(labelProfileName, inputProfileName, labelProfileImg, inputProfileImg, buttonFormProfile)
        document.body.appendChild(divModalProfile)

        //CODIGO PARA ABRIR E FECHAR MODAL DE EDITAR PERFIL

        const btnAbrirModal = document.getElementById("navMenu__button--editar")

        function chamarModalEditar (){
            const modalEditar = document.getElementById("modal")
            modalEditar.classList.toggle("active")
        }

        btnAbrirModal.addEventListener("click", chamarModalEditar)

        const btnFecharModal = document.getElementById("modal__button--close")

        btnFecharModal.addEventListener("click", chamarModalEditar)

    }

    static modalSuccess() {

        const div = document.createElement("div");
        const container = document.createElement("div");
        const modalInner = document.createElement("div");
        const modalTitle = document.createElement("div");
        const h2 = document.createElement("h2");
        const button = document.createElement("button");
        const p = document.createElement("p");

        div.classList.add("modal");
        container.classList.add("container");
        modalInner.classList.add("modal__inner");
        modalTitle.classList.add("modal__title");
        modalTitle.innerText = "Tudo OK :)";
        button.classList.add("modal__button--close");
        button.type = "button";
        button.addEventListener("click", () => {
            document.body.removeChild(div);
        })
        button.innerText = "X";
        p.classList.add("modal__warningText");

        modalTitle.append(h2, button);
        modalInner.append(modalTitle, p);
        container.append(modalInner);
        div.append(container);

        return div;
    };

    static modalFailure() {
        
        const div = document.createElement("div");
        const container = document.createElement("div");
        const modalInner = document.createElement("div");
        const modalTitle = document.createElement("div");
        const h2 = document.createElement("h2");
        const button = document.createElement("button");
        const p = document.createElement("p");

        div.classList.add("modal");
        container.classList.add("container");
        modalInner.classList.add("modal__inner");
        modalTitle.classList.add("modal__title");
        modalTitle.innerText = "Ops, ocorreu um erro :(";
        button.classList.add("modal__button--close");
        button.type = "button";
        button.innerText = "X";
        button.addEventListener("click", () => {
            document.body.removeChild(div);
        })
        p.classList.add("modal__warningText");

        modalTitle.append(h2, button);
        modalInner.append(modalTitle, p);
        container.append(modalInner);
        div.append(container);

        return div;
    };
}

export default ComponentesDom