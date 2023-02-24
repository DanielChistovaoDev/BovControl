# TypeScript Example

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

```sh
npx create-react-native-app -t with-typescript
```

TypeScript is a superset of JavaScript which gives you static types and powerful tooling in Visual Studio Code including autocompletion and useful inline warnings for type errors.

## 🚀 How to use

#### Creating a new project

- Install the CLI: `npm i -g expo-cli`
- Create a project: `npx create-react-native-app -t with-typescript`
- `cd` into the project

### Adding TypeScript to existing projects

- Create a blank TypeScript config: `touch tsconfig.json`
- Run `yarn start` or `npm run start` to automatically configure TypeScript
- Rename files to TypeScript, `.tsx` for React components and `.ts` for plain typescript files

> 💡 You can disable the TypeScript setup in Expo CLI with the environment variable `EXPO_NO_TYPESCRIPT_SETUP=1 expo start`

## 📝 Notes

- [Expo TypeScript guide](https://docs.expo.dev/versions/latest/guides/typescript/)

ABOUT THE CHALLENGE:
* O fazendeiro poderá gerenciar seus checklists de forma online ou offline.

* Aplicação deve permitir que checklists sejam criados ou atualizados independente da sua conexão de internet;

* Aplicação deve conter uma tela inicial, contendo todos os checklists (contendo o nome do fazendeiro, nome e cidade da fazenda, além da data de criação do checklist) já cadastrados na API. Uma tela para visualizar todas as informações do checklist selecionado. Outra tela para cadastro do checklist, e por fim, outra tela para atualização dos dados.

* Para criação do checklist será necessário fornecer os seguintes dados: Nome do fazendeiro, nome e cidade da fazenda, nome do supervisor, tipo do checklist (BPA, Antibiótico, BPF), quantidade de leite produzida no mês, quantidade de cabeça de gado e um booleano informando se teve supervisão no mês em curso (na criação deve registrar a data de criação e atualização para histórico).

* Para atualização do checklist será necessário fornecer os seguintes dados: Nome do fazendeiro, nome e cidade da fazenda, nome do supervisor, quantidade de leite produzida no mês, quantidade de cabeça de gado (na atualização deve registrar a data de atualização).

* Caso algum checklist seja atualizado/criado em offline, deverá mostrar o checklist criado/atualizado, ao estabelecer conexão com a internet deve sincronizar os checklists com a API.
