import React from "react";
import Header from "../components/Header";
import styles from '../css/Sobre.module.css';

function Sobre() {
    return (
        <div >
            <Header />
            <div className={styles.aboutContainer}>
                
                <section >
                    <h1>Sobre mim</h1>
                    <p>Me chamo Crisna Bezerra, tenho 31 anos, sou formada em Arquitetura e Urbanismo e atualmente estou em transição de carreira para a área de tecnologia. Sou desenvolvedora Front-End júnior e no momento estou no módulo de Back-End do curso de Desenvolvimento Web na Trybe. Tenho o aprendizado contínuo e constante como base para a minha vida profissional. Meu objetivo é otimizar, facilitar e melhorar a vida das pessoas através da tecnologia.</p>
                </section>

                <section>
                    <h1>Conceitos e tecnologias utilizadas neste projeto</h1>
                    <p>Este projeto tem como objetivo o desenvolvimento de um sistema com 4 telas:</p>
                    <ul>
                        <li>Tela de Login</li>
                        <li>Tela de Listagem de Escolas</li>
                        <li>Tela de Cadastro de Novas Escolas</li>
                        <li>Tela com informações gerais</li>
                    </ul>
                    <p>Foi desenvolvida uma aplicação com Javascript, utilizando React, e CSS puro para estilização. Para gerenciamento de estado utilizei React Hooks. Conforme orientação, optei por fazer uso do localStorage para armazenamento de dados entre componentes, mas também seria possível utilizar o Context para armazenamento de estado global. Organizei a aplicação por componentes e páginas, buscando sempre refatorar quando necessário, movendo códigos extensos para componentes separados objetivando um código mais limpo. Utilizei CSS Modules para estilização, criando um arquivo CSS para cada componente, buscando uma melhor organização e evitando problemas com side effects.</p>
                </section>

                <section>
                    <h1>Desafios no desenvolvimento</h1>
                    <p>- Tive algumas dificuldades com a API no início, não havia enfrentado problemas com CORS antes, mas conforme orientação utilizei a lib CORS ANYWHERE para solucionar este problema. Além disso, durante o desenvolvimento é normal fazer várias requisições à API conforme vamos testando a aplicação, o que às vezes levava ao erro de <i>too many requests</i>, mas normalizava após um tempo.</p>

                    <p>- Outra dificuldade foi com a estilização e design responsivo, sendo provavelmente a parte que levei mais tempo para desenvolver. Considero que foi uma ótima oportunidade para praticar o CSS, uma vez que tenho menos experiência com essa área.</p>

                    <p>- Não considero uma dificuldade, já que devemos sempre estar melhorando nosso código, mas fiz algumas refatorações quando senti que um componente estava muito grande ou alguma função muito complexa. Acredito que até o final do prazo de desenvolvimento a versão final entregue ainda poderia ser otimizada, mas busquei dar o meu melhor dentro do meu conhecimento atual e dentro do prazo exigido.</p>
                </section>
                
                <section>
                    <h1>Sugestões</h1>
                    <p>Tive uma experiência bastante engrandecedora no desenvolvimento desse projeto. A proposta estava muito bem estruturada, o prazo dado era viável e a empresa se mostrou solícita durante todo o processo. Gostaria de agradecer à empresa pela oportunidade e espero ter cumprido o objetivo do desafio satisfatoriamente.</p>
                </section>
            </div>
                <p id={ styles.title }>Este projeto foi desenvolvido para a etapa de Desafio Tecnico do processo seletivo para vaga de Desenvolvedor Front-End da empresa Mobimark.</p>
        </div>
    )
}

export default Sobre;