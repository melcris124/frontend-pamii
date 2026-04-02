import './UsuarioPage.css'
import { createHeader } from './shared/Header.js'
import { logout } from './shared/util.js';

const pageName = 'Usuários';

class ListUsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        this.innerHTML = `
            ${createHeader(pageName)}
            <ion-content>
                <div class="list-usuario"></div>
            </ion-content>
        `;
        
        this.querySelector('#logout-btn').addEventListener('click', logout);

        // Dados de exemplo com ID e Perfil como números
        const usuarios = [
            { "id": 1, "nome": "Anderson Silva", "login": "anderson.prof", "perfil": 1 },
            { "id": 2, "nome": "Maria Oliveira", "login": "maria.user", "perfil": 2 }
        ];

        this.renderUsuarios(usuarios);
    }

    renderUsuarios(usuarios) {
        const container = this.querySelector(".list-usuario");
        const items = usuarios.map(u => `
            <ion-item>
                <ion-label>
                    <h2 style="font-weight: bold;">${u.nome}</h2>
                    <p>Login: ${u.login}</p>
                    <p>ID: ${u.id} | Perfil: ${u.perfil}</p>
                </ion-label>
                <ion-buttons slot="end">
                    <ion-button fill="clear"><ion-icon name="create-outline"></ion-icon></ion-button>
                    <ion-button fill="clear" color="danger"><ion-icon name="trash-outline"></ion-icon></ion-button>
                </ion-buttons>
            </ion-item>`).join('');
        container.innerHTML = `<ion-list>${items}</ion-list>`;
    }
}
customElements.define('list-usuario-page', ListUsuarioPage);