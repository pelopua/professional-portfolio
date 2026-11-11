package dev.fermin.portfolio.contact;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import dev.fermin.portfolio.common.ApiExceptionHandler;

class ContactControllerTest {

    private ContactMessageRepository repository;
    private LocalValidatorFactoryBean validator;
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        repository = mock(ContactMessageRepository.class);
        validator = new LocalValidatorFactoryBean();
        validator.afterPropertiesSet();
        mockMvc = MockMvcBuilders.standaloneSetup(new ContactController(repository))
                .setValidator(validator)
                .setControllerAdvice(new ApiExceptionHandler())
                .build();
    }

    @AfterEach
    void tearDown() {
        validator.close();
    }

    @Test
    void shouldPersistValidContactMessage() throws Exception {
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name":"Ana","email":"ana@example.com","message":"Consulta profesional válida","website":""}
                                """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.status").value("created"));

        verify(repository).save(any(ContactMessage.class));
    }

    @Test
    void shouldRejectInvalidContactMessage() throws Exception {
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name":"Ana","email":"no-es-email","message":"corto","website":""}
                                """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("validation_error"));

        verify(repository, never()).save(any(ContactMessage.class));
    }

    @Test
    void shouldAcceptHoneypotSubmissionWithoutPersisting() throws Exception {
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name":"Bot","email":"bot@example.com","message":"Automated message content","website":"filled"}
                                """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.status").value("accepted"));

        verify(repository, never()).save(any(ContactMessage.class));
    }
}