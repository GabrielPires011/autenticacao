package br.com.autenticacao.model;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 8834917208014022977L;

    @NotBlank
    private String email;

    @NotBlank
    private String senha;
}
