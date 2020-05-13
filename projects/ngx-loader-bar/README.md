# Angular loader bar Component

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

This package helps to show a loader bar in the top of screen.

## Installation

Use this following command to install:

```bash
npm i ngx-loader-bar
```

## Usage
You have to import, export BrowserAnimationsModule and NgxLoaderBarModule to your SharedModule

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoaderBarModule} from 'ngx-loader-bar';
 
@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    NgxLoaderBarModule
    ],
  exports: [
    BrowserAnimationsModule,
    NgxLoaderBarModule
  ]
})
export class SharedModule {}
```

# Using
Html:
```
# default: color: dodgerblue, height: 5px
<ngx-loader-bar [isloaded]="isLoaded"></ngx-loader-bar>

# you can show color and height of the bar
<ngx-loader-bar [isloaded]="isLoaded" [config]="{color: 'red', height: '3px'}"></ngx-loader-bar>
```

Component ts file:


## API
Config attributes:
| Cases                      |Value|      Are      |
|----------------------------|-----|:-------------:|
| 'isLoaded'|boolean |  Loader bar stop when this attribute is true. Default: ```false``` |
| 'color' |string|  Color of the loader bar: ```{color: '#cdcdcd'}```. Default: ```'dodgerblue'``` |
| 'height' |string|    Height of the loader bar: ```{height: '2em'}``` 
Default: ```'5px'```|
