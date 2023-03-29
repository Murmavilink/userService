import { render } from "./render";

export const addUsers = () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const childrenlInput = document.getElementById('form-children');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if(!form.dataset.method) {
            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenlInput.checked,
                permissions: false
            };
    
            userService.addUSer(user).then(() => {
                userService.getUsers().then(users => {
                    render(users);
                    form.reset();
                });
            });
        }
    });

};