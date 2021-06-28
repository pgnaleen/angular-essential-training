import { Component } from "@angular/core";

@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styles:[`
        h4 {color: #ffffff;}
    `,
    `
        .description {
            font-style: italic;
            color: green;
        }
    `],
    styleUrls:['./app.component.css']// same as above style
})
export class AppComponent {}