let rootNode = document.getElementById('root');

const actionList = document.getElementById('action-list');
const addActionBtn = document.querySelector('.add-action-icon');
const inputAction = document.querySelector('#action');
const button = document.querySelector('button');
const header = document.querySelector('.header');
const maxItem = 2;

button.setAttribute('disabled', 'disabled');

inputAction.addEventListener('input', function () {
    if (actionList.childNodes.length < maxItem) {
        button.disabled = false;
    }
});

function addNewAction() {
    if (actionList.childNodes.length !== maxItem) {
        button.disabled = false;
        if (inputAction.value !== '') {
            const divAction = document.createElement('div');
            const divOneAction = document.createElement('div');
            divOneAction.className = 'one-action';
            divAction.appendChild(divOneAction);
            const actionContent = document.createElement('div');
            actionContent.className = 'action-conent';
            divOneAction.appendChild(actionContent);
            const checkActionIcon = document.createElement('i');
            checkActionIcon.className = 'material-icons check-action-icon';
            const checkIcon = document.createTextNode('check_box_outline_blank');
            checkActionIcon.appendChild(checkIcon);
            actionContent.appendChild(checkActionIcon);
            const actionContentP = document.createElement('p');
            actionContentP.className = 'text-action'
            actionContentP.innerHTML = `${inputAction.value}`;
            actionContent.appendChild(actionContentP);
            const saveActionIcon = document.createElement('i');
            saveActionIcon.className = 'material-icons save-action-icon hide';
            const saveIcon = document.createTextNode('save');
            saveActionIcon.appendChild(saveIcon);
            actionContent.appendChild(saveActionIcon);
            const editActionIcon = document.createElement('i');
            editActionIcon.className = 'material-icons edit-action-icon';
            const editIcon = document.createTextNode('edit');
            editActionIcon.appendChild(editIcon);
            actionContent.appendChild(editActionIcon);
            const deleteActionIcon = document.createElement('i');
            deleteActionIcon.className = 'material-icons delete-action-icon';
            const deleteIcon = document.createTextNode('delete');
            deleteActionIcon.appendChild(deleteIcon);
            divOneAction.appendChild(deleteActionIcon);
            actionList.innerHTML += divAction.innerHTML;
            inputAction.value = '';

            if (actionList.childNodes.length === maxItem) {
                const notification = document.createElement('div');
                notification.className = 'notification';
                const text = document.createTextNode('Maximum item per list are created');
                notification.appendChild(text);
                header.appendChild(notification);
                button.setAttribute('disabled', 'disabled');
                inputAction.value = '';
            }
        }
    }
}
addActionBtn.addEventListener('click', addNewAction);

function eventHandler(e) {

    const editAction = e.target.parentNode.querySelector('.edit-action-icon');
    const checkAction = e.target.parentNode.querySelector('.check-action-icon');
    const saveAction = e.target.parentNode.querySelector('.save-action-icon');

    if (e.target.classList.contains('delete-action-icon')) {
        e.target.parentNode.remove();
        inputAction.value = '';
        if (actionList.childNodes.length < maxItem && actionList.childNodes.length !== 0) {
            if (header.querySelector('div').classList.contains('notification')) {
                header.querySelector('.notification').remove();
            }
        }
    } else if (e.target.classList.contains('edit-action-icon')) {
        const inputAction = document.createElement('input');
        const actionContentP = e.target.parentNode.querySelector('.text-action');
        inputAction.setAttribute('type', 'text');
        inputAction.setAttribute('value', actionContentP.innerHTML);
        inputAction.className = 'text-action';
        e.target.parentNode.replaceChild(inputAction, actionContentP);
        checkAction.className += ' hide';
        editAction.className += ' hide';
        saveAction.classList.remove('hide');
    } else if (e.target.classList.contains('save-action-icon')) {
        const inputAction = e.target.parentNode.querySelector('.text-action');
        checkAction.classList.remove('hide');
        editAction.classList.remove('hide');
        saveAction.classList += ' hide';
        const actionContentP = document.createElement('p');
        actionContentP.className = 'text-action';
        actionContentP.innerHTML = inputAction.value;
        e.target.parentNode.replaceChild(actionContentP, inputAction);
    } else if (e.target.classList.contains('check-action-icon')) {
        checkAction.textContent = 'done';
    }
}

actionList.addEventListener('click', eventHandler);