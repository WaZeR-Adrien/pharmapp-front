/* pipes.modules.ts */
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {SearchPipe} from './search.pipe';

@NgModule({
    declarations: [SearchPipe],
    imports: [IonicModule],
    exports: [SearchPipe]
})
export class PipesModule {
}
