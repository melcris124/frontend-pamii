import './UsuarioPage.css';
import { createHeader } from '../../shared/Header.js';
import { logout } from '../../shared/util.js';

const pageName = 'Usuários';

class ListUsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        this.innerHTML = `
            ${createHeader(pageName)}
            <ion-content class="ion-padding">
                <div class="list-usuario"></div>
            </ion-content>
        `;
        
        const logoutBtn = this.querySelector('#logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', logout);
        }

    
        const usuarios = [
            { "id": 1, "nome": "Anderson Silva", "login": "anderson.user", "perfil": 1 },
            { "id": 2, "nome": "Mel Cristina", "login": "mel.user", "perfil": 2 },
            { "id": 3, "nome": "Maria Oliveira", "login": "maria.user", "perfil": 3 }
        ];


        this.renderUsuarios(usuarios);
    }

    renderUsuarios(usuarios) {
        const container = this.querySelector(".list-usuario");
        if (!container) return;

        const items = usuarios.map(u => `
            <ion-item>
                <ion-label>
                    <h2 style="font-weight: bold;">${u.nome}</h2>
                    <p>Login: ${u.login}</p>
                    <p>ID: ${u.id} | Perfil: ${u.perfil}</p>
                </ion-label>
                <ion-buttons slot="end">
                    <ion-button fill="clear">
                        <ion-icon name="create-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" color="danger">
                        <ion-icon name="trash-outline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-item>`).join('');

        container.innerHTML = `<ion-list>${items}</ion-list>`;
    }
}

// Registro do componente
if (!customElements.get('list-usuario-page')) {
    customElements.define('list-usuario-page', ListUsuarioPage);
}