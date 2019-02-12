import { prompt } from 'inquirer';

export class Perguntas {
    public facaUmaPergunta(){
        prompt([
            {
                name: "name",
                type: "input",
                message: "Qual seu nome?"
            }
        ]).then(
            (answers : any) => {
                console.log(`\nOlá ${answers.name}!\n`)
            }
        )
    }
};