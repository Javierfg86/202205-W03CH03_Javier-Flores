import { Component } from './components/component.js';
import { series } from './src/scripts/series.js';
export class Unwatched extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        this.scorePoints();
        this.handlerButton();
        this.unwatched = [];
    }
    createTemplate() {
        let html = ``;

        this.unwatched = series.filter((item) => item.watched === false);
        this.unwatched.forEach(
            (item) =>
                (html += `
                <li class="serie">
                <img
                  class="serie__poster"
                  src=${item.poster}
                  alt="${item.name} poster"
                />
                <h4 class="serie__title">${item.name}</h4>
                <p class="serie__info">${item.creator} (${item.year})</p><ul class="score">
                  <li class="score__star">
                    <i  style="cursor: pointer;" class="icon--score far fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i  style="cursor: pointer;" class="icon--score far fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i  style="cursor: pointer;" class="icon--score far fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i  style="cursor: pointer;" class="icon--score far fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i  style="cursor: pointer;" class="icon--score far fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i  data-id="${item.id}"style="cursor: pointer;" class="button far fa-times-circle icon--delete"></i>
              </li>
              `)
        );
        return html;
    }
    scorePoints() {
        document
            .querySelectorAll('.score__star i')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }
    handlerButton() {
        document
            .querySelectorAll('.icon--delete')
            .forEach((item) =>
                item.addEventListener(
                    'click',
                    this.handlerButtonDelete.bind(this)
                )
            );
    }
    handlerButtonDelete(ev) {
        const deletedSeries = ev.target.dataset.id;
        console.log('click', deletedSeries);
        this.unwatched = this.unwatched.filter(
            (item) => item.id !== deletedSeries
        );
    }
}
