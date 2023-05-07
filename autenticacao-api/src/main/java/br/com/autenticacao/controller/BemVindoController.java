package br.com.autenticacao.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bem_vindo")
public class BemVindoController {

    @GetMapping()
    @ApiOperation(value = "Seja Bem-vindo")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<String> bemVindo() {
        return ResponseEntity.ok("Seja Bem-vindo(a)");
    }
}
