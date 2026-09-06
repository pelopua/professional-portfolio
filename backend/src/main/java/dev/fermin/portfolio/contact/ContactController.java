package dev.fermin.portfolio.contact;

import java.time.Instant;
import java.util.Map;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Map<String, String> create(@Valid @RequestBody ContactRequest request) {
        if (request.website() != null && !request.website().isBlank()) {
            return Map.of("status", "accepted");
        }

        ContactMessage entity = new ContactMessage(
                request.name().trim(),
                request.email().trim(),
                request.message().trim(),
                Instant.now());

        repository.save(entity);
        return Map.of("status", "created");
    }
}
