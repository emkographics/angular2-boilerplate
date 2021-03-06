import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent implements OnInit {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor() {
        this.jbtHeading = 'Angular 2 Boilerplate!';
        this.jbtText = 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.';
        this.jbtBtnText = 'Learn more';
        this.jbtBtnUrl = 'https://google.com';
    }

    ngOnInit() { }

}