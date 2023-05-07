import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {BemVindoService} from "../../../service/bem-vindo.service";
import {LoginDTO} from "../../../model/login.model";

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit{

  texto?: string;

  constructor(private bemVindoService: BemVindoService) {}

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.bemVindoService.get().subscribe(
      (texto) => {
        this.texto = texto;
      }
    )
  }


}
