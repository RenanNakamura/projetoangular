import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class FormapagamentoService {

  errorHandler = error => console.error('ContatoService error', error);
  private baseUrl = 'https://projetoangular-77d1d.firebaseio.com/';
  private collection = 'formapagamento';

  constructor(private http: Http) { }

  addFormaPagamento(formapagamento) {
    const json = JSON.stringify(formapagamento);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getFormaPagamento() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeFormaPagamento(formapagamento) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${formapagamento.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateFormaPagamento(formapagamento) {
    const json = JSON.stringify({
      descricao: formapagamento.descricao,
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${formapagamento.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        descricao: parsedResponse[id].descricao
      }))
      .sort((a, b) => a.descricao.localeCompare(b.descricao));
  }


}
