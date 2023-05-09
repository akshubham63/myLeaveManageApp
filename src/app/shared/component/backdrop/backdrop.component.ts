import { Component } from '@angular/core';

@Component({
    selector: '[app-backdrop]',
    template: `
        <div class="backdrop"></div>
    `,
    styles: [`
        .backdrop{
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(#000000, .3);
        }
    `]
})

export class BackdropComponent{

}