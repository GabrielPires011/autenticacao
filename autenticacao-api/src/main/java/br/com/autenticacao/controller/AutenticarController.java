package br.com.autenticacao.controller;

import br.com.autenticacao.model.LoginDTO;
import br.com.autenticacao.util.JwtUtils;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class AutenticarController {

    private final JwtUtils jwtUtil;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/authenticate")
    @ApiOperation(value = "Autenticar Usuário")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Usuário autenticado"),
            @ApiResponse(code = 400, message = "Erro em autenticar usuário"),
            @ApiResponse(code = 403, message = "E-mail ou senha inválido")
    })
    public String generateToken(@RequestBody LoginDTO loginDTO) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getSenha())
        );
        return jwtUtil.generateToken(loginDTO.getEmail());
    }
}
