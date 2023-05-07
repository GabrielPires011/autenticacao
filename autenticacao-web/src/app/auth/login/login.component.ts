import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginDTO} from "../../model/login.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  mensagemErro = 'Credenciais inválidas';
  mensagemSucesso: string | undefined;
  loginInvalido = false;
  loginEfetuadoComSucesso = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,) {
    this.formGroup = this.fb.group({
      email: [undefined, [Validators.required, Validators.email]],
      senha: [undefined, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  realizarLogin() {
    const loginDTO: LoginDTO = this.formGroup.value;
    this.authService.login(loginDTO).subscribe(
      () => {
        this.loginInvalido = false;
        this.loginEfetuadoComSucesso = true;
        this.mensagemSucesso = 'Login bem-sucedido';
        setTimeout(() => {
          this.router.navigate(['/bem-vindo']);
        }, 100)
      },
      () => {
        this.loginInvalido = true;
        this.loginEfetuadoComSucesso = false;
      });
  }

}
