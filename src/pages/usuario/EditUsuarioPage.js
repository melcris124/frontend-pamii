import './UsuarioPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Editar Usuário';

class EditUsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        this.innerHTML = `
            ${createHeader(pageName)}
            <ion-content class="ion-padding">
                <form id="form-edit">
                    <ion-list>
                        <ion-item><ion-input type="number" value="1" label="ID" label-placement="floating" readonly></ion-input></ion-item>
                        <ion-item><ion-input type="text" value="Anderson Silva" label="Nome" label-placement="floating"></ion-input></ion-item>
                        <ion-item><ion-input type="text" value="anderson.prof" label="Login" label-placement="floating"></ion-input></ion-item>
                        <ion-item><ion-input type="password" value="senha123" label="Senha" label-placement="floating"></ion-input></ion-item>
                        <ion-item><ion-input type="number" value="1" label="Perfil" label-placement="floating"></ion-input></ion-item>
                    </ion-list>
                    <div class="ion-padding">
                        <ion-button expand="block" type="submit" class="ion-margin-top">Confirmar Edição</ion-button>
                        <ion-button expand="block" color="danger" id="btn-cancelar">Cancelar</ion-button>
                    </div>
                </form>
            </ion-content>
        `;
        this.querySelector('#logout-btn').addEventListener('click', logout);
        this.querySelector('#btn-cancelar').addEventListener('click', () => window.history.back());
    }
}
customElements.define('edit-usuario-page', EditUsuarioPage);