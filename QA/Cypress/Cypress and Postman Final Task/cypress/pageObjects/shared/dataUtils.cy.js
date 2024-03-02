import { APIKEY,APITOKEN } from "../../support/constants.js";


export default class DataUtils{

    createNewBoard(boardName){
       
     return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKEY}&token=${APITOKEN}`);

    }

    deleteBoard(boardId){
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKEY}&token=${APITOKEN}`);
    //  return this;
    }
     getBoardList(boardId){
        return cy.request({
            method: 'GET',
            url:`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKEY}&token=${APITOKEN}`,
            headers: {Accept: 'application/json'},
            
            }
            )
     }
    createNewCard(listID,cardName){
        return cy.request({
            method: 'POST',
            url:`https://api.trello.com/1/cards?idList=${listID}&name=${cardName}&key=${APIKEY}&token=${APITOKEN}`,
            headers: {Accept: 'application/json'},
            
            })
        }

    createNewCardTemplate(listID,CardTemplateName){
        return cy.request({
                    method: 'POST',
                    url:`https://api.trello.com/1/cards?idList=${listID}&name=${CardTemplateName}&isTemplate=true&key=${APIKEY}&token=${APITOKEN}`,
                    headers: {Accept: 'application/json'},
                    
                    })
    }

    
}