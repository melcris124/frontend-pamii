import './style.css'


(async () => {
 
  const ionicPath = '/ionic.esm.js';
  await import(/* @vite-ignore */ ionicPath);
})();

import '@ionic/core/css/core.css';


import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

// PAGES GERAIS
import './pages/login/LoginPage.js';
import './pages/home/HomePage.js';

// PRODUTO (3 Páginas)
import './pages/produto/ListProdutoPage.js';
import './pages/produto/CadProdutoPage.js';
import './pages/produto/EditProdutoPage.js';


import './pages/usuario/ListUsuarioPage.js';
import './pages/usuario/CadUsuarioPage.js';
import './pages/usuario/EditUsuarioPage.js';