import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
 
export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.navbar}></View>
 
      <View style={styles.img}>
        <Image
          style={styles.imagem}
          source={require('./assets/alan.jpg')}
        />
      </View>
 
      <View style={styles.container}>
        <Text style={styles.titulo}>Introdução</Text>
        <Text style={styles.texto}>
          Alan Turing (1912-1954) foi um matemático e criptógrafo inglês considerado atualmente como o pai da computação, uma vez que, por meio de suas ideias, foi possível desenvolver o que chamamos hoje de computador. Turing também ficou muito conhecido como um dos responsáveis por decifrar o código utilizado pelas comunicações nazistas durante a Segunda Guerra Mundial.
        </Text>
        <Text style={styles.texto}>
          Por meio do seu trabalho, foi desenvolvida uma máquina conhecida como “bomba eletromecânica” (The Bombe, em inglês), que decifrou o código da máquina Enigma utilizado pelos alemães, e permitiu que os Aliados tivessem acesso a informações privilegiadas ao longo da guerra. Turing morreu em 1954, provavelmente tendo cometido suicídio.
        </Text>
 
        <Text style={styles.titulo}>Invenção</Text>
        <Text style={styles.texto}>
          Um dos trabalhos de Turing foi “On Computable Numbers” (1936), com uma aplicação ao Entscheidungsproblem (um problema da lógica simbólica que consiste em achar um algoritmo genérico para determinar se um dado enunciado da lógica de primeira ordem pode ser provado).
        </Text>
        <Text style={styles.texto}>
          Em seu artigo revolucionário que inaugurava os fundamentos da computação, Turing concluiu que seria possível criar uma máquina automatizada que materializasse fisicamente a lógica humana e solucionasse qualquer cálculo representado no formato de um algoritmo.
        </Text>
        <Text style={styles.texto}>
          Surgiram aí as raízes do primeiro computador: um sistema que, sozinho, realizaria tarefas determinadas pelo programa com o qual ele está equipado. A agora chamada de “Máquina de Turing” se tornou um protótipo dos computadores modernos.
        </Text>
 
        <Text style={styles.titulo}>Vida Pessoal</Text>
        <Text style={styles.texto}>
          Alan Mathison Turing nasceu no dia 23 de junho de 1912, em um bairro residencial de Londres, capital da Inglaterra. Seu pai, Julius Mathison Turing, era um oficial que trabalhava na Madras Presidency, uma região administrativa criada pelos britânicos na Índia britânica (na época, a Índia era um território dependente da Inglaterra). Sua mãe, Ethel Sara Stoney, era filha de um engenheiro-chefe que também trabalhava nessa região.
        </Text>
        <Text style={styles.texto}>
          Durante sua infância, Turing estudou em diversas escolas, tais como Hazelhurst Preparatory School e Sherborne School. Na Sherborne ingressou quando tinha 13 anos, e um episódio peculiar marcou sua entrada nela. No seu primeiro dia de aula, aconteceu uma greve geral na Grã-Bretanha que o impediu ir de trem. Turing resolveu, em sua bicicleta, percorrer os 100 km que separavam a escola de sua casa.
        </Text>
        <Text style={styles.texto}>
          Alguns estudos feitos sobre a vida de Turing mostram que, em Sherborne, ele logo demonstrou grande interesse pela matemática, e, apesar de ser reconhecido atualmente como um gênio, algumas de suas notas eram apenas regulares. Em Sherborne, conheceu Christopher Morcom, o qual muitos acreditam ter sido seu primeiro amor. Morcom, porém, faleceu em 1930, em decorrência de tuberculose bovina. A essa altura, Turing tinha 18 anos de idade.
        </Text>
        <Text style={styles.texto}>
          Com 19 anos, Turing foi admitido no King’s College de Cambridge, onde se graduou em matemática, com honras, em 1934. No ano seguinte, frequentou o curso de Max Newman sobre os fundamentos da matemática.
        </Text>
        <Text style={styles.texto}>
          Em 1936, Turing ingressou no curso de graduação da Universidade de Princeton, quando publicou diversos trabalhos sob a supervisão de Church. Em 1938 obteve seu PhD e retornou para a Inglaterra.
        </Text>
 
        <Text style={styles.titulo}>Legado</Text>
        <Text style={styles.texto}>
          O maior legado deixado pelo matemático Alan Turing é, sem dúvidas, a invenção da máquina de Turing. Esta é um modelo teórico que pode ser usado para implementar todos os aspectos lógicos e matemáticos de um computador, independentemente de como ele venha a ser construído (mecânica ou eletronicamente, por exemplo).
        </Text>
        <Text style={styles.texto}>
          A máquina de Turing foi criada em 1936, muito tempo antes da invenção dos computadores modernos. A maior parte dos nossos dispositivos eletrônicos, como celulares e computadores, são máquinas programáveis, que operam de acordo com os fundamentos da máquina de Turing. As calculadoras, por exemplo, operam como as primeiras máquinas de Turing, programadas para realizar cálculos simples.
        </Text>
        <Text style={styles.texto}>
          Como citado, a participação de Turing na decifração da Enigma e na construção da bomba eletromecânica contribuiu para acelerar o final da Segunda Guerra Mundial, sendo responsável por salvar milhões de vidas. Além disso, nesse período, as tecnologias de criptografia e computação sofreram grandes avanços.
        </Text>
        <Text style={styles.texto}>
          Além de ter construído as bases da computação moderna, Turing também desenvolveu os primeiros testes capazes de distinguir a inteligência artificial da inteligência humana. Atualmente, os testes de Turing são usados em diversos sites e dispositivos, promovendo maior segurança para os seus usuários.
        </Text>
 
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Fundo de tom claro marrom (bege)
    padding: 20,
    paddingTop: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  scroll: {
    backgroundColor: '#FFF8E1', // Fundo bege claro para o ScrollView
  },
  navbar: {
    height: 50,
    backgroundColor: '#3E2723', // Tom marrom escuro para a barra de navegação
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B4F34', // Tom marrom médio para os títulos
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#3E2723', // Tom de marrom escuro para o texto
    lineHeight: 24,
    marginBottom: 15,
  },
});