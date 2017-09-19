import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClientesService {

  errorHandler = error => console.error('ContatoService error', error);
  private baseUrl = 'https://treinamento-b5afb.firebaseio.com';
  private collection = 'clientes';

  constructor(private http: Http) { }

  addCliente(cliente) {
    const json = JSON.stringify(cliente);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getClientes() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeCliente(cliente) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${cliente.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateCliente(cliente) {
    const json = JSON.stringify({
      nome: cliente.nome,
      telefone: cliente.telefone
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${cliente.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome,
        telefone: parsedResponse[id].telefone
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }

}
