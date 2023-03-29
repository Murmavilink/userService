import { render } from "./render";


export const removeUsers = () => {
    const tbody = document.getElementById('table-body');

    tbody.addEventListener('click', (e) => {
        
        if(e.target.closest('.btn-remove')) {
            const id = e.target.closest('tr').dataset.key;

            userService.removeUser(id).then(res => {
                console.log(res);
                userService.getUsers().then(users => {
                    render(users);
                });
            });
        }

    });

};