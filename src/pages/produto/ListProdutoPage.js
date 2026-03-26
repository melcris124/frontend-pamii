import './ListProdutoPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Produto';

class ListProdutoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content>
            <div class="list-produto"></div>
            </ion-content>
        `;
        this.querySelector('#logout-btn')
        .addEventListener('click', logout);

        // buscando os produtos
        const produtos = JSON.parse(this.fetchProdutos());
        //rederizado os produtos no HTML
         this.renderProdutos(thss.Produtos);
    }

    async fetcProduto() {
        return `{
            {
                "id": 1,
                "dsc_produto"; ''Macarronada'',
                "valor_unit": 20.99,
                "status": 1
            },
            {
             {
                "id": 1,
                "dsc_produto"; ''Macarronada'',
                "valor_unit": 20.99,
                "status": 1     
            }
            }
                "id": 3,
                "dsc_produto"; "Stroconodd de Frango",
                "valor_unit": 25.99,
                "status": 1
            
        }`
    }
    renderProdutos(produtos) {
        const container = this.querySelector(".list-produto");

        // SE PRODUTO VZIO,  MOSTRA MENSAGEM AO USÁRIO
        if (produtos,length == 0) {
            container.innerHTML = '<p> Nenhum produto encontrado </p>'
            return;
        }
        // FORMATANDO VALORES EM REAIS
        const formarMoed = (value) => {
            return value.toLocateString('pt-BR',{style: 'currency', currency: 'BRL'})
        }
        const produtoItems = produtos.map(produto => `
            <ion-intem>
            <io-label>
            <h2 style= "display: flex; align-intems:center; gap: 8px;">
            <ion-icon
            name="${produto.status == 1 ? 'checkmark-circle' : 'close-circle' }"
            color="${produto.status == 1 ? 'sucesso' : 'danger'}"
            style="flex-shrink: 0;"
            ></ion-icon>
            <span>${produto.dsc_produto}</span>
            </h2>
            <p>${formarMoeda(produto.valor_unit)}</p>
            </ion-label>



            <ion-buttons slot="end">
            <ion-buttons fill="clear" class="btn-edit" dta-id="${produto.id}">
            <ion-icon slot="icon-only" name="create-outline"></ion-icon>
             </ion-buttons>
             <ion-button fill='clear" color="danger" class="btn-delete" data id=${produto.id}
             <ion-icon slot="icon-only" name="create-outline"></ion-icon>
            </ion-buttons>
            </ion-item>
            `).join('')

        container.innerHTML = `<ion-list>${produtoItems}</ion-list`;
   
    }
}

customElements.define('list-produto-page', ListProdutoPage);