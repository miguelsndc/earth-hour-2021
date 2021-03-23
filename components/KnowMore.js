import React from 'react';
import styles from '../styles/KnowMore.module.css';

export default function KnowMore() {
  return (
    <section className={styles.KnowMore}>
      <h1>Mas o que é ?</h1>
      <p>
        A Hora do Planeta surgiu em 2007 em Sydney, na Austrália, e logo ganhou
        o mundo. É uma ação simbólica: ao apagar as luzes uma vez por ano, por
        uma hora, você transmite a mensagem de que se importa e quer agir em
        prol do meio ambiente
      </p>
      <div>
        <p>
          Todos os anos, milhões de pessoas se unem ao movimento, que tem como
          objetivo conscientizar indivíduos, empresas e poder público a respeito
          dos dos desafios ambientais da atualidade, incluindo a crise climática
          e a perda da biodiversidade, e de como todos nós podemos fazer algo
          para reverter esse quadro e renovar nossa relação com a natureza. No
          Brasil, a Hora do Planeta acontece há 13 anos! Não deixe de
          participar.{' '}
        </p>
      </div>
    </section>
  );
}
