import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd/ng-zorro-antd.module';
import { WyUiModule } from './wy-ui/wy-ui.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgZorroAntdModule, FormsModule, WyUiModule],
  exports: [CommonModule, NgZorroAntdModule, FormsModule, WyUiModule],
})
export class ShareModule {}
