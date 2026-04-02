import './UsuarioPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Cadastrar Usuário';

class CadUsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        this.innerHTML = `
            ${createHeader(pageName)}
            <ion-content class="ion-padding">
                <form id="form-usuario">
                    <ion-list>
                        <ion-item><ion-input type="number" name="id" label="ID (Número)" label-placement="floating" required></ion-input></ion-item>
                        <ion-item><ion-input type="text" name="nome" label="Nome Completo" label-placement="floating" required></ion-input></ion-item>
                        <ion-item><ion-input type="text" name="login" label="Login / Usuário" label-placement="floating" required></ion-input></ion-item>
                        <ion-item><ion-input type="password" name="senha" label="Senha" label-placement="floating" required></ion-input></ion-item>
                        <ion-item><ion-input type="number" name="perfil" label="Perfil (Número)" label-placement="floating" required></ion-input></ion-item>
                    </ion-list>
                    <div class="ion-padding">
                        <ion-button expand="block" type="submit" class="ion-margin-top">Salvar Usuário</ion-button>
                        <ion-button expand="block" color="danger" id="btn-cancelar">Cancelar</ion-button>
                    </div>
                </form>
            </ion-content>
        `;
        this.querySelector('#logout-btn').addEventListener('click', logout);
        this.querySelector('#btn-cancelar').addEventListener('click', () => window.history.back());
    }
}
customElements.define('cad-usuario-page', CadUsuarioPage);