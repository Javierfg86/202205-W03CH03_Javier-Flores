import { Component } from './components/component.js';

export class Score extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        let html = ``;

        let unwatched = series.filter((item) => item.watched === false);
        unwatched.forEach(
            (item) =>
                (html += `
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="far fa-times-circle icon--delete"></i>
              </li>
              `)
        );
        return html;
    }
}
