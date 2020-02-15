import { Component, Input, Host, SkipSelf } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html'
})
export class InputErrorComponent {
  @Input()
  controlName: string | string[];
  @Input()
  errorKey: string | string[];

  constructor(
    @Host() @SkipSelf() private readonly form: FormGroupDirective
  ) {
  }

  /**
   * @description Retorna tru si el input es valido, false si no.
   *
   */
  get isInvalid() {
    let controlNames;
    let errorKeys;

    // Transformamos a arreglos siempre.
    if (typeof (this.controlName) === 'string' || this.controlName instanceof String) {
      controlNames = [String(this.controlName)];
    } else if (Array.isArray(this.controlName)) {
      controlNames = this.controlName;
    }
    if (typeof (this.errorKey) === 'string' || this.errorKey instanceof String) {
      errorKeys = [String(this.errorKey)];
    } else if (Array.isArray(this.errorKey)) {
      errorKeys = this.errorKey;
    }

    // Rerroremos cada control name y aplicamos la validacion por cada error key.
    let invalido = false;
    controlNames.forEach(controlName => {
      let controlInvalido = true;
      const control = this.form.form.get(controlName);
      errorKeys.forEach(errorKey => {
        controlInvalido = controlInvalido && control.hasError(errorKey) && (control.dirty || this.form.submitted);
      });

      invalido = invalido || controlInvalido;
    });

    return invalido;
  }
}
